---
title: Custom shape wrapper
component: ./CustomShapeWrapperExample.tsx
keywords:
  - ShapeWrapper
  - DefaultShapeWrapper
  - wrapper
  - dom
  - class names
  - styling
  - css
  - atom
  - useValue
  - forwardRef
  - components
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

Add a class name to individual shapes by overriding the `ShapeWrapper` component.

---

Every shape is rendered inside a wrapper element that tldraw positions on the canvas. Passing a component as `components.ShapeWrapper` replaces that element. The custom wrapper here renders `DefaultShapeWrapper` (so positioning still works) and adds a `custom-special-shape` class when the shape's id matches an `atom`. Reading the atom with `useValue` means only the affected wrappers re-render.

A timer moves the "special" status to a random shape every second, so you'll see a red drop shadow jump between the geo shapes. This is useful for styling or tagging shapes from outside the shape util, for example to add data attributes for CSS targeting.


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
