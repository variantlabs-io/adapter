"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsappService = void 0;
const voyage_1 = require("../requesthandler/voyage");
exports.WhatsappService = {
    sendTextMessage: (body, callback) => {
        voyage_1.VonageInstance.channel.send({ "type": "whatsapp", "number": body.toNumber }, { "type": "whatsapp", "number": process.env.FROMNUMBER }, {
            "content": {
                "type": "text",
                "text": body.textBody
            }
        }, callback);
    },
    sendLocation: (body, callback) => {
        voyage_1.VonageInstance.channel.send({ "type": "whatsapp", "number": body.toNumber }, { "type": "whatsapp", "number": process.env.FROMNUMBER }, {
            "content": {
                "type": "custom",
                custom: {
                    "type": "location",
                    "location": body.location
                }
            }
        }, callback);
    },
    sendTemplate: (body, callback) => {
        voyage_1.VonageInstance.channel.send({ type: 'whatsapp', number: body.toNumber }, { type: 'whatsapp', number: process.env.FROMNUMBER }, {
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
        }, callback);
    }
};
