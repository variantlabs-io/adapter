import { VonageInstance } from "../requesthandler/voyage";
import { WhRequest, WhResponse } from "../interfaces/whatsapp";

export const WhatsappService= {
    sendTextMessage: (body: WhRequest, callback: Function) => {
      console.log(body)
      VonageInstance.channel.send(
          { "type": "whatsapp", "number": body.toNumber },
          { "type": "whatsapp", "number": process.env.FROMNUMBER},
          {
            "content": {
              "type": "text",
              "text": body.textBody
            }
          },
          callback
      );
    }
}