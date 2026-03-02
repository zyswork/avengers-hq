// Star Office UI - 布局与层级配置
// 所有坐标、depth、资源路径统一管理在这里
// 避免 magic numbers，降低改错风险

// 核心规则：
// - 透明资源（如办公桌）强制 .png，不透明优先 .webp
// - 层级：低 → sofa(10) → starWorking(900) → desk(1000) → flower(1100)

const LAYOUT = {
  // === 游戏画布 ===
  game: {
    width: 2752,
    height: 1536
  },

  // === 各区域坐标 ===
  areas: {
    door:        { x: 1376, y: 1200 },
    writing:     { x: 700, y: 800 },
    researching: { x: 700, y: 800 },
    error:       { x: 2200, y: 400 },
    breakroom:   { x: 1376, y: 800 }
  },

  // === 装饰与家具：坐标 + 原点 + depth ===
  furniture: {
    // 沙发
    sofa: {
      x: 1400,
      y: 320,
      origin: { x: 0, y: 0 },
      depth: 10
    },

    // 新办公桌（透明 PNG 强制）
    desk: {
      x: 460,
      y: 900,
      origin: { x: 0.5, y: 0.5 },
      depth: 1000
    },

    // 桌上花盆
    flower: {
      x: 650,
      y: 870,
      origin: { x: 0.5, y: 0.5 },
      depth: 1100
    },

    // Star 在桌前工作（在 desk 下面）
    starWorking: {
      x: 460,
      y: 720,
      origin: { x: 0.5, y: 0.5 },
      depth: 900,
      scale: 1.32
    },

    // 植物们
    plants: [
      { x: 1180, y: 380, depth: 5 },
      { x: 480, y: 400, depth: 5 },
      { x: 2040, y: 1080, depth: 5 }
    ],

    // 海报
    poster: {
      x: 520,
      y: 140,
      depth: 4
    },

    // 咖啡机
    coffeeMachine: {
      x: 1380,
      y: 860,
      origin: { x: 0.5, y: 0.5 },
      depth: 99
    },

    // 服务器区
    serverroom: {
      x: 2200,
      y: 300,
      origin: { x: 0.5, y: 0.5 },
      depth: 2
    },

    // 错误 bug
    errorBug: {
      x: 2180,
      y: 480,
      origin: { x: 0.5, y: 0.5 },
      depth: 50,
      scale: 0.9,
      pingPong: { leftX: 2180, rightX: 2350, speed: 0.6 }
    },

    // 同步动画
    syncAnim: {
      x: 2480,
      y: 1280,
      origin: { x: 0.5, y: 0.5 },
      depth: 40
    },

    // 小猫
    cat: {
      x: 200,
      y: 1200,
      origin: { x: 0.5, y: 0.5 },
      depth: 2000
    }
  },

  // === 牌匾 ===
  plaque: {
    x: 1376,
    y: 1536 - 80,
    width: 600,
    height: 60
  },

  // === 资源加载规则：哪些强制用 PNG（透明资源） ===
  forcePng: {
    desk_v2: true // 新办公桌必须透明，强制 PNG
  },

  // === 9 个 Agent 工位配置 ===
  // 3排布局：
  // Row 1 (y≈350): spiderman, jarvis, ironman, 休息区
  // Row 2 (y≈750): blackwidow, hawkeye, thor, 图书角
  // Row 3 (y≈1150): hulk, captain, norva, 服务器房
  agentDesks: [
    { agentId: 'spiderman', x: 350, y: 350, sprite: 'guest_anim_1', scale: 1.2, depth: 900 },
    { agentId: 'jarvis', x: 850, y: 350, sprite: 'guest_anim_2', scale: 1.2, depth: 900 },
    { agentId: 'ironman', x: 1350, y: 350, sprite: 'guest_anim_3', scale: 1.2, depth: 900 },
    { agentId: 'blackwidow', x: 350, y: 750, sprite: 'guest_anim_4', scale: 1.2, depth: 900 },
    { agentId: 'hawkeye', x: 850, y: 750, sprite: 'guest_anim_5', scale: 1.2, depth: 900 },
    { agentId: 'thor', x: 1350, y: 750, sprite: 'guest_anim_6', scale: 1.2, depth: 900 },
    { agentId: 'hulk', x: 350, y: 1150, sprite: 'star_idle', scale: 1.3, depth: 900 },
    { agentId: 'captain', x: 850, y: 1150, sprite: 'star_idle', scale: 1.3, depth: 900 },
    { agentId: 'norva', x: 1350, y: 1150, sprite: 'star_researching', scale: 1.3, depth: 900 }
  ],

  // === 总资源数量（用于加载进度条） ===
  totalAssets: 15
};
