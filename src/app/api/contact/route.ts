import axios from "axios";

interface Data {
  fullname: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  const data: Data = await request.json();

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const message = `👤 <b>Ismi Familyasi:</b> ${data.fullname}\n☎️ <b>Aloqa:</b> ${data.email}\n📝 <b>Xabar:</b> ${data.message}`;

  const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const response = await axios.post(
      telegramUrl,
      {
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (response.status !== 200) {
      console.error("Failed to send message to Telegram:", response.data);
    }
  } catch (error) {
    console.error("Failed to send message to Telegram:", error);
  }

  return new Response(message);
}
