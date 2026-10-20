---
title: Shape meta (on change)
component: ./OnChangeShapeMetaExample.tsx
priority: 7
keywords:
  - meta
  - metadata
  - side effects
  - registerbeforechangehandler
  - getinitialmeta
  - onchange
  - tracking
  - audit
  - custom data
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

Stamp `updatedBy` and `updatedAt` metadata on shapes every time they change.

---

Every shape has a `meta` property for your own JSON data. This example keeps it up to date with a
`registerBeforeChangeHandler` side effect that rewrites `meta` on every user-initiated shape change,
and replaces `editor.getInitialMetaForShape` so new shapes start with the same fields. A panel at the
top shows the selected shape's meta.

Create a shape, select it, and move or restyle it: the timestamp updates with each change. The
handler ignores changes with `source: 'remote'`, so in a multiplayer document a peer's edits keep
their own author. For setting meta only at creation time, see the shape meta (on create) example.


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
