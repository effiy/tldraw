---
title: External UI (using state)
component: ./ExternalUiExample.tsx
priority: 20
keywords:
  - custom ui
  - toolbar
  - buttons
  - state
  - usestate
  - onmount
  - getcurrenttoolid
  - setcurrenttool
  - getstylefornextshape
  - setstylefornextshapes
  - usevalue
tags:
  - tldraw
  - readme
  - example
  - layout
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Control the editor from a toolbar rendered outside the `Tldraw` component, holding the editor in React state.

---

UI that lives outside the `Tldraw` component can't use `useEditor()`, so it needs some other way to reach the editor instance. The simplest option is to capture it in `onMount` and store it in state in the same component that renders `<Tldraw>`.

Here the default toolbar is hidden (`components={{ Toolbar: null }}`) and replaced with three buttons rendered below the canvas. `useValue` keeps the active button in sync with `editor.getCurrentToolId()`, and the buttons call `editor.setCurrentTool()`. Because the editor is `null` until it mounts, the callbacks guard against that.

Try clicking "Oval" and drawing on the canvas. The oval button sets `GeoShapeGeoStyle` before switching to the geo tool, since the geo tool creates whichever geo shape is currently selected in the style.

For a version that distributes the editor through React context, so any descendant component can use it, see the [External UI (using context)](https://tldraw.dev/examples/external-ui-context) example.


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
