---
title: Before delete shape
component: ./BeforeDeleteShapeExample.tsx
priority: 4
keywords:
  - side effects
  - registerbeforedeletehandler
  - intercept
  - prevent deletion
  - lifecycle
  - hooks
  - validation
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

Intercept shape deletions and cancel the ones you don't want to allow.

---

`editor.sideEffects.registerBeforeDeleteHandler` runs before a record is removed from the store.
Return `false` to cancel the deletion; return nothing to let it proceed. In this example, red shapes
can't be deleted but everything else can.

Try selecting each text shape and pressing delete. The red one stays put, whether you delete it
directly, select all and delete, or cut it. This only guards deletions: the user can still
recolor the shape and then delete it.


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
