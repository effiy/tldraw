---
title: After delete shape
component: ./AfterDeleteShapeExample.tsx
priority: 5
keywords:
  - side effects
  - registerafterdeletehandler
  - lifecycle
  - hooks
  - shape deletion
  - frames
  - parent shapes
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

Run a handler after shapes are deleted to remove frames that have become empty.

---

`editor.sideEffects.registerAfterDeleteHandler` runs after a record has been removed from the
store, which makes it a good place to clean up anything that depended on that record. In this
example, deleting the last child of a frame deletes the frame too.

Try deleting the shapes inside the frame one by one. Once the last one goes, the frame disappears
with it. The handler also runs for the frame it just deleted, so nested frames cascade: emptying an
inner frame can empty and delete its outer frame too.


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
