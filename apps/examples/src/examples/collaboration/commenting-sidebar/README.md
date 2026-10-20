---
title: Commenting sidebar
component: ./CommentingSidebarExample.tsx
priority: 2
keywords:
  - comments
  - commenting
  - sidebar
  - list
  - panel
  - threads
  - filters
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

List every thread in a sidebar beside the canvas, with filters and a host-supplied toggle button.

---

`CanvasCommentsSidebar` is a batteries-included thread list that reads the same comment records as `CanvasComments`. It renders while the `commentsSidebarOpen` editor atom is set, so the host owns the open/close affordance: here a `TldrawUiButton` in the `SharePanel` slot calls `toggleCommentsSidebar`. Both components take the same `CommentingContext` fields, so one object is spread into each.

The example seeds a thread on each of two pages plus a resolved thread. By default the list shows every page's unresolved threads, labelling the ones on other pages; use the filter menu to show resolved threads or scope the list to the current page. Click a row to jump to its pin.

Activating the comment tool closes the sidebar, so the toggle button is how it comes back.


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
