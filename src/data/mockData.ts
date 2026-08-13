export type OpportunityStatus = "open" | "closing" | "reviewing";
export type CostLevel = "低成本" | "中等成本" | "高成本" | "需进一步确认";
export type ApplicationStatus =
  | "想申请"
  | "准备中"
  | "已提交"
  | "等待结果"
  | "入选"
  | "未通过"
  | "已放弃";

export type Institution = {
  slug: string;
  name: string;
  type: string;
  location: string;
  certificationStatus: string;
  focus: string[];
  description: string;
  image: string;
};

export type ResidencyCost = {
  applicationFee: string;
  programFee: string;
  accommodation: string;
  studio: string;
  stipend: string;
  travel: string;
  visa: string;
  insurance: string;
  production: string;
  publicRequirement: string;
};

export type Opportunity = {
  slug: string;
  title: string;
  institutionSlug: string;
  institution: string;
  institutionCertification: string;
  category: string;
  type: string;
  country: string;
  city: string;
  location: string;
  status: OpportunityStatus;
  statusLabel: string;
  deadline: string;
  daysLeft: number;
  duration: string;
  summary: string;
  description: string;
  support: string;
  disciplines: string[];
  tags: string[];
  trustTags: string[];
  riskTags: string[];
  costLevel: CostLevel;
  matchScore: number;
  recommendation: string;
  fitReasons: string[];
  costs: ResidencyCost;
  languages: string[];
  careerStages: string[];
  acceptsInternational: boolean;
  suitableForYoungArtists: boolean;
  acceptsStudents: boolean;
  requirements: string[];
  timeline: string[];
  institutionIntro: string;
  pastCases: string[];
  copyrightNote: string;
  visaNote: string;
  matchArtistSlugs: string[];
  disciplineTags?: string[];
  mediumTags?: string[];
  themeTags?: string[];
  careerStage?: string;
  fundingType?: string;
  region?: string;
  sourceName?: string;
  sourceUrl?: string;
  eligibility?: string[];
  language?: string[];
  accommodation?: string;
  stipend?: string;
  travelSupport?: string;
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
  careerStage: string;
  budgetRange: string;
  portfolioCompletion: number;
  featuredWorks: {
    title: string;
    year: string;
    image: string;
  }[];
  matchOpportunitySlugs: string[];
};

export type ProjectMatch = {
  opportunitySlug: string;
  score: number;
  reasons: string[];
};

export type ApplicationMaterial = {
  name: string;
  progress: number;
  note: string;
};

export type ApplicationItem = {
  opportunitySlug: string;
  status: ApplicationStatus;
  nextAction: string;
  materialProgress: ApplicationMaterial[];
};

export type MaterialGuide = {
  key: string;
  title: string;
  englishTitle: string;
  description: string;
  tips: string[];
};

export type InstitutionApplicant = {
  name: string;
  city: string;
  discipline: string;
  portfolioPreview: string;
  matchTags: string[];
  materialCompletion: number;
  language: string;
  status: ApplicationStatus;
};

export type CommunityPost = {
  title: string;
  author: string;
  time: string;
  comments: number;
};

export const platformStats = [
  { value: "92%", label: "项目标注费用与住宿信息" },
  { value: "86+", label: "个精选驻留项目" },
  { value: "24+", label: "家认证机构" },
  { value: "320+", label: "位青年艺术家" },
];

export const matchDimensions = [
  {
    title: "作品媒介",
    text: "影像、装置、新媒体、绘画、声音、行为、摄影、写作、策展等。",
  },
  {
    title: "创作主题",
    text: "城市、身体、技术、生态、身份、记忆、公共空间、社区实践等。",
  },
  {
    title: "艺术家阶段",
    text: "在校生、刚毕业、青年艺术家、独立创作者、已有驻留经验者等。",
  },
  {
    title: "现实条件",
    text: "费用、住宿、交通、语言、签证、周期、线下要求和工作室条件。",
  },
  {
    title: "申请可行性",
    text: "材料完整度、截止日期、项目竞争度、国际申请资格和首次驻留友好度。",
  },
];

export const costFactors = [
  "申请费",
  "项目费",
  "住宿是否包含",
  "工作室是否提供",
  "交通是否报销",
  "是否提供生活补贴",
  "签证与保险成本",
  "是否需要自费制作作品",
  "是否要求公共分享或最终展示",
];

export const institutions: Institution[] = [
  {
    slug: "shoreline-lab",
    name: "Shoreline Art Lab",
    type: "国际驻留机构",
    location: "日本 直岛",
    certificationStatus: "机构已认证",
    focus: ["生态自然型", "影像", "社区实践"],
    description:
      "面向亚洲青年艺术家的海岛驻留机构，提供住宿、共享工作室和社区调研协助。",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "river-city-residency",
    name: "River City Residency",
    type: "研究型驻留项目方",
    location: "中国 杭州",
    certificationStatus: "信息已审核",
    focus: ["研究型", "城市", "公共空间"],
    description:
      "关注城市更新与公共空间研究的青年艺术家驻留项目，适合首次驻留申请者。",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "nordic-media-house",
    name: "Nordic Media House",
    type: "新媒体驻留中心",
    location: "芬兰 赫尔辛基",
    certificationStatus: "机构已认证",
    focus: ["技术实验型", "新媒体", "声音"],
    description:
      "支持新媒体、声音和实时影像创作的驻留中心，提供基础设备和英文导师反馈。",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "south-studio",
    name: "南方青年艺术家工作室",
    type: "青年艺术家支持计划",
    location: "中国 广州",
    certificationStatus: "信息已审核",
    focus: ["生产型", "绘画", "装置"],
    description:
      "为刚毕业与青年艺术家提供短期工作室、导师开放日和项目计划反馈。",
    image:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&q=80",
  },
];

