---
title: Multiplayer sync with a custom shape
component: ./SyncDemoShapeExample.tsx
priority: 3
keywords:
  - multiplayer
  - sync
  - useSyncDemo
  - shapeUtils
  - custom shape
  - shapeutil
  - collaboration
  - real-time
multiplayer: True
tags:
  - tldraw
  - readme
  - example
  - collaboration
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Sync a custom shape between clients by registering its shape util with the store.

---

A synced store validates and migrates records for every shape type it holds, so a custom shape's `ShapeUtil` has to be passed to `useSyncDemo` (as `shapeUtils`) as well as to `<Tldraw>`. Without it the store rejects the shape when it arrives from another client.

The `counter` shape here has a `count` prop with `+` and `-` buttons. Open the example in two tabs and click a button; the count updates everywhere because the change is an ordinary `editor.updateShape` on a synced record.


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
