---
title: Image annotator
component: ./ImageAnnotatorExample.tsx
priority: 1
keywords:
  - annotation
  - image annotation
  - cameraoptions
  - constraints
  - zoom
  - pan
  - bounds
  - panspeed
  - zoomspeed
  - zoomsteps
  - image editor
tags:
  - tldraw
  - readme
  - example
  - use-cases
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Annotate an image on a constrained canvas and export the result as a PNG.

---

The chosen image is placed as a locked image shape. Store side effects keep it locked and at the bottom of the page, and camera constraints (`editor.setCameraOptions` with `contain` behavior and a `fit-min-100` base zoom) stop you from panning or zooming away from it. An `InFrontOfTheCanvas` overlay dims everything outside the image so it's clear what will be exported.

Press "Done" to export with `editor.toImage`, cropped to the image bounds, then copy or download the result.

Try picking a very long, thin image to see how the camera constraints behave.


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
