export type OpportunityStatus = "open" | "closing" | "ongoing";

export type Institution = {
  slug: string;
  name: string;
  type: string;
  location: string;
  focus: string[];
  description: string;
  image: string;
};

export type Opportunity = {
  slug: string;
  title: string;
  institutionSlug: string;
  institution: string;
  category: string;
  location: string;
  country: string;
  status: OpportunityStatus;
  statusLabel: string;
  deadline: string;
  image: string;
  summary: string;
  description: string;
  duration: string;
  support: string;
  disciplines: string[];
  tags: string[];
  requirements: string[];
  timeline: string[];
  matchArtistSlugs: string[];
};

export type Artist = {
  slug: string;
  name: string;
  location: string;
  discipline: string;
  avatar: string;
  cover: string;
  availability: string;
  bio: string;
  statement: string;
  tags: string[];
  languages: string[];
  featuredWorks: {
    title: string;
    year: string;
    image: string;
  }[];
  matchOpportunitySlugs: string[];
};

export type ProjectMatch = {
  artistSlug: string;
  opportunitySlug: string;
  score: number;
  reasons: string[];
};

export type CommunityPost = {
  title: string;
  author: string;
  time: string;
  comments: number;
  avatar: string;
};

export const heroImage =
  "https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&w=1800&q=80";

export const platformStats = [
  { value: "12,860+", label: "艺术家" },
  { value: "2,340+", label: "机构入驻" },
  { value: "1,760+", label: "项目机会" },
];

export const institutions: Institution[] = [
  {
    slug: "xc-gallery",
    name: "XC Gallery",
    type: "当代画廊",
    location: "上海",
    focus: ["青年艺术", "展览", "收藏"],
    description: "关注新锐创作者的研究型画廊，持续推出跨媒介展览与收藏项目。",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "shanhe-museum",
    name: "山间美术馆",
    type: "公共美术馆",
    location: "杭州",
    focus: ["驻留", "建筑", "公共项目"],
    description: "位于山地公园中的艺术机构，支持现场创作、建筑介入与社区工作坊。",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "art-nova",
    name: "ART NOVA",
    type: "艺术基金会",
    location: "全国",
    focus: ["征集", "评选", "扶持计划"],
    description: "面向青年艺术家的非营利扶持网络，提供年度奖金、导师制与展览资源。",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "ocat",
    name: "OCAT",
    type: "艺术中心",
    location: "深圳",
    focus: ["策展", "研究", "影像"],
    description: "以策展研究和影像实践为核心的艺术中心，开放青年策展人项目申请。",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80",
  },
];

