---
title: Search text on the canvas
component: ./TextSearchExample.tsx
priority: 2
keywords:
  - search
  - text search
  - find text
  - keyboard shortcut
  - helpers
  - helperButtons
  - filter shapes
  - overrides
  - actions
  - gettext
tags:
  - tldraw
  - readme
  - example
  - editor-api
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Search the text of every shape on the current page and zoom to a result.

---

Each shape util exposes its text through `getText(shape)`, so the search filters `editor.getCurrentPageShapes()` by that value. Results are listed in the `HelperButtons` UI slot, and clicking one selects the shape and calls `zoomToSelection` to animate the camera to it. A UI action override binds Cmd+F / Ctrl+F to open the panel.

Add some text or shapes with labels, press Cmd+F or Ctrl+F, and start typing. Press Escape to close.


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
