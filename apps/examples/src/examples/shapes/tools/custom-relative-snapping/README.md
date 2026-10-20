---
title: Custom handle snap reference
component: ./CustomRelativeSnappingExample.tsx
priority: 2
keywords:
  - handles
  - snapping
  - snapReferenceHandleId
  - angle snapping
  - shift modifier
  - getHandles
  - control points
  - vertex
  - reference point
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

Choose which handle a shift-drag angle snap is measured from with `snapReferenceHandleId`.

---

When a user holds shift while dragging a handle, the select tool snaps the handle to 15 degree increments around a reference handle. By default that reference is the next vertex handle in index order. Setting `snapReferenceHandleId` on a handle returned from `getHandles` overrides the reference.

The Y-shaped connector here has a center junction and three arms. Each arm handle names `center` as its snap reference, so shift-dragging an arm rotates it around the junction in clean angles instead of around a neighbouring arm.

The shape is selected on load so its handles are visible. Try shift-dragging one of the arm endpoints, then compare with a plain drag.


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
