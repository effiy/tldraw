---
title: Derived view
component: ./DerivedViewExample.tsx
priority: 6
keywords:
  - computed
  - incremental
  - derivation
  - performance
  - store history
  - diffsince
  - reactive
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

Derive a set of draw shape ids from the store incrementally, using the store's change history instead of rescanning every shape.

---

A `computed` signal can look at what changed since it last ran, rather than recomputing from
scratch. This example builds a reactive set of draw shape ids: on the first run it scans every
shape, and after that it reads `store.history.getDiffSince(lastComputedEpoch)` and only adds or
removes ids for draw shapes that were created or deleted. If nothing relevant changed, it returns
the previous set so nothing downstream re-runs.

The counter at the top of the page reads the set's size with `useValue`. Try drawing a few strokes
and deleting them; moving or restyling shapes leaves the set untouched, so nothing downstream re-runs.
The same pattern works for any expensive derived view of the document.


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
