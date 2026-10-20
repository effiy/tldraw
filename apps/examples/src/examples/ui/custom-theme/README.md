---
title: Custom theme
component: ./CustomThemeExample.tsx
priority: 0.6
keywords:
  - theme
  - brand
  - custom
  - colors
  - fonts
  - dark mode
  - light mode
  - palette
  - updatetheme
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

Add custom colors and fonts to the theme, remove built-in ones, and adjust theme values at runtime.

---

Pass a `themes` prop to `<Tldraw>` to replace the default theme. This example adds a "pink" color and two custom fonts (a bundled pixel font and a remote Google Font), removes the "light-\*" colors and the serif font, and adds translations so the style panel shows readable names. Custom color and font names are declared to TypeScript via module augmentation of `TLThemeDefaultColors`, `TLThemeFonts`, and `TLRemovedDefaultThemeColors`.

The sliders in the bottom right change the theme's `fontSize`, `lineHeight`, and `strokeWidth` at runtime with `editor.updateTheme()`. Draw some shapes and drag the stroke width slider to see them update. To register additional named themes and switch between them, see the multiple themes example.


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
