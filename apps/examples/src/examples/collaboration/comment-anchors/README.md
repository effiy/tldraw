---
title: Comment anchors
component: ./CommentAnchorsExample.tsx
priority: 4
keywords:
  - comments
  - commenting
  - anchors
  - shape
  - region
  - point
  - collaboration
tags:
  - tldraw
  - readme
  - example
  - collaboration
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Seed threads with each kind of anchor: a point, a shape (precise and imprecise), and a region.

---

Every `TLCommentThread` carries an `anchor` that says where on the page it lives: a `point` at fixed page coordinates, a `shape` that tracks the shape as it moves and resizes, or a `region` covering a rectangular area. A fourth kind, `page`, has no pin and surfaces only in a list.

Shape anchors store a normalized `x`/`y` inside the shape's bounds. When `isPrecise` is true the pin sits exactly there; when false the pin sits at the `impreciseShapeAnchor` option (the top-right corner by default) and the anchor addresses the shape as a whole.

The example creates each thread with `createCommentThread` and `createComment`, then writes them with `putCommentRecords`. Drag the shape to watch its pins follow it.


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
