---
title: External UI (using context)
component: ./ExternalUiContextExample.tsx
priority: 20
keywords:
  - custom ui
  - toolbar
  - buttons
  - context
  - createcontext
  - usecontext
  - onmount
  - getcurrenttoolid
  - setcurrenttool
  - getstylefornextshape
  - setstylefornextshapes
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

Control the editor from a toolbar rendered outside the `Tldraw` component, sharing the editor through React context.

---

UI that lives outside the `Tldraw` component can't use `useEditor()`. This example captures the editor in `onMount`, stores it in state, and then provides it through a React context so any descendant component (here, an `ExternalToolbar` rendered below the canvas) can read it with `useContext`.

The provider only renders once the editor exists, so consumers never have to handle a `null` editor. Compare with the [External UI (using state)](https://tldraw.dev/examples/external-ui) example, which keeps the editor in local state and uses it in the same component.


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
