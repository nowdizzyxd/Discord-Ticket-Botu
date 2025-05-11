module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`${client.user.tag} is now online!`);
        
        // Set bot status
        client.user.setPresence({
            activities: [{ name: 'Destek Talepleri', type: 3 }],
            status: 'online'
        });
        
        // Log the number of servers the bot is in
        console.log(`Bot is in ${client.guilds.cache.size} servers`);
    }
};
