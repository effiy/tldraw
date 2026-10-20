---
title: Asset options
component: ./AssetPropsExample.tsx
priority: 1
keywords:
  - assets
  - images
  - videos
  - upload
  - acceptedimagetypes
  - acceptedvideotypes
  - maxassetsize
  - maximagesize
  - maximagedimension
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

Restrict which images and videos can be added to the canvas.

---

The `Tldraw` component has props that control which assets it accepts when files are dropped, pasted, or uploaded:

- `acceptedImageMimeTypes` and `acceptedVideoMimeTypes` filter by file type. Here only JPEGs are allowed and videos are turned off entirely.
- `maxAssetSize` caps the file size in bytes (1 MB here).
- `maxImageDimension` limits an image's width or height in pixels; larger images are scaled down on import. `Infinity` disables the limit.

Try dropping a PNG or a video onto the canvas: it is rejected with a toast. A JPEG under 1 MB is accepted.


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