export const opportunities: Opportunity[] = [
  {
    slug: "city-pulse-young-artists",
    title: "城市脉搏：青年艺术联展",
    institutionSlug: "xc-gallery",
    institution: "XC Gallery",
    category: "展览",
    location: "上海",
    country: "中国",
    status: "closing",
    statusLabel: "今日截止",
    deadline: "2026.07.08 截止",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=80",
    summary: "面向 35 岁以下创作者，征集关于城市经验、流动生活与视觉档案的作品。",
    description:
      "项目希望呈现青年艺术家对城市变迁的现场观察，接受绘画、摄影、影像、装置和文本实践。入选者将获得布展支持、媒体发布和藏家预览机会。",
    duration: "2026.09 - 2026.11",
    support: "展览制作费、运输保险、媒体发布",
    disciplines: ["绘画", "摄影", "影像", "装置"],
    tags: ["青年艺术", "城市研究", "首次个展友好"],
    requirements: ["35 岁以下", "提交 5-8 件近期作品", "附 300 字创作陈述"],
    timeline: ["7 月 8 日报名截止", "7 月下旬公布初选", "9 月上旬布展"],
    matchArtistSlugs: ["lin-yiran", "sara-wong", "zhou-zimo"],
  },
  {
    slug: "mountain-studio-residency",
    title: "山间工作室驻留计划",
    institutionSlug: "shanhe-museum",
    institution: "山间美术馆",
    category: "驻留",
    location: "杭州",
    country: "中国",
    status: "open",
    statusLabel: "进行中",
    deadline: "2026.08.15 截止",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    summary: "提供 6 周山地驻留空间，鼓励与自然材料、声音和公共空间相关的创作。",
    description:
      "驻留计划为艺术家提供独立工作室、住宿和本地调研协助。项目结束后将举办开放工作室和一场小型公共分享。",
    duration: "6 周",
    support: "住宿、工作室、基础材料补贴、公共项目协调",
    disciplines: ["装置", "声音", "公共艺术", "跨媒介"],
    tags: ["自然材料", "现场创作", "公共项目"],
    requirements: ["提交项目提案", "可连续驻留 6 周", "愿意参与一次公共分享"],
    timeline: ["8 月 15 日报名截止", "9 月公布入选", "10 月开始驻留"],
    matchArtistSlugs: ["chen-mo", "ake-lau", "lin-yiran"],
  },
  {
    slug: "art-nova-star-review",
    title: "2026 艺术新星评选",
    institutionSlug: "art-nova",
    institution: "ART NOVA",
    category: "征集",
    location: "全国",
    country: "中国",
    status: "open",
    statusLabel: "进行中",
    deadline: "2026.07.28 截止",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
    summary: "年度青年艺术扶持计划，评选 12 位创作者进入导师制与巡展项目。",
    description:
      "评选关注持续创作能力、清晰的方法论和跨地域展示潜力。入选艺术家将参与线上评审、导师会谈和年度群展。",
    duration: "2026.08 - 2027.01",
    support: "创作奖金、导师反馈、年度巡展",
    disciplines: ["绘画", "影像", "数字艺术", "摄影"],
    tags: ["扶持计划", "奖金", "导师制"],
    requirements: ["近三年作品集", "个人简历", "未来一年创作计划"],
    timeline: ["7 月 28 日报名截止", "8 月线上评审", "10 月导师会谈"],
    matchArtistSlugs: ["sara-wong", "zhou-zimo", "mia-shen"],
  },
  {
    slug: "young-curator-program",
    title: "青年策展人计划",
    institutionSlug: "ocat",
    institution: "OCAT",
    category: "扶持计划",
    location: "深圳",
    country: "中国",
    status: "open",
    statusLabel: "进行中",
    deadline: "2026.09.20 截止",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=80",
    summary: "面向独立策展人与研究者，支持一项以影像、档案或公共议题为核心的展览提案。",
    description:
      "项目包含策展研究费、空间支持和编辑协作。入选提案将在机构项目空间落地，并形成线上文献档案。",
    duration: "4 个月",
    support: "研究费、展陈空间、编辑与传播支持",
    disciplines: ["策展", "影像", "写作", "档案研究"],
    tags: ["策展", "研究型展览", "影像"],
    requirements: ["策展提案", "预算草案", "过往项目案例"],
    timeline: ["9 月 20 日报名截止", "10 月面谈", "12 月项目启动"],
    matchArtistSlugs: ["ake-lau", "sara-wong", "chen-mo"],
  },
  {
    slug: "setouchi-residency",
    title: "日本岛根国际艺术驻留计划",
    institutionSlug: "art-nova",
    institution: "岛根县艺术文化中心",
    category: "驻留",
    location: "日本",
    country: "日本",
    status: "open",
    statusLabel: "进行中",
    deadline: "2026.08.02 截止",
    image:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80",
    summary: "支持亚洲艺术家进行海岛社区调研、公共工作坊和现场创作。",
    description:
      "驻留关注地方记忆、海洋生态和跨文化协作。项目方提供往返交通补助、住宿和翻译协调。",
    duration: "8 周",
    support: "国际交通补贴、住宿、翻译协助",
    disciplines: ["公共艺术", "摄影", "声音", "影像"],
    tags: ["国际驻留", "社区", "生态"],
    requirements: ["英文或日文项目摘要", "可参与社区工作坊", "护照有效期不少于 6 个月"],
    timeline: ["8 月 2 日报名截止", "8 月下旬面试", "11 月开始驻留"],
    matchArtistSlugs: ["lin-yiran", "mia-shen", "chen-mo"],
  },
  {
    slug: "brand-collaboration-installation",
    title: "品牌合作：快闪艺术装置项目",
    institutionSlug: "xc-gallery",
    institution: "Goldwave 品牌",
    category: "合作",
    location: "全国",
    country: "中国",
    status: "open",
    statusLabel: "进行中",
    deadline: "2026.07.30 截止",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    summary: "寻找可将材料实验转化为品牌空间体验的艺术家，落地 3 城快闪装置。",
    description:
      "合作将围绕可持续材料、镜面结构和互动灯光展开。艺术家保留署名权，项目方负责制作落地和传播。",
    duration: "2026.08 - 2026.10",
    support: "项目预算、制作团队、品牌传播",
    disciplines: ["装置", "空间设计", "数字艺术"],
    tags: ["商业合作", "快闪", "空间体验"],
    requirements: ["可执行的空间提案", "有大型制作经验优先", "接受三地巡展调整"],
    timeline: ["7 月 30 日报名截止", "8 月方案深化", "9 月首站落地"],
    matchArtistSlugs: ["zhou-zimo", "chen-mo", "mia-shen"],
  },
];

