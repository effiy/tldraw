---
title: External content sources
component: ./ExternalContentSourcesExample.tsx
priority: 3
keywords:
  - paste
  - copy
  - clipboard
  - html
  - registerexternalcontenthandler
  - text content
  - custom shape
  - baseboxshapeutil
  - htmlcontainer
  - dangerouslysetinnerhtml
tags:
  - tldraw
  - readme
  - example
  - data
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Turn pasted `text/html` into a custom shape by overriding the text external content handler.

---

Content pasted or dropped into the editor is dispatched to a handler by type: text, files, url, svg-text, embed, or tldraw. This example calls `editor.registerExternalContentHandler('text', ...)` to replace the text handler. When the pasted text has an HTML source among its `sources`, it creates a `dangerous-html` shape that renders the markup with `dangerouslySetInnerHTML`; plain text falls back to `defaultHandleExternalTextContent`.

Try copying a few lines of code from VS Code, or some formatted text from a web page, and pasting them onto the canvas. Rendering arbitrary pasted HTML is unsafe outside of a demo, which is why the shape is named the way it is.


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
