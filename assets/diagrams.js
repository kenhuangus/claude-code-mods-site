/* ============================================================
   Claude Code Mods — Deep Research Agent example diagrams
   ============================================================ */
(function () {
  const COL = {
    ink: "#141413",
    slate: "#4a4940",
    blue: "#0284c7",
    teal: "#0d9488",
    green: "#16a34a",
    yellow: "#d97706",
    orange: "#ea580c",
    red: "#dc2626",
    purple: "#7c3aed"
  };

  function isZh() {
    return !!(window.AGENT_SEC_I18N && window.AGENT_SEC_I18N.isZh());
  }

  const NS = "http://www.w3.org/2000/svg";

  function scene(host, w, h) {
    host.innerHTML = "";
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.style.maxWidth = `${w}px`;
    svg.style.display = "block";
    svg.style.margin = "0 auto";
    host.appendChild(svg);
    return { svg, rc: rough.svg(svg), w, h };
  }

  function addNode(s, n) {
    s.svg.appendChild(n);
  }

  function rect(s, x, y, w, h, opts = {}) {
    addNode(
      s,
      s.rc.rectangle(x, y, w, h, Object.assign({ roughness: 0.55, stroke: COL.ink, strokeWidth: 1.5 }, opts))
    );
  }

  function chip(s, x, y, w, h, text, color, opts = {}) {
    rect(s, x, y, w, h, {
      fill: opts.fill || "#ffffff",
      fillStyle: "solid",
      stroke: color,
      strokeWidth: opts.strokeWidth || 1.8
    });
    if (text) {
      txt(s, x + w / 2, y + h / 2, text, {
        anchor: "middle",
        weight: opts.weight || 700,
        size: opts.size || 13,
        col: color
      });
    }
  }

  function arrow(s, x1, y1, x2, y2, opts = {}) {
    const o = Object.assign({ stroke: COL.ink, strokeWidth: 1.8, roughness: 0.45 }, opts);
    addNode(s, s.rc.line(x1, y1, x2, y2, o));
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const headLen = opts.headLen || 9;
    const p = document.createElementNS(NS, "path");
    p.setAttribute(
      "d",
      `M ${x2 - headLen * Math.cos(angle - Math.PI / 6)} ${y2 - headLen * Math.sin(angle - Math.PI / 6)} L ${x2} ${y2} L ${x2 - headLen * Math.cos(angle + Math.PI / 6)} ${y2 - headLen * Math.sin(angle + Math.PI / 6)}`
    );
    p.setAttribute("stroke", o.stroke);
    p.setAttribute("stroke-width", o.strokeWidth);
    p.setAttribute("fill", "none");
    addNode(s, p);
  }

  function txt(s, x, y, str, opts = {}) {
    const t = document.createElementNS(NS, "text");
    t.setAttribute("x", x);
    t.setAttribute("y", y);
    t.setAttribute("text-anchor", opts.anchor || "start");
    t.setAttribute("dominant-baseline", opts.baseline || "middle");
    t.setAttribute("fill", opts.col || COL.ink);
    t.setAttribute("font-family", opts.family || "Inter, system-ui, sans-serif");
    t.setAttribute("font-size", String((opts.size || 13) * 1.35));
    t.setAttribute("font-weight", String(opts.weight || 600));
    const lines = String(str).split("\n");
    lines.forEach((line, i) => {
      const ts = document.createElementNS(NS, "tspan");
      ts.setAttribute("x", x);
      ts.setAttribute("dy", i === 0 ? "0" : "1.25em");
      ts.textContent = line;
      t.appendChild(ts);
    });
    addNode(s, t);
  }

  const FIGS = {
    "agenda-mods"(host) {
      const zh = isZh();
      const s = scene(host, 520, 360);
      const items = zh
        ? ["何为 Mod", "三种动作", "深度研究看板", "守卫与窗格", "发布"]
        : ["What is a Mod", "Three moves", "Research Board", "Guard + pane", "Ship it"];
      items.forEach((label, i) => chip(s, 40, 28 + i * 62, 440, 48, `${i + 1}.  ${label}`, COL.orange, { size: 15 }));
    },

    "what-is-mod"(host) {
      const zh = isZh();
      const s = scene(host, 520, 340);
      chip(s, 40, 30, 440, 56, zh ? "会话内的小插件" : "A small plugin inside the session", COL.blue, { size: 14 });
      chip(s, 40, 110, 200, 90, zh ? "监视研究步骤" : "Watch research steps", COL.teal, { size: 13 });
      chip(s, 280, 110, 200, 90, zh ? "改写研究提示" : "Rewrite research prompts", COL.orange, { size: 13 });
      chip(s, 160, 230, 200, 90, zh ? "画出进度看板" : "Draw a progress board", COL.purple, { size: 13 });
      arrow(s, 250, 86, 140, 110, { stroke: COL.slate });
      arrow(s, 270, 86, 380, 110, { stroke: COL.slate });
      arrow(s, 250, 200, 260, 230, { stroke: COL.slate });
    },

    "mods-vs-settings"(host) {
      const zh = isZh();
      const s = scene(host, 540, 320);
      chip(s, 30, 40, 220, 240, "", COL.slate, { fill: "#f8f6f0" });
      chip(s, 290, 40, 220, 240, "", COL.orange, { fill: "#fff8f3" });
      txt(s, 140, 70, zh ? "Settings 钩子" : "Settings hooks", { anchor: "middle", size: 14, weight: 800, col: COL.slate });
      txt(s, 400, 70, "Mods", { anchor: "middle", size: 14, weight: 800, col: COL.orange });
      const left = zh
        ? ["每事件跑 shell", "难记研究进度", "难画实时看板"]
        : ["Shell per event", "Hard to keep score", "Hard live board"];
      const right = zh
        ? ["驻留整个会话", "$.state 记来源数", "AbovePrompt 看板"]
        : ["Lives all session", "$.state counts sources", "AbovePrompt board"];
      left.forEach((t, i) => txt(s, 50, 130 + i * 45, "• " + t, { size: 12, col: COL.slate }));
      right.forEach((t, i) => txt(s, 310, 130 + i * 45, "• " + t, { size: 12, col: COL.orange }));
    },

    "mod-anatomy"(host) {
      const zh = isZh();
      const s = scene(host, 520, 340);
      const rows = [
        [".claude-plugin/plugin.json", zh ? "清单" : "manifest"],
        ["hooks/hooks.json", zh ? "指向模块" : "one module"],
        ["hooks/research-board.mjs", "register(on)"],
        ["types/index.d.ts", zh ? "状态契约" : "state types"]
      ];
      rows.forEach((r, i) => {
        const y = 28 + i * 72;
        chip(s, 30, y, 310, 52, r[0], COL.blue, { size: 11, family: "JetBrains Mono, monospace" });
        chip(s, 360, y, 130, 52, r[1], COL.orange, { size: 12 });
      });
    },

    "three-moves"(host) {
      const zh = isZh();
      const s = scene(host, 540, 300);
      const moves = zh
        ? [
            ["Observe", "看它抓了哪些\n网页/文件", COL.teal],
            ["Rewrite", "给提示加上\n研究检查清单", COL.orange],
            ["Answer", "来源不足时\n暂缓最终结论", COL.red]
          ]
        : [
            ["Observe", "Count pages &\nfiles it fetched", COL.teal],
            ["Rewrite", "Add a research\nchecklist to prompts", COL.orange],
            ["Answer", "Block final answer\nuntil N sources", COL.red]
          ];
      moves.forEach((m, i) => {
        const x = 30 + i * 170;
        chip(s, x, 50, 150, 200, "", m[2], { fill: "#fff" });
        txt(s, x + 75, 95, m[0], { anchor: "middle", size: 16, weight: 800, col: m[2] });
        txt(s, x + 75, 160, m[1], { anchor: "middle", size: 12, col: COL.slate });
      });
    },

    "research-board"(host) {
      const zh = isZh();
      const s = scene(host, 540, 300);
      rect(s, 30, 50, 480, 180, { fill: "#1e1b18", fillStyle: "solid", stroke: COL.ink });
      txt(s, 50, 90, zh ? "深度研究 · 进行中" : "DEEP RESEARCH · in progress", {
        size: 13,
        col: "#fdba74",
        weight: 800,
        family: "JetBrains Mono, monospace"
      });
      txt(s, 50, 130, zh ? "问题: 人形机器人 2026 成本驱动因素？" : "Q: Humanoid robot cost drivers in 2026?", {
        size: 12,
        col: "#e8e6df",
        weight: 600
      });
      txt(s, 50, 170, zh ? "来源 5/5   主张 12   置信 中" : "Sources 5/5   Claims 12   Confidence MED", {
        size: 12,
        col: "#7dd3fc",
        weight: 700,
        family: "JetBrains Mono, monospace"
      });
      txt(s, 50, 205, zh ? "最近: springer.com · ieee.org · mckinsey.com" : "Latest: springer.com · ieee.org · mckinsey.com", {
        size: 11,
        col: "#a8a29e"
      });
      txt(s, 270, 30, zh ? "提示上方的研究看板" : "Research board above the prompt", {
        anchor: "middle",
        size: 13,
        weight: 700
      });
    },

    "claude-builds"(host) {
      const zh = isZh();
      const s = scene(host, 520, 300);
      const steps = zh
        ? ["用白话描述看板", "允许热重载", "研究时看板更新", "继续口头改规则"]
        : ["Describe the board", "Allow hot reload", "Board updates live", "Tweak rules in chat"];
      steps.forEach((label, i) => {
        const x = 30 + (i % 2) * 250;
        const y = 40 + Math.floor(i / 2) * 120;
        chip(s, x, y, 220, 90, `${i + 1}. ${label}`, COL.orange, { size: 14 });
      });
    },

    "folder-layout"(host) {
      const s = scene(host, 520, 320);
      const lines = [
        "deep-research-board/",
        "├── .claude-plugin/plugin.json",
        "├── hooks/hooks.json",
        "├── hooks/research-board.mjs",
        "├── types/index.d.ts",
        "└── tests/*.test.ts"
      ];
      rect(s, 40, 30, 440, 260, { fill: "#141413", fillStyle: "solid", stroke: COL.ink });
      lines.forEach((line, i) => {
        txt(s, 60, 70 + i * 36, line, {
          size: 13,
          col: "#e8e6df",
          weight: 600,
          family: "JetBrains Mono, monospace"
        });
      });
    },

    "above-prompt"(host) {
      const zh = isZh();
      const s = scene(host, 520, 300);
      chip(s, 40, 40, 440, 70, zh ? "研究看板 (AbovePrompt)" : "Research board (AbovePrompt)", COL.orange, {
        size: 14
      });
      chip(s, 40, 140, 440, 100, zh ? "你的提示：帮我深度研究…" : "Your prompt: deep-research this…", COL.slate, {
        size: 14,
        fill: "#f8f6f0"
      });
      arrow(s, 260, 110, 260, 140, { stroke: COL.orange });
    },

    "state-usage"(host) {
      const zh = isZh();
      const s = scene(host, 520, 300);
      chip(s, 40, 40, 200, 70, "tool.call", COL.blue, { size: 13 });
      chip(s, 280, 40, 200, 70, "WebFetch / Read", COL.teal, { size: 12 });
      arrow(s, 240, 75, 280, 75, { stroke: COL.slate });
      arrow(s, 260, 110, 260, 160, { stroke: COL.slate });
      chip(s, 120, 160, 280, 100, zh ? "$.state.board\n来源 · 主张 · 状态" : "$.state.board\nsources · claims · status", COL.orange, {
        size: 13
      });
    },

    "forecast-band"(host) {
      // reused id from build — research loop diagram
      const zh = isZh();
      const s = scene(host, 540, 280);
      const steps = zh
        ? ["提问", "检索", "记来源", "看板更新", "写结论"]
        : ["Ask", "Fetch", "Log source", "Update board", "Conclude"];
      steps.forEach((label, i) => {
        const x = 15 + i * 105;
        chip(s, x, 100, 95, 70, label, i === 3 ? COL.orange : COL.blue, { size: 11 });
        if (i < 4) arrow(s, x + 95, 135, x + 105, 135, { stroke: COL.slate });
      });
      txt(s, 270, 50, zh ? "一次深度研究回合" : "One deep-research turn", {
        anchor: "middle",
        size: 14,
        weight: 700
      });
    },

    "validate-test"(host) {
      const zh = isZh();
      const s = scene(host, 520, 280);
      chip(s, 40, 50, 200, 180, zh ? "plugin validate\n钩子与 state" : "plugin validate\nhooks + state", COL.green, {
        size: 13
      });
      chip(s, 280, 50, 200, 180, zh ? "plugin test\n模拟 3 次抓取\n断言来源=3" : "plugin test\nstub 3 fetches\nassert sources=3", COL.blue, {
        size: 13
      });
    },

    "share-marketplace"(host) {
      const zh = isZh();
      const s = scene(host, 520, 280);
      const steps = ["marketplace add", "install board", "reload-plugins"];
      steps.forEach((label, i) => {
        const x = 30 + i * 165;
        chip(s, x, 90, 150, 90, `${i + 1}\n${label}`, COL.orange, { size: 12 });
        if (i < 2) arrow(s, x + 150, 135, x + 165, 135, { stroke: COL.slate });
      });
    },

    "blast-radius"(host) {
      // gate final answer
      const zh = isZh();
      const s = scene(host, 520, 300);
      chip(s, 40, 30, 440, 55, zh ? "模型想输出最终结论" : "Model wants to write FINAL ANSWER", COL.red, {
        size: 13
      });
      arrow(s, 260, 85, 260, 115, { stroke: COL.slate });
      chip(s, 40, 115, 440, 70, zh ? "来源 < 5？ → deny + 提醒继续检索" : "sources < 5? → deny + ask for more fetches", COL.orange, {
        size: 13
      });
      chip(s, 40, 220, 200, 55, zh ? "来源够 → 放行" : "Enough → allow", COL.green, { size: 13 });
      chip(s, 280, 220, 200, 55, zh ? "不够 → 拦截" : "Too few → block", COL.red, { size: 13 });
    },

    "replay-theater"(host) {
      // research pane
      const zh = isZh();
      const s = scene(host, 520, 300);
      chip(s, 40, 30, 160, 55, "/research", COL.orange, { size: 13 });
      arrow(s, 200, 57, 240, 57, { stroke: COL.slate });
      chip(s, 240, 20, 240, 220, "", COL.purple, { fill: "#faf5ff" });
      txt(s, 360, 55, zh ? "来源列表窗格" : "Sources pane", { anchor: "middle", size: 14, weight: 800, col: COL.purple });
      const rows = zh
        ? ["1. ieee.org", "2. springer.com", "3. mckinsey.com", "4. arxiv.org"]
        : ["1. ieee.org", "2. springer.com", "3. mckinsey.com", "4. arxiv.org"];
      rows.forEach((r, i) => txt(s, 260, 100 + i * 32, r, { size: 12, col: COL.slate }));
    },

    "four-habits"(host) {
      const zh = isZh();
      const s = scene(host, 520, 300);
      const habits = zh
        ? ["用官方 types/", "读 e.props", "进度放 $.state", "--debug 查看板"]
        : ["Lean on types/", "Read e.props", "Score in $.state", "--debug the board"];
      habits.forEach((h, i) => {
        const x = 30 + (i % 2) * 250;
        const y = 40 + Math.floor(i / 2) * 120;
        chip(s, x, y, 220, 90, `${i + 1}. ${h}`, COL.orange, { size: 14 });
      });
    },

    "ideas-next"(host) {
      const zh = isZh();
      const s = scene(host, 520, 320);
      const ideas = zh
        ? ["引用格式检查", "对立观点提示", "费用上限提醒", "导出 Markdown 报告", "团队研究模板"]
        : ["Citation checker", "Counter-claim nudge", "Spend ceiling toast", "Export MD report", "Team research template"];
      ideas.forEach((ide, i) => chip(s, 50, 24 + i * 56, 420, 46, ide, i % 2 ? COL.blue : COL.orange, { size: 14 }));
    },

    "takeaways-mods"(host) {
      const zh = isZh();
      const s = scene(host, 520, 300);
      const items = zh
        ? ["Mod = 会话内钩子 + UI", "研究看板人人能懂", "观察→改写→应答", "信任后再安装"]
        : ["Mod = live hooks + UI", "Research board is intuitive", "Observe → rewrite → answer", "Install only what you trust"];
      items.forEach((t, i) => chip(s, 40, 30 + i * 62, 440, 50, t, COL.green, { size: 14 }));
    }
  };

  const rendered = new Set();

  window.renderDiagramForSlide = function (slideNum) {
    const slide = document.querySelector(`.slide[data-slide="${slideNum}"]`);
    if (!slide) return;
    slide.querySelectorAll(".draw[data-fig]").forEach((host) => {
      const key = host.getAttribute("data-fig");
      const id = `${slideNum}:${key}:${isZh() ? "zh" : "en"}`;
      if (rendered.has(id) && host.querySelector("svg")) return;
      const fn = FIGS[key];
      if (fn) {
        try {
          fn(host);
          rendered.add(id);
        } catch (err) {
          console.warn("diagram failed", key, err);
        }
      }
    });
  };

  window.redrawAllDiagrams = function () {
    rendered.clear();
    document.querySelectorAll(".slide").forEach((slide) => {
      const n = slide.getAttribute("data-slide");
      if (n) window.renderDiagramForSlide(Number(n));
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    const active = document.querySelector(".slide.is-active");
    if (active) window.renderDiagramForSlide(Number(active.getAttribute("data-slide")));
  });
})();
