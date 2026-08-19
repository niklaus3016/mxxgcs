import { MBTIProfile, MBTIResult, SBTIProfile, SBTIResult } from '../types';

export const MBTI_PROFILES: Record<string, MBTIProfile> = {
  INTJ: {
    type: 'INTJ',
    title: '远见战略家',
    subtitle: '独立笃定的洞察者与系统建构师',
    motto: '“世界是未被理顺的系统，而我持有重构的蓝图。”',
    coreTraits: ['理智独立', '远见卓识', '严谨高效', '追求卓越'],
    color: '#4F46E5', // Indigo
    bgGradient: 'from-indigo-900 via-slate-900 to-slate-950',
    description: '你拥有极罕见的理智与深远战略洞察。你不满足于表象和旧规则，擅长在大脑中重构复杂模型，以强大的意志力推进长远目标的达成。',
    advantages: [
      '极强的长远战略规划与系统构建能力',
      '不受外界情绪干扰，始终保持客观冷静',
      '对知识和自我提升有极高的终身追求',
      '面对复杂棘手局势能迅速厘清关键核心'
    ],
    shortfalls: [
      '对效率低下或缺乏逻辑的言行耐受度较低',
      '可能过度沉浸于思想世界而忽略日常情感关怀',
      '过于追求完美，容易给自己和团队施加巨大压力'
    ],
    careerAdvice: [
      '适合战略规划师、系统架构师、科研学者、高级顾问等需要独立思考与全局统筹的领域。',
      '建议寻找给予充分自主权、尊重专业逻辑的组织环境。'
    ],
    socialAdvice: [
      '学会向身边亲近的人适度展现软弱与温暖，倾听比急于给出解决方案更有力量。',
      '尝试接受不完美的细节，给社交留下一些随性流动的空间。'
    ],
    growthAdvice: [
      '将你宏大的理想落地为可被他人理解的语言，沟通是战略落地的最终桥梁。',
      '注意保持身体节律，避免因过度高强度思考导致精神耗竭。'
    ]
  },
  INTP: {
    type: 'INTP',
    title: '逻辑探索者',
    subtitle: '洞悉本质的思想家与理论解构师',
    motto: '“好奇心是探索宇宙底层的钥匙，逻辑是唯一的信仰。”',
    coreTraits: ['深度思考', '求真务实', '模式识别', '开放包容'],
    color: '#0284C7', // Sky Blue
    bgGradient: 'from-sky-900 via-slate-900 to-slate-950',
    description: '你对世间万物的底层原理抱有无限的好奇。你头脑如同一台高速运转的精密计算器，善于破除偏见，寻找最精炼自洽的规律体系。',
    advantages: [
      '卓越的逻辑推理与模式识别天赋',
      '思想极度开放，勇于挑战既有权威与陈规',
      '能够客观无偏见地评估各种可能性',
      '在专业技术或理论领域具有极高领悟力'
    ],
    shortfalls: [
      '容易深陷理论推演而延误实际行动落地',
      '对繁琐的社会礼节与机械例行公事感到厌倦',
      '有时表达过于抽象，令他人难以跟上节奏'
    ],
    careerAdvice: [
      '适合数据科学家、哲学研究员、算法工程师、产品架构师等重度依赖智力深度的岗位。',
      '避免过于死板、毫无创新自由的重复性体力工作。'
    ],
    socialAdvice: [
      '在社交中表达关切时，不必过于拘泥于逻辑正确，真诚的情感流动最重要。',
      '定期走出门户，与志同道合的同频者展开思想碰撞。'
    ],
    growthAdvice: [
      '试着将70%完善的想法付诸实践，在行动的反馈中迭代，而非等待100%完美。',
      '建立时间管理习惯，防止精力被分散在过多无意义的兴趣细分分支中。'
    ]
  },
  ENTJ: {
    type: 'ENTJ',
    title: '统帅指挥官',
    subtitle: '果敢坚毅的领袖与破局执行者',
    motto: '“没有克服不了的难关，只有尚未优化的资源与路径。”',
    coreTraits: ['破局果断', '宏观视野', '高效赋能', '坚韧不拔'],
    color: '#2563EB', // Blue
    bgGradient: 'from-blue-900 via-slate-900 to-slate-950',
    description: '天生的领袖与变革者。你具备极强的宏观大局观与目标达成意志，善于整合资源、凝聚人力量，将看似不可能的挑战化为清晰的胜势。',
    advantages: [
      '高瞻远瞩的战略决策与极强执行力',
      '善于识别并挖掘团队成员的核心潜力',
      '在危机面前表现出超乎常人的镇定与果断',
      '追求高标准与可持续发展的组织效率'
    ],
    shortfalls: [
      '可能表现得过于强势或急躁，忽视过程中的细微感受',
      '对迟钝或推诿责任的行为容忍度极低',
      '有时容易独揽大权，给合作者带来压迫感'
    ],
    careerAdvice: [
      '适合企业高管、创业者、项目总监、风险投资人等需要决策力与统御力的角色。',
      '聚焦于重塑流程、带领团队攻坚克的突破性赛道。'
    ],
    socialAdvice: [
      '倾听是比说服更高级的领导力，学会给予他人在对话中主导的舞台。',
      '认同并赞美团队的阶段性付出，情感激励能带来更持久的忠诚。'
    ],
    growthAdvice: [
      '允许生活出现偶然与放空，休息是为了更远大的征程。',
      '修练柔性智慧，刚柔并济能让你在人生的长跑中游刃有余。'
    ]
  },
  ENTP: {
    type: 'ENTP',
    title: '思维破局者',
    subtitle: '睿智敏捷的创新家与灵感辩手',
    motto: '“规则是用来打破的，可能性才是世界的本质。”',
    coreTraits: ['头脑风暴', '敏锐机智', '破旧立新', '充满激情'],
    color: '#0D9488', // Teal
    bgGradient: 'from-teal-900 via-slate-900 to-slate-950',
    description: '你的大脑是个永动机般的创造力工厂。你热爱思想碰撞与辩论，能够以独特的视角穿透盲区，在没有人走过的道路上开辟新局。',
    advantages: [
      '极强的快速学习能力与跨界联想力',
      '善于在辩论中激发全新创意与解决方案',
      '面对未知与变革充满热情，毫无畏惧',
      '语言表达极具说服力与感染力'
    ],
    shortfalls: [
      '容易对已经成熟的收尾细节失去兴趣，转向新热点',
      '有时为了辩论而辩论，可能无意间刺伤敏感的心灵',
      '同时开启过多项目导致精力分散'
    ],
    careerAdvice: [
      '适合创业策划、创意总监、品牌顾问、技术探路人等需要不断突破创新的岗位。',
      '搭配执行力强的搭档配合，将你的金点子落为现实产出。'
    ],
    socialAdvice: [
      '区分有建设性的思想讨论与无意义的舌战，保留他人的尊严与面子。',
      '向重要的人展示你的可预测性与陪伴承诺。'
    ],
    growthAdvice: [
      '选择1-2个最有深远价值的方向深耕，‘完成’比‘开始’更能检验智慧。',
      '学会享受收尾工作中的沉淀感与秩序感。'
    ]
  },

  INFJ: {
    type: 'INFJ',
    title: '心灵远见者',
    subtitle: '深刻笃定的理想主义者与灵魂导师',
    motto: '“以温和的方式，震撼并疗愈这个世界。”',
    coreTraits: ['深刻共情', '理想主义', '坚定信念', '洞察人性'],
    color: '#7C3AED', // Purple
    bgGradient: 'from-purple-900 via-slate-900 to-slate-950',
    description: '你兼具深邃的理想主义与严密的内心秩序。你能够穿透表象直击人性深处的需求，用安静而笃定的力量推动世界向更有温度的方向改变。',
    advantages: [
      '极其敏锐的情感共情与直觉洞察力',
      '对自身价值观与使命抱有终身坚守的毅力',
      '擅长撰写富有深意与启发力的文字或语言',
      '能为他人指明精神方向，给予深层次关怀'
    ],
    shortfalls: [
      '极易吸收周遭的负面情绪导致自身心理耗竭',
      '过于追求道德与精神的极致完美，对现实失望',
      '习惯隐藏真实自我，可能令人觉得难以真正靠近'
    ],
    careerAdvice: [
      '适合心理咨询师、作家、教育家、人文研究者、公益项目发起人等。',
      '选择符合自身核心道德信念的组织，拒绝纯粹冷酷的功利环境。'
    ],
    socialAdvice: [
      '建立健康的情感隔离边界，别人的课题不必全部背负在自己肩上。',
      '勇敢表达自己的真实需求，允许朋友为你分担痛苦。'
    ],
    growthAdvice: [
      '拥抱现实中的灰色地带与不完美，改变是渐进的沉淀而非一蹴而就。',
      '定期进行心灵洗涤，在自然与独处中复原能量。'
    ]
  },
  INFP: {
    type: 'INFP',
    title: '灵性追光者',
    subtitle: '温润纯粹的精神探索者与心灵诗人',
    motto: '“保持内心的纯粹与炙热，万物皆有裂痕，那是光照进来的地方。”',
    coreTraits: ['内省纯粹', '同理心强', '艺术潜质', '包容博爱'],
    color: '#EC4899', // Pink
    bgGradient: 'from-pink-900 via-slate-900 to-slate-950',
    description: '你拥有极其充沛丰盈的内心精神宇宙。你珍视真实、善良与个人独特价值，像一位虔诚的追光者，用温柔而执着的目光守护世间的真善美。',
    advantages: [
      '极度丰富的想象力与深厚的艺术审美感知',
      '对所有生命抱有无条件的真诚包容与同理',
      '坚守内心的道德底线，不随波逐流',
      '能够创作出直击心灵深处的感人表达'
    ],
    shortfalls: [
      '对外界的批评与负面反馈极其敏感，易产生内耗',
      '面对残酷现实容易产生逃避心理或拖延习惯',
      '过于理想化，有时难以适应冷酷的管理规则'
    ],
    careerAdvice: [
      '适合独立创作者、插画家、心理疗愈师、文案主笔、艺术指导等自由且富情感深度的职业。',
      '避免充满恶意竞争和机械重复的环境。'
    ],
    socialAdvice: [
      '不要将他人的无心之举过度解读为针对自己的否定。',
      '找到真正懂你精神世界的“灵魂朋友”，质量远胜于数量。'
    ],
    growthAdvice: [
      '用细小具体的行动代替无休止的内心拷问，行动是化解内耗的最佳解药。',
      '学习设立明确的生活秩序与时间框架，保护你的灵感火焰。'
    ]
  },
  ENFJ: {
    type: 'ENFJ',
    title: '灵魂启发者',
    subtitle: '充满感染力的凝聚者与人本导师',
    motto: '“点亮他人的微光，汇聚成照亮前路的星河。”',
    coreTraits: ['热情聚能', '真诚利他', '卓越沟通', '赋能成长'],
    color: '#D97706', // Amber
    bgGradient: 'from-amber-900 via-slate-900 to-slate-950',
    description: '你是天生的鼓舞者与文化缔造者。你拥有出色的情绪感知力与号召力，总是能看到每个人身上的闪光点，并引导大家为了共同的愿景并肩前行。',
    advantages: [
      '极强的气场与跨群体沟通凝聚力',
      '发自内心地关怀他人，能极大地激发伙伴潜能',
      '善于协调组织气氛，构建和谐积极的文化环境',
      '言出必行，具有极高的社会责任感'
    ],
    shortfalls: [
      '过度关照他人需求而忽视了自己的身体与心理极限',
      '容易将他人的失败或不满归咎于自己做得不够好',
      '面对无可挽回的冲突时可能过于焦虑脆弱'
    ],
    careerAdvice: [
      '适合人力资源总监、教育培训导师、公关传播负责人、非营利组织领袖等。',
      '需要能够频繁与人互动、传递正向价值的平台。'
    ],
    socialAdvice: [
      '记住：你无法取悦所有人，学会放下对全员满意的执念。',
      '给身边人留出自主成长的空间，过度保护反而可能限制对方。'
    ],
    growthAdvice: [
      '将关怀与爱留一部分给自己，练习“拒绝”的艺术。',
      '定期梳理个人目标，确保没有为了顺应大家而偏离自己的初心。'
    ]
  },
  ENFP: {
    type: 'ENFP',
    title: '活力灵感家',
    subtitle: '热情洋溢的探索者与能量感染源',
    motto: '“生命是一场无止境的冒险，处处藏着惊喜与可能。”',
    coreTraits: ['能量满满', '创意无限', '真诚热烈', '触类旁通'],
    color: '#F59E0B', // Amber Gold
    bgGradient: 'from-amber-800 via-slate-900 to-slate-950',
    description: '你像一阵充满活力的暖风，走到哪里就能带去欢笑与灵感。你对新鲜事物抱有永不熄灭的热情，善于建立人与人之间深厚而奇妙的连接。',
    advantages: [
      '源源不断的创意灵感与充沛的社交热情',
      '极强的适应力与跨领域学习突破速度',
      '富有极强的感染力，能迅速拉近人际距离',
      '勇于尝试未知的可能性，生活色彩斑斓'
    ],
    shortfalls: [
      '容易“三分钟热度”，难以维持长时间机械沉闷的后续执行',
      '情绪波动较为明显，易受外界环境氛围影响',
      '在细节管理与财务计划上可能不够严谨'
    ],
    careerAdvice: [
      '适合活动策划、节目主持人、品牌整合营销、自媒体主理人、体验设计师等。',
      '极力推荐充满变化、高互动性与创意自由的赛道。'
    ],
    socialAdvice: [
      '保持热情的深度的真诚是你的杀手锏，但也要学会识别消耗你能量的伪关系。',
      '给亲密关系提供稳定沉静的支撑力。'
    ],
    growthAdvice: [
      '引入外部微小的结构约束（如自动化提醒、搭档督促）帮助你完成收尾。',
      '在情绪高涨时不做重大决定，给思考留出24小时冷静期。'
    ]
  },

  ISTJ: {
    type: 'ISTJ',
    title: '秩序基石守护者',
    subtitle: '严谨务实的履职者与可靠执行家',
    motto: '“恪守承诺，脚踏实地，秩序是繁荣的唯一保障。”',
    coreTraits: ['极度可靠', '严谨尽责', '尊重规则', '沉稳务实'],
    color: '#059669', // Emerald
    bgGradient: 'from-emerald-900 via-slate-900 to-slate-950',
    description: '你是任何中流砥柱组织不可或缺的稳固基石。你讲求事实、尊重规则、做事一丝不苟，用默默无闻的奉献与高标准的履职赢得了所有人最深沉的信任。',
    advantages: [
      '无与伦比的责任心与高标准的任务交付率',
      '对细节、数据与工作流程有着极强的把控力',
      '沉着冷静，在乱局中依然能按规程有序推进',
      '极其守时守信，值得百分之百拖付重大事项'
    ],
    shortfalls: [
      '对未经验证的新奇变革可能抱有较强的本能抵触',
      '有时显得过于严苛死板，缺乏足够的灵活性',
      '不善于主动表达内心的情感与温情需求'
    ],
    careerAdvice: [
      '适合财务审计、合规风控官、法务专员、质量检测主管、运营总监等岗位。',
      '在制度健全、讲求契约精神的稳健型大企业中如鱼得水。'
    ],
    socialAdvice: [
      '尝试用语言和行动将你默默的付出表达出来，别人需要听到你的爱意。',
      '理解他人偶尔的随性与不按牌理出牌，包容多样性。'
    ],
    growthAdvice: [
      '适度拥抱微小的创新与改变，变革有时是优化秩序的必要过程。',
      '学会给自己放假，允许生活出现暂时的非计划状态。'
    ]
  },
  ISFJ: {
    type: 'ISFJ',
    title: '温润守卫者',
    subtitle: '细致体贴的照顾者与默默守护人',
    motto: '“用无声的细致与善意，温暖身边的每一个角落。”',
    coreTraits: ['细心体贴', '默默奉献', '忠诚可靠', '注重实际'],
    color: '#10B981', // Emerald Mint
    bgGradient: 'from-teal-900 via-slate-900 to-slate-950',
    description: '你拥有大地般宽广而细腻的包容力。你总是默默关注身边人的需求，无微不至地提供实质性的关怀与帮助，是家庭与团队中最让人安心的后盾。',
    advantages: [
      '极强的观察力，能敏锐捕捉他人的生活细节与情绪偏好',
      '工作踏实勤恳，对分配的职责极其负责尽心',
      '待人谦逊温暖，极具亲和力与包容心',
      '擅长打造温馨、有条理且富有安全感的生活空间'
    ],
    shortfalls: [
      '习惯过度压抑自己的真实需求，导致委屈积聚',
      '难以开口拒绝他人的请求，容易被过度剥削精力',
      '对冲突极其回避，宁愿委曲求全'
    ],
    careerAdvice: [
      '适合行政主管、医疗护理专家、客户成功经理、幼教专家、档案管理员等。',
      '需要充满人情味、氛围和谐且认可细致奉献的环境。'
    ],
    socialAdvice: [
      '勇敢说“不”不会破坏真正的友情，反而能建立健康的尊严边界。',
      '定期坦诚地表达自己的辛苦，让爱你的人有机会回报你。'
    ],
    growthAdvice: [
      '将关爱自己的优先级提升到与照顾他人同等的高度。',
      '学会从正面的角度看待合理的冲突，冲突往往是建立深层信任的契机。'
    ]
  },
  ESTJ: {
    type: 'ESTJ',
    title: '高效总管',
    subtitle: '务实讲求绩效的组织者与秩序基建者',
    motto: '“效率即生命，标准即底线，用执行力书写结果。”',
    coreTraits: ['组织力强', '雷厉风行', '讲求标准', '责任担当'],
    color: '#0284C7', // Ocean Blue
    bgGradient: 'from-sky-900 via-slate-900 to-slate-950',
    description: '你是卓越的现场指挥官与流程重组大师。你对秩序、规则与产出效率有着极高的敏感度，能够迅速将混乱的项目理顺为井井有条的高效流水线。',
    advantages: [
      '极强的现场组织协调与项目管理实施能力',
      '决策迅速，做事干净利落，绝不拖泥带水',
      '捍卫规则与公平，建立清晰的奖惩绩效标准',
      '具备强大的抗压与带队攻坚能力'
    ],
    shortfalls: [
      '可能过于看重短期产出而忽视员工的长期心理感受',
      '容易表现得武断或缺乏弹性，对异见不够宽容',
      '习惯以自己的高标准衡量所有人，造成团队紧张'
    ],
    careerAdvice: [
      '适合生产运营总监、项目经理、建设工程指挥、物流供应链主管等。',
      '需要明确目标、讲求可量化绩效产出的实业领域。'
    ],
    socialAdvice: [
      '下班后学会切换模式，不要用工作中的指令语气与家人朋友沟通。',
      '多一些赞美与共情，少一些监督与挑剔。'
    ],
    growthAdvice: [
      '理解“过程中的人情”也是项目长期成功的关键润滑剂。',
      '给团队留出探索新路径的试错空间，别让标准限制了创新。'
    ]
  },
  ESFJ: {
    type: 'ESFJ',
    title: '和谐凝聚者',
    subtitle: '热情贴心的社群中心与氛围守护官',
    motto: '“家与团队的和谐，是我们共同最珍贵的财富。”',
    coreTraits: ['热情周到', '凝聚力强', '乐于助人', '注重传统'],
    color: '#16A34A', // Green
    bgGradient: 'from-green-900 via-slate-900 to-slate-950',
    description: '你是人群中的小太阳与社交纽带。你天然懂得如何让每个人感到被关怀与重视，擅长筹办聚会、维护集体和谐，打造充满归属感的温馨社群。',
    advantages: [
      '极强的社交亲和力与人群情绪调和天赋',
      '办事周到细致，极富服务精神与责任心',
      '能够快速建立广泛而稳固的人际支持网络',
      '忠诚可靠，是值得信赖的伙伴与家庭核心'
    ],
    shortfalls: [
      '极易受到外界评价与冷落的影响，过度渴望认可',
      '面对冷酷的批评容易感到心碎或过度防卫',
      '有时过于操心他人闲事，让人感到缺乏边界感'
    ],
    careerAdvice: [
      '适合社区运营总监、公关活动主管、客户关系专家、高级乘务管理等。',
      '能够频繁与人相处、展现关怀并获得积极正反馈的角色。'
    ],
    socialAdvice: [
      '学会建立自我价值的内驱源泉，不要将幸福感完全系于他人的口风。',
      '尊重每个人独特的生活选择，哪怕那不符合传统的期待。'
    ],
    growthAdvice: [
      '学会坦然接受非针对性的客观批评，视其为自我完善的养分。',
      '给自己留出不被打扰的私人时间，滋养内心的安宁。'
    ]
  },

  ISTP: {
    type: 'ISTP',
    title: '硬核工匠',
    subtitle: '冷静敏锐的实干家与危机处理高手',
    motto: '“用手去摸索世界，用技术解决最棘手的问题。”',
    coreTraits: ['冷静理性', '动手极强', '危机应对', '随性自然'],
    color: '#6366F1', // Violet
    bgGradient: 'from-violet-900 via-slate-900 to-slate-950',
    description: '你是精通实用技术的孤勇者与危机处理专家。你平时保持低调冷静，对机械、系统或物理世界的运转规律有着天生的直觉，突发状况面前能瞬间爆发破局。',
    advantages: [
      '卓越的现场故障排查与动手解决问题天赋',
      '极端压力下依然能保持超乎寻常的沉着冷静',
      '适应力极强，能因地制宜利用现有工具创造奇迹',
      '言简意赅，做事干净高效，讨厌拖泥带水'
    ],
    shortfalls: [
      '可能显得过于冷漠疏离，不愿参与深度情感交流',
      '对繁琐规章制度与长期宏大计划缺乏耐心',
      '喜欢冒险刺激，有时做事缺乏长远风险防范'
    ],
    careerAdvice: [
      '适合精密工程师、应急救援指挥、极限摄影师、飞行员、特种技术专家等。',
      '重度依赖实操技能、结果导向且富有挑战度的赛道。'
    ],
    socialAdvice: [
      '尝试多用言语表达对伴侣或朋友的关心，行动虽好，言语亦有温度。',
      '给深爱你的人提供足够的可预测性，减少突然失联。'
    ],
    growthAdvice: [
      '培养长远的规划意识，短期的危机处理固然精彩，长远的防范更为稳妥。',
      '学会理解社交礼仪背后的社会润滑功能。'
    ]
  },
  ISFP: {
    type: 'ISFP',
    title: '随性艺术家',
    subtitle: '灵动真挚的审美感知者与自由游侠',
    motto: '“生活是一幅流动的画卷，用心感知当下的美好。”',
    coreTraits: ['审美敏锐', '真挚随性', '温和宽容', '活在当下'],
    color: '#8B5CF6', // Purple-Violet
    bgGradient: 'from-purple-900 via-slate-900 to-slate-950',
    description: '你拥有极其敏锐的感官体验与独特的审美品味。你温和而自由，不喜欢束缚与说教，用真挚细腻的心灵捕捉生活中的色彩、声音与微小感动。',
    advantages: [
      '出类拔萃的艺术审美、色彩感知与空间构图力',
      '待人温和真诚，极具包容度，不强加观点于人',
      '活在当下，能够深刻体会身边的美与微小幸福',
      '灵活应变，善于在具体实践中展现惊人灵感'
    ],
    shortfalls: [
      '极度讨厌被控制与死板规划，可能导致计划延误',
      '面对竞争激烈的压迫环境容易退缩放弃',
      '不擅长长期财务或战略规划，容易随性消费'
    ],
    careerAdvice: [
      '适合服装设计师、花艺师、摄影师、音乐人、主厨、时尚买手等。',
      '需要给予高度审美自由、表达个人风格的创作空间。'
    ],
    socialAdvice: [
      '你的温柔是美好的品质，但也要学会坚守原则，防止被有心人占便宜。',
      '找到能理解你艺术直觉与细腻心思的知己。'
    ],
    growthAdvice: [
      '建立基础的理财与时间管理秩序，这不会扼杀自由，反而能为自由保驾护航。',
      '尝试勇敢地将你的艺术作品或观点展现给更大的舞台。'
    ]
  },
  ESTP: {
    type: 'ESTP',
    title: '敏锐挑战者',
    subtitle: '果敢活力的实干家与现场破局高手',
    motto: '“行动高于空谈，机会永远属于当下果断出手的人。”',
    coreTraits: ['极速行动', '敏锐抓卡', '社交达人', '灵活应变'],
    color: '#3B82F6', // Cobalt
    bgGradient: 'from-blue-900 via-slate-900 to-slate-950',
    description: '你是充满野性力量与敏锐嗅觉的行动派。你不屑于虚无缥缈的理论，极度擅长捕抓当下的商业机会或危机漏洞，靠果断的行动力斩获战果。',
    advantages: [
      '极其敏锐的事实观察力与危机快速反应力',
      '充满活力与幽默感，能迅速掌控谈判与社交现场',
      '不惧风险，敢于在不确定性中果断押注突破',
      '讲求实用主义，一切以即时成果和实效说话'
    ],
    shortfalls: [
      '容易忽略长远规避风险，沉迷于短期刺激与回报',
      '对抽象理论和长篇大论缺乏耐心，易显得躁动',
      '有时说话过于直接，冲动之下可能越界'
    ],
    careerAdvice: [
      '适合大客户销售总监、应急公关突破官、创业项目拓展人、赛车手、证券交易员等。',
      '充满快节奏、高风险、高回报且能即时反馈的竞争环境。'
    ],
    socialAdvice: [
      '社交中适当放慢节奏，倾听对方背后未表达的情感诉求。',
      '承诺前多思考三秒，确保自己能够真正履行。'
    ],
    growthAdvice: [
      '培养长线思维，学会为远期收益牺牲一部分眼前的刺激。',
      '在做重大资产或人生决策时，寻求理性冷静的顾问协助防范盲区。'
    ]
  },
  ESFP: {
    type: 'ESFP',
    title: '璀璨乐天派',
    subtitle: '魅力四射的舞台中心与快乐分享家',
    motto: '“把每一天都过成欢庆的盛典，快乐因分享而加倍。”',
    coreTraits: ['魅力四射', '乐天幽默', '共情温暖', '现场掌控'],
    color: '#EC4899', // Bright Pink
    bgGradient: 'from-pink-900 via-slate-900 to-slate-950',
    description: '你是人间快乐的源泉与天然的聚光灯吸引者。你拥有无可比拟的热情与表现力，用幽默与爱意感染身边的每个人，把沉闷的生活变成充满欢声笑语的盛宴。',
    advantages: [
      '天然的舞台魅力与出色的肢体/语言表现力',
      '极强的共情与现场气氛调动天赋，让人感到轻松快乐',
      '热心助人，能够第一时间为朋友提供实际拥抱与陪伴',
      '乐观豁达，面对挫折拥有惊人的自我修复力'
    ],
    shortfalls: [
      '容易逃避沉重严肃的长期责任或负面情绪',
      '可能过于关注当下的享乐而忽略未来的储蓄与规划',
      '在需要长时间孤独钻研的枯燥任务中难以坚持'
    ],
    careerAdvice: [
      '适合演艺人员、高端婚礼统筹、时尚博主、儿童游乐策划、品牌形象大使等。',
      '需要展露个人魅力、带给人快乐与美感的高互动岗位。'
    ],
    socialAdvice: [
      '当朋友需要深沉严肃的倾听时，暂缓开玩笑，给予深刻的同理。',
      '建立深层次的知己关系，而不仅止于热闹的欢聚伙伴。'
    ],
    growthAdvice: [
      '练习面对生活的阴暗面与沉重主题，成长需要经历风雨的洗礼。',
      '制定简单的储蓄与健康计划，为长远的欢愉打下坚实底座。'
    ]
  }
};

