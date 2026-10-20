---
title: Popup shape
component: ./PopupShapeExample.tsx
keywords:
  - 3d effect
  - css transform
  - perspective
  - shadows
  - animation
  - interaction
  - double click
  - htmlcontainer
  - transform origin
  - visual effects
priority: 100
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

Cards that pop up in 3D using CSS perspective anchored to the viewport center.

---

Each shape renders a card tilted with a CSS `rotateX` transform inside an `HTMLContainer` that sets `perspective`. The trick is the perspective origin: it's computed from `editor.getViewportPageBounds()` relative to the shape, so every card shares one vanishing point at the center of the screen. Shape components are reactive, so reading the bounds during render keeps that origin updated as you pan and zoom.

Try panning around and double-clicking a card to pop it upright.


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
