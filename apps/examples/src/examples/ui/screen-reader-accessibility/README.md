---
title: Screen reader accessibility
component: ./ScreenReaderAccessibilityExample.tsx
priority: 1
keywords:
  - accessibility
  - a11y
  - screen reader
  - aria
  - getariadescriptor
  - gettext
  - usea11y
  - announcements
  - aria live region
  - polite
  - assertive
  - wcag
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

Make custom shapes describe themselves to screen readers, and announce messages from your own UI.

---

When a shape is selected, tldraw announces it through an ARIA live region. The text comes from the shape util: `getAriaDescriptor()` first, falling back to `getText()`, followed by the shape type and its position in reading order. The card shape here overrides both methods, and a `translations` override gives the custom type a readable name (`tool.note-card`) for that announcement.

The top panel shows the other half: `useA11y()` returns an `announce()` function you can call from any component inside `<Tldraw />`. Use `priority: 'polite'` for confirmations and status updates that can wait, and `priority: 'assertive'` for errors that should interrupt. Try selecting a card with a screen reader running, then press the buttons.


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
