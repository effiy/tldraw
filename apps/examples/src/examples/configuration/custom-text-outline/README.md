---
title: Custom text outline
component: ./CustomTextOutlineExample.tsx
priority: 1
keywords:
  - text
  - outline
  - showTextOutline
  - configure
  - TextShapeUtil
  - ArrowShapeUtil
  - GeoShapeUtil
  - label
  - performance
  - styling
tags:
  - tldraw
  - readme
  - example
  - configuration
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Disable the text outline on text, arrow, and geo shape labels.

---

By default tldraw draws a halo in the canvas background color around text labels so they stay legible when they overlap other shapes. Each shape util that renders text (`TextShapeUtil`, `ArrowShapeUtil`, `GeoShapeUtil`) has a `showTextOutline` option; this example sets it to `false` on all three with `ShapeUtil.configure`.

The canvas starts with three overlapping text shapes and a labeled arrow so you can see the difference. Try changing `showTextOutline` back to `true` for one of the utils and compare.

You might turn outlines off for a different visual style, or for performance: the outline is drawn with a text shadow, which can be expensive on some browsers (tldraw already skips it on Safari).


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
