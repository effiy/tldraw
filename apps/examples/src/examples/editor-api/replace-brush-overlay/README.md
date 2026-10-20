---
title: "Replace a built-in overlay"
component: ./ReplaceBrushOverlayExample.tsx
priority: 3
keywords:
  - overlay
  - overlayutil
  - brush
  - selection
  - custom
  - render
tags:
  - tldraw
  - readme
  - example
  - editor-api
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Replace the built-in selection brush by subclassing `BrushOverlayUtil` and overriding its `render` method.

---

Every canvas overlay (the selection brush, scribble, snap indicators, shape handles) is an `OverlayUtil` subclass you can replace. This example extends the built-in `BrushOverlayUtil` and overrides `render` to draw a dashed purple rectangle instead of the default. Because the subclass inherits the `brush` type, passing it in `overlayUtils` replaces the default brush; `<Tldraw>` merges custom utils over the defaults by type.

Drag-select on the canvas to see it.


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
