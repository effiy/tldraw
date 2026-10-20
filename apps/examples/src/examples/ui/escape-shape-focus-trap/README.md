---
title: Escape shape focus trap
component: ./EscapeShapeFocusTrap.tsx
priority: 3
keywords:
  - tab
  - keyboard navigation
  - accessibility
  - a11y
  - shape toolbar
  - focus
  - contextual toolbar
  - keyboard
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

Tab from a selected shape into a custom contextual toolbar instead of cycling to the next shape.

---

By default tldraw traps the Tab key while shapes are selected and uses it to move between shapes. This example intercepts that with a capture-phase `keydown` listener registered in `onMount`, so it runs before tldraw's own handler and can call `stopImmediatePropagation()`.

- Tab with a shape selected and focus on the canvas moves focus to the first toolbar button.
- Tab and Shift+Tab inside the toolbar cycle between its buttons.
- Tab on the last button (or Shift+Tab on the first) returns focus to the canvas and restores shape navigation.
- Escape inside the toolbar also returns focus to the canvas.

Try it: click a shape, then press Tab to focus the toolbar. Use Tab and Shift+Tab to move between buttons, and Escape to return to the canvas.


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
