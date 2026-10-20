---
title: Hovered overlay
component: ./HoveredOverlayExample.tsx
priority: 4
keywords:
  - overlay
  - overlaymanager
  - hover
  - hit test
  - selection
  - handle
  - reactive
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

Read the canvas overlay under the pointer with `editor.overlays.getHoveredOverlay()`.

---

The `OverlayManager` on `editor.overlays` tracks every active canvas overlay (selection handles, resize corners, rotation handles, shape handles) and which one is under the pointer. `getHoveredOverlay()` is reactive, so this example reads it with `useValue` and prints its type and id in the top panel. Select a shape, then hover its handles to see the readout update. `getOverlayAtPoint(point)` does the same hit test for an arbitrary page point.


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
