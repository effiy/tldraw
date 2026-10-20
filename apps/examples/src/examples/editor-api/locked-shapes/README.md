---
title: Locked shapes
component: ./LockedShapesExample.tsx
priority: 3
keywords:
  - lock
  - unlock
  - locked
  - islocked
  - ignoreshapelock
  - selectlockedshapes
  - template
  - background
  - togglelock
  - editor.run
  - programmatic
  - read-only
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

Lock shapes against user editing, move them from code with `ignoreShapeLock`, and let users select them with the `selectLockedShapes` option.

---

The blue shapes are locked on mount with `editor.toggleLock`. Users can't drag, resize, edit, or delete them, and left-clicking one does nothing (right-click still selects it).

- **Scatter / Reset** wrap `editor.updateShapes` in `editor.run(fn, { ignoreShapeLock: true })`, which lifts the lock guard for the callback so code can move shapes the user can't.
- **Allow selecting locked shapes** toggles the `selectLockedShapes` editor option, which lets locked shapes be picked by left-click, brush, and scribble selection. It only affects selection; the lock guards on moving, resizing, editing, and deleting still apply. Editor options are fixed for the editor's lifetime, so flipping the toggle passes a new `options` object to `<Tldraw>` and the editor is recreated (the store, and so the shapes, are kept).


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
