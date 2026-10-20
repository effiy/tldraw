---
title: Selection color condition
component: ./SelectionColorConditionExample.tsx
priority: 3
keywords:
  - selection
  - color
  - conditional styling
  - css variables
  - react
  - getselectedshapes
  - isshapeoftype
  - css class
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

Turn the selection red whenever every selected shape is a rectangle.

---

Selection colors are part of the editor's theme (`selectionStroke` and `selectionFill` in `TLTheme`), so changing them means swapping the theme rather than overriding CSS variables. This example clones `DEFAULT_THEME` into a red variant, then uses `react` inside `onMount` to watch `editor.getSelectedShapes()` and call `editor.updateTheme` with either variant depending on the selection.

Try selecting the two rectangles (red), then add the ellipse to the selection (back to blue).


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
