---
title: Shape options
component: ./ConfigureShapeUtilExample.tsx
priority: 0
keywords:
  - configure
  - shapeutil
  - shape options
  - noteshapeoptions
  - frameshapeoptions
  - builtin shapes
  - customization
tags:
  - tldraw
  - readme
  - example
  - configuration
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Change the behavior of built-in shapes with `ShapeUtil.configure`.

---

Several built-in shape utils expose an `options` object. `ShapeUtil.configure(options)` returns a subclass of the util with those options overridden, and passing that subclass in the `shapeUtils` prop replaces the default one.

You can find a shape's options in the `options` property of its util, for example [`NoteShapeOptions`](https://tldraw.dev/reference/tldraw/NoteShapeOptions) and [`FrameShapeOptions`](https://tldraw.dev/reference/tldraw/FrameShapeOptions). Here notes get `resizeMode: 'scale'` so they can be resized by dragging a handle, and frames get `showColors: true` so the color style applies to them.

Try creating a note (N) and dragging a corner handle, or a frame (F) and changing its color in the style panel.


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
