---
title: Coordinate system transformations
component: ./CoordinateSystemExample.tsx
priority: 1
keywords:
  - coordinates
  - screenToPage
  - pageToScreen
  - pageToViewport
  - getViewportScreenBounds
  - getViewportPageBounds
  - viewport
  - transformation
  - screen space
  - page space
  - dom positioning
  - overlay
  - camera
tags:
  - tldraw
  - readme
  - example
  - editor-api
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Convert between screen, page, and viewport coordinates and position DOM elements over shapes.

---

The editor uses three coordinate systems:

- **Screen space**: browser pixels, as reported by DOM events
- **Viewport space**: pixels relative to the editor container, used to position DOM elements over the canvas
- **Page space**: the infinite canvas that shapes live in

`editor.screenToPage(point)`, `editor.pageToScreen(point)`, and `editor.pageToViewport(point)` convert between them, and `editor.getViewportScreenBounds()` and `editor.getViewportPageBounds()` describe the visible area in screen and page space.

Move the mouse to see the pointer position in all three systems, then pan and zoom to see how screen coordinates stay put while page coordinates change. Draw and select a shape to see a DOM label positioned above it with `pageToViewport`.


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
