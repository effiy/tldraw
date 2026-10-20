---
title: "Z-order"
component: ./ZOrderExample.tsx
priority: 2
keywords:
  - z-order
  - index
  - stacking
  - layers
  - reorder
  - sendToBack
  - bringToFront
  - sendBackward
  - bringForward
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

Reorder shapes with `sendToBack`, `sendBackward`, `bringForward`, and `bringToFront`.

---

This example shows how to use the four z-order methods to control shape stacking:

- `editor.sendToBack(ids)` — move shapes to the very bottom
- `editor.bringToFront(ids)` — move shapes to the very top
- `editor.sendBackward(ids)` — move shapes one step down (by default, only past overlapping shapes)
- `editor.bringForward(ids)` — move shapes one step up (by default, only past overlapping shapes)

Select one or more shapes and use the buttons to see the stacking order change. When multiple shapes are selected, their relative order is preserved. For `sendBackward` and `bringForward`, pass `{ considerAllShapes: true }` to move past non-overlapping shapes too.


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
