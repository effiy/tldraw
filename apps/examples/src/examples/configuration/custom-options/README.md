---
title: Editor options
component: ./CustomOptionsExample.tsx
priority: 0
keywords:
  - options
  - configuration
  - pages
  - animation
  - camera
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

Override editor options like the maximum number of pages and animation duration.

---

The `options` prop on `Tldraw` takes a `Partial<TldrawOptions>` and overrides tldraw's defaults; anything you leave out keeps its default value. Options are read once when the editor is created, so define the object outside the component (or memoize it) rather than creating a new one on every render.

This example limits documents to 3 pages and sets `animationMediumMs` to 5 seconds. Try opening the page menu and adding pages: the "create page" button disables after the third. Then zoom in or out from the zoom menu and watch the (very) slow animation.


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
