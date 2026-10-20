---
title: Custom shape with tldraw styles
component: ./ShapeWithTldrawStylesExample.tsx
priority: 1.5
keywords:
  - default styles
  - defaultsizestyle
  - defaultcolorstyle
  - style panel
  - getcurrenttheme
  - getcolorvalue
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

Use tldraw's built-in size and color styles as props on a custom shape.

---

The default style panel shows the styles shared by your selection or current tool. If all selected shapes have the same value for a style, that value is shown as selected; otherwise the panel shows it as "mixed". You get this for free on custom shapes by using tldraw's `StyleProp`s (here `DefaultSizeStyle` and `DefaultColorStyle`) as prop validators.

Select the shape and change the size and color in the style panel. The shape reads the color from the current theme with `editor.getCurrentTheme()` and `getColorValue`, so it also follows dark mode.

To create your own custom styles, check the [custom styles example](https://tldraw.dev/examples/shape-with-custom-styles).


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
