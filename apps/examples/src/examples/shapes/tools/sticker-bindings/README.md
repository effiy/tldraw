---
title: Attach shapes together (bindings)
component: ./StickerExample.tsx
keywords:
  - bindings
  - bindingutil
  - relationships
  - attach
  - stick
  - canbind
  - createbinding
  - onafterchangetoshape
  - anchor
  - relative position
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

Stick a sticker shape onto other shapes with a custom binding that keeps it attached.

---

Bindings are records that connect two shapes; a `BindingUtil` decides what happens when either side changes. Here a sticker dropped onto a shape creates a `sticker` binding storing where on the target it landed. `onAfterChangeToShape` moves the sticker as the target moves, resizes, or rotates, and `onBeforeDeleteToShape` deletes the sticker with its target.

Draw a shape, pick the sticker tool (or press P), and drop a sticker on it. Then move or resize the shape and watch the sticker stay put. Drag the sticker off to unstick it.


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
