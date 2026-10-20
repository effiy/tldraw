---
title: Comment notifications
component: ./CommentNotificationsExample.tsx
priority: 9
keywords:
  - comments
  - commenting
  - notifications
  - inbox
  - unread
  - read receipts
  - mentions
  - collaboration
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

Track unread comments and build a notifications feed.

---

The commenting layer doesn't decide what's unread or what's worth notifying someone about — it takes both from the host. `isCommentUnread` reports read status, `onCommentsRead` records receipts for the unread comments a thread view displays, and `revealThread` jumps to a thread from anywhere outside the canvas.

That's enough to build a feed: derive it from the comment records with `useComments`, tag each one with why it's there, and check it against your read state. This example uses two reasons — the comment mentions you, or it lands in a thread you're part of.

Use the buttons to post as another user, then click a row to jump to the thread and watch it mark itself read.


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
