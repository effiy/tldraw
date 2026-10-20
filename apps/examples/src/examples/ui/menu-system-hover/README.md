---
title: Menu system hover
component: ./MenuSystemHoverExample.tsx
priority: 1
keywords:
  - menu
  - hover
  - dropdown
  - programmatic
  - control
  - editor.menus
  - addopenmenu
  - deleteopenmenu
  - usemenuisopen
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

Open and close a dropdown menu from hover events using `editor.menus`.

---

tldraw keeps track of open menus in `editor.menus`, keyed by id. The UI's dropdown primitives read that state, so you can open or close a menu from anywhere by writing to it:

- `editor.menus.addOpenMenu(id)` opens a menu
- `editor.menus.deleteOpenMenu(id)` closes it
- `useMenuIsOpen(id)` subscribes to a menu's open state

Try hovering the green-labeled zone to open the dropdown and the red-labeled zone to close it. Clicking the trigger button still works as usual. This is handy for hover-driven toolbars or for closing menus in response to events elsewhere in your app.


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
