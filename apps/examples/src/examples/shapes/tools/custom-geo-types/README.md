---
title: Custom geo types
component: ./CustomGeoTypesExample.tsx
priority: 3
keywords:
  - geo
  - custom
  - shape
  - extend
  - configure
  - geometry
  - path
  - pathbuilder
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

Add new geo types (a rounded rectangle and a cross) to the built-in geo shape with `GeoShapeUtil.configure()`.

---

Instead of writing a whole new shape util, pass a `customGeoTypes` map to `GeoShapeUtil.configure()`. Each entry supplies a `getPath` function that returns a `PathBuilder` outline for a given width and height, plus a snap type, an icon, and an optional default size. The configured util replaces the default one in `shapeUtils`; the new types inherit labels, fill and dash styles, resizing, snapping, and SVG export, and they show up in the style panel's geo picker.

The example also registers icons for the new types through `assetUrls`, adds tool labels through the `translations` override, and puts the two new tools at the front of the toolbar with `ToolbarItem`.

Try selecting a shape and switching its geo type in the style panel, or use the new toolbar tools to draw more.


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
