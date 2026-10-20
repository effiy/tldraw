---
title: Conditional culling
component: ./ConditionalCullingExample.tsx
priority: 3
keywords:
  - culling
  - canCull
  - viewport
  - performance
  - glow
  - shadow
  - overflow
  - custom shape
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

Keep shapes with overflow effects rendered off-screen by overriding `canCull()`.

---

Culling is an optimization that hides shapes with `display: none` once their bounds leave the viewport. Shapes with visuals that extend beyond their bounds, like glows or drop shadows, pop in and out at the viewport edge when they're culled.

Override `canCull()` on your `ShapeUtil` to opt individual shapes out. In this example both shapes have the same glow, and each has a checkbox that toggles a `preventCulling` prop read by `canCull()`.

Try panning the canvas horizontally: the shape with "Prevent culling" checked stays visible as it slides off-screen, while the other disappears abruptly once its bounds leave the viewport.


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
