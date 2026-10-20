---
title: Custom paste behavior
component: ./CustomPasteExample.tsx
priority: 3
keywords:
  - paste
  - clipboard
  - external content
  - handler
tags:
  - tldraw
  - readme
  - example
  - data
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Replace the built-in paste handler so a copied frame lands in free space beside the original.

---

Pasted tldraw content goes through the `'tldraw'` external content handler. This example overrides it with `editor.registerExternalContentHandler('tldraw', ...)` to add one rule: when the clipboard holds a single page-level frame, place the pasted copy to the right of the original (and past any other frames in the way), the way Figma does. Everything else falls through to `defaultHandleExternalTldrawContent`.

Try creating a frame, then pressing `Cmd + C`, `Cmd + V` a few times.


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
