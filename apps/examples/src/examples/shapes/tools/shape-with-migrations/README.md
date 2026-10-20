---
title: Custom shape migrations
component: ./ShapeWithMigrationsExample.tsx
priority: 3
keywords:
  - migrations
  - schema versioning
  - createshapepropsmigrationids
  - createshapepropsmigrationsequence
  - up
  - down
  - backwards compatibility
  - data migration
tags:
  - tldraw
  - readme
  - example
  - shapes
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Migrate a custom shape's props between versions with a migration sequence.

---

When you change a custom shape's props, documents saved with the old version still contain the old shape data. Migrations let the editor upgrade (or downgrade) that data as it loads, so old documents keep working. This example loads a snapshot containing a shape saved before it had a `color` prop; the shape util's `migrations` (built with `createShapePropsMigrationIds` and `createShapePropsMigrationSequence`) add the missing prop when the snapshot loads.

Read the guide at the bottom of the example file for how the editor decides which migrations to run.


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
