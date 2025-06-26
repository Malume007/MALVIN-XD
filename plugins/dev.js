const { malume, commands } = require('../malume');

malume({
    pattern: "owner",
    alias: ["developer", "dev"],
    desc: "Displays the developer info",
    category: "owner",
    react: "👨‍💻",
    filename: __filename
}, async (conn, mek, m, {
    from, reply, pushname
}) => {
    try {
        const name = pushname || "there";

        const caption = `
╭─⌈ *👨‍💻 ᴍᴀʟume-ˣᴅ ᴅᴇᴠᴇʟᴏᴘᴇʀ* ⌋─
│
│ 👋 Hello, *${name}*!
│
│ 🤖 I'm *Malume Ng*, the creator and
│    maintainer of this smart WhatsApp bot.
│
│ 👨‍💻 *ᴏᴡɴᴇʀ ɪɴꜰᴏ:*
│ ──────────
│ 🧠 *Name:* Malume Ng
│ 🎂 *Age:* +26
│ 📞 *Contact:* wa.me/255626986627
│ 📺 *YouTube:* Malvin King Tech
│     https://youtube.com/@malvintech2
│
╰─────────

>⚡ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀume-Ng
        `.trim();

        await conn.sendMessage(
            from,
            {
                image: { url: 'https://files.catbox.moe/vfv7n6.jpg' },
                caption: caption,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363402507750390@newsletter',
                        newsletterName: '🪀『 𝙼𝙰𝙻𝚅𝙸𝙽-𝚇𝙳 』🪀',
                        serverMessageId: 143
                    },
                    externalAdReply: {
                        title: "Malume-Ng Bot",
                        body: "Created with ❤️ by Malume ng",
                        thumbnailUrl: 'https://files.catbox.moe/vfv7n6.jpg',
                        mediaType: 1,
                        renderSmallerThumbnail: true,
                        showAdAttribution: true,
                        mediaUrl: "https://youtube.com/@malvintech2",
                        sourceUrl: "https://youtube.com/@malvintech2"
                    }
                }
            },
            { quoted: mek }
        );
    } catch (e) {
        console.error("Error in .dev command:", e);
        reply(`❌ Error: ${e.message}`);
    }
});
