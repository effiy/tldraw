---
title: Layer panel
component: ./LayerPanelExample.tsx
priority: 5
keywords:
  - layers
  - panel
  - tree view
  - hierarchy
  - visibility
  - show
  - hide
  - getsortedchildidsforparent
  - getshapevisibility
  - meta
  - infrontofthecanvas
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

Build a minimal layers panel that lists, selects, renames, and hides shapes.

---

The panel is an `InFrontOfTheCanvas` component that walks the page with `editor.getSortedChildIdsForParent()`, recursing into groups and frames to build a tree. Each row reads its shape reactively with `useValue`, so the list stays in sync as you draw.

Visibility is stored on `shape.meta` and enforced through the `getShapeVisibility` prop: `meta.hidden` hides a shape and its children, and `meta.force_show` lets a child stay visible inside a hidden parent.

Try clicking a row to select the shape (shift-click to add to the selection), double-clicking a name to rename it, and clicking the eye icon to hide it. Double-click the eye on a child of a hidden group to force it visible.


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
