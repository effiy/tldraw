---
title: Custom validators for shape props
component: ./CustomValidatorsExample.tsx
priority: 4
keywords:
  - validation
  - validators
  - check
  - refine
  - constraints
  - props
  - shapeutil
  - recordprops
  - error handling
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

Add constraints to shape props with the `.check()` and `.refine()` validator methods.

---

Shape props are validated whenever a shape record is written to the store. The validators from `T` (re-exported from `@tldraw/validate`) can be extended: `.check(name, fn)` adds a step that throws on invalid input without changing the value, and `.refine(fn)` returns a new value, so it can transform as well as validate.

The example shape has two constrained props:

- `percentage` chains two `.check()` calls so values below 0 or above 100 throw. The check name appears in the error message.
- `rating` uses `.refine()` to clamp values into the 1-5 range instead of rejecting them.

On load, the example creates a valid shape, then tries to create one with `percentage: 150` (which throws; see the browser console), then creates one with `rating: 10` (which succeeds and is stored as 5).


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
