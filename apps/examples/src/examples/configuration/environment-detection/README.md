---
title: Environment detection
component: ./EnvironmentDetectionExample.tsx
priority: 2
keywords:
  - tlenv
  - tlenvreactive
  - platform detection
  - browser
  - iscoarsepointer
  - touch
  - mobile
  - adaptive ui
  - usevalue
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

Detect the platform, browser, and pointer type with `tlenv` and `tlenvReactive`.

---

tldraw exports two objects that describe the environment it's running in:

- `tlenv` is a plain object of flags that don't change during a session: `isDarwin`, `isIos`, `isAndroid`, `isSafari`, `isFirefox`, `isChromeForIos`, and so on. Read it directly, for example to show Cmd instead of Ctrl in shortcut hints on macOS.
- `tlenvReactive` is an atom holding values that can change while the app is open, most importantly `isCoarsePointer`. Read it with `useValue` (or inside a `track`ed component) so your UI updates when it changes.

The panel at the top shows what each one reports for your device, and a button that grows to a 48px touch target when the pointer is coarse. On a touchscreen laptop, tap the screen and then move the trackpad to watch the pointer type and button size switch.


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
