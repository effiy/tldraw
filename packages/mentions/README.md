---
title: "@tldraw/mentions"
tags:
  - tldraw
  - readme
  - package
  - mentions
category: packages
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

The tldraw `@`-mention picker and TipTap mention node. Shared by `@tldraw/commenting` (the comment
composer) and tldraw shape rich text, so mentioning works the same wherever rich text is edited.

This package owns:

- `createMentionExtension` — the TipTap mention node, configured to render as a pill and (optionally)
  drive the `@` picker.
- `createMentionSuggestion` — the TipTap `suggestion` config that shows the live member picker as you
  type after `@`, anchored to the editor and (on canvas) re-anchored as the camera moves.
- `MentionList` / `Mention` / `Avatar` — the presentational picker and pill components.
- `filterMentionMembers`, `isMentionPickerOpen` — helpers for hosts.

The host owns the roster: pass a resolver that returns the members matching an `@`-query, and a
`resolveName` that maps a stored member id to its current display name.


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