export const SBTI_PROFILES: Record<string, SBTIProfile> = {
  'S-01': {
    code: 'S-01',
    title: '极致结构工程师',
    orderCategory: 'S-结构化思维',
    subtitle: '秩序顶峰，逻辑严密的系统缔造者',
    coreDefinition: '将混沌转化为清晰层级的高维架构者，追求思维自洽与模型无瑕。',
    keywords: ['结构化', '系统严密', '框架重组', '理性秩序'],
    color: '#3B82F6',
    behaviorPattern: [
      '极度依赖分类整理，习惯将任务拆解为树状思维图谱。',
      '对流程中的逻辑漏洞与前后矛盾保持绝对零容忍。',
      '表达时句式清晰，极常用“第一、第二、核心维度”等结构词。'
    ],
    thinkingStyle: [
      '自上而下的整体建模思维，优先厘清底层运行规则。',
      '善于将纷繁复杂的现象抽象提炼为通用的底层公式。'
    ],
    suitableScenarios: [
      '复杂系统架构设计、企业级流程SOP标准化搭建、战略顶层设计。'
    ],
    selfOptimization: [
      '允许现实中存在适当的模糊与容错空间，过于严苛的结构有时会限制灵感涌现。',
      '关注结构中“人”的情感变量，柔性润滑能让硬核结构运转更顺畅。'
    ]
  },
  'S-02': {
    code: 'S-02',
    title: '规整提炼官',
    orderCategory: 'S-结构化思维',
    subtitle: '高效降维，厘清脉络的信息化繁大师',
    coreDefinition: '擅长在海量乱象中一眼看透本质，建立高精准度的运行逻辑。',
    keywords: ['精准提炼', '因果剖析', '逻辑清晰', '规整高效'],
    color: '#2563EB',
    behaviorPattern: [
      '面对杂乱无章的汇报，能迅速帮对方归纳出3点核心结论。',
      '习惯对工作环境、数字文件进行严密的命名分类。'
    ],
    thinkingStyle: [
      '强因果链推演，注重依据与证明的完备性。'
    ],
    suitableScenarios: [
      '数据分析诊断、合规风控、项目可行性严密评估。'
    ],
    selfOptimization: [
      '尝试接受“先完成再完善”的敏捷心态，避免因追求完美框架而延误启动。'
    ]
  },
  'S-03': {
    code: 'S-03',
    title: '框架探索者',
    orderCategory: 'S-结构化思维',
    subtitle: '理智清晰，灵活构建新维度的破局者',
    coreDefinition: '既拥有严密逻辑，又具备破除旧框架建立新结构的敏锐洞察。',
    keywords: ['灵活建构', '破旧立新', '逻辑自洽', '模式创新'],
    color: '#1D4ED8',
    behaviorPattern: [
      '善于对比不同模式的优劣，快速组合出新的高效方案。'
    ],
    thinkingStyle: [
      '模块化拼接思考，将不同领域的优秀秩序跨界迁移。'
    ],
    suitableScenarios: [
      '商业模式创新、产品功能迭代规划、重组混乱团队。'
    ],
    selfOptimization: [
      '新框架建立后，要留足时间深化运营，避免频繁更换底层规则。'
    ]
  },

  'B-01': {
    code: 'B-01',
    title: '动态平衡大师',
    orderCategory: 'B-平衡行为',
    subtitle: '中庸有度，应变从容的稳健领航员',
    coreDefinition: '在张力与冲突中游刃有余，保持极佳的自我节律与人际公约数。',
    keywords: ['动态平衡', '中庸有度', '情绪稳健', '可持续性'],
    color: '#10B981',
    behaviorPattern: [
      '做事留有余地，既不盲目冒进，也不保守僵化。',
      '极少出现大起大落的极值情绪，保持深沉宁静。'
    ],
    thinkingStyle: [
      '对偶互补思维，看到风险的同时预估机遇，看到收益的同时锁定回撤。'
    ],
    suitableScenarios: [
      '复杂利益体撮合、大型组织中枢协调、长期资产稳健管理。'
    ],
    selfOptimization: [
      '在极少数关键决胜时刻，要敢于打破平衡，展现单点极致突破的魄力。'
    ]
  },
  'B-02': {
    code: 'B-02',
    title: '枢纽调停者',
    orderCategory: 'B-平衡行为',
    subtitle: '协同多方，稳定气场的秩序润滑剂',
    coreDefinition: '具备强大的情绪吞吐与多方包容力，是群体中最让人安心的定海神针。',
    keywords: ['多方协同', '气场稳定', '情绪包容', '润物无声'],
    color: '#059669',
    behaviorPattern: [
      '善于倾听冲突双方的诉求，寻找最大公约数。'
    ],
    thinkingStyle: [
      '生态网状思考，关注系统中每一个节点的可持续健康度。'
    ],
    suitableScenarios: [
      '跨部门重大项目推进、危机公关调和、团队文化重建。'
    ],
    selfOptimization: [
      '调停他人时，不要忽略了自己的合理利益诉求，平衡也包括对自己的公平。'
    ]
  },
  'B-03': {
    code: 'B-03',
    title: '生态呼吸者',
    orderCategory: 'B-平衡行为',
    subtitle: '自我节律，掌控生活与工作律动的智者',
    coreDefinition: '深谙张弛之道，将自律与放松融合为自然顺畅的生命呼吸。',
    keywords: ['生命节律', '张弛有度', '身心合一', '从容不迫'],
    color: '#047857',
    behaviorPattern: [
      '高强度交付后会强制安排充沛的恢复期，拒绝无休止透支。'
    ],
    thinkingStyle: [
      '周期律动思维，顺应事物的发生发展规律。'
    ],
    suitableScenarios: [
      '长期个人创业、自由职业生涯规划、高端身心健康管理。'
    ],
    selfOptimization: [
      '在快节奏突发战役中，学会短时间拉满爆发力。'
    ]
  },

  'T-01': {
    code: 'T-01',
    title: '破局执行官',
    orderCategory: 'T-目标导向',
    subtitle: '极速聚焦，破阻达标的使命征服者',
    coreDefinition: '眼中只有终点线，具备极强的穿透力与破除万难的硬核推进力。',
    keywords: ['目标极敏', '高效穿透', '使命必达', '结果导向'],
    color: '#F59E0B',
    behaviorPattern: [
      '将大目标锁定后，对一切非必要的杂音进行果断屏蔽。',
      '以“交付成果”为衡量工作质量的唯一硬指标。'
    ],
    thinkingStyle: [
      '倒推反导思维，从最终成果反向倒排每日关键路径。'
    ],
    suitableScenarios: [
      '0到1攻坚战、业绩对赌突破、高压卡位竞争。'
    ],
    selfOptimization: [
      '关注战术推进中的团队磨损，适时给予战友掌声与休整，防范后劲不足。'
    ]
  },
  'T-02': {
    code: 'T-02',
    title: '战略里程碑大师',
    orderCategory: 'T-目标导向',
    subtitle: '步骤清晰，稳健推进的长跑赢家',
    coreDefinition: '善于将宏大远景化为一步一个脚印的踏实阶梯，靠定力赢取长远战略。',
    keywords: ['里程碑化', '稳健深耕', '定力强劲', '终局思维'],
    color: '#D97706',
    behaviorPattern: [
      '每天核对代办清单，完成一项标记一项，享受持续推进的掌控感。'
    ],
    thinkingStyle: [
      '复利阶梯思维，相信微小积累产生的巨大量变。'
    ],
    suitableScenarios: [
      '中长期重大科研攻关、品牌资产十年深耕、长线投资布局。'
    ],
    selfOptimization: [
      '保持对外部赛道颠覆性变化的敏锐度，防止在错误的阶梯上盲目固执。'
    ]
  },
  'T-03': {
    code: 'T-03',
    title: '结果使命家',
    orderCategory: 'T-目标导向',
    subtitle: '内驱强劲，追求卓越的自我超越者',
    coreDefinition: '不靠外界督促，靠内在炽热的胜负欲与自驱力不断刷新个人上限。',
    keywords: ['自我驱策', '极致追求', '超越极限', '成果导向'],
    color: '#B45309',
    behaviorPattern: [
      '主动给自己设定远高于平均线的挑战标准。'
    ],
    thinkingStyle: [
      '标杆超越思考，不断寻找行业顶尖标杆进行对标超越。'
    ],
    suitableScenarios: [
      '个人竞技体育、顶尖学术突破、高额绩效赛道。'
    ],
    selfOptimization: [
      '学会在没有达成理想结果时与自己和解，接纳过程本身的价值。'
    ]
  },

  'I-01': {
    code: 'I-01',
    title: '灵性觉察者',
    orderCategory: 'I-内在感知',
    subtitle: '内心丰盈，直觉敏锐的灵魂守护人',
    coreDefinition: '拥有一座深邃清澈的精神城堡，对情绪、审美与宇宙秩序有着天生共鸣。',
    keywords: ['敏锐觉察', '直觉洞穿', '精神丰盈', '真实自洽'],
    color: '#8B5CF6',
    behaviorPattern: [
      '定期进行深刻的自我复盘与心灵独处，清理心理杂质。',
      '对虚伪敷衍的人际交往有天然的敏锐抗拒。'
    ],
    thinkingStyle: [
      '全息直觉感悟，能够超越逻辑直接捕捉事物的核心情绪气场。'
    ],
    suitableScenarios: [
      '艺术人文创作、深度心理咨询、高端品牌灵魂设计。'
    ],
    selfOptimization: [
      '将深邃的内心觉察转化为具体的文字或行动产出，让内在灵感在现实世界落地生花。'
    ]
  },
  'I-02': {
    code: 'I-02',
    title: '信念守护者',
    orderCategory: 'I-内在感知',
    subtitle: '坚守价值观，深邃自省的安宁灯塔',
    coreDefinition: '在浮躁红尘中坚守原则底线，用安静的力量给周遭带来定力与启示。',
    keywords: ['坚守原则', '深邃自省', '温润安宁', '心灵灯塔'],
    color: '#7C3AED',
    behaviorPattern: [
      '做决策前必先问过内心是否符合自己的核心道德标准。'
    ],
    thinkingStyle: [
      '价值锚定思考，以内心信念为坐标系评估万物。'
    ],
    suitableScenarios: [
      '人文伦理审核、深度文化研究、公益精神引领。'
    ],
    selfOptimization: [
      '不要让过高的价值观门槛阻碍了与普通大众的温情连接。'
    ]
  },
  'I-03': {
    code: 'I-03',
    title: '共鸣疗愈师',
    orderCategory: 'I-内在感知',
    subtitle: '感知细腻，温润洞察的情感解忧人',
    coreDefinition: '能够深刻听懂他人言外之意的倾听者，用极致的同理心抚平伤痛。',
    keywords: ['深度共鸣', '温润疗愈', '同理洞察', '心灵抚慰'],
    color: '#6D28D9',
    behaviorPattern: [
      '倾听时眼神专注，能准确说出对方未说出口的真实情绪感受。'
    ],
    thinkingStyle: [
      '沉浸式镜像思维，感同身受地体悟他人的困境。'
    ],
    suitableScenarios: [
      '情感辅导、客户体验深度访谈、社区关怀组织。'
    ],
    selfOptimization: [
      '建立强大的情绪防护罩，避免过度代入他人的痛苦导致自身内耗伤神。'
    ]
  }
};

