---
title: Custom records
component: ./CustomRecordsExample.tsx
priority: 1
keywords:
  - record
  - store
  - custom
  - data
  - migrations
  - validator
  - tlglobalrecordpropsmap
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

Store your own record types in the tldraw store so they persist, sync, and migrate alongside shapes.

---

Not all app data is a shape, binding, or asset. This example registers a "marker" record type, a pin at a page position with a label and icon, using the `records` option of `createTLStore`. A `CustomRecordInfo` supplies the scope, a validator, migrations (built with `createCustomRecordMigrationIds` and `createCustomRecordMigrationSequence`), and default properties. Augmenting `TLGlobalRecordPropsMap` makes the new type part of `TLRecord`, so store reads and writes are fully typed.

The markers are rendered in the `InFrontOfTheCanvas` slot from a reactive `store.query.records('marker')` query. Press "Add marker" to drop one at the center of the viewport, pan around to see it stay put on the page, and right-click or ctrl-click a marker to remove it.


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
