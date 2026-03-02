const LAYOUT = {
  game: {
    width: 2752,
    height: 1536
  },

  areas: {
    door:        { x: 1376, y: 1400 },
    writing:     { x: 700, y: 750 },
    researching: { x: 700, y: 750 },
    error:       { x: 2400, y: 300 },
    breakroom:   { x: 150, y: 350 }
  },

  furniture: {
    sofa: { x: 140, y: 200, origin: { x: 0, y: 0 }, depth: 10 },
    desk: { x: 470, y: 420, origin: { x: 0.5, y: 0.5 }, depth: 1000 },
    flower: { x: 560, y: 400, origin: { x: 0.5, y: 0.5 }, depth: 1100 },
    starWorking: { x: 470, y: 340, origin: { x: 0.5, y: 0.5 }, depth: 900, scale: 1.32 },
    plants: [
      { x: 820, y: 280, depth: 5 },
      { x: 1430, y: 280, depth: 5 },
      { x: 1430, y: 750, depth: 5 },
      { x: 820, y: 1150, depth: 5 },
      { x: 1430, y: 1150, depth: 5 }
    ],
    poster: { x: 1100, y: 100, depth: 4 },
    coffeeMachine: { x: 80, y: 350, origin: { x: 0.5, y: 0.5 }, depth: 99 },
    serverroom: { x: 2500, y: 250, origin: { x: 0.5, y: 0.5 }, depth: 2 },
    errorBug: { x: 2400, y: 350, origin: { x: 0.5, y: 0.5 }, depth: 50, scale: 0.9, pingPong: { leftX: 2400, rightX: 2550, speed: 0.6 } },
    syncAnim: { x: 2500, y: 1300, origin: { x: 0.5, y: 0.5 }, depth: 40 },
    cat: { x: 200, y: 1400, origin: { x: 0.5, y: 0.5 }, depth: 2000 }
  },

  plaque: { x: 1376, y: 1500, width: 520, height: 50 },

  forcePng: { desk_v2: true },

  // 9 个工位坐标 — 对齐背景图中每张桌子的椅子位置
  agentDesks: [
    // Row 1
    { agentId: 'spiderman',  x: 470,  y: 400, sprite: 'star_idle',        scale: 1.3, depth: 900 },
    { agentId: 'jarvis',     x: 1100, y: 340, sprite: 'guest_anim_1',     scale: 1.2, depth: 900 },
    { agentId: 'ironman',    x: 1750, y: 400, sprite: 'guest_anim_2',     scale: 1.2, depth: 900 },
    // Row 2
    { agentId: 'blackwidow', x: 450,  y: 800, sprite: 'guest_anim_3',     scale: 1.2, depth: 900 },
    { agentId: 'hawkeye',    x: 1100, y: 800, sprite: 'guest_anim_4',     scale: 1.2, depth: 900 },
    { agentId: 'thor',       x: 1850, y: 770, sprite: 'guest_anim_5',     scale: 1.2, depth: 900 },
    // Row 3
    { agentId: 'hulk',       x: 500,  y: 1200, sprite: 'guest_anim_6',    scale: 1.2, depth: 900 },
    { agentId: 'captain',    x: 1100, y: 1200, sprite: 'star_researching', scale: 1.2, depth: 900 },
    { agentId: 'norva',      x: 1850, y: 1200, sprite: 'guest_anim_1',    scale: 1.2, depth: 900 }
  ],

  totalAssets: 15
};
