---
title: Comments and undo
component: ./CommentHistoryExample.tsx
priority: 6
keywords:
  - comments
  - commenting
  - history
  - undo
  - redo
  - dragHistory
  - multiplayer
  - collaboration
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

Decide whether comment writes land on the editor's undo stack.

---

`CommentingOptions.history` governs every comment write — posting, replying, editing, resolving, deleting — and defaults to `'ignore'`. In a shared document an undoable delete would resurrect a thread a collaborator already removed.

Pin drags are the exception, since re-anchoring may reasonably undo alongside a shape move. `dragHistory` overrides `history` for drags alone.

Move the shape, post a comment, drag its pin, then press undo and watch the counts.


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
