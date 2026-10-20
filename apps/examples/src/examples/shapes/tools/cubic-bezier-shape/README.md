---
title: Cubic bezier curve shape
component: ./CubicBezierShapeExample.tsx
priority: 1
keywords:
  - bezier
  - curve
  - handles
  - control points
  - shapeutil
  - editing mode
  - statenode
  - getHandles
  - onHandleDrag
  - getHandleSnapGeometry
  - overlay
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

A cubic bezier curve shape with draggable control point handles.

---

`BezierCurveShapeUtil` stores four points (start, end, cp1, cp2), builds a `CubicBezier2d` geometry from them, and exposes each point as a handle through `getHandles`. `onHandleDrag` updates the props: dragging an endpoint carries its control point along, and cmd/ctrl + dragging an endpoint moves the control point instead. `getHandleSnapGeometry` lets control points snap onto the endpoints, which collapses that end of the curve into a sharp corner.

The example also keeps the curve in its editing state while you work on it. A custom `ShapeHandleOverlayUtil` shows handles during editing, and `CubicBezierShapeExample.tsx` wraps a few of the select tool's state node handlers so a handle drag returns to `select.editing_shape` rather than `select.idle`. **That part is hacky:** it patches select tool state nodes at runtime, which is not public API and can break between releases. Everything else in the example (the shape util, handles, snapping, overlay util) uses supported APIs.

Try dragging the handles, cmd/ctrl + clicking a control point to collapse it, and cmd/ctrl + dragging the curve itself to bend it.


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
