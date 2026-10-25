/* ============================================================
   Claude Code Mods — Deep Research Board tutorial i18n
   ============================================================ */
(function () {
  const DICT = {
    en: {
      "brand.title": "Claude Code Mods",
      "ui.fullscreen": "Full Screen",
      "ui.exitFull": "Exit Full Screen",
      "ui.prev": "‹ Prev",
      "ui.next": "Next ›",
      "ui.launch": "DistributedApps ↗",
      "ui.repo": "Official Guide ↗",

      "slide.1.title": "Getting Started with Claude Code Mods",
      "slide.2.title": "About the Instructor: Ken Huang, CISSP",
      "slide.3.title": "Tutorial Agenda",
      "slide.4.title": "What Is a Claude Code Mod?",
      "slide.5.title": "Mods vs Settings Hooks",
      "slide.6.title": "Anatomy of a Mod Plugin",
      "slide.7.title": "Three Moves for a Research Mod",
      "slide.8.title": "Example: Deep Research Board",
      "slide.9.title": "Shortcut: Describe It to Claude",
      "slide.10.title": "Step 1: Folder & Manifest",
      "slide.11.title": "Step 2: Draw the Board",
      "slide.12.title": "Step 3: Count Sources in $.state",
      "slide.13.title": "Step 4: Wire the Research Loop",
      "slide.14.title": "Step 5: Validate & Test",
      "slide.15.title": "Step 6: Share the Mod",
      "slide.16.title": "Stretch: Gate Weak Conclusions",
      "slide.17.title": "Stretch: Sources Pane",
      "slide.18.title": "Four Habits Worth Keeping",
      "slide.19.title": "What Will You Mod Next?",
      "slide.20.title": "Takeaways & Resources",

      "hero.eyebrow": "Tutorial · Claude Code · Mods API",
      "hero.title": "GETTING STARTED WITH CLAUDE CODE MODS",
      "hero.acronym": "<b>Example</b> Deep Research Board · <b>Learn</b> observe / rewrite / answer",
      "hero.sub": "Build a <strong>Deep Research Agent board</strong> — a live scoreboard of sources and progress — to learn how mods work.",
      "hero.by": "Presented by <strong>Ken Huang, CISSP</strong><br/>Adjunct Professor, USF · CSA AI Safety Co-Chair · CEO, DistributedApps.ai",
      "hero.start": "Start Tutorial ➔",
      "hero.spec": "Official API Guide ↗",

      "about.kicker": "Instructor",
      "about.h2": "Ken Huang, CISSP",
      "about.b1": "🎓 Adjunct Professor, USF · AI Author (Cambridge, Springer, Wiley, Packt, CMP, PKUP)",
      "about.b2": "🛡️ CSA Fellow (MAESTRO, AICM) · OWASP AIVSS Lead",
      "about.b3": "🚀 CEO, DistributedApps.ai",
      "about.publishers_title": "My books were published by Academic & Global Publishers",
      "about.publishers_sub": "Peer-Reviewed Books, Monographs & Handbooks",
      "pub.cambridge": "Cambridge UP",
      "pub.springer": "Springer",
      "pub.wiley": "Wiley",
      "pub.packt": "Packt",
      "pub.cmp": "China Machine Press",
      "pub.pkup": "Beijing Univ. Press",

      "s3.kicker": "Agenda",
      "s3.h2": "Build a Deep Research Board",
      "s3.lead": "Learn mods by building something you already understand: a research progress board.",
      "s3.col1_t": "20-slide path",
      "s3.c1_1": "• Mental model: plugins, hooks, three moves.",
      "s3.c1_2": "• Build: Deep Research Board (observe + UI).",
      "s3.c1_3": "• Stretch: gate weak answers; open a sources pane.",

      "s4.kicker": "Concept",
      "s4.h2": "What Is a Mod?",
      "s4.lead": "A small JavaScript or TypeScript plugin that lives inside your Claude Code session.",
      "s4.col1_t": "In plain words",
      "s4.c1_1": "• Watch what Claude is doing (tools, turns).",
      "s4.c1_2": "• Change prompts or block unsafe/weak steps.",
      "s4.c1_3": "• Draw a live board in the terminal UI.",

      "s5.kicker": "Compare",
      "s5.h2": "Why Not Just Settings?",
      "s5.lead": "Settings hooks fire a shell per event. Mods stay loaded and can keep score.",
      "s5.col1_t": "For a research agent",
      "s5.c1_1": "• Remember how many sources you already have.",
      "s5.c1_2": "• Redraw a board after every fetch.",
      "s5.c1_3": "• Open a pane or register /research.",

      "s6.kicker": "Structure",
      "s6.h2": "Anatomy of a Mod",
      "s6.lead": "Same shape as any Claude Code plugin — one module does the work.",
      "s6.col1_t": "Required pieces",
      "s6.c1_1": "• plugin.json — name and description.",
      "s6.c1_2": "• hooks.json — points at research-board.mjs.",
      "s6.c1_3": "• register(on) — attach observe / rewrite / answer hooks.",

      "s7.kicker": "API Core",
      "s7.h2": "Observe · Rewrite · Answer",
      "s7.lead": "Every hook either watches, changes the event, or stops it.",
      "s7.col1_t": "Research examples",
      "s7.c1_1": "• Observe — count WebFetch / Read as sources.",
      "s7.c1_2": "• Rewrite — inject a research checklist into the prompt.",
      "s7.c1_3": "• Answer — deny a final conclusion until sources ≥ 5.",

      "s8.kicker": "Example",
      "s8.h2": "Deep Research Board",
      "s8.lead": "A live scoreboard above the prompt while Claude researches.",
      "s8.col1_t": "What you see",
      "s8.c1_1": "• Question + status (idle / researching / ready).",
      "s8.c1_2": "• Sources found vs target (e.g. 5/5).",
      "s8.c1_3": "• Latest domains + claim count.",

      "s9.kicker": "Shortcut",
      "s9.h2": "Let Claude Write the Mod",
      "s9.lead": "You do not need the API first — describe the board in plain language.",
      "s9.col1_t": "Say this",
      "s9.c1_1": "• \"Make a mod: Deep Research Board above the prompt.\"",
      "s9.c1_2": "• \"Count WebFetch/Read as sources; show 5/5 target.\"",
      "s9.c1_3": "• Allow hot reload; tweak rules in chat.",

      "s10.kicker": "Step 1",
      "s10.h2": "Create the Folder",
      "s10.lead": "Claude Code 2.1.287+. Same plugin layout as the official guide.",
      "s10.col1_t": "Checklist",
      "s10.c1_1": "• claude --version ≥ 2.1.287.",
      "s10.c1_2": "• Name the plugin deep-research-board.",
      "s10.c1_3": "• hooks.json → ./research-board.mjs.",

      "s11.kicker": "Step 2",
      "s11.h2": "Draw Above the Prompt",
      "s11.lead": "Hook ui.render on AbovePrompt — empty by default, perfect for a board.",
      "s11.col1_t": "First win",
      "s11.c1_1": "• $.ui.resolve(e) gives Box and Text.",
      "s11.c1_2": "• Show a static line: RESEARCH · 0/5 sources.",
      "s11.c1_3": "• claude --plugin-dir ./deep-research-board.",

      "s12.kicker": "Step 3",
      "s12.h2": "Observe Tool Calls",
      "s12.lead": "When Claude fetches a page, add it to the board state.",
      "s12.col1_t": "Pattern",
      "s12.c1_1": "• on(\"tool.call\") for WebFetch / Read / Bash curl.",
      "s12.c1_2": "• Push {url, title} into $.state.board.sources.",
      "s12.c1_3": "• Hot reload wipes module vars — keep score in $.state.",

      "s13.kicker": "Step 4",
      "s13.h2": "Prompt + Live Board",
      "s13.lead": "Rewrite the prompt to force a research checklist; redraw after each fetch.",
      "s13.col1_t": "Put together",
      "s13.c1_1": "• prompt.submit — append: find ≥5 sources, cite, then conclude.",
      "s13.c1_2": "• ui.render — paint question / sources / latest domains.",
      "s13.c1_3": "• Pass with next(e) when the board is empty.",

      "s14.kicker": "Step 5",
      "s14.h2": "Validate & Test",
      "s14.lead": "Prove the board counts sources without a live research session.",
      "s14.col1_t": "Quality bar",
      "s14.c1_1": "• claude plugin validate ./deep-research-board",
      "s14.c1_2": "• Test: stub three WebFetch calls → sources === 3.",
      "s14.c1_3": "• Assert the band text includes 3/5.",

      "s15.kicker": "Step 6",
      "s15.h2": "Share via Marketplace",
      "s15.lead": "Ship like any plugin — marketplace add, install, reload.",
      "s15.col1_t": "Install path",
      "s15.c1_1": "• /plugin marketplace add your-org/my-mods",
      "s15.c1_2": "• /plugin install deep-research-board@my-mods",
      "s15.c1_3": "• Only install mods you trust — they run with Claude's access.",

      "s16.kicker": "Stretch A",
      "s16.h2": "Answer Move: Min Sources",
      "s16.lead": "If Claude tries to conclude with fewer than 5 sources, deny and nudge.",
      "s16.col1_t": "How it feels",
      "s16.c1_1": "• Detect \"final answer\" / conclusion turns.",
      "s16.c1_2": "• return { deny: \"Need 2 more sources…\" }.",
      "s16.c1_3": "• When sources ≥ 5, call next(e) and let it write.",

      "s17.kicker": "Stretch B",
      "s17.h2": "Open /research Pane",
      "s17.lead": "Register a slash command that lists every source collected this session.",
      "s17.col1_t": "Observe + command",
      "s17.c1_1": "• $.command.register({ name: \"research\" }).",
      "s17.c1_2": "• command.run → $.ui.open sources list.",
      "s17.c1_3": "• Same $.state.board the band already uses.",

      "s18.kicker": "Craft",
      "s18.h2": "Four Habits",
      "s18.lead": "Same habits as the official guide — applied to the research board.",
      "s18.col1_t": "Keep these",
      "s18.c1_1": "• Lean on .claude-plugin/types/ Claude writes.",
      "s18.c1_2": "• Read hasSurvey / bodyColumns from e.props.",
      "s18.c1_3": "• Scoreboard in $.state; use --debug if the board vanishes.",

      "s19.kicker": "Ideas",
      "s19.h2": "Ideas Beyond Research",
      "s19.lead": "Once the board works, clone the pattern for other workflows.",
      "s19.col1_t": "Nearby mods",
      "s19.c1_1": "• Citation / quote checker before publish.",
      "s19.c1_2": "• Counter-claim nudge when all sources agree.",
      "s19.c1_3": "• Export Markdown report of sources + claims.",

      "s20.kicker": "Close",
      "s20.h2": "You Can Build This Today",
      "s20.lead": "Mods = live hooks + UI. Deep research is just a friendly example.",
      "s20.col1_t": "Remember",
      "s20.c1_1": "• Start from a job you already do (research), not abstract meters.",
      "s20.c1_2": "• Three moves: observe sources, rewrite prompts, answer/deny.",
      "s20.c1_3": "• Official guide still has the exact API details.",
      "s20.qa_title": "Try next:",
      "s20.q1": "Describe Deep Research Board to Claude in a fresh session.",
      "s20.q2": "Add a rule: block conclusions until sources ≥ 5.",
      "s20.q3": "Skim the official API guide for event names."
    },

    zh: {
      "brand.title": "Claude Code Mods",
      "ui.fullscreen": "全屏",
      "ui.exitFull": "退出全屏",
      "ui.prev": "‹ 上一页",
      "ui.next": "下一页 ›",
      "ui.launch": "DistributedApps ↗",
      "ui.repo": "官方指南 ↗",

      "slide.1.title": "Claude Code Mods 入门",
      "slide.2.title": "关于讲师：黄连金 (Ken Huang), CISSP",
      "slide.3.title": "教程议程",
      "slide.4.title": "什么是 Claude Code Mod？",
      "slide.5.title": "Mods 与 Settings 钩子",
      "slide.6.title": "Mod 插件结构",
      "slide.7.title": "研究 Mod 的三种动作",
      "slide.8.title": "示例：深度研究看板",
      "slide.9.title": "捷径：用白话让 Claude 写",
      "slide.10.title": "步骤 1：目录与清单",
      "slide.11.title": "步骤 2：画出看板",
      "slide.12.title": "步骤 3：用 $.state 统计来源",
      "slide.13.title": "步骤 4：串起研究回路",
      "slide.14.title": "步骤 5：校验与测试",
      "slide.15.title": "步骤 6：分享 Mod",
      "slide.16.title": "拓展：拦截薄弱结论",
      "slide.17.title": "拓展：来源窗格",
      "slide.18.title": "四个习惯",
      "slide.19.title": "接下来还可以改什么",
      "slide.20.title": "要点与资源",

      "hero.eyebrow": "教程 · Claude Code · Mods API",
      "hero.title": "CLAUDE CODE MODS 入门",
      "hero.acronym": "<b>示例</b> 深度研究看板 · <b>学会</b> 观察 / 改写 / 应答",
      "hero.sub": "通过构建<strong>深度研究 Agent 看板</strong>（来源与进度的实时记分板）来学习 Mods。",
      "hero.by": "主讲 <strong>黄连金 (Ken Huang), CISSP</strong><br/>旧金山大学 (USF) 客座教授 · CSA AI Safety 联合主席 · DistributedApps.ai CEO",
      "hero.start": "开始教程 ➔",
      "hero.spec": "官方 API 指南 ↗",

      "about.kicker": "讲师",
      "about.h2": "黄连金 (Ken Huang), CISSP",
      "about.b1": "🎓 旧金山大学 (USF) 客座教授 · 专著出版于 Cambridge、Springer、Wiley、Packt、机工社、北大社",
      "about.b2": "🛡️ CSA Fellow（MAESTRO、AICM）· OWASP AIVSS 负责人",
      "about.b3": "🚀 DistributedApps.ai CEO",
      "about.publishers_title": "我的书籍由学术与全球出版社出版",
      "about.publishers_sub": "国际顶级大学出版社、全球知名学术与国家级骨干出版社",
      "pub.cambridge": "剑桥大学出版社",
      "pub.springer": "斯普林格 (Springer)",
      "pub.wiley": "威立 (Wiley)",
      "pub.packt": "Packt 出版社",
      "pub.cmp": "机械工业出版社",
      "pub.pkup": "北京大学出版社",

      "s3.kicker": "议程",
      "s3.h2": "做一个深度研究看板",
      "s3.lead": "用你本来就懂的「研究进度板」来学 Mods。",
      "s3.col1_t": "20 页路径",
      "s3.c1_1": "• 心智模型：插件、钩子、三种动作。",
      "s3.c1_2": "• 构建：深度研究看板（观察 + UI）。",
      "s3.c1_3": "• 拓展：拦截薄弱结论；打开来源窗格。",

      "s4.kicker": "概念",
      "s4.h2": "什么是 Mod？",
      "s4.lead": "运行在 Claude Code 会话里的小型 JS/TS 插件。",
      "s4.col1_t": "白话版",
      "s4.c1_1": "• 看着 Claude 在做什么（工具、回合）。",
      "s4.c1_2": "• 改提示，或拦住不安全/薄弱步骤。",
      "s4.c1_3": "• 在终端 UI 里画一块实时看板。",

      "s5.kicker": "对比",
      "s5.h2": "为什么不只用 Settings？",
      "s5.lead": "Settings 钩子按事件跑 shell；Mods 常驻并能记分。",
      "s5.col1_t": "对研究 Agent 而言",
      "s5.c1_1": "• 记住已经找到多少来源。",
      "s5.c1_2": "• 每次抓取后重绘看板。",
      "s5.c1_3": "• 开窗格或注册 /research。",

      "s6.kicker": "结构",
      "s6.h2": "Mod 的组成",
      "s6.lead": "和普通 Claude Code 插件一样——一个模块干事。",
      "s6.col1_t": "必备件",
      "s6.c1_1": "• plugin.json — 名称与描述。",
      "s6.c1_2": "• hooks.json — 指向 research-board.mjs。",
      "s6.c1_3": "• register(on) — 挂上观察/改写/应答钩子。",

      "s7.kicker": "API 核心",
      "s7.h2": "观察 · 改写 · 应答",
      "s7.lead": "每个钩子要么看着、要么改事件、要么拦住它。",
      "s7.col1_t": "研究场景例子",
      "s7.c1_1": "• 观察 — 把 WebFetch / Read 算作来源。",
      "s7.c1_2": "• 改写 — 给提示注入研究检查清单。",
      "s7.c1_3": "• 应答 — 来源不足 5 个就拒绝最终结论。",

      "s8.kicker": "示例",
      "s8.h2": "深度研究看板",
      "s8.lead": "Claude 做研究时，在提示上方显示的实时记分板。",
      "s8.col1_t": "你看到什么",
      "s8.c1_1": "• 问题 + 状态（空闲 / 研究中 / 就绪）。",
      "s8.c1_2": "• 已找到来源 vs 目标（如 5/5）。",
      "s8.c1_3": "• 最近域名 + 主张数量。",

      "s9.kicker": "捷径",
      "s9.h2": "让 Claude 来写 Mod",
      "s9.lead": "不必先学完整 API——用白话描述看板即可。",
      "s9.col1_t": "可以这样说",
      "s9.c1_1": "• 「做一个 Mod：提示上方的深度研究看板。」",
      "s9.c1_2": "• 「把 WebFetch/Read 算来源；显示 5/5。」",
      "s9.c1_3": "• 允许热重载；在对话里改规则。",

      "s10.kicker": "步骤 1",
      "s10.h2": "创建目录",
      "s10.lead": "Claude Code 2.1.287+。布局与官方指南相同。",
      "s10.col1_t": "清单",
      "s10.c1_1": "• claude --version ≥ 2.1.287。",
      "s10.c1_2": "• 插件名 deep-research-board。",
      "s10.c1_3": "• hooks.json → ./research-board.mjs。",

      "s11.kicker": "步骤 2",
      "s11.h2": "在提示上方绘制",
      "s11.lead": "钩住 AbovePrompt 的 ui.render——默认是空的，适合看板。",
      "s11.col1_t": "第一次成功",
      "s11.c1_1": "• $.ui.resolve(e) 得到 Box、Text。",
      "s11.c1_2": "• 先画静态行：RESEARCH · 0/5 sources。",
      "s11.c1_3": "• claude --plugin-dir ./deep-research-board。",

      "s12.kicker": "步骤 3",
      "s12.h2": "观察工具调用",
      "s12.lead": "Claude 抓取页面时，把来源写入看板状态。",
      "s12.col1_t": "模式",
      "s12.c1_1": "• on(\"tool.call\") 监听 WebFetch / Read / curl。",
      "s12.c1_2": "• 把 {url, title} 推进 $.state.board.sources。",
      "s12.c1_3": "• 热重载会清掉模块变量——分数放 $.state。",

      "s13.kicker": "步骤 4",
      "s13.h2": "提示 + 实时看板",
      "s13.lead": "改写提示强制研究清单；每次抓取后重绘。",
      "s13.col1_t": "串起来",
      "s13.c1_1": "• prompt.submit — 追加：≥5 来源、引用、再下结论。",
      "s13.c1_2": "• ui.render — 画问题 / 来源数 / 最近域名。",
      "s13.c1_3": "• 看板为空时 return next(e)。",

      "s14.kicker": "步骤 5",
      "s14.h2": "校验与测试",
      "s14.lead": "不必真开一场研究，也能证明计数正确。",
      "s14.col1_t": "质量门槛",
      "s14.c1_1": "• claude plugin validate ./deep-research-board",
      "s14.c1_2": "• 测试：桩三次 WebFetch → sources === 3。",
      "s14.c1_3": "• 断言带上出现 3/5。",

      "s15.kicker": "步骤 6",
      "s15.h2": "通过 Marketplace 分享",
      "s15.lead": "和其他插件一样：add → install → reload。",
      "s15.col1_t": "安装路径",
      "s15.c1_1": "• /plugin marketplace add your-org/my-mods",
      "s15.c1_2": "• /plugin install deep-research-board@my-mods",
      "s15.c1_3": "• 只安装你信任的 Mod——权限与 Claude 相同。",

      "s16.kicker": "拓展 A",
      "s16.h2": "应答动作：最少来源",
      "s16.lead": "来源不足 5 个就想下结论？拒绝并催促继续检索。",
      "s16.col1_t": "体感",
      "s16.c1_1": "• 识别「最终结论」类回合。",
      "s16.c1_2": "• return { deny: \"还差 2 个来源…\" }。",
      "s16.c1_3": "• 来源 ≥ 5 时 next(e) 放行。",

      "s17.kicker": "拓展 B",
      "s17.h2": "打开 /research 窗格",
      "s17.lead": "注册斜杠命令，列出本会话收集的全部来源。",
      "s17.col1_t": "观察 + 命令",
      "s17.c1_1": "• $.command.register({ name: \"research\" })。",
      "s17.c1_2": "• command.run → $.ui.open 来源列表。",
      "s17.c1_3": "• 与看板共用同一个 $.state.board。",

      "s18.kicker": "工艺",
      "s18.h2": "四个习惯",
      "s18.lead": "官方指南里的习惯——用到研究看板上。",
      "s18.col1_t": "请保持",
      "s18.c1_1": "• 依赖 Claude 写入的 .claude-plugin/types/。",
      "s18.c1_2": "• 从 e.props 读 hasSurvey / bodyColumns。",
      "s18.c1_3": "• 记分板放 $.state；看板消失时用 --debug。",

      "s19.kicker": "想法",
      "s19.h2": "研究之外还能改什么",
      "s19.lead": "看板跑通后，把同一模式套到别的工作流。",
      "s19.col1_t": "邻近 Mods",
      "s19.c1_1": "• 发布前的引用/引文检查。",
      "s19.c1_2": "• 来源全一致时提示寻找反方观点。",
      "s19.c1_3": "• 导出 sources + claims 的 Markdown 报告。",

      "s20.kicker": "收束",
      "s20.h2": "今天就能做出来",
      "s20.lead": "Mods = 实时钩子 + UI。深度研究只是好懂的例子。",
      "s20.col1_t": "记住",
      "s20.c1_1": "• 从你会的工作（研究）起步，而不是抽象仪表。",
      "s20.c1_2": "• 三种动作：观察来源、改写提示、应答/拒绝。",
      "s20.c1_3": "• API 细节仍以官方指南为准。",
      "s20.qa_title": "下一步：",
      "s20.q1": "在新会话里向 Claude 描述 Deep Research Board。",
      "s20.q2": "加规则：来源 < 5 时禁止下结论。",
      "s20.q3": "浏览官方指南核对事件名。"
    }
  };

  let lang = "en";

  function t(key) {
    return (DICT[lang] && DICT[lang][key]) || (DICT.en && DICT.en[key]) || key;
  }

  function apply() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t(key);
      if (el.hasAttribute("data-i18n-html")) el.innerHTML = val;
      else el.textContent = val;
    });
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll(".lang__btn").forEach((btn) => {
      btn.classList.toggle("is-on", btn.getAttribute("data-lang") === lang);
    });
    if (window.redrawAllDiagrams) window.redrawAllDiagrams();
    const active = document.querySelector(".slide.is-active");
    if (active && window.renderDiagramForSlide) {
      window.renderDiagramForSlide(Number(active.getAttribute("data-slide")));
    }
  }

  window.AGENT_SEC_I18N = {
    t,
    apply,
    isZh: () => lang === "zh",
    getSlideTitle(zeroIndex) {
      return t("slide." + (zeroIndex + 1) + ".title");
    },
    setLang(next) {
      lang = next === "zh" ? "zh" : "en";
      apply();
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".lang__btn").forEach((btn) => {
      btn.addEventListener("click", () => window.AGENT_SEC_I18N.setLang(btn.getAttribute("data-lang")));
    });
    apply();
  });
})();
