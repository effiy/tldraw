import { TLShape, track, useEditor } from '@tldraw/editor'
import { useCallback, useEffect, useRef, useState } from 'react'
import { normalizeLinkUrl } from '../../utils/linkUrl'
import { isShapeWithLink, TLShapeWithLink } from '../../utils/shapes/shapes'
import { TLUiDialogProps } from '../context/dialogs'
import { useTranslation } from '../hooks/useTranslation/useTranslation'
import { TldrawUiButton } from './primitives/Button/TldrawUiButton'
import { TldrawUiButtonLabel } from './primitives/Button/TldrawUiButtonLabel'
import {
	TldrawUiDialogBody,
	TldrawUiDialogCloseButton,
	TldrawUiDialogFooter,
	TldrawUiDialogHeader,
	TldrawUiDialogTitle,
} from './primitives/TldrawUiDialog'
import { TldrawUiInput } from './primitives/TldrawUiInput'

function getUrlInputState(url: string) {
	const normalized = normalizeLinkUrl(url)
	return { actual: url, safe: normalized ?? '', valid: normalized !== null }
}

function assertShapeWithLink(shape: TLShape | null | undefined): asserts shape is TLShapeWithLink {
	if (!isShapeWithLink(shape)) {
		throw new Error('Shape is not a valid TLShapeWithLink')
	}
}

export const EditLinkDialog = track(function EditLinkDialog({ onClose }: TLUiDialogProps) {
	const editor = useEditor()

	const selectedShape = editor.getOnlySelectedShape()
	const hasShapeWithLink = isShapeWithLink(selectedShape)

	// The shape can be deleted or deselected from under the open dialog (a collaborator, or a
	// keypress reaching the canvas). Returning null on its own would leave an empty dialog frame.
	useEffect(() => {
		if (!hasShapeWithLink) onClose()
	}, [hasShapeWithLink, onClose])

	if (!hasShapeWithLink) {
		return null
	}

	return <EditLinkDialogInner onClose={onClose} selectedShape={selectedShape} />
})

export const EditLinkDialogInner = track(function EditLinkDialogInner({
	onClose,
	selectedShape,
}: TLUiDialogProps & { selectedShape: TLShapeWithLink }) {
	const editor = useEditor()
	const msg = useTranslation()

	const rInput = useRef<HTMLInputElement>(null)

	useEffect(() => {
		editor.timers.requestAnimationFrame(() => rInput.current?.focus())
	}, [editor])

	const rInitialValue = useRef(selectedShape.props.url)

	const [urlInputState, setUrlInputState] = useState(() => {
		const { safe } = getUrlInputState(selectedShape.props.url)
		return { actual: safe, safe, valid: true }
	})

	const handleChange = useCallback((rawValue: string) => {
		setUrlInputState(getUrlInputState(rawValue))
	}, [])

	const handleClear = useCallback(() => {
		const onlySelectedShape = editor.getOnlySelectedShape()
		if (!onlySelectedShape) return
		assertShapeWithLink(onlySelectedShape)
		editor.updateShapes([
			{ id: onlySelectedShape.id, type: onlySelectedShape.type, props: { url: '' } },
		])
		onClose()
	}, [editor, onClose])

	const handleComplete = useCallback(() => {
		const onlySelectedShape = editor.getOnlySelectedShape()

		if (!onlySelectedShape) return
		assertShapeWithLink(onlySelectedShape)

		// Enter reaches here even while the save button is disabled.
		if (!urlInputState.valid) return

		if (onlySelectedShape.props.url !== urlInputState.safe) {
			editor.updateShapes([
				{
					id: onlySelectedShape.id,
					type: onlySelectedShape.type,
					props: { url: urlInputState.safe },
				},
			])
		}
		onClose()
	}, [editor, onClose, urlInputState])

	const handleCancel = useCallback(() => {
		onClose()
	}, [onClose])

	// Are we going from a valid state to an invalid state?
	const isRemoving = rInitialValue.current && !urlInputState.valid

	return (
		<>
			<TldrawUiDialogHeader>
				<TldrawUiDialogTitle>{msg('edit-link-dialog.title')}</TldrawUiDialogTitle>
				<TldrawUiDialogCloseButton />
			</TldrawUiDialogHeader>
			<TldrawUiDialogBody>
				<div className="tlui-edit-link-dialog">
					<TldrawUiInput
						ref={rInput}
						className="tlui-edit-link-dialog__input"
						label="edit-link-dialog.url"
						autoFocus
						autoSelect
						placeholder="https://example.com"
						value={urlInputState.actual}
						onValueChange={handleChange}
						onComplete={handleComplete}
						onCancel={handleCancel}
					/>
					<div>
						{urlInputState.valid
							? msg('edit-link-dialog.detail')
							: msg('edit-link-dialog.invalid-url')}
					</div>
				</div>
			</TldrawUiDialogBody>
			<TldrawUiDialogFooter className="tlui-dialog__footer__actions">
				<TldrawUiButton type="normal" onClick={handleCancel} onTouchEnd={handleCancel}>
					<TldrawUiButtonLabel>{msg('edit-link-dialog.cancel')}</TldrawUiButtonLabel>
				</TldrawUiButton>
				{isRemoving ? (
					<TldrawUiButton type="danger" onTouchEnd={handleClear} onClick={handleClear}>
						<TldrawUiButtonLabel>{msg('edit-link-dialog.clear')}</TldrawUiButtonLabel>
					</TldrawUiButton>
				) : (
					<TldrawUiButton
						type="primary"
						disabled={!urlInputState.valid}
						onTouchEnd={handleComplete}
						onClick={handleComplete}
					>
						<TldrawUiButtonLabel>{msg('edit-link-dialog.save')}</TldrawUiButtonLabel>
					</TldrawUiButton>
				)}
			</TldrawUiDialogFooter>
		</>
	)
})
