---
title: Clickable custom shape
component: ./InteractiveShapeExample.tsx
priority: 2
keywords:
  - interaction
  - pointer events
  - stop propagation
  - click
  - input
  - button
  - checkbox
  - todo
  - html
  - custom shape
  - onclick
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

A todo shape with a checkbox and text input that handle their own pointer events.

---

By default the editor handles all pointer events on the canvas, so clicking a shape selects it and dragging moves it. To let part of a shape handle its own interactions, set `pointer-events: all` on the shape's `HTMLContainer` and call `stopPropagation()` on the events you want to keep from reaching the canvas.

Try clicking the checkbox to toggle the todo and typing in the input. Once a todo is checked, the input becomes read-only and lets pointer events through, so clicking it selects the shape as usual. See `my-interactive-shape-util.tsx` for the shape.


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
