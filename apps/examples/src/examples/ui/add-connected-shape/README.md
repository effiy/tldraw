---
title: Add connected shape
component: ./AddConnectedShapeExample.tsx
priority: 3
keywords:
  - plus button
  - quick connect
  - infrontofthecanvas
  - selection
  - arrow
  - bindings
  - duplicate
  - node
  - diagram
  - flowchart
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

Show plus buttons around a selected shape that create a new connected shape, like in Figma.

---

When a single shape is selected, four plus buttons appear on the edges of its selection bounds. Clicking one duplicates the shape in that direction and connects the two shapes with a bound arrow, then selects the new shape so you can keep extending the diagram.

The buttons are rendered in the `InFrontOfTheCanvas` component slot and positioned by converting the shape's page bounds to viewport coordinates with `pageToViewport`. The connection is made by creating an arrow shape and binding both of its terminals with `createBindings`.


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
