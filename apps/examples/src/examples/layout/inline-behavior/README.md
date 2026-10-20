---
title: Inset editor (common practices)
component: ./InlineBehavior.tsx
priority: 0.5
keywords:
  - inline
  - embedded
  - focus
  - blur
  - multiple editors
  - autofocus
  - hand tool
  - edge scrolling
  - edgescrollspeed
  - maxpages
  - context
tags:
  - tldraw
  - readme
  - example
  - layout
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Embed several `Tldraw` blocks in a page so that only one is focused at a time, with a stripped-down UI.

---

When tldraw is one block among many in a larger document, the defaults for a full-page editor get in the way: every editor grabs keyboard shortcuts, the select tool makes it easy to accidentally move things while scrolling past, and the full UI is too much for a small space. This example shows the adjustments we recommend:

- Track the focused editor in a React context, and call `editor.focus()` / `editor.blur()` (with `focusContainer` / `blurContainer` off) so only one editor handles keyboard input at a time.
- Default to the hand tool on mount and whenever focus is lost, and clear the selection on blur.
- Hide the UI of unfocused editors with `hideUi`.
- Set `edgeScrollSpeed: 0` so the canvas doesn't scroll when the pointer nears the edge of a small block, and `maxPages: 0` to remove the pages menu.
- Remove the help menu, navigation panel, and main menu via `components`.

Try clicking into one block, then another, then somewhere on the page outside all of them.


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
