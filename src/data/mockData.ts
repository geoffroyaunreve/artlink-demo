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
  image: string;
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
  artistSlug: string;
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
  avatar: string;
};

export const heroImage =
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=80";

export const platformStats = [
  { value: "86", label: "个精选驻留项目" },
  { value: "24", label: "家认证机构" },
  { value: "320", label: "位青年艺术家" },
  { value: "92%", label: "项目标注费用与住宿信息" },
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

export const opportunities: Opportunity[] = [
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
    image:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?auto=format&fit=crop&w=1200&q=80",
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
    artistSlug: "lin-yiran",
    opportunitySlug: "shoreline-asian-young-artists",
    score: 86,
    reasons: ["影像与装置媒介匹配", "无申请费且提供住宿", "接受中国青年艺术家"],
  },
  {
    artistSlug: "ake-lau",
    opportunitySlug: "river-city-research-residency",
    score: 91,
    reasons: ["研究主题契合城市公共空间", "中文材料友好", "适合低预算申请"],
  },
  {
    artistSlug: "mia-shen",
    opportunitySlug: "nordic-media-lab",
    score: 78,
    reasons: ["新媒体方向匹配", "设备支持明确", "需评估项目费和签证成本"],
  },
  {
    artistSlug: "chen-mo",
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
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "英文 Artist Statement 需要多学术？",
    author: "阿树",
    time: "5 小时前",
    comments: 17,
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "研究型驻留和生产型驻留的 proposal 区别",
    author: "策展小白",
    time: "8 小时前",
    comments: 31,
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
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
