---
title: Shape that accepts dropped files
component: ./DropZoneShapeExample.tsx
priority: 3
keywords:
  - drop
  - drag and drop
  - files
  - image
  - custom shape
  - html
  - ondrop
  - upload
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

A custom shape with its own drop zone that shows an image dropped onto it.

---

Dropping a file onto the canvas normally creates an image or video shape. A shape can claim drops for itself instead: set `pointer-events: all` on its `HTMLContainer`, then handle React's `onDragOver` and `onDrop` on the element and call `stopPropagation()` so the canvas doesn't also handle the file.

Try dragging an image file from your desktop onto the dashed box. The image is kept in memory only, so it's not persisted or synced; a real app would upload the file and store a URL in the shape's props. See `drop-zone-shape-util.tsx` for the shape.


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
