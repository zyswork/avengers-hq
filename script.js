/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

const bots = {
    zone_jarvis: { name: "Jarvis", welcome: "Sir, Jarvis at your service. What would you like me to do?" },
    zone_ironman: { name: "IronMan", welcome: "Hey! Need some tech magic? I can help with coding and architecture." },
    zone_blackwidow: { name: "BlackWidow", welcome: "Task assigned. I will execute and report back." },
    zone_hawkeye: { name: "HawkEye", welcome: "Intelligence gathered. What do you need to know?" },
    zone_thor: { name: "Thor", welcome: "By the thunder! What task awaits?" },
    zone_hulk: { name: "Hulk", welcome: "Hulk analyze... What needs to be processed?" },
    zone_captain: { name: "CaptainAmerica", welcome: "I can do this all day. What is the mission?" },
    zone_norva: { name: "Norva", welcome: "Hello! I can help with writing, documentation, and communication." }
};

// Setup enter/leave handlers for each bot
Object.keys(bots).forEach(zoneId => {
    const bot = bots[zoneId];
    
    WA.room.onEnterZone(zoneId, () => {
        WA.chat.sendChatMessage(bot.welcome, bot.name);
    });
    
    WA.room.onLeaveZone(zoneId, () => {
        // Optional: goodbye message
    });
});

console.log("Avengers HQ loaded! " + Object.keys(bots).length + " bots ready.");
