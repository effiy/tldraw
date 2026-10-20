---
title: Shape meta (on create)
component: ./OnCreateShapeMetaExample.tsx
priority: 7
keywords:
  - meta
  - metadata
  - getinitialmeta
  - getinitialmetaforshape
  - oncreate
  - custom data
  - usevalue
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

Record who created each shape and when by replacing `editor.getInitialMetaForShape`.

---

Every shape has a `meta` property for your own JSON data. When `createShapes` creates a shape it
merges the result of `editor.getInitialMetaForShape(shape)` with whatever `meta` you passed. This
example replaces that method in `onMount` to stamp `createdBy` and `createdAt` on every new shape.
A panel at the top shows the selected shape's meta.

Create a shape and select it to see its meta. Since this only runs at creation, later edits leave
the values alone. To keep meta current as shapes change, see the shape meta (on change) example.


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
