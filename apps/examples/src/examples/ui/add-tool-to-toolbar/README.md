---
title: Add a tool to the toolbar
component: ./ToolInToolbarExample.tsx
priority: 0
keywords:
  - custom tool
  - toolbar
  - icon
  - asset urls
  - keyboard shortcuts dialog
  - defaulttoolbar
  - tldrawuimenuitem
  - useistoolselected
  - usetools
  - components
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

Add a custom tool to the toolbar with its own icon and keyboard shortcut.

---

To make a custom tool appear on tldraw's toolbar you need four things: register the tool item in the UI's tools context with the `tools` override, override the `Toolbar` component to render a `TldrawUiMenuItem` for it, override the `KeyboardShortcutsDialog` so its shortcut appears in the dialog, and pass an `assetUrls` entry for the tool's icon.

The sticker tool is selected on load. Click on the canvas to drop a heart, or press `S` to switch back to it after using another tool. For more information on how to implement custom tools, check out the custom tool example.


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
