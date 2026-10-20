---
title: Persistent iframe shape
component: ./PersistentIframeExample.tsx
priority: 10
keywords:
  - iframe
  - embed
  - content element
  - moveBefore
  - unmount
  - persistent
  - lifecycle
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

An iframe shape whose content survives unmounting the editor.

---

Shape content normally lives inside the editor's React tree, so unmounting the editor destroys it — an embedded iframe loses its scroll position, in-app state, and connections. This example uses `getAppOwnedElement` and `onReleaseAppOwnedElement` to keep an app-owned iframe alive across editor sessions: tldraw adopts the element into the shape with `Node.moveBefore` (which preserves iframe state, in Chromium 133+ and Firefox 144+) and hands it back to the app before the editor unmounts. Interact with the iframe, unmount the editor, then mount it again — the iframe keeps its state.


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
