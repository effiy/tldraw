---
title: Selection bounds
component: ./SelectionBoundsExample.tsx
priority: 4
keywords:
  - selection
  - bounds
  - rotation
  - geometry
  - getselectionpagebounds
  - getselectionrotatedpagebounds
  - getselectionrotation
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

Visualize the difference between `getSelectionPageBounds()` and `getSelectionRotatedPageBounds()` for the current selection.

---

`getSelectionPageBounds()` returns the smallest upright rectangle around the selection; `getSelectionRotatedPageBounds()` returns a box aligned to the selection's shared rotation, which is what the visible selection handles use. This example draws both over the canvas with an `InFrontOfTheCanvas` component that converts page bounds to viewport pixels using `pageToViewport()` and the zoom level.

Select the single rotated shape, the group with a shared rotation, and the two ungrouped shapes with different rotations to see when the two boxes differ and when the rotated box falls back to axis-aligned.


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
