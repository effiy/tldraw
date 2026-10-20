---
title: Inspector panel
component: ./InspectorPanelExample.tsx
priority: 5
keywords:
  - inspector
  - properties
  - props
  - selection
  - panel
  - debug
  - usevalue
  - bindings
  - shared styles
  - getselectedshapes
  - getbindingsinvolvingshape
  - editorprovider
tags:
  - tldraw
  - readme
  - example
  - ui
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Show the properties, shared styles, and bindings of the current selection in a side panel.

---

The panel is a plain React component rendered next to `<Tldraw>` rather than inside it. The editor instance is captured from `onMount` and passed to `EditorProvider`, which makes `useEditor()` and `useValue()` work outside the canvas.

With one shape selected it lists the shape's record fields and `props`, plus any bindings from `editor.getBindingsInvolvingShape()`. With several selected it shows `editor.getSharedStyles()`, marking styles that differ across the selection as mixed.

Try selecting a shape, then drawing an arrow to it and selecting the arrow to see its binding. Select several shapes with different colors to see mixed styles.


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
