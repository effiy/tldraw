---
title: Custom clipping shape
component: ./CustomClippingExample.tsx
priority: 1
keywords:
  - clipping
  - clip path
  - mask
  - getClipPath
  - shouldClipChild
  - polygon
  - children
  - parent-child
  - circular
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

Clip child shapes to a circle with `getClipPath` and `shouldClipChild`.

---

Any `ShapeUtil` can clip its children by implementing `getClipPath`, which returns a polygon in the shape's local coordinates. The editor transforms it to page space, intersects it with any ancestor clip paths, and applies it to every child. Implement `shouldClipChild` to leave some children unclipped (frames use this to skip arrows).

The example defines a circle shape that clips its children to a polygon approximation of the circle. Try dragging shapes into and out of the circle, resizing it, or clicking with the "Circle clip" tool (shortcut `c`) to place new circles. The "Disable clipping" button flips a shared atom that `shouldClipChild` reads, turning clipping off for every circle at once.


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
