---
title: Selection UI
component: ./SelectionUiExample.tsx
priority: 2
keywords:
  - selection
  - ui overlay
  - infrontofthecanvas
  - custom controls
  - duplicate
  - handles
  - usevalue
  - getselectionrotatedscreenbounds
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

Add duplicate-in-direction buttons around the selection using the `InFrontOfTheCanvas` slot.

---

The `InFrontOfTheCanvas` component renders in screen space above the canvas, so anything you put there stays a fixed size while the camera moves. This example reads `editor.getSelectionRotatedScreenBounds()` and `editor.getSelectionRotation()` inside `useValue` to position four buttons around the selection, rotated to match it. Each button calls `editor.duplicateShapes` with an offset computed from the selection's rotated bounds.

Try selecting a shape, rotating it, and clicking the arrows.


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
