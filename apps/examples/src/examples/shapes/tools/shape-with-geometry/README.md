---
title: Custom shape geometry
component: ./ShapeWithGeometry.tsx
priority: 3
keywords:
  - custom geometry
  - getgeometry
  - polygon2d
  - rectangle2d
  - group2d
  - svg path
  - vertices
  - hit testing
  - shapeutil
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

Give a custom shape non-rectangular geometry with `Polygon2d`, `Rectangle2d`, and `Group2d`.

---

A shape's `getGeometry` method returns the geometry the editor uses for hit testing, selection bounds, snapping, and arrow bindings. This example draws a house with a door and builds matching geometry from a `Polygon2d` for the body and a `Rectangle2d` for the door, combined in a `Group2d`.

Try clicking just beside the roof: the pointer misses the shape because the geometry is a polygon, not the bounding box. Try binding an arrow to the shape to see it snap to the polygon's edges.


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
