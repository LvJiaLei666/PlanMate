# PlanMate - AI驱动的计划伴侣

一个现代化的智能计划管理系统，采用 NestJS + React + TypeScript 全栈解决方案。

## 项目结构

```text
PlanMate/
├── apps/
│   └── web/                # 前端应用 使用react + vite + socket.io + zustand
│   └── manage/             # 管理端 使用vue3 + vite + element-plus + pinia 
├── server/              # 后端服务
├── package.json          # 项目配置文件
├── shared/              # 共享类型以及工具
|   ├── types/            # 共享类型
|   ├── utils/            # 共享工具
|        ├── request.ts   # 共享请求
|        ├── config.ts    # 共享配置 (url地址等)
|        ├── index.ts     # 共享导出

## 主要功能

- 客服工作台
- 实时对话系统
- 智能问答系统
- 客户管理
- 数据分析
- 工单管理

