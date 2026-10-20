---
title: Meta migrations
component: ./MetaMigrations.tsx
priority: 6
keywords:
  - migrations
  - meta
  - schema
  - createmigrationids
  - createmigrationsequence
  - versioning
  - upgrade
  - snapshot
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

Register your own migration sequence to upgrade `meta` data in old snapshots.

---

Records carry a `meta` field for app-specific data, but tldraw can't migrate what it doesn't know about. This example stores a page background theme in `page.meta`, then defines a migration with `createMigrationIds` and `createMigrationSequence` that maps a retired `'purple'` value to `'blue'`. The sequence is passed to the `migrations` prop; when the bundled snapshot (saved before that migration existed) loads, the migration runs automatically.

Open the page menu: the page that was purple is now blue and renamed "(was purple)". The dropdown in the top panel lets you change the current page's theme.

For migrating the `props` of a custom shape, use the simpler shape-props migration API described in the [persistence docs](https://tldraw.dev/sdk-features/persistence#shape-props-migrations).


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
