---
title: Editable custom shape
component: ./EditableShapeExample.tsx
priority: 2
keywords:
  - editing
  - canedit
  - double click
  - interactive
  - emoji picker
  - shape state
  - editing state
tags:
  - tldraw
  - readme
  - example
  - shapes
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

A custom shape that becomes interactive when you double-click it.

---

The editor has at most one editing shape at a time. While a shape is being edited it can't be dragged, resized, or rotated, and pointer events reach its content. Only shapes whose util returns true from `canEdit` can enter this state; the user gets there by double-clicking the shape or selecting it and pressing Enter, and leaves it with Escape or by clicking the canvas.

The default shapes mostly use editing for text, but it's a general mechanism. This example's shape shows an emoji, and while editing it shows a button that cycles to the next emoji with `editor.updateShape`. The component reads `editor.getEditingShapeId()` to decide what to render, turns on `pointerEvents` only while editing, and marks pointer-down events as handled so clicking the button doesn't start a drag. `onEditEnd` spins the shape when editing finishes.

Try double-clicking the shape, clicking Next a few times, then pressing Escape. The relevant code is in `EditableShapeUtil.tsx`; for a walkthrough of the shape util basics, see the custom shape example.


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
