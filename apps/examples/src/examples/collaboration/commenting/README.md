---
title: Commenting
component: ./CommentingExample.tsx
priority: 1
keywords:
  - comments
  - commenting
  - comment thread
  - annotations
  - feedback
  - review
  - collaboration
  - pins
tags:
  - tldraw
  - readme
  - example
  - collaboration
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Add comment threads to the canvas with the commenting toolkit.

---

Comment threads are records in the editor's store, so they persist and sync exactly like shapes. Register `commentSchemaRecords` on the schema, add `CommentTool` and `commentToolOverrides` to the editor, then render `CanvasComments` in the `InFrontOfTheCanvas` slot. That is the whole integration.

Press `c` or pick the comment tool, then click anywhere to start a thread, click a shape to attach one to it, or drag to comment on a region (turned on here with `CommentTool.configure({ enableRegions: true })`). Type `@` in a composer to mention someone; the suggestions come from `getMentionSuggestions`.

Commenting is a licensed feature. Everything works in local development, but a deployed app needs a license key that includes commenting.


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
