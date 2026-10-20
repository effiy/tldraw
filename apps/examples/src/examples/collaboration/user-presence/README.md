---
title: Manually update user presence
component: ./UserPresenceExample.tsx
priority: 5
keywords:
  - presence
  - cursors
  - InstancePresenceRecordType
  - collaboration cursors
  - fake users
  - cursor position
  - chat message
  - cursor animation
  - mergeRemoteChanges
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

Show another user's cursor and chat bubble by writing an `instance_presence` record to the store.

---

Collaborator cursors, names, and chat messages are rendered from `instance_presence` records. This example creates one for a fake peer with `InstancePresenceRecordType.create`, writes it inside `store.mergeRemoteChanges`, and updates its cursor and `lastActivityTimestamp` every frame so the cursor stays visible and moves in a circle.

If you have your own presence system, you can write real records the same way. For a full multiplayer setup, see the sync examples.


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
