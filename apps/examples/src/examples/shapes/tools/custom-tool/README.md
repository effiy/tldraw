---
title: Custom tool (sticker)
component: ./CustomToolExample.tsx
priority: 0
keywords:
  - statenode
  - tool
  - pointer events
  - onpointerdown
  - onenter
  - cursor
  - createshape
  - state machine
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

A minimal custom tool that drops a heart emoji wherever you click.

---

Tools are nodes in tldraw's state chart and are responsible for handling user input. A custom tool extends `StateNode`, sets a static `id`, and overrides event handlers such as `onEnter` and `onPointerDown`. Pass the class to `<Tldraw>` through the `tools` prop.

The sticker tool here sets a crosshair cursor when it becomes active and creates a text shape at `editor.inputs.getCurrentPagePoint()` on every pointer down. The example hides the UI and starts with the tool selected via `initialState`, so just click anywhere on the canvas. For a tool with child states and drag interactions, see the screenshot tool example; for adding a tool to the toolbar, see the custom shape and tool example.


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
