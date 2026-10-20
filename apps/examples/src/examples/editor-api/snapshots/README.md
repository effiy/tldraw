---
title: Save and load snapshots
component: ./SnapshotExample.tsx
priority: 0
keywords:
  - snapshot
  - save
  - load
  - getsnapshot
  - loadsnapshot
  - persistence
  - export
  - import
  - document
  - session
  - localstorage
tags:
  - tldraw
  - readme
  - example
  - editor-api
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Save the editor's contents with `getSnapshot()` and restore them with `loadSnapshot()`.

---

`getSnapshot(editor.store)` returns a `{ document, session }` object: `document` holds the pages, shapes, and assets, and `session` holds per-user state like the current page, camera, and selection. `loadSnapshot(editor.store, snapshot)` restores either or both. The editor here starts from a bundled snapshot passed to the `snapshot` prop.

Draw something, click "Save snapshot", change the canvas, then click "Load snapshot" to restore it from localStorage.


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