export const artists: Artist[] = [
  {
    slug: "lin-yiran",
    name: "林一然",
    location: "上海",
    discipline: "多媒体艺术家",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    cover:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80",
    availability: "开放申请",
    bio: "以影像、摄影和文本处理城市空间中的记忆残片，作品常在公共现场和展厅之间转换。",
    statement: "探索科技与人类感知的边界，关注移动生活如何重塑身体、亲密关系与地方经验。",
    tags: ["城市研究", "影像", "公共空间"],
    languages: ["中文", "英文"],
    featuredWorks: [
      {
        title: "慢速环线",
        year: "2025",
        image:
          "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "未完成的站台",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
      },
    ],
    matchOpportunitySlugs: [
      "city-pulse-young-artists",
      "mountain-studio-residency",
      "setouchi-residency",
    ],
  },
  {
    slug: "chen-mo",
    name: "陈默",
    location: "北京",
    discipline: "绘画艺术家",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    cover:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1400&q=80",
    availability: "寻找驻留",
    bio: "长期以绘画和材料实验记录个体记忆，近年将纸本、木结构和声音装置结合。",
    statement: "关注个体记忆与情感表达，让日常经验在材料表面留下可被反复阅读的痕迹。",
    tags: ["绘画", "材料实验", "记忆"],
    languages: ["中文"],
    featuredWorks: [
      {
        title: "夜航日志",
        year: "2025",
        image:
          "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "折叠的房间",
        year: "2023",
        image:
          "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=900&q=80",
      },
    ],
    matchOpportunitySlugs: [
      "mountain-studio-residency",
      "setouchi-residency",
      "brand-collaboration-installation",
    ],
  },
  {
    slug: "sara-wong",
    name: "Sara Wong",
    location: "香港",
    discipline: "装置艺术家",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=80",
    cover:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=80",
    availability: "开放合作",
    bio: "以自然材料和空间叙事为主要媒介，研究岛屿、湿度和微观生态的可视化方式。",
    statement: "自然材料与空间叙事研究者，试图让观众在触觉、声音和光线之间重新感知环境。",
    tags: ["装置", "自然材料", "生态"],
    languages: ["中文", "英文", "粤语"],
    featuredWorks: [
      {
        title: "潮汐样本",
        year: "2025",
        image:
          "https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "白噪音花园",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=900&q=80",
      },
    ],
    matchOpportunitySlugs: [
      "city-pulse-young-artists",
      "art-nova-star-review",
      "young-curator-program",
    ],
  },
  {
    slug: "zhou-zimo",
    name: "周子墨",
    location: "杭州",
    discipline: "影像艺术家",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=80",
    cover:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1400&q=80",
    availability: "档期灵活",
    bio: "从身体、时间和观看制度出发进行影像创作，也参与品牌空间中的动态图像项目。",
    statement: "影像与身体、时间的关系是持续线索，作品在冷静镜头和现场装置之间切换。",
    tags: ["影像", "身体", "时间"],
    languages: ["中文", "英文"],
    featuredWorks: [
      {
        title: "侧面时间",
        year: "2025",
        image:
          "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "无声回放",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80",
      },
    ],
    matchOpportunitySlugs: [
      "city-pulse-young-artists",
      "art-nova-star-review",
      "brand-collaboration-installation",
    ],
  },
  {
    slug: "ake-lau",
    name: "Ake Lau",
    location: "广州",
    discipline: "策展人与写作者",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
    cover:
      "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=1400&q=80",
    availability: "接受委托",
    bio: "关注地方档案、劳动叙事和影像研究，常与艺术家共同完成研究型展览。",
    statement: "把展览视为一种临时编辑系统，让档案、艺术家和公众在同一空间中重新发生关系。",
    tags: ["策展", "档案", "写作"],
    languages: ["中文", "英文"],
    featuredWorks: [
      {
        title: "临时目录",
        year: "2025",
        image:
          "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "看不见的劳动",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=900&q=80",
      },
    ],
    matchOpportunitySlugs: ["young-curator-program", "mountain-studio-residency"],
  },
  {
    slug: "mia-shen",
    name: "沈米娅",
    location: "成都",
    discipline: "数字艺术家",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=500&q=80",
    cover:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=80",
    availability: "开放合作",
    bio: "使用实时影像、生成图形和交互装置构建沉浸式场景，适合品牌和公共空间项目。",
    statement: "把算法当作舞台灯光，让观众的移动成为作品不断更新的变量。",
    tags: ["数字艺术", "互动", "空间体验"],
    languages: ["中文", "英文"],
    featuredWorks: [
      {
        title: "可变光谱",
        year: "2025",
        image:
          "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "夜间接口",
        year: "2023",
        image:
          "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
      },
    ],
    matchOpportunitySlugs: [
      "art-nova-star-review",
      "setouchi-residency",
      "brand-collaboration-installation",
    ],
  },
];

