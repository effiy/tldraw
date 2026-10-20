---
title: Prevent instance changes
component: ./PreventInstanceChangeExample.tsx
priority: 2
keywords:
  - instance state
  - prevent change
  - registerbeforechangehandler
  - side effects
  - grid mode
  - isgridmode
  - validation
  - state protection
tags:
  - tldraw
  - readme
  - example
  - events
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Reject changes to the instance record that would turn grid mode off.

---

Side effects aren't just for shapes: you can register handlers for any record type in the store.
This example registers a `registerBeforeChangeHandler` for the `instance` record and returns the
previous record whenever the incoming change has `isGridMode: false`, which cancels the change.

Try toggling the grid from the main menu or with the keyboard shortcut: it stays on. Rejecting a
change this way is silent, so if the change came from a user action you may want to
explain why nothing happened. To reject only some fields of a change while keeping the rest, return
a merged record instead of `prev`.


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
