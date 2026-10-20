---
title: Persistence key
component: ./PersistenceKeyExample.tsx
priority: 1
keywords:
  - persistence
  - local storage
  - save state
  - persistencekey
  - indexeddb
  - session storage
  - auto save
tags:
  - tldraw
  - readme
  - example
  - configuration
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Save the document in the browser and sync it between tabs with `persistenceKey`.

---

Pass a `persistenceKey` to the `Tldraw` component and it stores the document in IndexedDB under that key, restores it on the next load, and keeps other tabs with the same key in sync via a broadcast channel.

Draw something, refresh the page, and it's still there. Open this page in a second tab and changes appear in both. Different keys are independent documents, so use a key per document (for example a document id) rather than one per app.

If you need to persist somewhere other than the browser, see the sync and snapshot examples instead.


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
