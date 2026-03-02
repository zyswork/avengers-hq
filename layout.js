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
    plants: [],
    poster: { x: 1100, y: 100, depth: 4 },
    coffeeMachine: { x: 100, y: 400, origin: { x: 0.5, y: 0.5 }, depth: 99 },
    serverroom: { x: 2500, y: 300, origin: { x: 0.5, y: 0.5 }, depth: 2 },
    errorBug: { x: 2400, y: 400, origin: { x: 0.5, y: 0.5 }, depth: 50, scale: 0.9, pingPong: { leftX: 2400, rightX: 2550, speed: 0.6 } },
    syncAnim: { x: 2500, y: 1300, origin: { x: 0.5, y: 0.5 }, depth: 40 },
    cat: { x: 200, y: 1400, origin: { x: 0.5, y: 0.5 }, depth: 2000 }
  },

  plaque: { x: 1376, y: 1500, width: 520, height: 50 },
  forcePng: { desk_v2: true },

  // avatar 图片大小 1024x1024，在 2752x1536 画布上 scale 0.15 = ~154px 显示
  // spiderman 是 1408x768，scale 0.12 = ~169px
  agentDesks: [
    // Row 1
    { agentId: 'spiderman',  x: 504,  y: 520,  sprite: 'avatar_spiderman',  scale: 0.15, depth: 910 },
    { agentId: 'jarvis',     x: 994,  y: 490,  sprite: 'avatar_jarvis',     scale: 0.18, depth: 910 },
    { agentId: 'ironman',    x: 1573, y: 520,  sprite: 'avatar_ironman',    scale: 0.18, depth: 910 },
    // Row 2
    { agentId: 'blackwidow', x: 504,  y: 950,  sprite: 'avatar_blackwidow', scale: 0.18, depth: 910 },
    { agentId: 'hawkeye',    x: 1007, y: 950,  sprite: 'avatar_hawkeye',    scale: 0.18, depth: 910 },
    { agentId: 'thor',       x: 1587, y: 900,  sprite: 'avatar_thor',       scale: 0.18, depth: 910 },
    // Row 3
    { agentId: 'hulk',       x: 511,  y: 1380, sprite: 'avatar_hulk',       scale: 0.18, depth: 910 },
    { agentId: 'captain',    x: 994,  y: 1380, sprite: 'avatar_captain',    scale: 0.18, depth: 910 },
    { agentId: 'norva',      x: 1573, y: 1380, sprite: 'avatar_norva',      scale: 0.18, depth: 910 }
  ],

  totalAssets: 24
};