const coreOpportunities: Opportunity[] = [
  {
    slug: "shoreline-asian-young-artists",
    title: "2026 海岸线亚洲青年艺术家驻留",
    institutionSlug: "shoreline-lab",
    institution: "Shoreline Art Lab",
    institutionCertification: "机构已认证",
    category: "生态自然型",
    type: "生态自然型",
    country: "日本",
    city: "直岛",
    location: "日本 / 直岛",
    status: "closing",
    statusLabel: "12 天后截止",
    deadline: "2026.07.13",
    daysLeft: 12,
    duration: "8 周",
    summary:
      "面向亚洲青年艺术家的海岛研究与创作驻留，关注生态、影像和社区语境。",
    description:
      "项目邀请青年艺术家在海岛社区进行田野调研、影像采集和公共分享。机构提供住宿、共享工作室和本地协调人，鼓励以生态、记忆和地方叙事为线索发展新作品。",
    support: "住宿、共享工作室、本地调研协助、开放工作室",
    disciplines: ["影像", "装置", "摄影", "写作"],
    tags: ["接受中国申请者", "适合首次驻留", "提供住宿"],
    trustTags: ["机构已认证", "信息已审核", "费用透明", "提供住宿", "无申请费"],
    riskTags: ["需自理机票", "需英文材料", "需购买保险"],
    costLevel: "低成本",
    matchScore: 86,
    recommendation:
      "适合新媒体与影像方向；接受青年艺术家；无申请费；提供住宿；需要英文项目陈述；截止还有 12 天。",
    fitReasons: [
      "你的作品集中包含影像与装置作品，本驻留接受新媒体、影像与空间装置方向。",
      "该项目接受青年艺术家和在校学生申请。",
      "项目无申请费，并提供住宿和基础工作室。",
      "需要英文 artist statement，建议提前准备。",
      "截止日期还有 12 天，建议尽快完善作品集与项目计划。",
    ],
    costs: {
      applicationFee: "无申请费",
      programFee: "无项目费",
      accommodation: "提供单人房住宿",
      studio: "提供共享工作室",
      stipend: "每月 600 欧元等值生活补贴",
      travel: "国际交通需自理",
      visa: "需自行准备短期签证材料",
      insurance: "需购买旅行与医疗保险",
      production: "基础材料可报销，上限 300 欧元",
      publicRequirement: "需参与一次公共分享与开放工作室",
    },
    languages: ["英文"],
    careerStages: ["在校生", "刚毕业", "青年艺术家"],
    acceptsInternational: true,
    suitableForYoungArtists: true,
    acceptsStudents: true,
    requirements: [
      "作品集 Portfolio，10-15 页",
      "英文 Artist Statement，500 字以内",
      "Project Proposal，需说明研究问题、方法和当地语境",
      "CV，2 页以内",
      "护照信息页",
    ],
    timeline: ["7 月 13 日申请截止", "7 月下旬线上面试", "9 月中旬开始驻留"],
    institutionIntro:
      "Shoreline Art Lab 长期支持亚洲青年艺术家围绕海洋生态、地方记忆和社区协作开展驻留研究。",
    pastCases: ["2025 年驻留艺术家完成《潮汐档案》影像项目", "2024 年举办海岛社区声音采集工作坊"],
    copyrightNote:
      "艺术家保留作品版权；机构可在项目档案和非商业传播中使用驻留过程图片，需署名。",
    visaNote: "日本短期访问签证通常需要邀请函、行程和资金证明，机构可提供邀请说明。",
    matchArtistSlugs: ["lin-yiran", "sara-wong", "mia-shen"],
  },
  {
    slug: "river-city-research-residency",
    title: "河流城市研究型驻留计划",
    institutionSlug: "river-city-residency",
    institution: "River City Residency",
    institutionCertification: "信息已审核",
    category: "研究型",
    type: "研究型",
    country: "中国",
    city: "杭州",
    location: "中国 / 杭州",
    status: "open",
    statusLabel: "进行中",
    deadline: "2026.08.10",
    daysLeft: 40,
    duration: "6 周",
    summary:
      "面向关注城市、公共空间与记忆议题的青年艺术家，适合首次驻留申请。",
    description:
      "驻留以城市河道、社区空间和地方档案为研究对象，提供中文导师反馈、工作坊协助和期末开放分享。项目强调研究过程，不要求完成大型作品。",
    support: "中文导师反馈、住宿补贴、社区访问协调、开放工作室",
    disciplines: ["摄影", "写作", "策展", "影像"],
    tags: ["中文友好", "首次申请友好", "研究型"],
    trustTags: ["信息已审核", "费用透明", "适合首次驻留", "接受学生申请"],
    riskTags: ["仅提供住宿补贴", "需自备拍摄设备"],
    costLevel: "中等成本",
    matchScore: 91,
    recommendation:
      "适合城市研究、摄影和写作方向；中文沟通友好；接受学生申请；住宿为补贴制；材料准备压力较低。",
    fitReasons: [
      "你的作品主题包含城市与公共空间，和项目研究方向高度重合。",
      "项目接受在校生与刚毕业创作者申请。",
      "无需英文材料，适合第一次整理驻留申请。",
      "住宿为补贴制，需要预估额外自费住宿差额。",
    ],
    costs: {
      applicationFee: "无申请费",
      programFee: "项目费 1,200 元",
      accommodation: "提供 2,000 元住宿补贴",
      studio: "提供共享会议与小型工作空间",
      stipend: "无生活补贴",
      travel: "国内交通需自理",
      visa: "无签证需求",
      insurance: "建议自行购买短期意外保险",
      production: "制作费用需自理，可申请小额材料支持",
      publicRequirement: "需完成一次研究分享",
    },
    languages: ["中文"],
    careerStages: ["在校生", "刚毕业", "青年艺术家"],
    acceptsInternational: false,
    suitableForYoungArtists: true,
    acceptsStudents: true,
    requirements: [
      "作品集 Portfolio，8-12 页",
      "中文 Artist Statement",
      "研究计划 Project Proposal",
      "个人简历 CV",
    ],
    timeline: ["8 月 10 日申请截止", "8 月下旬公布名单", "10 月开始驻留"],
    institutionIntro:
      "River City Residency 是一个围绕城市研究、公共空间和艺术教育展开的短期驻留项目。",
    pastCases: ["2025 年完成城市步行档案项目", "2024 年联合社区空间举办青年艺术家开放日"],
    copyrightNote: "艺术家保留作品版权；项目方需经艺术家确认后使用文档图片。",
    visaNote: "国内项目，无签证要求。",
    matchArtistSlugs: ["lin-yiran", "ake-lau", "zhou-zimo"],
  },
  {
    slug: "nordic-media-lab",
    title: "Nordic Media Lab 新媒体驻留",
    institutionSlug: "nordic-media-house",
    institution: "Nordic Media House",
    institutionCertification: "机构已认证",
    category: "技术实验型",
    type: "技术实验型",
    country: "芬兰",
    city: "赫尔辛基",
    location: "芬兰 / 赫尔辛基",
    status: "open",
    statusLabel: "进行中",
    deadline: "2026.09.01",
    daysLeft: 62,
    duration: "10 周",
    summary:
      "支持实时影像、声音、交互装置与新媒体实验，适合已有技术作品基础的青年艺术家。",
    description:
      "项目提供共享实验室、基础设备和英文导师反馈，鼓励艺术家发展可测试的技术原型。申请者需提交技术需求说明与英文项目计划。",
    support: "实验室、基础设备、英文导师反馈、最终公开演示",
    disciplines: ["新媒体", "声音", "装置", "影像"],
    tags: ["技术实验", "英文材料", "设备支持"],
    trustTags: ["机构已认证", "信息已审核", "提供工作室", "接受中国申请者"],
    riskTags: ["项目费较高", "需英文材料", "适合有驻留经验者"],
    costLevel: "高成本",
    matchScore: 78,
    recommendation:
      "适合新媒体和声音方向；提供设备与工作室；项目费较高；需要英文 proposal 和技术需求说明。",
    fitReasons: [
      "你的作品集中包含互动影像和生成图形，适合技术实验型驻留。",
      "该项目要求英文项目计划，需要提前准备英文版本。",
      "项目费较高，更适合已有清晰原型和外部资助计划的申请者。",
    ],
    costs: {
      applicationFee: "申请费 35 欧元",
      programFee: "项目费 1,800 欧元",
      accommodation: "协助预订，费用自理",
      studio: "提供共享实验室与基础设备",
      stipend: "无生活补贴",
      travel: "交通需自理",
      visa: "可能需要申根签证",
      insurance: "需提供保险证明",
      production: "特殊设备与材料需自理",
      publicRequirement: "需完成一次公开演示",
    },
    languages: ["英文"],
    careerStages: ["青年艺术家", "已有驻留经验者", "独立创作者"],
    acceptsInternational: true,
    suitableForYoungArtists: true,
    acceptsStudents: false,
    requirements: [
      "英文 Portfolio",
      "英文 Project Proposal",
      "技术需求说明",
      "CV",
      "作品链接或视频文档",
    ],
    timeline: ["9 月 1 日申请截止", "9 月中旬技术面谈", "2027 年 1 月开始驻留"],
    institutionIntro:
      "Nordic Media House 聚焦媒体艺术、声音实验和交互技术，长期与高校实验室合作。",
    pastCases: ["2025 年支持实时影像表演项目", "2024 年完成声音装置开放实验室"],
    copyrightNote: "艺术家保留作品版权；公开演示录像可用于机构项目档案传播。",
    visaNote: "中国申请者通常需准备申根签证材料，机构可提供邀请函。",
    matchArtistSlugs: ["mia-shen", "sara-wong", "zhou-zimo"],
  },
  {
    slug: "south-studio-first-residency",
    title: "南方青年艺术家首次驻留计划",
    institutionSlug: "south-studio",
    institution: "南方青年艺术家工作室",
    institutionCertification: "信息已审核",
    category: "生产型",
    type: "生产型",
    country: "中国",
    city: "广州",
    location: "中国 / 广州",
    status: "open",
    statusLabel: "进行中",
    deadline: "2026.07.30",
    daysLeft: 29,
    duration: "4 周",
    summary:
      "为首次申请驻留的青年艺术家提供短期工作室、导师反馈和作品集梳理。",
    description:
      "项目强调申请训练和作品计划推进，适合刚毕业或尚未有驻留经验的创作者。驻留期间包含两次导师会谈和一次小型开放工作室。",
    support: "独立工作位、导师反馈、作品集梳理、开放工作室",
    disciplines: ["绘画", "装置", "摄影", "写作"],
    tags: ["首次申请友好", "中文材料", "作品集梳理"],
    trustTags: ["信息已审核", "费用透明", "适合首次驻留", "接受学生申请"],
    riskTags: ["住宿未说明", "无生活补贴"],
    costLevel: "中等成本",
    matchScore: 88,
    recommendation:
      "适合首次驻留申请；中文材料即可；提供导师反馈与工作位；住宿需自行确认。",
    fitReasons: [
      "该项目明确面向首次驻留申请者。",
      "申请材料以中文为主，有助于先完成基础作品集与项目计划。",
      "住宿未明确提供，建议提交前联系机构确认。",
    ],
    costs: {
      applicationFee: "无申请费",
      programFee: "项目费 2,800 元",
      accommodation: "住宿未说明，需进一步确认",
      studio: "提供独立工作位",
      stipend: "无生活补贴",
      travel: "交通需自理",
      visa: "无签证需求",
      insurance: "建议自行购买短期保险",
      production: "材料费需自理",
      publicRequirement: "需参与开放工作室",
    },
    languages: ["中文"],
    careerStages: ["在校生", "刚毕业", "青年艺术家"],
    acceptsInternational: false,
    suitableForYoungArtists: true,
    acceptsStudents: true,
    requirements: ["作品集 Portfolio", "中文 Artist Statement", "CV", "驻留期间创作计划"],
    timeline: ["7 月 30 日申请截止", "8 月上旬公布名单", "9 月开始驻留"],
    institutionIntro:
      "南方青年艺术家工作室为青年创作者提供低门槛的短期驻留、导师反馈和作品集训练。",
    pastCases: ["2025 年完成 12 位青年艺术家开放工作室", "2024 年开展毕业后作品集诊断计划"],
    copyrightNote: "艺术家保留作品版权；开放工作室图片需署名使用。",
    visaNote: "国内项目，无签证要求。",
    matchArtistSlugs: ["chen-mo", "zhou-zimo", "lin-yiran"],
  },
  {
    slug: "mountain-sound-field-residency",
    title: "山城声音与田野驻留计划",
    institutionSlug: "river-city-residency",
    institution: "River City Residency",
    institutionCertification: "信息已审核",
    category: "社区参与型",
    type: "社区参与型",
    country: "中国",
    city: "重庆",
    location: "中国 / 重庆",
    status: "open",
    statusLabel: "进行中",
    deadline: "2026.08.24",
    daysLeft: 54,
    duration: "5 周",
    summary:
      "围绕山城街巷、声音采集与社区访谈展开的研究型驻留，中文材料即可申请。",
    description:
      "项目邀请青年艺术家在重庆老街区进行声音采样、访谈和步行研究，鼓励以声音、文本、影像或小型装置回应城市坡地与社区记忆。项目提供本地研究协助和公开分享场地。",
    support: "本地调研协助、共享工作空间、公开分享场地、中文导师反馈",
    disciplines: ["声音", "影像", "写作", "社区实践"],
    tags: ["中文友好", "社区参与", "低成本"],
    trustTags: ["信息已审核", "费用透明", "适合首次驻留", "接受学生申请"],
    riskTags: ["住宿需自理", "需自备录音设备"],
    costLevel: "低成本",
    matchScore: 84,
    recommendation:
      "适合声音、影像和社区研究方向；中文申请材料即可；项目费低；住宿需自理，建议提前估算本地住宿成本。",
    fitReasons: [
      "你的作品主题如果包含城市、声音或公共空间，该项目的田野方法会比较匹配。",
      "项目接受学生和青年艺术家申请，适合首次驻留尝试。",
      "中文材料即可提交，材料准备压力相对较低。",
      "住宿需要自理，建议提前确认预算与交通距离。",
    ],
    costs: {
      applicationFee: "无申请费",
      programFee: "项目费 800 元",
      accommodation: "住宿需自理，机构提供周边住宿建议",
      studio: "提供共享工作空间",
      stipend: "无生活补贴",
      travel: "国内交通需自理",
      visa: "无签证需求",
      insurance: "建议自行购买短期意外保险",
      production: "基础展示材料可申请小额支持",
      publicRequirement: "需完成一次声音散步或社区分享",
    },
    languages: ["中文"],
    careerStages: ["在校生", "刚毕业", "青年艺术家"],
    acceptsInternational: false,
    suitableForYoungArtists: true,
    acceptsStudents: true,
    requirements: [
      "作品集 Portfolio，8-12 页",
      "中文 Artist Statement",
      "田野计划 Project Proposal",
      "CV",
      "过往声音、影像或文本作品链接",
    ],
    timeline: ["8 月 24 日申请截止", "9 月上旬线上沟通", "10 月中旬开始驻留"],
    institutionIntro:
      "River City Residency 关注城市空间、地方档案和青年艺术家的研究型创作训练。",
    pastCases: ["2025 年完成社区声音地图项目", "2024 年组织城市步行研究工作坊"],
    copyrightNote: "艺术家保留作品版权；涉及社区访谈内容需获得受访者授权后公开展示。",
    visaNote: "国内项目，无签证要求。",
    matchArtistSlugs: ["ake-lau", "lin-yiran", "zhou-zimo"],
  },
  {
    slug: "north-coast-curatorial-writing-residency",
    title: "北海岸策展写作驻留",
    institutionSlug: "shoreline-lab",
    institution: "Shoreline Art Lab",
    institutionCertification: "机构已认证",
    category: "研究型",
    type: "研究型",
    country: "韩国",
    city: "釜山",
    location: "韩国 / 釜山",
    status: "reviewing",
    statusLabel: "即将评审",
    deadline: "2026.09.18",
    daysLeft: 79,
    duration: "6 周",
    summary:
      "面向写作、策展与影像研究方向的青年创作者，聚焦海岸城市、影像档案与公共项目。",
    description:
      "驻留支持艺术家、策展人与写作者围绕海岸城市、影像档案和公共空间展开研究。项目提供住宿、研究导师反馈和小型放映/文本分享机会，适合希望强化 proposal 与研究文本的申请者。",
    support: "住宿、研究导师反馈、档案访问协助、小型放映或文本分享",
    disciplines: ["写作", "策展", "影像", "摄影"],
    tags: ["提供住宿", "研究型", "接受国际申请者"],
    trustTags: ["机构已认证", "信息已审核", "提供住宿", "接受中国申请者"],
    riskTags: ["需英文材料", "需自理机票", "生活补贴未说明"],
    costLevel: "中等成本",
    matchScore: 82,
    recommendation:
      "适合策展、写作、影像研究方向；提供住宿；接受中国申请者；需要英文 statement 与研究计划，生活补贴信息需进一步确认。",
    fitReasons: [
      "你的材料如果包含写作、策展或影像研究，该项目能支持研究文本深化。",
      "项目接受国际申请者，并明确提供住宿。",
      "需要英文 artist statement 和 proposal，建议提前准备英文版本。",
      "生活补贴未明确说明，提交前建议联系机构确认日常预算。",
    ],
    costs: {
      applicationFee: "无申请费",
      programFee: "项目费 900 美元",
      accommodation: "提供单人住宿",
      studio: "提供研究桌位与档案访问协助",
      stipend: "生活补贴未说明，需进一步确认",
      travel: "国际交通需自理",
      visa: "可能需要短期访问签证",
      insurance: "需提供旅行与医疗保险证明",
      production: "放映与文本分享基础费用由机构支持",
      publicRequirement: "需完成一次文本分享或小型放映",
    },
    languages: ["英文", "韩文可选"],
    careerStages: ["刚毕业", "青年艺术家", "独立创作者"],
    acceptsInternational: true,
    suitableForYoungArtists: true,
    acceptsStudents: false,
    requirements: [
      "英文 Portfolio 或 Writing Sample",
      "英文 Artist / Curatorial Statement",
      "Research Proposal",
      "CV",
      "相关文本或影像链接",
    ],
    timeline: ["9 月 18 日申请截止", "10 月上旬线上面试", "2027 年 2 月开始驻留"],
    institutionIntro:
      "Shoreline Art Lab 支持亚洲青年创作者围绕海岸生态、地方记忆和影像档案展开跨地域研究。",
    pastCases: ["2025 年完成海岸影像档案研究展映", "2024 年支持青年策展人文本出版计划"],
    copyrightNote: "艺术家保留作品版权；研究文本节选需经作者确认后用于项目档案。",
    visaNote: "韩国短期访问可能需要签证或电子旅行许可，机构可提供邀请说明。",
    matchArtistSlugs: ["sara-wong", "ake-lau", "mia-shen"],
  },
];

