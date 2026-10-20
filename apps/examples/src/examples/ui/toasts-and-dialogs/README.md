---
title: Toasts and dialogs
component: ./ToastsDialogsExample.tsx
priority: 1
keywords:
  - toasts
  - dialogs
  - useToasts
  - useDialogs
  - addToast
  - addDialog
  - notifications
  - modals
  - TldrawUiDialog
tags:
  - tldraw
  - readme
  - example
  - ui
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Show toasts and dialogs from your own UI with the `useToasts` and `useDialogs` hooks.

---

`useToasts()` returns `addToast`, `removeToast`, and `clearToasts`; `useDialogs()` returns `addDialog`, `removeDialog`, and `clearDialogs`. Both hooks work in any component rendered inside `<Tldraw />`. This example puts a row of launcher buttons in the `SharePanel` slot.

`addDialog` takes a component that receives an `onClose` prop. Build the content from tldraw's dialog primitives (`TldrawUiDialogHeader`, `TldrawUiDialogBody`, `TldrawUiDialogFooter`) to match the default UI, or render anything you want. The example also shows a dialog containing a select menu, and a dialog that opens a second one on top of itself. Try opening the select and clicking outside it: the select closes but the dialog stays.


---

## ⚡ 功能

「待补充」


---

## 📊 指标

「待补充」


---

## 🏛️ 设计

「待补充」


---

## 📁 目录

「待补充」


---

## 🔗 资源

「待补充」


---

## 🚀 快速开始

「待补充」


---

## ⚙️ 技术栈

「待补充」
