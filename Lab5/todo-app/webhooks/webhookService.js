import axios from "axios";

const webhookUrls = [];

export function registerWebhook(url) {
  webhookUrls.push(url);
  console.log("Webhook registered:", url);
}

export async function sendWebhook(event, data) {
  for (const url of webhookUrls) {
    try {
      await axios.post(url, {
        event,
        data,
        timestamp: new Date().toISOString(),
      });
      console.log(`Webhook sent → ${url}, event: ${event}`);
    } catch (err) {
      console.log("Error sending webhook →", url);
    }
  }
}
