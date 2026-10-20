---
title: Custom embeds
component: ./CustomEmbedExample.tsx
priority: 2
keywords:
  - embed
  - iframe
  - CustomEmbedDefinition
  - DEFAULT_EMBED_DEFINITIONS
  - toEmbedUrl
  - fromEmbedUrl
  - jsfiddle
  - url parsing
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

Add a custom embed provider and remove some of the built-in ones.

---

tldraw recognizes URLs from many services out of the box and turns them into embed shapes. This example configures `EmbedShapeUtil` with its own list of `embedDefinitions`: two of the defaults (tldraw and YouTube) plus a new `CustomEmbedDefinition` for JSFiddle.

A definition pairs `hostnames` with `toEmbedUrl` and `fromEmbedUrl` functions that convert between the page URL and the iframe URL. Custom definitions also need an `icon`, which shows in the embed dialog.

Try clicking "Insert embed" in the top panel: only tldraw, YouTube, and JSFiddle are listed. Pasting a JSFiddle URL like `https://jsfiddle.net/user/abc123/1/embedded/` onto the canvas also creates an embed.

For sandbox permissions and other per-definition options, see the embed permissions example.


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