// MBTI Score Calculator
export function calculateMBTI(answers: Record<number, number>): MBTIResult {
  // Dimension raw totals
  let scoreEI = 0; // >0 is E, <0 is I
  let scoreSN = 0; // >0 is S, <0 is N
  let scoreTF = 0; // >0 is T, <0 is F
  let scoreJP = 0; // >0 is J, <0 is P

  // Counts to normalize
  let countEI = 0, countSN = 0, countTF = 0, countJP = 0;

  for (const [qIdStr, val] of Object.entries(answers)) {
    const qId = Number(qIdStr);
    if (qId >= 1 && qId <= 15) {
      scoreEI += val;
      countEI++;
    } else if (qId >= 16 && qId <= 30) {
      scoreSN += val;
      countSN++;
    } else if (qId >= 31 && qId <= 45) {
      scoreTF += val;
      countTF++;
    } else if (qId >= 46 && qId <= 60) {
      scoreJP += val;
      countJP++;
    }
  }

  // Determine Type letters
  const eOrI = scoreEI >= 0 ? 'E' : 'I';
  const sOrN = scoreSN >= 0 ? 'S' : 'N';
  const tOrF = scoreTF >= 0 ? 'T' : 'F';
  const jOrP = scoreJP >= 0 ? 'J' : 'P';

  const mbtiCode = `${eOrI}${sOrN}${tOrF}${jOrP}`;
  const profile = MBTI_PROFILES[mbtiCode] || MBTI_PROFILES['INTJ'];

  // Helper for percentage
  const maxPossible = (c: number) => c * 2 || 30; // max score per dimension
  
  const eiPercent = Math.round(50 + (scoreEI / maxPossible(countEI)) * 50);
  const snPercent = Math.round(50 + (scoreSN / maxPossible(countSN)) * 50);
  const tfPercent = Math.round(50 + (scoreTF / maxPossible(countTF)) * 50);
  const jpPercent = Math.round(50 + (scoreJP / maxPossible(countJP)) * 50);

  return {
    type: mbtiCode,
    title: profile.title,
    motto: profile.motto,
    subtitle: profile.subtitle,
    dimensions: {
      E: Math.max(0, scoreEI),
      I: Math.max(0, -scoreEI),
      S: Math.max(0, scoreSN),
      N: Math.max(0, -scoreSN),
      T: Math.max(0, scoreTF),
      F: Math.max(0, -scoreTF),
      J: Math.max(0, scoreJP),
      P: Math.max(0, -scoreJP),
    },
    percentages: {
      EI: { label: '能量倾向', percent: Math.min(99, Math.max(1, eiPercent)), leftTrait: '内向 (I)', rightTrait: '外向 (E)' },
      SN: { label: '感知模式', percent: Math.min(99, Math.max(1, snPercent)), leftTrait: '直觉 (N)', rightTrait: '实感 (S)' },
      TF: { label: '判断依据', percent: Math.min(99, Math.max(1, tfPercent)), leftTrait: '情感 (F)', rightTrait: '思考 (T)' },
      JP: { label: '生活态度', percent: Math.min(99, Math.max(1, jpPercent)), leftTrait: '感知 (P)', rightTrait: '判断 (J)' },
    },
    profile
  };
}

