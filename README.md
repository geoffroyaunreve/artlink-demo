# ART LINK Residency Platform Prototype

面向中国青年艺术家的驻留机会匹配与申请管理 demo。项目使用 Next.js App Router、TypeScript 和 Tailwind CSS，并保持 Cloudflare Pages 静态导出配置。

## 产品定位

ART LINK 帮助青年艺术家、艺术学生和新兴创作者发现、理解、筛选并申请适合自己的国内外艺术驻留项目；同时帮助驻留机构和青年艺术家项目方发布项目、收集作品集、筛选申请者和管理申请流程。

核心能力：

- 驻留机会筛选与匹配评分
- 成本透明：申请费、项目费、住宿、工作室、补贴、交通、签证和保险
- 材料助手：Portfolio、Artist Statement、CV、Project Proposal 等
- 申请清单和进度追踪
- 驻留机构发布与申请管理后台

## 本地运行

```bash
pnpm install
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 预览。

## 构建检查

```bash
pnpm lint
pnpm typecheck
pnpm build
```

`pnpm build` 会生成 Cloudflare Pages 可部署的 `out/` 目录。

## Cloudflare Pages

- Build command: `pnpm build`
- Build output directory: `out`

当前 demo 不接真实后端，所有项目、申请清单、材料建议和机构后台数据都来自 `src/data/mockData.ts`。
