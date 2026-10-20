---
title: Precise exact arrows
component: ./ArrowsPreciseExactExample.tsx
priority: 5
keywords:
  - arrow
  - configure
  - isprecise
  - isexact
  - arrow behavior
  - arrowshapeutil
  - arrow tool
  - alt key
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

Make precise arrows always bind exactly, using `ArrowShapeUtil.configure`.

---

An arrow bound to a shape is either imprecise (it points at the shape's center) or precise (it points at a specific spot inside the shape). A precise arrow can also be exact: instead of stopping at the shape's edge, it continues into the shape all the way to the bound point.

By default an arrow becomes precise when you hover slowly over a target, and becomes exact when you also hold Alt. The `shouldBeExact` option on `ArrowShapeUtil` receives the editor and whether the current binding is precise, and returns whether it should also be exact. This example returns `isPrecise`, so every precise arrow is exact and Alt is no longer needed.

Try it: draw an arrow into a shape and pause before releasing. The arrow tip lands inside the shape instead of stopping at its edge.


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
