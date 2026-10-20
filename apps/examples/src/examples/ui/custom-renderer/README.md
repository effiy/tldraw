---
title: Custom renderer
component: ./CustomRendererExample.tsx
keywords:
  - renderer
  - canvas
  - Background component
  - Canvas component
  - custom rendering
  - 2d context
  - alternative rendering
priority: 100
tags:
  - tldraw
  - readme
  - example
  - ui
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Draw shapes with your own 2d canvas renderer instead of tldraw's DOM rendering.

---

The `Background` component is replaced with a component that reads `editor.getRenderingShapes()` on every animation frame and draws draw and geo shapes to a 2d canvas, using `getColorValue` to look up theme colors. tldraw's regular shapes layer is hidden with CSS, while selection, handles, and the rest of the UI keep working.

This is a sketch of the approach rather than a complete renderer: it handles draw and geo shapes and draws a bounding box for everything else. Try drawing a few shapes and moving them around.


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
