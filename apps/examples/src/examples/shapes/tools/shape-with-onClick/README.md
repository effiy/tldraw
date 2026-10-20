---
title: Shape with onClick
component: ./ShapeWithOnClickExample.tsx
priority: 1
keywords:
  - onClick
  - custom shape
  - click handler
  - drag
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

Handle clicks on a custom shape with `ShapeUtil.onClick`.

---

Implement `onClick` on your shape util to react when the user clicks the shape. The select tool calls it on pointer up when the pointer didn't drag; return a shape partial and the editor applies it (and skips selecting the shape), or return nothing to fall through to normal selection.

Unlike a React `onClick` on a DOM element inside the shape component, `ShapeUtil.onClick` goes through the editor's event system, so clicking and dragging both work on selected and unselected shapes. Try clicking the shape to bump the counter, then dragging it.


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
