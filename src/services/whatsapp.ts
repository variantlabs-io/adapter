import { VonageInstance } from "../requesthandler/voyage";
import { WhRequest, WhResponse } from "../interfaces/whatsapp";

export const WhatsappService= {
    sendTextMessage: (body: WhRequest, callback: Function) => {
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
    },

    sendLocation: (body: WhRequest, callback: Function) => {
      VonageInstance.channel.send(
        { "type": "whatsapp", "number": body.toNumber },
        { "type": "whatsapp", "number": process.env.FROMNUMBER},
        {
          "content": {
            "type": "custom",
            custom: {
              "type": "location",
              "location": body.location
            }
          }
        },
        callback
      )
    },

    sendTemplate: (body: WhRequest, callback: Function) {
      VonageInstance.channel.send(
        { type: 'whatsapp', number: body.toNumber },
        { type: 'whatsapp', number: process.env.FROMNUMBER },
        {
            content: {
                type: 'template',
                template: {
                    name: `${body.template.namespace}:${body.template.name}`,
                    parameters: [
                        {
                            default: 'Vonage Verification',
                        },
                        {
                            default: '64873',
                        },
                        {
                            default: '10',
                        },
                    ],
                },
            },
            whatsapp: {
                policy: 'deterministic',
                locale: 'en',
            },
        },
        callback
      );
    }
}