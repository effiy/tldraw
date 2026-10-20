---
title: Custom error capture
component: ./CustomErrorCaptureExample.tsx
priority: 3
keywords:
  - error
  - ErrorFallback
  - error boundary
  - crash handling
  - getErrorAnnotations
  - sentry
  - debugging
  - error tracking
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

Customize the error screen that appears when the editor crashes and read the annotations tldraw attaches to errors.

---

When a critical error occurs in the editor, tldraw displays an error screen with options to refresh or reset. Override the `ErrorFallback` component in the `components` prop to replace it with your own.

tldraw annotates errors with extra information about the editor's state at the time of the error, such as the active tool and the selected shapes. Read it with `getErrorAnnotations(error)` and forward it to your error tracking service (like Sentry). This example shows the annotations on screen instead.

Click "Throw an error" to trigger a crash and see the custom fallback.

A separate component, `ShapeErrorFallback`, handles errors in individual shapes; see the error boundary example for that. `ErrorFallback` handles editor-level errors that affect the entire application.


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
