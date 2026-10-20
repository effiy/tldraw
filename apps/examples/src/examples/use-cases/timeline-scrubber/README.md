---
title: Timeline scrubber
component: ./TimelineScrubberExample.tsx
priority: 10
keywords:
  - timeline
  - history
  - undo
  - redo
  - time travel
  - scrubber
  - store.listen
  - RecordsDiff
  - squashRecordDiffs
  - reverseRecordsDiff
  - applyDiff
  - document changes
tags:
  - tldraw
  - readme
  - example
  - use-cases
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Record every document change as a diff and scrub back and forth through the history with a slider.

---

`editor.store.listen` (scoped to `document` changes from the `user` source) captures a `RecordsDiff` for every edit. Dragging the slider collects the diffs between the current and target positions, squashes them with `squashRecordDiffs`, reverses them with `reverseRecordsDiff` when going backwards, and applies the result with `store.applyDiff` inside `store.mergeRemoteChanges` so the listener does not record the time travel itself.

Try drawing a few shapes, then drag the slider back. Make a change while scrubbed back and the later entries are discarded, starting a new branch from that point.


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
