---
title: Fog of war
component: ./FogOfWarExample.tsx
keywords:
  - canvas
  - overlay
  - infrontofthecanvas
  - html canvas
  - usereactor
  - getcurrentpageshapes
  - getshapepagebounds
  - getshapegeometry
  - collision detection
priority: 3
tags:
  - tldraw
  - readme
  - example
  - use-cases
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Cover the canvas in fog that clears wherever shapes are drawn, using an HTML canvas kept in sync with the editor.

---

An HTML `<canvas>` rendered in the `InFrontOfTheCanvas` slot paints a dark overlay over the whole viewport. A `useReactor` callback re-runs whenever shapes or the camera change: it marks any grid cell that overlaps a shape's page bounds as revealed, then redraws the overlay with the camera transform applied and clears the revealed cells.

Try drawing anywhere: the fog lifts around your strokes and stays lifted as you pan and zoom.


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
