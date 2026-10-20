---
title: Pasting Mermaid code as shapes
component: ./MermaidPasting.tsx
priority: 10
keywords:
  - mermaid
  - diagram
  - paste
  - external content
tags:
  - tldraw
  - readme
  - example
  - use-cases
category: examples
created: "2026-10-20"
updated: "2026-10-20"
source: external
type: index
status: stable
lifecycle: active
---

## 💡 概述

Paste Mermaid source onto the canvas and get native tldraw shapes.

---

A custom `text` external content handler (`editor.registerExternalContentHandler`) checks whether pasted text looks like a Mermaid diagram. If it does, `createMermaidDiagram` from `@tldraw/mermaid` turns it into geo shapes, arrows, and text; otherwise the default text handler runs.

Flowcharts, state diagrams, sequence diagrams, and mind maps become native shapes. Other diagram types are rendered by Mermaid to SVG and pasted as an image, with a toast to say so.

Try copying this and pasting it onto the canvas:

```
graph TD
    A[Start] --> B{Is it correct?}
    B -- Yes --> C[Display diagram]
    B -- No --> D[Edit code]
    D --> B
    C --> E[End]
```


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
