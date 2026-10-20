---
title: UI primitives
component: ./UiPrimitivesExample.tsx
priority: 1
keywords:
  - button
  - dropdown
  - select
  - input
  - slider
  - popover
  - icon
  - tooltip
  - menu
  - ui
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

Tour the UI primitives tldraw exports for building panels, menus, and dialogs that match its look.

---

Everything in tldraw's default UI is built from a small set of exported primitives, and you can use the same ones in your own components. This example renders them all in an `OnTheCanvas` panel so you can zoom in and inspect them:

- `TldrawUiButton` with `TldrawUiButtonLabel` and `TldrawUiButtonIcon`, in its normal, primary, danger, icon, and menu types
- `TldrawUiDropdownMenu*` for menus with groups, checkbox items, and submenus
- `TldrawUiSelect*` for a select control, with and without item icons
- `TldrawUiInput` and `TldrawUiSlider`
- `TldrawUiPopover*` for floating content
- `TldrawUiIcon` for every icon in `iconTypes`
- `TldrawUiTooltip` and `TldrawUiKbd`

The primitives read tldraw's UI context and CSS variables, so they must be rendered inside `<Tldraw />` (in a `components` slot or as children) and they follow the editor's light or dark mode automatically.


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
