# ART LINK Product Prototype

一个连接艺术家与艺术机构的双向沟通平台前端原型。项目使用 Next.js App Router、TypeScript 和 Tailwind CSS，适合直接部署到 Vercel。

## 功能范围

- 首页仪表盘：机会推荐、精选艺术家、项目匹配和社区讨论。
- 艺术家入口：艺术家候补表单和档案价值说明。
- 机构入口：机构候补表单和项目发布流程说明。
- 机会列表：支持搜索、分类、地区和状态筛选。
- 艺术家列表：支持搜索、媒介、城市和标签筛选。
- 详情页：项目详情、艺术家详情、申请按钮、联系按钮和收藏反馈。

## 本地运行

```bash
pnpm install
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看原型。

## 验证

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## 项目结构

```text
src/app/                  路由页面
src/components/           复用 UI 组件
src/data/mockData.ts      本地 mock 数据
src/lib/utils.ts          轻量工具函数
```

## 部署到 Vercel

1. 推送到 GitHub。
2. 在 Vercel 新建项目并选择该仓库。
3. Framework Preset 选择 Next.js。
4. Install Command 使用 `pnpm install`。
5. Build Command 使用 `pnpm build`。
6. Output Directory 保持默认。

当前原型不连接真实后端，所有数据来自 `src/data/mockData.ts`。
