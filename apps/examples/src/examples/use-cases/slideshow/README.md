---
title: Slideshow (fixed camera)
component: ./SlideShowExample.tsx
keywords:
  - annotation
  - camera options
  - constraints
  - zoom
  - pan
  - camera bounds
  - pan speed
  - zoom speed
  - scroll
  - slides
  - presentation
priority: 0
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

A slideshow that locks the camera to the current slide using camera constraints.

---

Slides are frame shapes laid out in a row. The current slide is tracked in a small reactive `SlidesManager` (an `atom` plus `computed` getters), and whenever it changes the example calls `editor.setCameraOptions` with `bounds` set to that frame and `behavior: 'contain'`, then animates there with `editor.zoomToBounds`. The user can draw on the slide but can't pan or zoom away from it.

Side effects keep the slide frames from being moved, selected, or hovered, and buttons rendered in `OnTheCanvas` let you insert new slides between existing ones.

Compare with the "Slideshow (free camera)" example, which uses a custom slide shape and lets the camera roam.


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
