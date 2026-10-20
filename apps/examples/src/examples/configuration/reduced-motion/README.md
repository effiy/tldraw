---
title: Reduced motion preferences
component: ./ReducedMotionExample.tsx
priority: 1
keywords:
  - accessibility
  - a11y
  - reduced motion
  - animation
  - prefers-reduced-motion
  - useprefersreducedmotion
  - animationspeed
  - user preferences
  - custom shape
  - css animation
  - vestibular
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

Respect the user's reduced motion preference in a custom shape with `usePrefersReducedMotion`.

---

`usePrefersReducedMotion()` returns `true` when the user has turned on tldraw's "reduce motion" preference (`animationSpeed: 0` in user preferences) or, if no tldraw preference is set, when the operating system reports `prefers-reduced-motion: reduce`. Use it inside a shape's React component to swap animations for static alternatives.

The pulse shapes here animate normally and fall back to a still gray circle when reduced motion is preferred. The "Toggle" button in the top panel flips the tldraw preference with `editor.user.updateUserPreferences({ animationSpeed })`, so you can watch every shape switch at once. The same setting is available to users under Preferences > Accessibility > Reduce motion in the main menu.

Reduced motion matters for users with vestibular disorders and motion sensitivity, and honoring it is cheap once the check is in one place.


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
