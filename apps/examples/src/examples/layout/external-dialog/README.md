---
title: External dialog
component: ./ExternalDialog.tsx
priority: 20
keywords:
  - dialog
  - modal
  - css
  - styling
  - custom styles
  - embed
  - insert
tags:
  - tldraw
  - readme
  - example
  - layout
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Open dialogs over the whole page instead of inside the `Tldraw` container.

---

The tldraw UI renders its dialogs (insert embed, edit link, keyboard shortcuts) inside the `Tldraw` component, positioned absolutely within it. When the editor is a small inset in a larger page, that can leave dialogs cramped or clipped.

This example overrides the `.tlui-dialog__overlay` and `.tlui-dialog__positioner` styles to use `position: fixed`, so dialogs are positioned relative to the browser window instead. Try it: open the "Insert embed" dialog from the menu, or press `Cmd + I` / `Ctrl + I`, and the dialog will center over the whole page rather than the 600 × 400 editor.


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
