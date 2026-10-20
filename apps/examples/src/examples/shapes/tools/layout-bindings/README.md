---
title: Layout constraints (bindings)
component: ./LayoutExample.tsx
keywords:
  - bindings
  - constraints
  - layout
  - position
  - container
  - drag
  - drop
  - bindingutil
  - ontranslate
  - ontranslatestart
  - ontranslateend
  - relationships
  - custom binding
priority: 10
tags:
  - tldraw
  - readme
  - example
  - shapes
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Lay out shapes in a row using bindings that hold each shape's position in a container.

---

Bindings let one shape respond to changes in another. Here a container shape and its element shapes are related by `layout` bindings, each carrying a fractional `index`. `LayoutBindingUtil` re-runs the layout whenever a binding is created, changed, or deleted, or the container moves: elements snap into their slots and the container resizes to fit. The element shape util's `onTranslateStart`, `onTranslate`, and `onTranslateEnd` create and move a placeholder binding while dragging so the row makes room before the drop.

Try dragging an element to a different slot in the container, or out onto the page and back in.


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
