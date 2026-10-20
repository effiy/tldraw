---
title: Custom shape with handles
component: ./CustomShapeWithHandles.tsx
priority: 2
keywords:
  - handles
  - custom handles
  - gethandles
  - onhandledrag
  - interaction
  - geometry
  - tail
  - shapeutil
  - tool
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

A speech bubble shape whose tail is moved with a custom handle.

---

Handles let the user change a shape's geometry directly. This shape returns a single handle for its tail from `getHandles`, updates the tail in `onHandleDrag`, and uses `onBeforeUpdate` to keep the tail a sensible length and outside the bubble body no matter how the shape changes. The tail is stored as a fraction of the shape's size so it scales with drag-create and resize.

Pick the speech bubble tool from the toolbar (or press S), draw a bubble, then drag the tail handle around. Double-click to add text and watch the body grow to fit.


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
