---
title: "Read-only"
component: ./ReadOnlyExample.tsx
priority: 1
keywords:
  - readonly
  - read-only mode
  - isreadonly
  - view only
  - disable editing
  - presentation mode
  - locked editor
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

Put the editor in read-only mode so the document can be viewed but not changed.

---

Read-only mode is an instance state flag: `editor.updateInstanceState({ isReadonly: true })`. This example sets it in `onMount`. When it's on, editing tools disappear from the toolbar (only select, hand, and laser pointer remain), editing commands like delete and paste are ignored, and shapes can't be moved or resized. You can still pan, zoom, select, and use the laser pointer.

Because it's instance state rather than document state, it can be toggled at runtime, for example when a user's permissions change. Read it back with `editor.getIsReadonly()`.


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
