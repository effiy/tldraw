---
title: Arrow binding options
component: ./ArrowBindingOptionsExample.tsx
priority: 3
keywords:
  - arrow
  - binding
  - isprecise
  - isexact
  - normalizedanchor
  - anchor point
  - arrow connections
  - technical diagrams
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

Control where a bound arrow lands on a shape with `isPrecise`, `isExact`, and `normalizedAnchor`.

---

Arrow bindings are records created with `editor.createBindings`. Three props on the binding decide where the arrow's terminal ends up:

- `normalizedAnchor` is a point on the target shape in normalized coordinates: `{x: 0.5, y: 0.5}` is the center, `{x: 0, y: 0}` the top-left, `{x: 1, y: 1}` the bottom-right.
- `isPrecise: false` ignores the anchor and aims at the shape's center. `isPrecise: true` aims at the anchor.
- `isExact: false` stops the arrow at the shape's edge. `isExact: true` lets the arrow continue into the shape until it reaches the anchor point.

The example creates four shape-and-arrow pairs, one for each combination. Try dragging the shapes around: the arrows stay bound and re-route according to their options. Select an arrow and drag its endpoint to see how the editor sets these props interactively (pausing over a shape makes the binding precise).


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