// SBTI Score Calculator
export function calculateSBTI(answers: Record<number, number>): SBTIResult {
  let scoreS = 0;
  let scoreB = 0;
  let scoreT = 0;
  let scoreI = 0;

  for (const [qIdStr, val] of Object.entries(answers)) {
    const qId = Number(qIdStr);
    if (qId >= 101 && qId <= 112) scoreS += val;
    else if (qId >= 113 && qId <= 124) scoreB += val;
    else if (qId >= 125 && qId <= 136) scoreT += val;
    else if (qId >= 137 && qId <= 148) scoreI += val;
  }

  // Convert raw score (range -36 to +36) to normalized 0-100
  const normalize = (s: number) => Math.round(Math.min(100, Math.max(10, ((s + 36) / 72) * 100)));

  const normS = normalize(scoreS);
  const normB = normalize(scoreB);
  const normT = normalize(scoreT);
  const normI = normalize(scoreI);

  // Find dominant dimension
  const maxScore = Math.max(normS, normB, normT, normI);
  let category: 'S-结构化思维' | 'B-平衡行为' | 'T-目标导向' | 'I-内在感知' = 'S-结构化思维';
  let prefix = 'S';

  if (maxScore === normS) {
    category = 'S-结构化思维';
    prefix = 'S';
  } else if (maxScore === normB) {
    category = 'B-平衡行为';
    prefix = 'B';
  } else if (maxScore === normT) {
    category = 'T-目标导向';
    prefix = 'T';
  } else {
    category = 'I-内在感知';
    prefix = 'I';
  }

  // Level index 1, 2, or 3 based on intensity
  let level = '01';
  if (maxScore > 80) level = '01';
  else if (maxScore > 60) level = '02';
  else level = '03';

  const code = `${prefix}-${level}`;
  const profile = SBTI_PROFILES[code] || SBTI_PROFILES['S-01'];

  return {
    code,
    title: profile.title,
    orderCategory: category,
    subtitle: profile.subtitle,
    dimensionScores: {
      S: normS,
      B: normB,
      T: normT,
      I: normI,
    },
    profile
  };
}
