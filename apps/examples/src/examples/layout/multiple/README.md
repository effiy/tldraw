---
title: Multiple editors
component: ./MultipleExample.tsx
priority: 2
keywords:
  - multiple editors
  - focus
  - autofocus
  - blur
  - context
  - shared document
  - persistencekey
  - sync
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

Put several `Tldraw` components on one page and make sure only one is focused at a time.

---

Each `Tldraw` component is its own editor with its own keyboard handling, so with several on a page you need to decide which one currently owns focus. This example turns off `autoFocus` on every editor and tracks the focused one in a React context. Wrapping each editor in a focusable `div` (`tabIndex={-1}`) with an `onFocus` handler lets us call `editor.focus()` on the newly focused editor and `editor.blur()` on the previous one. Clicking anywhere else on the page blurs whichever editor was focused.

Editors B and C share a `persistenceKey`, so they show the same locally synchronized document. Try drawing in one and watching the other update. The long block of text below is there so you can check that scrolling the page and typing in the textarea don't get captured by an unfocused editor.


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
