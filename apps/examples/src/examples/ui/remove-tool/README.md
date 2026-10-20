---
title: Remove a tool from the toolbar
component: ./RemoveToolExample.tsx
priority: 0
keywords:
  - hide tool
  - remove tool
  - overrides
  - customization
  - toolbar customization
  - disable tool
  - tool visibility
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

Remove the text tool from the toolbar and keyboard shortcuts with a `tools` override.

---

The `tools` override in `TLUiOverrides` receives the map of UI tool items and returns the one the UI should use. Deleting an entry removes that tool from the toolbar, its keyboard shortcut, and the keyboard shortcuts dialog. The tool is still registered with the editor, so it can be activated programmatically with `editor.setCurrentTool`. Here we remove the text tool; try pressing `T` and note that nothing happens.


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
