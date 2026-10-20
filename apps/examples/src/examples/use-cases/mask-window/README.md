---
title: Canvas mask
component: ./MaskWindowExample.tsx
keywords:
  - mask
  - clip
  - clippath
  - overlay
  - selection bounds
  - getselectionrotatedscreenbounds
  - usequickreactor
  - css
  - viewport
priority: 2
tags:
  - tldraw
  - readme
  - example
  - use-cases
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Dim the whole canvas except the selected shapes, using a CSS clip-path overlay.

---

A translucent white `<div>` in the `InFrontOfTheCanvas` slot covers the canvas. A `useQuickReactor` reads `editor.getSelectionRotatedScreenBounds()` and `editor.getSelectionRotation()` and sets the overlay's `clip-path` to a polygon that winds around the selection, so only the selection shows through. With nothing selected the clip is cleared and the whole canvas is dimmed.

Try selecting, dragging, rotating, and zooming: the window follows the selection.


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
