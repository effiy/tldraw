---
title: Snowstorm
component: ./SnowStormExample.tsx
keywords:
  - overlay
  - visual effects
  - animation
  - css
  - children
  - layering
  - infrontofthecanvas
priority: 10
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

Animate a snowstorm over the canvas that reacts to camera movement and the pointer.

---

The `SnowStorm` component is passed as a child of `Tldraw`, so it renders inside the editor container above the canvas. It listens to the editor's `tick` event and moves a set of absolutely positioned DOM snowflakes each frame, adding wind from camera movement (`editor.getCamera()`) and pushing flakes near a fast pointer (`editor.inputs.getPointerVelocity()`). It does nothing when the OS "reduce motion" preference is on (`usePrefersReducedMotion`).

Try panning the canvas quickly, or waving the pointer through the snow.


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
