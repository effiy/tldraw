---
title: Prevent shape changes
component: ./PreventShapeChangeExample.tsx
priority: 2
keywords:
  - prevent transform
  - lock shape
  - registerbeforechangehandler
  - side effects
  - immutable shape
  - disable move
  - disable resize
  - disable rotate
  - shape protection
tags:
  - tldraw
  - readme
  - example
  - events
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Reject changes to a shape's position, rotation, and size while still allowing style and text edits.

---

`editor.sideEffects.registerBeforeChangeHandler` sees every proposed shape change and returns the
record that will be written. This example compares `prev` and `next` for geo rectangles and returns
`prev` (cancelling the change) if `x`, `y`, `rotation`, `props.w`, or `props.h` would differ. Other
changes pass through untouched.

Try dragging, rotating, or resizing the rectangle: nothing happens. Now change its color or edit its
label: that works. This is a finer-grained alternative to `isLocked`, which would also stop the shape
being selected. A rejected change is silent, so consider giving the user some feedback if
this is a real permission rule.


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
