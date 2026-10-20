---
title: Portal shapes
component: ./PortalShapesExample.tsx
priority: 6
keywords:
  - frame
  - portal
  - BaseFrameLikeShapeUtil
  - reparent
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

Frame-like shapes built on `BaseFrameLikeShapeUtil` that teleport dropped shapes to a linked portal.

---

`BaseFrameLikeShapeUtil` gives a custom box shape everything the built-in frame does: it clips children to the shape's geometry, accepts shapes dragged into it, and releases shapes dragged out. Here the geometry is an ellipse, so children clip to an oval, and `onDropShapesOver` is overridden so that dropping shapes into one portal reparents them into the other portal at the same local offset.

Try dragging the companion cube into the blue portal and watch it come out of the orange one. Resize a portal to see its children clip to the new oval.


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
