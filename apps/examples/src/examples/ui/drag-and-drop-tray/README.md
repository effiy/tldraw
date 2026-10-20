---
title: Drag and drop tray
component: ./DragAndDropTrayExample.tsx
priority: 2
keywords:
  - drag
  - drop
  - tray
  - shapes
  - InFrontOfTheCanvas
  - useAtom
  - useQuickReactor
  - screenToPage
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

Drag items from a custom tray onto the canvas to create shapes.

---

The tray is a custom `InFrontOfTheCanvas` component that renders over the canvas. Each item tracks its own pointer events through a small state machine (`idle`, `pointing_item`, `dragging`) held in a `useAtom`. A drag only starts after the pointer moves more than 10px, so clicking an item does nothing.

On drop, `editor.screenToPage()` converts the pointer position to page space and `editor.createShape()` places the shape there. `useQuickReactor` positions the drag preview by writing to the DOM directly, avoiding a React render per pointer move.

Try dragging an emoji from the tray on the left onto the canvas. Press Escape mid-drag to cancel.


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
