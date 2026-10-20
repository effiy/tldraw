---
title: Custom shape SVG export
component: ./CustomShapeToSvgExample.tsx
priority: 3
keywords:
  - svg export
  - toSvg
  - toBackgroundSvg
  - custom shape export
  - SvgExportContext
  - export image
  - copy as svg
  - foreignObject
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

Control how a custom shape looks when exported or copied as SVG or PNG with `toSvg`.

---

The "export as SVG/PNG" and "copy as SVG/PNG" actions call a shape util's `toSvg` (and optional `toBackgroundSvg`) methods. If a shape defines neither, its component is placed inside a `<foreignObject>` in the exported SVG, which works but is less portable than a real SVG representation.

This shape's `toSvg` returns a `rect` matching its HTML component and reads `ctx.isDarkMode` from the `SvgExportContext` so the export uses the right fill for the requested mode. Select the shape and choose "Copy as SVG" or "Export as PNG" from the context menu to see it.


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
