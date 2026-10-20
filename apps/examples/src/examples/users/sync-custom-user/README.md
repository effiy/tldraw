---
title: Multiplayer sync with custom user data
component: ./SyncCustomUser.tsx
priority: 3
keywords:
  - multiplayer
  - sync
  - useSyncDemo
  - user preferences
  - useTldrawCurrentUser
  - TLUserStore
  - collaboration
  - presence
multiplayer: True
tags:
  - tldraw
  - readme
  - example
  - users
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Bring your own user identity and preferences into a multiplayer room with `useSyncDemo`.

---

Multiplayer needs to know who the local user is, both to show them to collaborators and to let the editor read and update their name, color, and preferences. This example keeps the user in React state, bridges it into a `TLUserStore` (a reactive `currentUser` signal) for `useSyncDemo`, and passes a `TLCurrentUser` from `useTldrawCurrentUser` to the `Tldraw` component so the built-in preference controls can write back.

Open the example in two windows: each gets a random user id but the same name and color, so you'll see two 'Jimmothy' collaborators. The same `users` option works with `useSync` when you run your own server.


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
