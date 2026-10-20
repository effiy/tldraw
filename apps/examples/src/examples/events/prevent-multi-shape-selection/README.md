---
title: "Prevent multi-shape selection"
component: ./PreventMultiShapeSelectionExample.tsx
priority: 3
keywords:
  - selection
  - single selection
  - prevent multi-select
  - instance page state
  - registerbeforechangehandler
  - selectedshapeids
  - selection control
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

Limit the selection to a single shape by rewriting selection changes in a before-change handler.

---

The current selection is stored on the `instance_page_state` record as `selectedShapeIds`. This
example registers a `registerBeforeChangeHandler` for that record and, whenever an incoming change
would select more than one shape, returns a copy with only the last id. Since every selection
method writes to the same record, one handler covers shift-click, brush selection, select all, and
`editor.select()` calls from your own code.

Try creating a few shapes and shift-clicking or dragging a selection box over them: only one ends up
selected. Rewriting the change instead of rejecting it (by returning `prev`) means the user's action
still does something sensible.


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
