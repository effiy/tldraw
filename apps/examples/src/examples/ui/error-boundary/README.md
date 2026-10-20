---
title: Error boundary
component: ./ErrorBoundaryExample.tsx
priority: 2
keywords:
  - error handling
  - shapeerrorfallback
  - error boundary
  - components
  - crash recovery
  - fallback ui
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

Customize the fallback shown when a shape throws while rendering.

---

Every shape renders inside its own error boundary, so a shape that throws doesn't crash the editor. Instead tldraw renders the `ShapeErrorFallback` component in its place. Override it through the `components` prop to show your own message; it receives the thrown `error` as a prop.

This example registers a shape whose `component()` always throws and creates one on mount so you can see the custom fallback immediately.


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
