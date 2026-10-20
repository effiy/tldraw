---
title: Canvas events
component: ./CanvasEventsExample.tsx
priority: 1
keywords:
  - events
  - pointer events
  - mouse events
  - click
  - keyboard events
  - canvas events
  - event listeners
  - tleventinfo
  - editor.on
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

Log the pointer, keyboard, and other input events the editor dispatches to its tools.

---

The editor is an event emitter. Subscribing to `editor.on('event', handler)` gives you every
`TLEventInfo` the editor processes: pointer, keyboard, wheel, pinch, click, and tick events. This
example keeps the most recent event of each type and shows them on the right-hand side.

Try moving your cursor, dragging, and holding modifier keys, and watch the panel update. These are
input events, not document changes: to see shapes being created or deleted, look at the store events
example, and for high-level UI actions like tool selection, see the UI events example.


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