export const projectMatches: ProjectMatch[] = [
  {
    artistSlug: "lin-yiran",
    opportunitySlug: "city-pulse-young-artists",
    score: 96,
    reasons: ["城市研究主题高度一致", "影像与文本材料适合联展结构"],
  },
  {
    artistSlug: "chen-mo",
    opportunitySlug: "mountain-studio-residency",
    score: 92,
    reasons: ["材料实验适合现场驻留", "公共分享经验充足"],
  },
  {
    artistSlug: "sara-wong",
    opportunitySlug: "art-nova-star-review",
    score: 89,
    reasons: ["自然材料实践有辨识度", "具备国际展示潜力"],
  },
  {
    artistSlug: "zhou-zimo",
    opportunitySlug: "brand-collaboration-installation",
    score: 91,
    reasons: ["影像空间经验匹配品牌快闪", "档期灵活"],
  },
];

export const communityPosts: CommunityPost[] = [
  {
    title: "如何准备美术馆展览的投递资料？",
    author: "Luna",
    time: "2 小时前",
    comments: 23,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "驻留项目申请经验分享",
    author: "阿树",
    time: "5 小时前",
    comments: 17,
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "独立策展人如何寻找艺术家合作？",
    author: "策展小白",
    time: "8 小时前",
    comments: 31,
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "这个展览的策展方向大家怎么看？",
    author: "momo",
    time: "1 天前",
    comments: 12,
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
  },
];

export function getOpportunityBySlug(slug: string) {
  return opportunities.find((opportunity) => opportunity.slug === slug);
}

export function getArtistBySlug(slug: string) {
  return artists.find((artist) => artist.slug === slug);
}

export function getInstitutionBySlug(slug: string) {
  return institutions.find((institution) => institution.slug === slug);
}
