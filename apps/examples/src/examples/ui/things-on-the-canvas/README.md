---
title: Things on the canvas
component: ./OnTheCanvasExample.tsx
priority: 1
keywords:
  - canvas overlay
  - OnTheCanvas
  - InFrontOfTheCanvas
  - components
  - custom component
  - camera
  - page coordinates
  - pageToViewport
  - usevalue
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

Render React components on the canvas that either scale with the camera or float in front of it.

---

Two component slots live inside the canvas. `OnTheCanvas` components are positioned in page space and behave like shapes: they scale with the zoom and move when you pan. `InFrontOfTheCanvas` components render in screen space, so they follow the page but stay the same size. This example puts two counters on the canvas and a label in front of it that follows the current selection using `editor.getSelectionRotatedPageBounds()` and `editor.pageToViewport()`.

Try zooming: the counters grow and shrink, the label doesn't. Both slots are set through the `components` prop.


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
