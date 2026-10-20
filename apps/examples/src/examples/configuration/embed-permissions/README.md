---
title: Embed permissions
component: ./EmbedPermissionsExample.tsx
priority: 3
keywords:
  - embed
  - iframe
  - sandbox
  - permissions
  - aspect ratio
  - interactive
  - youtube
  - security
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

Configure embed sandbox permissions, aspect ratio locking, and visual options.

---

Embedded iframes in tldraw are sandboxed with deliberately conservative defaults (`embedShapePermissionDefaults`). This example configures `EmbedShapeUtil` with two embed definitions that override those defaults in opposite directions:

- A **YouTube** definition that grants `allow-presentation` (so the fullscreen button works), locks the aspect ratio to 16:9 with `isAspectRatioLocked`, sets a `backgroundColor` for the loading state, and disables `canEditWhileLocked`.
- A **read-only website** definition (showing Wikipedia's whiteboard article) that turns off scripts, forms, popups, and same-origin access entirely. This is the pattern for embedding untrusted pages as inert previews. It uses `overrideOutlineRadius` to round the shape outline, and works here because Wikipedia renders its content without JavaScript; a script-dependent site would show an empty frame in this mode.

The example also shows the embed interactivity rule: an embed's iframe ignores pointer events until you double-click the shape to enter its editing state, which is why embeds can be dragged and resized without the iframe capturing the pointer.

For adding a new embed provider from scratch, see the custom embed example.


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
