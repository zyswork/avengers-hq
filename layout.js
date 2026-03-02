const LAYOUT = {
  game: { width: 2752, height: 1536 },

  areas: {
    door:        { x: 1376, y: 1400 },
    writing:     { x: 700, y: 750 },
    researching: { x: 700, y: 750 },
    error:       { x: 2400, y: 300 },
    breakroom:   { x: 200, y: 350 }
  },

  furniture: {
    sofa: { x: 200, y: 200, origin: { x: 0, y: 0 }, depth: 10 },
    desk: { x: 504, y: 460, origin: { x: 0.5, y: 0.5 }, depth: 1000 },
    flower: { x: 600, y: 440, origin: { x: 0.5, y: 0.5 }, depth: 1100 },
    starWorking: { x: 504, y: 380, origin: { x: 0.5, y: 0.5 }, depth: 900, scale: 1.5 },
    plants: [
      { x: 820, y: 350, depth: 5 },
      { x: 1430, y: 350, depth: 5 },
      { x: 1430, y: 800, depth: 5 },
      { x: 820, y: 1200, depth: 5 },
      { x: 1430, y: 1200, depth: 5 }
    ],
    poster: { x: 1100, y: 100, depth: 4 },
    coffeeMachine: { x: 100, y: 400, origin: { x: 0.5, y: 0.5 }, depth: 99 },
    serverroom: { x: 2500, y: 300, origin: { x: 0.5, y: 0.5 }, depth: 2 },
    errorBug: { x: 2400, y: 400, origin: { x: 0.5, y: 0.5 }, depth: 50, scale: 0.9, pingPong: { leftX: 2400, rightX: 2550, speed: 0.6 } },
    syncAnim: { x: 2500, y: 1300, origin: { x: 0.5, y: 0.5 }, depth: 40 },
    cat: { x: 200, y: 1400, origin: { x: 0.5, y: 0.5 }, depth: 2000 }
  },

  plaque: { x: 1376, y: 1500, width: 520, height: 50 },
  forcePng: { desk_v2: true },

  // 9 个工位 — 每个 agent 对齐到背景图中对应桌子的椅子前方
  // scale 放大到 2.0 让人物清晰可见
  agentDesks: [
    // === Row 1 (y ≈ 500) ===
    { agentId: 'spiderman',  x: 504,  y: 520,  sprite: 'star_idle',         scale: 2.2, depth: 910 },
    { agentId: 'jarvis',     x: 994,  y: 490,  sprite: 'guest_anim_1',      scale: 2.0, depth: 910 },
    { agentId: 'ironman',    x: 1573, y: 520,  sprite: 'guest_anim_2',      scale: 2.0, depth: 910 },
    // === Row 2 (y ≈ 940) ===
    { agentId: 'blackwidow', x: 504,  y: 950,  sprite: 'guest_anim_3',      scale: 2.0, depth: 910 },
    { agentId: 'hawkeye',    x: 1007, y: 950,  sprite: 'guest_anim_4',      scale: 2.0, depth: 910 },
    { agentId: 'thor',       x: 1587, y: 900,  sprite: 'guest_anim_5',      scale: 2.0, depth: 910 },
    // === Row 3 (y ≈ 1370) ===
    { agentId: 'hulk',       x: 511,  y: 1380, sprite: 'guest_anim_6',      scale: 2.0, depth: 910 },
    { agentId: 'captain',    x: 994,  y: 1380, sprite: 'star_researching',   scale: 2.0, depth: 910 },
    { agentId: 'norva',      x: 1573, y: 1380, sprite: 'guest_anim_1',      scale: 2.0, depth: 910 }
  ],

  totalAssets: 15
};
