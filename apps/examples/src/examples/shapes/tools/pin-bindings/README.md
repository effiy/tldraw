---
title: Pin (bindings)
component: ./PinExample.tsx
keywords:
  - bindings
  - bindingutil
  - custom binding
  - relationships
  - connections
  - network
  - custom tool
  - statenode
  - onafterchangetoshape
  - shape relationships
  - pin together
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

Pin overlapping shapes together with a custom binding that keeps the whole network aligned.

---

The pin is a custom shape; the interesting part is `PinBindingUtil`. Dropping a pin over shapes creates a `pin` binding to each one, storing where on the shape the pin landed. When any pinned shape changes, `onAfterChangeToShape` records it and `onOperationComplete` solves the connected network once per operation, moving the other shapes so every pin stays put. Deleting a pinned shape deletes its pin, and reparenting one drags the pin along.

Try drawing two overlapping shapes, selecting the pin tool (or press P), and clicking where they overlap. Then drag one of the shapes: the other follows. Drag the pin itself to unpin.


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
