export type AboutContentItem = {
  eyebrow: string;
  title: string;
  description: string;
};

export type AboutPageContent = {
  project: {
    eyebrow: string;
    title: string;
    summary: string;
    principles: AboutContentItem[];
  };
  subscription: {
    eyebrow: string;
    title: string;
    summary: string;
    note: string;
    services: AboutContentItem[];
    action: {
      label: string;
      href: string;
    };
  };
  roadmap: {
    eyebrow: string;
    title: string;
    summary: string;
    features: AboutContentItem[];
  };
};

export const defaultAboutContent: AboutPageContent = {
  project: {
    eyebrow: "About Residency Lab",
    title: "让艺术驻留信息更清楚，也更适合真实的申请决策。",
    summary:
      "Residency Lab 面向正在寻找艺术驻留机会的创作者，整理分散的项目条件，并把费用、住宿、语言、资格、截止日期和材料要求放进同一套申请工作流。",
    principles: [
      {
        eyebrow: "01 / 可信信息",
        title: "先核对条件，再谈推荐",
        description: "明确标注项目来源、费用、住宿与潜在风险，减少因为信息缺失产生的错误判断。",
      },
      {
        eyebrow: "02 / 个人匹配",
        title: "从创作与现实条件出发",
        description: "同时考虑媒介、主题、创作阶段、预算、语言和时间，而不是只依赖项目热度。",
      },
      {
        eyebrow: "03 / 申请过程",
        title: "把材料与截止日放在一起",
        description: "从发现机会到准备材料、提交申请和结果复盘，形成可以持续推进的申请记录。",
      },
    ],
  },
  subscription: {
    eyebrow: "Residency Lab Subscription",
    title: "一项围绕驻留申请持续更新的订阅服务。",
    summary:
      "订阅服务将把机会更新、个人提醒和申请准备整合在一起，帮助创作者减少重复搜索，把时间留给真正值得投入的项目。",
    note: "订阅方案仍在设计与内测阶段，目前不会收取费用。正式开放前会清楚说明服务范围、价格和取消方式。",
    services: [
      {
        eyebrow: "Opportunity updates",
        title: "精选机会更新",
        description: "按媒介、地区、预算和创作阶段接收经过整理的驻留机会，而不是无差别的信息推送。",
      },
      {
        eyebrow: "Application reminders",
        title: "申请节点提醒",
        description: "跟进截止日期、材料缺口和重要确认事项，让多个申请可以在同一条时间线中推进。",
      },
      {
        eyebrow: "Decision support",
        title: "成本与风险提示",
        description: "在申请前看清项目费、住宿、交通、签证、保险和制作成本，判断机会是否真正可行。",
      },
    ],
    action: {
      label: "订阅内测更新",
      href: "/artist-entry",
    },
  },
  roadmap: {
    eyebrow: "In development",
    title: "正在开发中的功能",
    summary: "以下功能仍处于开发或验证阶段，会先在小范围内测中确认是否真正有用。",
    features: [
      {
        eyebrow: "开发中",
        title: "跨时区申请日历",
        description: "自动换算项目所在地的截止时间，并把材料节点、推荐信和提交提醒整理成个人申请日历。",
      },
      {
        eyebrow: "原型验证中",
        title: "驻留真实成本比较器",
        description: "统一比较项目费、住宿、交通、签证和生活成本，帮助创作者在投入申请前建立更完整的预算。",
      },
    ],
  },
};

function isContentItem(value: unknown): value is AboutContentItem {
  if (!value || typeof value !== "object") {
    return false;
  }

  const item = value as Record<string, unknown>;
  return typeof item.eyebrow === "string" && typeof item.title === "string" && typeof item.description === "string";
}

export function isAboutPageContent(value: unknown): value is AboutPageContent {
  if (!value || typeof value !== "object") {
    return false;
  }

  const content = value as Record<string, unknown>;
  const project = content.project as Record<string, unknown> | undefined;
  const subscription = content.subscription as Record<string, unknown> | undefined;
  const roadmap = content.roadmap as Record<string, unknown> | undefined;
  const action = subscription?.action as Record<string, unknown> | undefined;

  return Boolean(
    project &&
      typeof project.eyebrow === "string" &&
      typeof project.title === "string" &&
      typeof project.summary === "string" &&
      Array.isArray(project.principles) &&
      project.principles.every(isContentItem) &&
      subscription &&
      typeof subscription.eyebrow === "string" &&
      typeof subscription.title === "string" &&
      typeof subscription.summary === "string" &&
      typeof subscription.note === "string" &&
      Array.isArray(subscription.services) &&
      subscription.services.every(isContentItem) &&
      action &&
      typeof action.label === "string" &&
      typeof action.href === "string" &&
      roadmap &&
      typeof roadmap.eyebrow === "string" &&
      typeof roadmap.title === "string" &&
      typeof roadmap.summary === "string" &&
      Array.isArray(roadmap.features) &&
      roadmap.features.every(isContentItem),
  );
}
