---
title: Display options
component: ./DisplayOptionsExample.tsx
priority: 1
keywords:
  - display
  - values
  - override
  - configure
  - colors
  - fonts
  - customize
tags:
  - tldraw
  - readme
  - example
  - configuration
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Override the colors, fonts, and stroke widths a shape renders with, without changing its props.

---

Built-in shape utils compute a set of display values (stroke color, fill color, label font, stroke width, and so on) from a shape's style props each time the shape renders. The `getCustomDisplayValues` option lets you override any of them: return a partial object and it is merged over the defaults.

This example configures `GeoShapeUtil` so that locked shapes are filled red, ellipses use a monospace label, and every geo shape has a 10px stroke. Try locking the rectangle (select it, then use the context menu) to see the fill change, or change the size style and notice that the stroke width stays the same.

Because display values are computed at render time, they don't touch the document: unlocking the shape or opening the file elsewhere shows the normal styles.


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
