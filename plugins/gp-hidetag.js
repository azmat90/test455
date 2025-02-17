import MessageType from '@whiskeysockets/baileys';
import { generateWAMessageFromContent } from '@whiskeysockets/baileys';

let handler = async (m, { conn, text, participants }) => {
    // Extract all participant IDs and decode them
    let users = participants.map(u => conn.decodeJid(u.id));

    // Use the quoted message if available, otherwise use the current message
    let quotedMessage = m.quoted ? m.quoted : m;
    let messageContent = m.quoted ? m.quoted : m.msg;

    // Replace the text with '@' to mention all participants
    const mentionText = '@';

    // Generate a new message with mentions
    const generatedMessage = generateWAMessageFromContent(
        m.chat,
        {
            [messageContent.toJSON ? quotedMessage.mtype : 'extendedTextMessage']: 
            messageContent.toJSON ? messageContent.toJSON() : {
                text: mentionText // Replace text with '@'
            }
        },
        {
            quoted: m,
            userJid: conn.user.id
        }
    );

    // Modify the message to include mentions
    const modifiedMessage = conn.cMod(
        m.chat,
        generatedMessage,
        mentionText, // Use '@' as the text
        conn.user.jid,
        { mentions: users } // Mention all participants
    );

    // Send the message
    await conn.relayMessage(m.chat, modifiedMessage.message, { messageId: modifiedMessage.key.id });
};

// Command metadata
handler.help = ['hidetag'];
handler.tags = ['group'];
handler.command = ['hidetag', 'notify'];
handler.group = true; // Only works in groups
handler.admin = true; // Only admins can use this command

export default handler;