type DemoResidencySeed = {
  slug: string;
  title: string;
  institution: string;
  country: string;
  city: string;
  region: string;
  type: string;
  deadline: string;
  daysLeft: number;
  duration: string;
  costLevel: CostLevel;
  matchScore: number;
  fundingType: string;
  summary: string;
  disciplines: string[];
  mediumTags: string[];
  themeTags: string[];
  careerStages: string[];
  languages: string[];
  acceptsInternational: boolean;
  acceptsStudents: boolean;
  suitableForYoungArtists: boolean;
  applicationFee: string;
  programFee: string;
  accommodation: string;
  studio: string;
  stipend: string;
  travelSupport: string;
  status?: OpportunityStatus;
};

const demoResidencySeeds: DemoResidencySeed[] = [
  {
    slug: "berlin-urban-media-fellowship",
    title: "Berlin Urban Media Fellowship",
    institution: "North Window Residency",
    country: "德国",
    city: "柏林",
    region: "Europe",
    type: "技术实验型",
    deadline: "2026.08.18",
    daysLeft: 42,
    duration: "8 周",
    costLevel: "中等成本",
    matchScore: 87,
    fundingType: "部分资助",
    summary: "面向影像、新媒体和城市研究方向的青年艺术家，支持围绕城市基础设施与公共空间的作品原型。",
    disciplines: ["新媒体", "影像", "装置"],
    mediumTags: ["新媒体", "影像", "空间装置"],
    themeTags: ["城市", "技术", "公共空间"],
    careerStages: ["青年艺术家", "独立创作者"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: false,
    suitableForYoungArtists: true,
    applicationFee: "申请费 20 欧元",
    programFee: "项目费 600 欧元",
    accommodation: "协助预订，费用自理",
    studio: "提供共享工作室",
    stipend: "提供 500 欧元制作补助",
    travelSupport: "交通需自理",
  },
  {
    slug: "amsterdam-canal-research-studio",
    title: "Amsterdam Canal Research Studio",
    institution: "Canal Commons Studio",
    country: "荷兰",
    city: "阿姆斯特丹",
    region: "Europe",
    type: "研究型",
    deadline: "2026.09.05",
    daysLeft: 60,
    duration: "6 周",
    costLevel: "中等成本",
    matchScore: 84,
    fundingType: "部分资助",
    summary: "围绕水域、城市档案和移动生活展开研究，适合影像、写作和策展方向申请者。",
    disciplines: ["影像", "写作", "策展"],
    mediumTags: ["影像", "文本", "档案"],
    themeTags: ["城市", "记忆", "公共空间"],
    careerStages: ["刚毕业", "青年艺术家"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "项目费 850 欧元",
    accommodation: "提供住宿补贴",
    studio: "提供研究桌位",
    stipend: "无生活补贴",
    travelSupport: "交通需自理",
  },
  {
    slug: "lisbon-sound-practice-residency",
    title: "Lisbon Sound Practice Residency",
    institution: "Signal Room Lisboa",
    country: "葡萄牙",
    city: "里斯本",
    region: "Europe",
    type: "生产型",
    deadline: "2026.10.01",
    daysLeft: 86,
    duration: "5 周",
    costLevel: "低成本",
    matchScore: 80,
    fundingType: "部分资助",
    summary: "支持声音采集、实验音乐和小型声音装置，提供基础录音设备与公开聆听会。",
    disciplines: ["声音", "装置", "行为"],
    mediumTags: ["声音", "装置", "现场表演"],
    themeTags: ["身体", "城市", "记忆"],
    careerStages: ["青年艺术家", "已有驻留经验者"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "无项目费",
    accommodation: "提供共享住宿",
    studio: "提供声音工作室时段",
    stipend: "无生活补贴",
    travelSupport: "交通需自理",
  },
  {
    slug: "prague-performance-lab",
    title: "Prague Performance Lab",
    institution: "Temporary Stage Prague",
    country: "捷克",
    city: "布拉格",
    region: "Europe",
    type: "展览成果型",
    deadline: "2026.08.02",
    daysLeft: 26,
    duration: "4 周",
    costLevel: "中等成本",
    matchScore: 76,
    fundingType: "部分资助",
    summary: "为行为、身体和现场影像方向艺术家提供排练空间与期末公开呈现。",
    disciplines: ["行为", "影像", "声音"],
    mediumTags: ["行为", "影像", "声音"],
    themeTags: ["身体", "身份", "公共空间"],
    careerStages: ["青年艺术家", "独立创作者"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: false,
    suitableForYoungArtists: true,
    applicationFee: "申请费 15 欧元",
    programFee: "项目费 700 欧元",
    accommodation: "提供合作住宿折扣",
    studio: "提供排练空间",
    stipend: "提供 300 欧元制作补助",
    travelSupport: "交通需自理",
  },
  {
    slug: "barcelona-public-space-residency",
    title: "Barcelona Public Space Residency",
    institution: "Civic Art Lab BCN",
    country: "西班牙",
    city: "巴塞罗那",
    region: "Europe",
    type: "社区参与型",
    deadline: "2026.09.22",
    daysLeft: 77,
    duration: "7 周",
    costLevel: "中等成本",
    matchScore: 89,
    fundingType: "部分资助",
    summary: "关注公共空间、社区工作坊和临时装置，适合有协作经验的青年艺术家。",
    disciplines: ["装置", "社区实践", "策展"],
    mediumTags: ["装置", "工作坊", "公共项目"],
    themeTags: ["公共空间", "社区实践", "城市"],
    careerStages: ["青年艺术家", "独立创作者"],
    languages: ["英文", "西班牙文可选"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "项目费 500 欧元",
    accommodation: "提供住宿",
    studio: "提供共享工作室",
    stipend: "提供小额生活补贴",
    travelSupport: "部分本地交通报销",
  },
  {
    slug: "vienna-moving-image-research",
    title: "Vienna Moving Image Research Residency",
    institution: "Frame Research Wien",
    country: "奥地利",
    city: "维也纳",
    region: "Europe",
    type: "研究型",
    deadline: "2026.11.15",
    daysLeft: 131,
    duration: "10 周",
    costLevel: "低成本",
    matchScore: 92,
    fundingType: "全额资助",
    summary: "为影像、电影论文和媒体考古研究提供档案访问、住宿和基础生活补贴。",
    disciplines: ["影像", "写作", "策展"],
    mediumTags: ["影像", "写作", "档案"],
    themeTags: ["记忆", "技术", "身份"],
    careerStages: ["青年艺术家", "独立创作者", "已有驻留经验者"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: false,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "无项目费",
    accommodation: "提供住宿",
    studio: "提供研究工位",
    stipend: "每月 900 欧元生活补贴",
    travelSupport: "提供上限 400 欧元交通补助",
  },
  {
    slug: "tallinn-digital-commons-residency",
    title: "Tallinn Digital Commons Residency",
    institution: "Baltic Digital Commons",
    country: "爱沙尼亚",
    city: "塔林",
    region: "Europe",
    type: "技术实验型",
    deadline: "2026.08.30",
    daysLeft: 55,
    duration: "6 周",
    costLevel: "低成本",
    matchScore: 83,
    fundingType: "全额资助",
    summary: "支持开源工具、网络艺术和数字公共性研究，适合新媒体与写作交叉实践。",
    disciplines: ["新媒体", "写作", "策展"],
    mediumTags: ["网络艺术", "文本", "软件"],
    themeTags: ["技术", "公共空间", "身份"],
    careerStages: ["在校生", "刚毕业", "青年艺术家"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "无项目费",
    accommodation: "提供住宿",
    studio: "提供共享实验室",
    stipend: "提供基础生活补贴",
    travelSupport: "交通需自理",
  },
  {
    slug: "glasgow-artist-run-studio",
    title: "Glasgow Artist-run Studio Exchange",
    institution: "East Side Project Room",
    country: "英国",
    city: "格拉斯哥",
    region: "Europe",
    type: "生产型",
    deadline: "2026.10.12",
    daysLeft: 98,
    duration: "8 周",
    costLevel: "中等成本",
    matchScore: 79,
    fundingType: "部分资助",
    summary: "艺术家自组织空间交换项目，适合绘画、装置和独立出版方向。",
    disciplines: ["绘画", "装置", "写作"],
    mediumTags: ["绘画", "装置", "出版"],
    themeTags: ["社区实践", "身份", "记忆"],
    careerStages: ["刚毕业", "青年艺术家"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "项目费 650 英镑",
    accommodation: "协助寻找短租，费用自理",
    studio: "提供独立工作室",
    stipend: "无生活补贴",
    travelSupport: "交通需自理",
  },
  {
    slug: "athens-archive-performance",
    title: "Athens Archive & Performance Residency",
    institution: "South Archive Athens",
    country: "希腊",
    city: "雅典",
    region: "Europe",
    type: "研究型",
    deadline: "2026.09.09",
    daysLeft: 64,
    duration: "5 周",
    costLevel: "低成本",
    matchScore: 81,
    fundingType: "部分资助",
    summary: "围绕城市档案、身体和口述历史展开研究，最终可选择公开朗读或行为呈现。",
    disciplines: ["行为", "写作", "影像"],
    mediumTags: ["行为", "文本", "影像"],
    themeTags: ["身体", "记忆", "城市"],
    careerStages: ["青年艺术家", "独立创作者"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: false,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "项目费 300 欧元",
    accommodation: "提供共享住宿",
    studio: "提供排练与研究空间",
    stipend: "无生活补贴",
    travelSupport: "交通需自理",
  },
  {
    slug: "zurich-eco-media-residency",
    title: "Zurich Eco-media Residency",
    institution: "Alpine Media Institute",
    country: "瑞士",
    city: "苏黎世",
    region: "Europe",
    type: "生态自然型",
    deadline: "2026.12.01",
    daysLeft: 147,
    duration: "12 周",
    costLevel: "高成本",
    matchScore: 74,
    fundingType: "自费",
    summary: "高成本生态媒体驻留，适合已有明确资助来源、关注气候与影像实验的艺术家。",
    disciplines: ["影像", "新媒体", "装置"],
    mediumTags: ["影像", "数据", "装置"],
    themeTags: ["生态", "技术", "自然"],
    careerStages: ["青年艺术家", "已有驻留经验者"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: false,
    suitableForYoungArtists: true,
    applicationFee: "申请费 40 瑞郎",
    programFee: "项目费 2,400 瑞郎",
    accommodation: "提供住宿，费用计入项目费",
    studio: "提供媒体实验室",
    stipend: "无生活补贴",
    travelSupport: "交通需自理",
  },
  {
    slug: "taipei-new-media-open-studio",
    title: "台北新媒体开放工作室",
    institution: "Taipei Open Media Studio",
    country: "中国台湾",
    city: "台北",
    region: "Asia",
    type: "技术实验型",
    deadline: "2026.08.08",
    daysLeft: 32,
    duration: "6 周",
    costLevel: "低成本",
    matchScore: 90,
    fundingType: "部分资助",
    summary: "支持新媒体、声音和互动影像创作者进行短期原型开发，中文沟通友好。",
    disciplines: ["新媒体", "声音", "影像"],
    mediumTags: ["互动影像", "声音", "装置"],
    themeTags: ["技术", "城市", "身体"],
    careerStages: ["在校生", "刚毕业", "青年艺术家"],
    languages: ["中文", "英文"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "项目费 9,000 台币",
    accommodation: "提供住宿补贴",
    studio: "提供开放工作室",
    stipend: "提供小额材料补助",
    travelSupport: "交通需自理",
  },
  {
    slug: "bangkok-social-practice-residency",
    title: "Bangkok Social Practice Residency",
    institution: "Soi Commons",
    country: "泰国",
    city: "曼谷",
    region: "Asia",
    type: "社区参与型",
    deadline: "2026.10.20",
    daysLeft: 106,
    duration: "7 周",
    costLevel: "低成本",
    matchScore: 86,
    fundingType: "部分资助",
    summary: "面向社区实践、摄影和公共工作坊方向，关注城市生活、迁移和日常劳动。",
    disciplines: ["社区实践", "摄影", "写作"],
    mediumTags: ["摄影", "工作坊", "文本"],
    themeTags: ["社区实践", "城市", "身份"],
    careerStages: ["青年艺术家", "独立创作者"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "无项目费",
    accommodation: "提供共享住宿",
    studio: "提供社区空间",
    stipend: "每月 300 美元生活补贴",
    travelSupport: "交通需自理",
  },
  {
    slug: "seoul-sound-archive-residency",
    title: "Seoul Sound Archive Residency",
    institution: "Listening Archive Seoul",
    country: "韩国",
    city: "首尔",
    region: "Asia",
    type: "研究型",
    deadline: "2026.09.30",
    daysLeft: 85,
    duration: "4 周",
    costLevel: "中等成本",
    matchScore: 82,
    fundingType: "部分资助",
    summary: "围绕城市声音档案、广播和听觉文化研究，适合声音与写作方向。",
    disciplines: ["声音", "写作", "策展"],
    mediumTags: ["声音", "广播", "文本"],
    themeTags: ["城市", "记忆", "技术"],
    careerStages: ["刚毕业", "青年艺术家"],
    languages: ["英文", "韩文可选"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "申请费 20 美元",
    programFee: "项目费 500 美元",
    accommodation: "提供住宿建议，费用自理",
    studio: "提供听音室与研究桌位",
    stipend: "无生活补贴",
    travelSupport: "交通需自理",
  },
  {
    slug: "jakarta-urban-ecology-lab",
    title: "Jakarta Urban Ecology Lab",
    institution: "Delta Field Lab",
    country: "印度尼西亚",
    city: "雅加达",
    region: "Asia",
    type: "生态自然型",
    deadline: "2026.11.03",
    daysLeft: 119,
    duration: "8 周",
    costLevel: "低成本",
    matchScore: 88,
    fundingType: "全额资助",
    summary: "聚焦城市水系、生态影像和社区调研，提供住宿、基础生活补贴和本地协调。",
    disciplines: ["影像", "摄影", "社区实践"],
    mediumTags: ["影像", "摄影", "田野"],
    themeTags: ["生态", "城市", "社区实践"],
    careerStages: ["青年艺术家", "独立创作者"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: false,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "无项目费",
    accommodation: "提供住宿",
    studio: "提供共享工作空间",
    stipend: "提供基础生活补贴",
    travelSupport: "提供部分国际交通补助",
  },
  {
    slug: "chiangmai-craft-media-residency",
    title: "Chiang Mai Craft & Media Residency",
    institution: "Hill Studio Chiang Mai",
    country: "泰国",
    city: "清迈",
    region: "Asia",
    type: "生产型",
    deadline: "2026.08.26",
    daysLeft: 52,
    duration: "6 周",
    costLevel: "中等成本",
    matchScore: 77,
    fundingType: "自费",
    summary: "连接手工艺、影像和装置实践，适合希望在材料实验中发展新作品的青年艺术家。",
    disciplines: ["装置", "影像", "绘画"],
    mediumTags: ["材料", "装置", "影像"],
    themeTags: ["身体", "生态", "地方"],
    careerStages: ["在校生", "青年艺术家"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "项目费 1,200 美元",
    accommodation: "提供住宿，费用计入项目费",
    studio: "提供材料工作室",
    stipend: "无生活补贴",
    travelSupport: "交通需自理",
  },
  {
    slug: "mumbai-moving-image-lab",
    title: "Mumbai Moving Image Lab",
    institution: "Harbor Film Lab Mumbai",
    country: "印度",
    city: "孟买",
    region: "Asia",
    type: "技术实验型",
    deadline: "2026.12.10",
    daysLeft: 156,
    duration: "9 周",
    costLevel: "低成本",
    matchScore: 85,
    fundingType: "全额资助",
    summary: "支持实验影像、短片论文和多屏装置，提供剪辑设备、住宿和导师反馈。",
    disciplines: ["影像", "装置", "写作"],
    mediumTags: ["实验影像", "多屏", "文本"],
    themeTags: ["城市", "身份", "记忆"],
    careerStages: ["刚毕业", "青年艺术家"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "无项目费",
    accommodation: "提供住宿",
    studio: "提供剪辑室与放映空间",
    stipend: "提供生活补贴",
    travelSupport: "提供上限 500 美元交通补助",
  },
  {
    slug: "hongkong-harbor-research-residency",
    title: "香港港口研究驻留",
    institution: "Harbor Commons Hong Kong",
    country: "中国",
    city: "香港",
    region: "Asia",
    type: "研究型",
    deadline: "2026.09.14",
    daysLeft: 70,
    duration: "5 周",
    costLevel: "中等成本",
    matchScore: 83,
    fundingType: "部分资助",
    summary: "面向影像、摄影和城市研究方向，关注港口、流动性与公共记忆。",
    disciplines: ["摄影", "影像", "写作"],
    mediumTags: ["摄影", "影像", "文本"],
    themeTags: ["城市", "记忆", "流动"],
    careerStages: ["在校生", "刚毕业", "青年艺术家"],
    languages: ["中文", "英文"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "项目费 4,000 港币",
    accommodation: "住宿需自理",
    studio: "提供研究桌位",
    stipend: "无生活补贴",
    travelSupport: "本地交通可申请小额报销",
  },
  {
    slug: "singapore-tech-nature-residency",
    title: "Singapore Tech-Nature Residency",
    institution: "Equator Art & Technology",
    country: "新加坡",
    city: "新加坡",
    region: "Asia",
    type: "生态自然型",
    deadline: "2026.10.28",
    daysLeft: 114,
    duration: "8 周",
    costLevel: "中等成本",
    matchScore: 81,
    fundingType: "部分资助",
    summary: "围绕热带生态、传感器、数据影像和城市自然展开跨学科驻留。",
    disciplines: ["新媒体", "影像", "装置"],
    mediumTags: ["数据", "影像", "装置"],
    themeTags: ["生态", "技术", "城市"],
    careerStages: ["青年艺术家", "已有驻留经验者"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: false,
    suitableForYoungArtists: true,
    applicationFee: "申请费 25 新币",
    programFee: "项目费 900 新币",
    accommodation: "提供住宿补贴",
    studio: "提供共享实验室",
    stipend: "提供材料补助",
    travelSupport: "交通需自理",
  },
  {
    slug: "yogyakarta-community-print-lab",
    title: "Yogyakarta Community Print Lab",
    institution: "Kampung Print Collective",
    country: "印度尼西亚",
    city: "日惹",
    region: "Asia",
    type: "社区参与型",
    deadline: "2026.08.12",
    daysLeft: 36,
    duration: "4 周",
    costLevel: "低成本",
    matchScore: 86,
    fundingType: "部分资助",
    summary: "低成本社区版画与公共出版项目，适合首次驻留和学生申请。",
    disciplines: ["绘画", "写作", "社区实践"],
    mediumTags: ["版画", "出版", "工作坊"],
    themeTags: ["社区实践", "公共空间", "身份"],
    careerStages: ["在校生", "刚毕业", "青年艺术家"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "项目费 250 美元",
    accommodation: "提供共享住宿",
    studio: "提供版画工作室",
    stipend: "无生活补贴",
    travelSupport: "交通需自理",
  },
  {
    slug: "kuala-lumpur-student-residency",
    title: "Kuala Lumpur Student Residency",
    institution: "Young Practice KL",
    country: "马来西亚",
    city: "吉隆坡",
    region: "Asia",
    type: "生产型",
    deadline: "2026.07.25",
    daysLeft: 19,
    duration: "3 周",
    costLevel: "低成本",
    matchScore: 90,
    fundingType: "部分资助",
    summary: "面向在校生和刚毕业创作者的短期驻留，重点是作品集反馈和小型开放工作室。",
    disciplines: ["绘画", "摄影", "装置"],
    mediumTags: ["绘画", "摄影", "装置"],
    themeTags: ["身份", "记忆", "城市"],
    careerStages: ["在校生", "刚毕业"],
    languages: ["英文", "中文可选"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "项目费 300 美元",
    accommodation: "提供住宿",
    studio: "提供共享工作室",
    stipend: "无生活补贴",
    travelSupport: "交通需自理",
    status: "closing",
  },
  {
    slug: "new-york-online-critique-residency",
    title: "New York Online Critique Residency",
    institution: "Remote Crit Room NYC",
    country: "线上",
    city: "全球",
    region: "Online",
    type: "研究型",
    deadline: "2026.08.15",
    daysLeft: 39,
    duration: "6 周",
    costLevel: "低成本",
    matchScore: 93,
    fundingType: "自费",
    summary: "线上作品集批评和驻留申请训练项目，适合准备首次海外驻留申请的青年艺术家。",
    disciplines: ["影像", "装置", "绘画", "写作"],
    mediumTags: ["作品集", "写作", "线上评图"],
    themeTags: ["申请管理", "材料准备", "研究"],
    careerStages: ["在校生", "刚毕业", "青年艺术家"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "项目费 180 美元",
    accommodation: "线上项目，无住宿需求",
    studio: "线上会议与文档反馈",
    stipend: "无生活补贴",
    travelSupport: "线上项目，无交通成本",
  },
  {
    slug: "toronto-public-art-research",
    title: "Toronto Public Art Research Residency",
    institution: "Lake City Public Art Lab",
    country: "加拿大",
    city: "多伦多",
    region: "North America",
    type: "社区参与型",
    deadline: "2026.09.26",
    daysLeft: 81,
    duration: "8 周",
    costLevel: "低成本",
    matchScore: 84,
    fundingType: "全额资助",
    summary: "支持公共艺术、社区访谈和城市研究，提供住宿、生活补贴和公共项目制作支持。",
    disciplines: ["社区实践", "装置", "策展"],
    mediumTags: ["公共项目", "装置", "工作坊"],
    themeTags: ["公共空间", "社区实践", "城市"],
    careerStages: ["青年艺术家", "独立创作者"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: false,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "无项目费",
    accommodation: "提供住宿",
    studio: "提供公共项目工作室",
    stipend: "提供每月 1,000 加元生活补贴",
    travelSupport: "提供部分交通补助",
  },
  {
    slug: "montreal-sound-installation",
    title: "Montreal Sound Installation Residency",
    institution: "North Audio Studio",
    country: "加拿大",
    city: "蒙特利尔",
    region: "North America",
    type: "技术实验型",
    deadline: "2026.11.20",
    daysLeft: 136,
    duration: "10 周",
    costLevel: "中等成本",
    matchScore: 82,
    fundingType: "部分资助",
    summary: "面向声音装置和空间音频创作者，提供录音棚、技术导师和最终试听会。",
    disciplines: ["声音", "装置", "新媒体"],
    mediumTags: ["声音", "空间音频", "装置"],
    themeTags: ["身体", "技术", "空间"],
    careerStages: ["青年艺术家", "已有驻留经验者"],
    languages: ["英文", "法文可选"],
    acceptsInternational: true,
    acceptsStudents: false,
    suitableForYoungArtists: true,
    applicationFee: "申请费 25 加元",
    programFee: "项目费 750 加元",
    accommodation: "协助预订，费用自理",
    studio: "提供声音工作室",
    stipend: "提供材料补助",
    travelSupport: "交通需自理",
  },
  {
    slug: "chicago-experimental-video-residency",
    title: "Chicago Experimental Video Residency",
    institution: "Midwest Moving Image Center",
    country: "美国",
    city: "芝加哥",
    region: "North America",
    type: "展览成果型",
    deadline: "2026.08.21",
    daysLeft: 47,
    duration: "5 周",
    costLevel: "中等成本",
    matchScore: 80,
    fundingType: "部分资助",
    summary: "支持实验影像、多屏放映和艺术家电影，最终以小型放映或开放工作室呈现。",
    disciplines: ["影像", "新媒体", "声音"],
    mediumTags: ["实验影像", "多屏", "声音"],
    themeTags: ["身份", "记忆", "技术"],
    careerStages: ["刚毕业", "青年艺术家"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "申请费 30 美元",
    programFee: "项目费 900 美元",
    accommodation: "住宿未说明，需进一步确认",
    studio: "提供剪辑设备",
    stipend: "无生活补贴",
    travelSupport: "交通需自理",
  },
  {
    slug: "mexico-city-urban-memory",
    title: "Mexico City Urban Memory Residency",
    institution: "Archivo Barrio",
    country: "墨西哥",
    city: "墨西哥城",
    region: "North America",
    type: "研究型",
    deadline: "2026.10.05",
    daysLeft: 91,
    duration: "7 周",
    costLevel: "低成本",
    matchScore: 88,
    fundingType: "部分资助",
    summary: "围绕城市记忆、摄影档案和社区叙事展开研究，适合影像、摄影与写作方向。",
    disciplines: ["摄影", "影像", "写作"],
    mediumTags: ["摄影", "影像", "档案"],
    themeTags: ["记忆", "城市", "社区实践"],
    careerStages: ["青年艺术家", "独立创作者"],
    languages: ["英文", "西班牙文可选"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "项目费 300 美元",
    accommodation: "提供住宿",
    studio: "提供研究空间",
    stipend: "无生活补贴",
    travelSupport: "交通需自理",
  },
  {
    slug: "vancouver-ecology-studio",
    title: "Vancouver Ecology Studio",
    institution: "Pacific Field Studio",
    country: "加拿大",
    city: "温哥华",
    region: "North America",
    type: "生态自然型",
    deadline: "2026.12.18",
    daysLeft: 164,
    duration: "9 周",
    costLevel: "低成本",
    matchScore: 87,
    fundingType: "全额资助",
    summary: "支持生态影像、田野笔记和环境装置，提供住宿、工作室和基础生活补贴。",
    disciplines: ["影像", "装置", "写作"],
    mediumTags: ["影像", "田野", "装置"],
    themeTags: ["生态", "自然", "记忆"],
    careerStages: ["青年艺术家", "独立创作者"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: false,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "无项目费",
    accommodation: "提供住宿",
    studio: "提供共享工作室",
    stipend: "提供生活补贴",
    travelSupport: "提供部分交通补助",
  },
  {
    slug: "los-angeles-performance-media",
    title: "Los Angeles Performance Media Residency",
    institution: "West Light Performance Lab",
    country: "美国",
    city: "洛杉矶",
    region: "North America",
    type: "展览成果型",
    deadline: "2026.09.11",
    daysLeft: 67,
    duration: "6 周",
    costLevel: "高成本",
    matchScore: 73,
    fundingType: "自费",
    summary: "行为、影像和现场媒体项目，提供排练空间与最终公开演出机会。",
    disciplines: ["行为", "影像", "声音"],
    mediumTags: ["行为", "现场影像", "声音"],
    themeTags: ["身体", "身份", "技术"],
    careerStages: ["青年艺术家", "已有驻留经验者"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: false,
    suitableForYoungArtists: true,
    applicationFee: "申请费 35 美元",
    programFee: "项目费 1,600 美元",
    accommodation: "协助预订，费用自理",
    studio: "提供排练空间",
    stipend: "无生活补贴",
    travelSupport: "交通需自理",
  },
  {
    slug: "detroit-social-practice-fellowship",
    title: "Detroit Social Practice Fellowship",
    institution: "Neighborhood Art Works",
    country: "美国",
    city: "底特律",
    region: "North America",
    type: "社区参与型",
    deadline: "2026.10.30",
    daysLeft: 116,
    duration: "8 周",
    costLevel: "低成本",
    matchScore: 85,
    fundingType: "全额资助",
    summary: "社区参与和公共工作坊驻留，支持青年艺术家与本地组织共同发展小型项目。",
    disciplines: ["社区实践", "写作", "摄影"],
    mediumTags: ["工作坊", "摄影", "公共项目"],
    themeTags: ["社区实践", "城市", "公共空间"],
    careerStages: ["青年艺术家", "独立创作者"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "无项目费",
    accommodation: "提供住宿",
    studio: "提供社区工作空间",
    stipend: "每月 800 美元生活补贴",
    travelSupport: "提供部分交通补助",
  },
  {
    slug: "santa-fe-landscape-lab",
    title: "Santa Fe Landscape Lab",
    institution: "High Desert Studio",
    country: "美国",
    city: "圣菲",
    region: "North America",
    type: "生态自然型",
    deadline: "2026.08.05",
    daysLeft: 29,
    duration: "4 周",
    costLevel: "中等成本",
    matchScore: 78,
    fundingType: "自费",
    summary: "面向摄影、绘画和土地研究方向的短期驻留，适合已有明确风景或生态项目计划者。",
    disciplines: ["摄影", "绘画", "写作"],
    mediumTags: ["摄影", "绘画", "田野"],
    themeTags: ["生态", "自然", "记忆"],
    careerStages: ["青年艺术家", "独立创作者"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: false,
    suitableForYoungArtists: true,
    applicationFee: "申请费 25 美元",
    programFee: "项目费 1,100 美元",
    accommodation: "提供住宿，费用计入项目费",
    studio: "提供独立工作室",
    stipend: "无生活补贴",
    travelSupport: "交通需自理",
  },
  {
    slug: "oakland-digital-futures",
    title: "Oakland Digital Futures Residency",
    institution: "Bay Network Arts",
    country: "美国",
    city: "奥克兰",
    region: "North America",
    type: "技术实验型",
    deadline: "2026.11.08",
    daysLeft: 124,
    duration: "6 周",
    costLevel: "中等成本",
    matchScore: 82,
    fundingType: "部分资助",
    summary: "关注网络文化、AI 图像和数字身份的线上线下混合驻留，适合新媒体青年艺术家。",
    disciplines: ["新媒体", "影像", "写作"],
    mediumTags: ["AI 图像", "网络艺术", "影像"],
    themeTags: ["技术", "身份", "公共空间"],
    careerStages: ["在校生", "刚毕业", "青年艺术家"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "项目费 450 美元",
    accommodation: "混合项目，线下周住宿需自理",
    studio: "线上导师会与线下工作坊",
    stipend: "提供材料补助",
    travelSupport: "交通需自理",
  },
  {
    slug: "global-online-proposal-lab",
    title: "Global Online Proposal Lab",
    institution: "Residency Desk Online",
    country: "线上",
    city: "全球",
    region: "Online",
    type: "研究型",
    deadline: "2026.07.20",
    daysLeft: 14,
    duration: "4 周",
    costLevel: "低成本",
    matchScore: 94,
    fundingType: "自费",
    summary: "线上驻留申请训练营，帮助青年艺术家把作品集、artist statement 和 proposal 整理成可投递版本。",
    disciplines: ["写作", "策展", "影像", "装置"],
    mediumTags: ["作品集", "写作", "申请材料"],
    themeTags: ["材料准备", "研究", "申请管理"],
    careerStages: ["在校生", "刚毕业", "青年艺术家"],
    languages: ["中文", "英文"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "项目费 680 元",
    accommodation: "线上项目，无住宿需求",
    studio: "线上会议与文档反馈",
    stipend: "无生活补贴",
    travelSupport: "线上项目，无交通成本",
    status: "closing",
  },
  {
    slug: "hybrid-climate-storytelling-residency",
    title: "Hybrid Climate Storytelling Residency",
    institution: "Climate Story Lab",
    country: "混合",
    city: "线上 / 哥本哈根",
    region: "Hybrid",
    type: "生态自然型",
    deadline: "2026.09.02",
    daysLeft: 58,
    duration: "8 周",
    costLevel: "低成本",
    matchScore: 88,
    fundingType: "全额资助",
    summary: "线上研究与一周线下工作坊结合，支持气候叙事、影像和声音项目。",
    disciplines: ["影像", "声音", "写作"],
    mediumTags: ["影像", "声音", "文本"],
    themeTags: ["生态", "自然", "公共空间"],
    careerStages: ["青年艺术家", "独立创作者"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "无项目费",
    accommodation: "线下周提供住宿",
    studio: "线上导师会与线下工作坊",
    stipend: "提供项目补贴",
    travelSupport: "提供部分交通补助",
  },
  {
    slug: "online-sound-walk-lab",
    title: "Online Sound Walk Lab",
    institution: "Distributed Listening School",
    country: "线上",
    city: "全球",
    region: "Online",
    type: "社区参与型",
    deadline: "2026.08.28",
    daysLeft: 54,
    duration: "5 周",
    costLevel: "低成本",
    matchScore: 89,
    fundingType: "自费",
    summary: "以线上方式组织声音散步、听觉日记和城市声音地图，适合声音与社区实践方向。",
    disciplines: ["声音", "社区实践", "写作"],
    mediumTags: ["声音", "地图", "文本"],
    themeTags: ["城市", "公共空间", "社区实践"],
    careerStages: ["在校生", "刚毕业", "青年艺术家"],
    languages: ["英文", "中文可选"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "项目费 120 美元",
    accommodation: "线上项目，无住宿需求",
    studio: "线上工作坊",
    stipend: "无生活补贴",
    travelSupport: "线上项目，无交通成本",
  },
  {
    slug: "remote-portfolio-residency",
    title: "Remote Portfolio Residency",
    institution: "Open Portfolio Desk",
    country: "线上",
    city: "全球",
    region: "Online",
    type: "研究型",
    deadline: "2026.10.18",
    daysLeft: 104,
    duration: "6 周",
    costLevel: "低成本",
    matchScore: 91,
    fundingType: "自费",
    summary: "远程作品集驻留，以每周反馈、申请策略和材料打磨为核心，适合首次申请国际驻留者。",
    disciplines: ["影像", "绘画", "装置", "写作"],
    mediumTags: ["作品集", "写作", "申请材料"],
    themeTags: ["材料准备", "职业阶段", "研究"],
    careerStages: ["在校生", "刚毕业", "青年艺术家"],
    languages: ["中文", "英文"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "项目费 980 元",
    accommodation: "线上项目，无住宿需求",
    studio: "线上导师反馈",
    stipend: "无生活补贴",
    travelSupport: "线上项目，无交通成本",
  },
  {
    slug: "hybrid-ai-image-research",
    title: "Hybrid AI Image Research Residency",
    institution: "Machine Image Forum",
    country: "混合",
    city: "线上 / 首尔",
    region: "Hybrid",
    type: "技术实验型",
    deadline: "2026.11.12",
    daysLeft: 128,
    duration: "9 周",
    costLevel: "中等成本",
    matchScore: 84,
    fundingType: "部分资助",
    summary: "研究 AI 图像、数据集、作者身份和影像伦理，包含线上研究和短期线下展示。",
    disciplines: ["新媒体", "影像", "写作"],
    mediumTags: ["AI 图像", "数据", "影像"],
    themeTags: ["技术", "身份", "伦理"],
    careerStages: ["青年艺术家", "已有驻留经验者"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "申请费 20 美元",
    programFee: "项目费 500 美元",
    accommodation: "线下展示周提供住宿补贴",
    studio: "线上研究会与线下展示空间",
    stipend: "提供材料补助",
    travelSupport: "交通需自理",
  },
  {
    slug: "copenhagen-artist-housing-program",
    title: "Copenhagen Artist Housing Program",
    institution: "Harbor Housing Studio",
    country: "丹麦",
    city: "哥本哈根",
    region: "Europe",
    type: "生产型",
    deadline: "2026.12.05",
    daysLeft: 151,
    duration: "12 周",
    costLevel: "低成本",
    matchScore: 86,
    fundingType: "全额资助",
    summary: "强调住宿与工作室支持的青年艺术家驻留，适合需要稳定创作时间的影像和装置方向。",
    disciplines: ["影像", "装置", "绘画"],
    mediumTags: ["影像", "装置", "绘画"],
    themeTags: ["城市", "身体", "记忆"],
    careerStages: ["刚毕业", "青年艺术家"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: false,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "无项目费",
    accommodation: "提供艺术家公寓",
    studio: "提供独立工作室",
    stipend: "每月 700 欧元生活补贴",
    travelSupport: "交通需自理",
  },
  {
    slug: "paris-research-writing-residency",
    title: "Paris Research Writing Residency",
    institution: "Left Bank Research Room",
    country: "法国",
    city: "巴黎",
    region: "Europe",
    type: "研究型",
    deadline: "2026.09.19",
    daysLeft: 75,
    duration: "4 周",
    costLevel: "中等成本",
    matchScore: 79,
    fundingType: "部分资助",
    summary: "面向艺术写作、策展研究和影像论文方向，提供研究桌位与文本反馈。",
    disciplines: ["写作", "策展", "影像"],
    mediumTags: ["写作", "档案", "影像"],
    themeTags: ["记忆", "身份", "城市"],
    careerStages: ["青年艺术家", "独立创作者"],
    languages: ["英文", "法文可选"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "项目费 700 欧元",
    accommodation: "住宿需自理",
    studio: "提供研究桌位",
    stipend: "无生活补贴",
    travelSupport: "交通需自理",
  },
  {
    slug: "dublin-lens-based-practice",
    title: "Dublin Lens-based Practice Residency",
    institution: "North Dock Photo Studio",
    country: "爱尔兰",
    city: "都柏林",
    region: "Europe",
    type: "展览成果型",
    deadline: "2026.10.08",
    daysLeft: 94,
    duration: "6 周",
    costLevel: "中等成本",
    matchScore: 83,
    fundingType: "部分资助",
    summary: "支持摄影、动态影像和小型出版，最终成果可为开放工作室或 zine 发行。",
    disciplines: ["摄影", "影像", "写作"],
    mediumTags: ["摄影", "影像", "出版"],
    themeTags: ["记忆", "身份", "城市"],
    careerStages: ["在校生", "刚毕业", "青年艺术家"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "申请费 15 欧元",
    programFee: "项目费 500 欧元",
    accommodation: "提供住宿补贴",
    studio: "提供暗房与工作室时段",
    stipend: "无生活补贴",
    travelSupport: "交通需自理",
  },
  {
    slug: "berlin-student-first-residency",
    title: "Berlin Student First Residency",
    institution: "First Studio Berlin",
    country: "德国",
    city: "柏林",
    region: "Europe",
    type: "生产型",
    deadline: "2026.07.27",
    daysLeft: 21,
    duration: "3 周",
    costLevel: "中等成本",
    matchScore: 90,
    fundingType: "自费",
    summary: "面向在校生和刚毕业创作者的首次驻留训练项目，重点是作品集诊断和开放工作室。",
    disciplines: ["绘画", "装置", "影像"],
    mediumTags: ["绘画", "装置", "作品集"],
    themeTags: ["职业阶段", "材料准备", "身份"],
    careerStages: ["在校生", "刚毕业"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "项目费 950 欧元",
    accommodation: "协助预订，费用自理",
    studio: "提供共享工作室",
    stipend: "无生活补贴",
    travelSupport: "交通需自理",
  },
  {
    slug: "tokyo-small-studio-exchange",
    title: "Tokyo Small Studio Exchange",
    institution: "East Tokyo Project Space",
    country: "日本",
    city: "东京",
    region: "Asia",
    type: "生产型",
    deadline: "2026.09.07",
    daysLeft: 63,
    duration: "5 周",
    costLevel: "中等成本",
    matchScore: 84,
    fundingType: "部分资助",
    summary: "小型项目空间驻留，适合绘画、摄影和装置方向进行作品推进与开放工作室。",
    disciplines: ["绘画", "摄影", "装置"],
    mediumTags: ["绘画", "摄影", "装置"],
    themeTags: ["城市", "记忆", "身份"],
    careerStages: ["刚毕业", "青年艺术家"],
    languages: ["英文", "日文可选"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "项目费 120,000 日元",
    accommodation: "提供合作住宿折扣",
    studio: "提供小型工作室",
    stipend: "无生活补贴",
    travelSupport: "交通需自理",
  },
  {
    slug: "kyoto-craft-new-media",
    title: "Kyoto Craft & New Media Residency",
    institution: "Kyoto Material Lab",
    country: "日本",
    city: "京都",
    region: "Asia",
    type: "技术实验型",
    deadline: "2026.11.25",
    daysLeft: 141,
    duration: "8 周",
    costLevel: "中等成本",
    matchScore: 81,
    fundingType: "部分资助",
    summary: "结合材料工艺、投影影像和交互装置，适合跨媒介实验创作者。",
    disciplines: ["装置", "新媒体", "影像"],
    mediumTags: ["材料", "投影", "交互装置"],
    themeTags: ["技术", "身体", "地方"],
    careerStages: ["青年艺术家", "已有驻留经验者"],
    languages: ["英文", "日文可选"],
    acceptsInternational: true,
    acceptsStudents: false,
    suitableForYoungArtists: true,
    applicationFee: "申请费 3,000 日元",
    programFee: "项目费 150,000 日元",
    accommodation: "提供住宿",
    studio: "提供材料工作室",
    stipend: "提供小额材料补助",
    travelSupport: "交通需自理",
  },
  {
    slug: "boston-research-based-practice",
    title: "Boston Research-based Practice Residency",
    institution: "Commons Research Studio",
    country: "美国",
    city: "波士顿",
    region: "North America",
    type: "研究型",
    deadline: "2026.12.15",
    daysLeft: 161,
    duration: "10 周",
    costLevel: "低成本",
    matchScore: 87,
    fundingType: "全额资助",
    summary: "为研究型艺术家提供图书馆资源、导师反馈、住宿和基础生活补贴。",
    disciplines: ["写作", "影像", "策展"],
    mediumTags: ["写作", "影像", "档案"],
    themeTags: ["研究", "记忆", "身份"],
    careerStages: ["青年艺术家", "独立创作者"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: false,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "无项目费",
    accommodation: "提供住宿",
    studio: "提供研究工位",
    stipend: "提供生活补贴",
    travelSupport: "提供部分交通补助",
  },
  {
    slug: "seattle-rain-city-sound",
    title: "Seattle Rain City Sound Residency",
    institution: "Rain City Audio Lab",
    country: "美国",
    city: "西雅图",
    region: "North America",
    type: "技术实验型",
    deadline: "2026.10.22",
    daysLeft: 108,
    duration: "6 周",
    costLevel: "中等成本",
    matchScore: 80,
    fundingType: "部分资助",
    summary: "支持环境声音、天气数据和空间装置，提供声音设备与导师反馈。",
    disciplines: ["声音", "新媒体", "装置"],
    mediumTags: ["声音", "数据", "装置"],
    themeTags: ["生态", "技术", "城市"],
    careerStages: ["青年艺术家", "已有驻留经验者"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: true,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "项目费 650 美元",
    accommodation: "住宿需自理",
    studio: "提供声音实验室",
    stipend: "提供材料补助",
    travelSupport: "交通需自理",
  },
  {
    slug: "rotterdam-ports-community",
    title: "Rotterdam Ports Community Residency",
    institution: "Port Commons Rotterdam",
    country: "荷兰",
    city: "鹿特丹",
    region: "Europe",
    type: "社区参与型",
    deadline: "2026.08.16",
    daysLeft: 40,
    duration: "7 周",
    costLevel: "低成本",
    matchScore: 86,
    fundingType: "全额资助",
    summary: "围绕港口劳动、迁移和社区档案展开驻留，适合摄影、影像和公共项目实践。",
    disciplines: ["摄影", "影像", "社区实践"],
    mediumTags: ["摄影", "影像", "公共项目"],
    themeTags: ["社区实践", "城市", "身份"],
    careerStages: ["青年艺术家", "独立创作者"],
    languages: ["英文"],
    acceptsInternational: true,
    acceptsStudents: false,
    suitableForYoungArtists: true,
    applicationFee: "无申请费",
    programFee: "无项目费",
    accommodation: "提供住宿",
    studio: "提供社区工作空间",
    stipend: "提供生活补贴",
    travelSupport: "提供部分交通补助",
  },
];

function getDemoStatus(seed: DemoResidencySeed): OpportunityStatus {
  if (seed.status) {
    return seed.status;
  }

  return seed.daysLeft <= 21 ? "closing" : "open";
}

function getDemoStatusLabel(seed: DemoResidencySeed) {
  if (getDemoStatus(seed) === "closing") {
    return `${seed.daysLeft} 天后截止`;
  }

  return "进行中";
}

function getDemoTrustTags(seed: DemoResidencySeed) {
  const tags = ["信息已审核", "费用透明"];

  if (seed.applicationFee.includes("无")) {
    tags.push("无申请费");
  }
  if (seed.accommodation.includes("提供")) {
    tags.push("提供住宿");
  }
  if (seed.suitableForYoungArtists) {
    tags.push("适合青年艺术家");
  }
  if (seed.acceptsStudents) {
    tags.push("接受学生申请");
  }

  return tags.slice(0, 5);
}

function getDemoRiskTags(seed: DemoResidencySeed) {
  const tags: string[] = [];

  if (seed.travelSupport.includes("自理")) {
    tags.push("需自理交通");
  }
  if (seed.languages.includes("英文")) {
    tags.push("需英文材料");
  }
  if (seed.accommodation.includes("自理") || seed.accommodation.includes("未说明")) {
    tags.push("住宿需确认");
  }
  if (seed.costLevel === "高成本") {
    tags.push("项目费较高");
  }
  if (!seed.acceptsStudents) {
    tags.push("不接受学生申请");
  }

  return tags.slice(0, 3);
}

function getDemoEligibility(seed: DemoResidencySeed) {
  return [
    seed.acceptsInternational ? "接受国际申请者" : "以本地或区域申请者为主",
    seed.acceptsStudents ? "接受学生申请" : "不接受学生申请",
    seed.suitableForYoungArtists ? "适合青年艺术家" : "更适合成熟艺术家",
  ];
}

const generatedOpportunities: Opportunity[] = demoResidencySeeds.map((seed, index) => {
  const eligibility = getDemoEligibility(seed);
  const languagePrefix = seed.languages.includes("中文") ? "中文或英文" : "英文";
  const matchArtistGroups = [
    ["lin-yiran", "mia-shen", "sara-wong"],
    ["chen-mo", "zhou-zimo", "lin-yiran"],
    ["ake-lau", "sara-wong", "mia-shen"],
  ];

  return {
    slug: seed.slug,
    title: seed.title,
    institutionSlug: `demo-${seed.slug}`,
    institution: seed.institution,
    institutionCertification: "信息已审核",
    category: seed.type,
    type: seed.type,
    country: seed.country,
    city: seed.city,
    location: `${seed.country} / ${seed.city}`,
    status: getDemoStatus(seed),
    statusLabel: getDemoStatusLabel(seed),
    deadline: seed.deadline,
    daysLeft: seed.daysLeft,
    duration: seed.duration,
    summary: seed.summary,
    description: `${seed.summary} 项目以 ${seed.themeTags.join("、")} 为主要语境，适合使用 ${seed.mediumTags.join("、")} 等媒介推进研究或创作。该记录为本地 demo 数据，用于展示未来驻留数据库、搜索筛选和匹配评分能力。`,
    support: `${seed.accommodation}；${seed.studio}；${seed.stipend}；${seed.travelSupport}`,
    disciplines: seed.disciplines,
    tags: [...seed.themeTags, ...seed.mediumTags, seed.fundingType].slice(0, 7),
    trustTags: getDemoTrustTags(seed),
    riskTags: getDemoRiskTags(seed),
    costLevel: seed.costLevel,
    matchScore: seed.matchScore,
    recommendation: `适合 ${seed.mediumTags.slice(0, 3).join("、")} 方向；${eligibility.join("；")}；${seed.applicationFee}；${seed.accommodation}；申请语言：${seed.languages.join(" / ")}。`,
    fitReasons: [
      `项目媒介方向覆盖 ${seed.mediumTags.join("、")}，可用于未来作品集媒介匹配。`,
      `创作主题包含 ${seed.themeTags.join("、")}，适合做主题标签与项目条件匹配。`,
      eligibility.join("；") + "。",
      `成本条件：${seed.applicationFee}，${seed.programFee}，${seed.accommodation}。`,
      `申请语言为 ${seed.languages.join(" / ")}，建议提前准备 ${languagePrefix} Artist Statement 和 Project Proposal。`,
    ],
    costs: {
      applicationFee: seed.applicationFee,
      programFee: seed.programFee,
      accommodation: seed.accommodation,
      studio: seed.studio,
      stipend: seed.stipend,
      travel: seed.travelSupport,
      visa:
        seed.region === "Online"
          ? "线上项目，无签证需求"
          : seed.country === "中国" || seed.country === "线上" || seed.country === "混合"
            ? "签证需求需根据线下地点确认"
            : "可能需要短期访问签证或艺术家访问材料",
      insurance: seed.region === "Online" ? "线上项目，无保险需求" : "建议准备旅行与医疗保险",
      production:
        seed.fundingType === "全额资助"
          ? "可申请基础制作或材料支持"
          : "特殊材料和大型制作费用需自理",
      publicRequirement: "通常需参与开放工作室、线上分享或最终展示",
    },
    languages: seed.languages,
    careerStages: seed.careerStages,
    acceptsInternational: seed.acceptsInternational,
    suitableForYoungArtists: seed.suitableForYoungArtists,
    acceptsStudents: seed.acceptsStudents,
    requirements: [
      "作品集 Portfolio，8-15 页",
      `${languagePrefix} Artist Statement`,
      "Project Proposal，说明研究问题、方法和驻留期间计划",
      "CV，2 页以内",
      seed.mediumTags.includes("声音") ? "声音或影像作品链接" : "近期作品链接或文档",
    ],
    timeline: [
      `${seed.deadline} 申请截止`,
      "截止后 2-4 周公布初选或面试通知",
      "具体驻留开始时间以机构邮件为准",
    ],
    institutionIntro:
      `${seed.institution} 是本地 demo 数据中的驻留机构，用于模拟真实项目数据库中的机构介绍、资助条件和申请要求。`,
    pastCases: [
      "Demo 往届案例：青年艺术家完成研究分享与开放工作室",
      "Demo 往届案例：项目支持跨媒介作品计划和材料反馈",
    ],
    copyrightNote:
      "Demo 数据版权说明：艺术家保留作品版权；机构仅可在项目档案和非商业传播中使用署名文档。",
    visaNote:
      seed.region === "Online"
        ? "线上项目无需签证。"
        : "签证信息为 demo 提示，真实申请前需要以机构与目的地官方要求为准。",
    matchArtistSlugs: matchArtistGroups[index % matchArtistGroups.length],
    disciplineTags: seed.disciplines,
    mediumTags: seed.mediumTags,
    themeTags: seed.themeTags,
    careerStage: seed.careerStages.join(" / "),
    fundingType: seed.fundingType,
    region: seed.region,
    sourceName: "Demo Seed Data",
    sourceUrl: "#",
    eligibility,
    language: seed.languages,
    accommodation: seed.accommodation,
    stipend: seed.stipend,
    travelSupport: seed.travelSupport,
  };
});

export const opportunities: Opportunity[] = [
  ...coreOpportunities,
  ...generatedOpportunities,
];

export const artists: Artist[] = [
  {
    slug: "lin-yiran",
    name: "林一然",
    location: "上海",
    discipline: "影像 / 装置",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    cover:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80",
    availability: "准备首次国际驻留",
    bio: "以影像、摄影和文本处理城市空间中的记忆残片，正在寻找低成本、住宿清晰的驻留项目。",
    statement: "关注移动生活如何重塑身体、亲密关系与地方经验。",
    tags: ["影像", "装置", "城市", "记忆"],
    languages: ["中文", "英文"],
    careerStage: "青年艺术家",
    budgetRange: "低到中等预算",
    portfolioCompletion: 82,
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
      "shoreline-asian-young-artists",
      "river-city-research-residency",
      "south-studio-first-residency",
    ],
  },
  {
    slug: "chen-mo",
    name: "陈默",
    location: "北京",
    discipline: "绘画 / 材料实验",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    cover:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1400&q=80",
    availability: "寻找中文友好驻留",
    bio: "长期以绘画和材料实验记录个体记忆，正在整理第一版驻留作品集。",
    statement: "让日常经验在材料表面留下可被反复阅读的痕迹。",
    tags: ["绘画", "材料", "记忆"],
    languages: ["中文"],
    careerStage: "刚毕业",
    budgetRange: "中等预算",
    portfolioCompletion: 74,
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
    matchOpportunitySlugs: ["south-studio-first-residency", "river-city-research-residency"],
  },
  {
    slug: "sara-wong",
    name: "Sara Wong",
    location: "香港",
    discipline: "装置 / 生态材料",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=80",
    cover:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=80",
    availability: "开放国际驻留申请",
    bio: "以自然材料和空间叙事为主要媒介，研究岛屿、湿度和微观生态的可视化方式。",
    statement: "让观众在触觉、声音和光线之间重新感知环境。",
    tags: ["装置", "生态", "自然材料"],
    languages: ["中文", "英文", "粤语"],
    careerStage: "青年艺术家",
    budgetRange: "可承担中等预算",
    portfolioCompletion: 90,
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
    matchOpportunitySlugs: ["shoreline-asian-young-artists", "nordic-media-lab"],
  },
  {
    slug: "zhou-zimo",
    name: "周子墨",
    location: "杭州",
    discipline: "摄影 / 影像",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=80",
    cover:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1400&q=80",
    availability: "准备研究型驻留",
    bio: "从身体、时间和观看制度出发进行影像创作，关注城市空间中的日常动作。",
    statement: "作品在冷静镜头和现场装置之间切换。",
    tags: ["摄影", "影像", "身体", "城市"],
    languages: ["中文", "英文"],
    careerStage: "青年艺术家",
    budgetRange: "中等预算",
    portfolioCompletion: 78,
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
    matchOpportunitySlugs: ["river-city-research-residency", "south-studio-first-residency"],
  },
  {
    slug: "ake-lau",
    name: "Ake Lau",
    location: "广州",
    discipline: "策展 / 写作",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
    cover:
      "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=1400&q=80",
    availability: "寻找研究型驻留",
    bio: "关注地方档案、劳动叙事和影像研究，常与艺术家共同完成研究型项目。",
    statement: "把驻留视为一种临时编辑系统，让档案、艺术家和公众重新发生关系。",
    tags: ["策展", "档案", "写作", "公共空间"],
    languages: ["中文", "英文"],
    careerStage: "独立创作者",
    budgetRange: "低预算",
    portfolioCompletion: 86,
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
    matchOpportunitySlugs: ["river-city-research-residency", "shoreline-asian-young-artists"],
  },
  {
    slug: "mia-shen",
    name: "沈米娅",
    location: "成都",
    discipline: "新媒体 / 交互影像",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=500&q=80",
    cover:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=80",
    availability: "寻找技术实验型驻留",
    bio: "使用实时影像、生成图形和交互装置构建沉浸式场景。",
    statement: "把算法当作舞台灯光，让观众的移动成为作品变量。",
    tags: ["新媒体", "互动", "影像", "技术"],
    languages: ["中文", "英文"],
    careerStage: "青年艺术家",
    budgetRange: "可承担高预算",
    portfolioCompletion: 88,
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
    matchOpportunitySlugs: ["nordic-media-lab", "shoreline-asian-young-artists"],
  },
];

export const projectMatches: ProjectMatch[] = [
  {
    opportunitySlug: "shoreline-asian-young-artists",
    score: 86,
    reasons: ["影像与装置媒介匹配", "无申请费且提供住宿", "接受中国青年艺术家"],
  },
  {
    opportunitySlug: "river-city-research-residency",
    score: 91,
    reasons: ["研究主题契合城市公共空间", "中文材料友好", "适合低预算申请"],
  },
  {
    opportunitySlug: "nordic-media-lab",
    score: 78,
    reasons: ["新媒体方向匹配", "设备支持明确", "需评估项目费和签证成本"],
  },
  {
    opportunitySlug: "south-studio-first-residency",
    score: 88,
    reasons: ["适合首次驻留", "中文申请材料", "提供导师反馈和工作位"],
  },
];

export const applicationItems: ApplicationItem[] = [
  {
    opportunitySlug: "shoreline-asian-young-artists",
    status: "准备中",
    nextAction: "补齐英文 Project Proposal，并确认保险预算。",
    materialProgress: [
      { name: "作品集 Portfolio", progress: 100, note: "已完成，可压缩英文版" },
      { name: "Artist Statement", progress: 60, note: "需英文润色" },
      { name: "CV", progress: 80, note: "补充 2025 项目经历" },
      { name: "项目计划 Project Proposal", progress: 40, note: "需强化当地语境" },
      { name: "推荐信", progress: 0, note: "未准备" },
    ],
  },
  {
    opportunitySlug: "river-city-research-residency",
    status: "想申请",
    nextAction: "整理城市研究相关作品，并写 800 字中文研究计划。",
    materialProgress: [
      { name: "作品集 Portfolio", progress: 70, note: "筛选城市主题作品" },
      { name: "Artist Statement", progress: 80, note: "中文版本可用" },
      { name: "CV", progress: 80, note: "基本完成" },
      { name: "项目计划 Project Proposal", progress: 30, note: "需要明确研究方法" },
      { name: "预算说明 Budget", progress: 20, note: "估算住宿差额" },
    ],
  },
  {
    opportunitySlug: "nordic-media-lab",
    status: "等待结果",
    nextAction: "等待技术面谈通知，同时准备申根签证材料清单。",
    materialProgress: [
      { name: "英文 Portfolio", progress: 100, note: "已提交" },
      { name: "英文 Project Proposal", progress: 100, note: "已提交" },
      { name: "技术需求说明", progress: 100, note: "已提交" },
      { name: "CV", progress: 100, note: "已提交" },
      { name: "签证材料", progress: 35, note: "待邀请函" },
    ],
  },
];

export const materialGuides: MaterialGuide[] = [
  {
    key: "portfolio",
    title: "作品集",
    englishTitle: "Portfolio",
    description: "用 10-15 页呈现与目标驻留最相关的作品，而不是塞进所有作品。",
    tips: [
      "研究型驻留优先展示过程、文本和调研线索。",
      "生产型驻留需要说明作品尺寸、材料和现场条件。",
      "国际项目建议准备英文标题、媒介、年份和简短说明。",
    ],
  },
  {
    key: "statement",
    title: "艺术家陈述",
    englishTitle: "Artist Statement",
    description: "说明你持续关心什么问题、为什么现在需要驻留、驻留如何帮助推进创作。",
    tips: [
      "避免只描述风格，要写清楚创作问题。",
      "英文版本保持短句，减少复杂抽象表达。",
      "与 project proposal 分工：statement 写长期方向，proposal 写这次要做什么。",
    ],
  },
  {
    key: "cv",
    title: "个人简历",
    englishTitle: "CV",
    description: "控制在 1-2 页，突出教育、项目、发表、驻留和公共分享经历。",
    tips: [
      "刚毕业创作者可以加入工作坊、研究项目和课程成果。",
      "中英文版本格式保持一致。",
      "不要把无关兼职经历放在最前面。",
    ],
  },
  {
    key: "proposal",
    title: "项目计划",
    englishTitle: "Project Proposal",
    description: "回答研究问题、方法、当地语境、时间安排和预期成果。",
    tips: [
      "研究型驻留请强调研究问题、方法和当地语境。",
      "社区参与型驻留请补充公共项目或工作坊经验。",
      "技术实验型驻留需要写清设备需求和可实现范围。",
    ],
  },
  {
    key: "work-description",
    title: "作品说明",
    englishTitle: "Work Description",
    description: "为每件作品写清媒介、尺寸、年份、展示方式和与主题的关系。",
    tips: ["保持具体，不要重复 artist statement。", "影像作品应附时长、链接和密码。"],
  },
  {
    key: "budget",
    title: "预算说明",
    englishTitle: "Budget",
    description: "列出交通、住宿差额、签证、保险、制作材料和日常生活成本。",
    tips: ["高成本项目需要提前判断资助来源。", "不要忽略保险、城市交通和作品运输。"],
  },
  {
    key: "recommendation",
    title: "推荐信",
    englishTitle: "Recommendation Letter",
    description: "提前联系导师、策展人或合作方，说明申请项目和截止日期。",
    tips: ["给推荐人提供作品集和项目摘要。", "国际项目建议预留至少两周。"],
  },
];

export const institutionApplicants: InstitutionApplicant[] = [
  {
    name: "林一然",
    city: "上海",
    discipline: "影像 / 装置",
    portfolioPreview: "10 件影像与空间装置作品",
    matchTags: ["影像", "城市", "英文可沟通"],
    materialCompletion: 86,
    language: "中文 / 英文",
    status: "准备中",
  },
  {
    name: "陈默",
    city: "北京",
    discipline: "绘画 / 材料实验",
    portfolioPreview: "8 件纸本与材料实验作品",
    matchTags: ["首次驻留", "材料实验", "中文材料"],
    materialCompletion: 72,
    language: "中文",
    status: "想申请",
  },
  {
    name: "沈米娅",
    city: "成都",
    discipline: "新媒体 / 交互影像",
    portfolioPreview: "实时影像与互动装置文档",
    matchTags: ["技术实验", "英文材料", "有设备清单"],
    materialCompletion: 94,
    language: "中文 / 英文",
    status: "已提交",
  },
  {
    name: "Ake Lau",
    city: "广州",
    discipline: "策展 / 写作",
    portfolioPreview: "研究文本与策展项目案例",
    matchTags: ["研究型", "公共空间", "低预算"],
    materialCompletion: 81,
    language: "中文 / 英文",
    status: "等待结果",
  },
];

export const institutionStats = [
  { value: "48", label: "收到申请" },
  { value: "21", label: "待审核" },
  { value: "8", label: "已加入短名单" },
  { value: "5", label: "已沟通" },
  { value: "76%", label: "材料完整率" },
];

export const guideSections = [
  {
    title: "如何判断驻留项目是否可信",
    text: "优先查看机构背景、往届艺术家、费用说明、住宿条件、版权条款和联系方式。信息越具体，申请风险越低。",
  },
  {
    title: "首次驻留如何控制成本",
    text: "先选择无申请费、住宿明确、语言要求友好的项目，再判断交通、签证、保险和制作材料是否可承受。",
  },
  {
    title: "什么时候开始准备材料",
    text: "建议在截止前 3-4 周完成作品集和陈述，截止前 2 周完成项目计划，推荐信和英文材料需要更早准备。",
  },
  {
    title: "中文语境下如何理解海外驻留",
    text: "不要只看项目名称，要看它期待的是研究、生产、社区协作还是最终展示，并判断自己的创作阶段是否匹配。",
  },
];

export const communityPosts: CommunityPost[] = [
  {
    title: "首次申请海外驻留，预算应该怎么估？",
    author: "Luna",
    time: "2 小时前",
    comments: 23,
  },
  {
    title: "英文 Artist Statement 需要多学术？",
    author: "阿树",
    time: "5 小时前",
    comments: 17,
  },
  {
    title: "研究型驻留和生产型驻留的 proposal 区别",
    author: "策展小白",
    time: "8 小时前",
    comments: 31,
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
