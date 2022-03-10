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
        let tempData = [];
        if (body.template) {
            body.template.data.forEach((val) => {
                tempData.push({ "default": val });
            });
        }
        voyage_1.VonageInstance.channel.send({ type: 'whatsapp', number: body.toNumber }, { type: 'whatsapp', number: process.env.FROMNUMBER }, {
            content: {
                type: 'template',
                template: {
                    name: `${body.template && body.template.namespace || ""}:${body.template && body.template.name || ""}`,
                    parameters: tempData,
                },
            },
            whatsapp: {
                policy: 'deterministic',
                locale: 'en',
            },
        }, callback);
    },
    sendContact: (body, callback) => {
        voyage_1.VonageInstance.channel.send({ type: 'whatsapp', number: body.toNumber }, { type: 'whatsapp', number: process.env.FROMNUMBER }, {
            content: {
                type: 'custom',
                custom: {
                    type: 'contacts',
                    contacts: body.contact
                }
            }
        }, callback);
    },
    sendMediaTemplate: (body, callback) => {
        voyage_1.VonageInstance.channel.send({ type: 'whatsapp', number: body.toNumber }, { type: 'whatsapp', number: process.env.FROMNUMBER }, {
            content: {
                type: 'custom',
                custom: {
                    type: 'template',
                    template: {
                        namespace: "9b6b4fcb_da19_4a26_8fe8_78074a91b584",
                        name: "verify",
                        language: {
                            policy: 'deterministic',
                            code: 'en_US',
                        },
                        components: [
                            {
                                type: 'header',
                                parameters: [
                                    {
                                        type: 'location',
                                        location: {
                                            longitude: -122.425332,
                                            latitude: 37.758056,
                                            name: 'Facebook HQ',
                                            address: '1 Hacker Way, Menlo Park, CA 94025',
                                        },
                                    },
                                ],
                            },
                            {
                                type: 'body',
                                parameters: [
                                    {
                                        type: 'text',
                                        text: 'Value 1',
                                    },
                                    {
                                        type: 'text',
                                        text: 'Value 2',
                                    },
                                    {
                                        type: 'text',
                                        text: 'Value 3',
                                    },
                                    {
                                        type: 'text',
                                        text: 'Value 3',
                                    },
                                ],
                            },
                            {
                                type: 'button',
                                index: 0,
                                sub_type: 'url',
                                parameters: [
                                    {
                                        type: 'text',
                                        text: '1Z999AA10123456784',
                                    },
                                ],
                            },
                        ],
                    },
                }
            }
        }, callback);
    },
    sendImage: (body, callback) => {
        voyage_1.VonageInstance.channel.send({ type: 'whatsapp', number: body.toNumber }, { type: 'whatsapp', number: process.env.FROMNUMBER }, {
            content: {
                type: 'image',
                image: {
                    url: body.image && body.image.url,
                    caption: body.image && body.image.caption
                }
            }
        }, callback);
    },
    sendAudio: (body, callback) => {
        voyage_1.VonageInstance.channel.send({ type: 'whatsapp', number: body.toNumber }, { type: 'whatsapp', number: process.env.FROMNUMBER }, {
            content: {
                type: 'audio',
                audio: {
                    url: body.audio && body.audio.url
                }
            }
        }, callback);
    },
    sendVideo: (body, callback) => {
        voyage_1.VonageInstance.channel.send({ type: 'whatsapp', number: body.toNumber }, { type: 'whatsapp', number: process.env.FROMNUMBER }, {
            content: {
                type: 'video',
                video: {
                    url: body.video && body.video.url,
                    caption: body.video && body.video.caption
                }
            }
        }, callback);
    },
    sendFile: (body, callback) => {
        voyage_1.VonageInstance.channel.send({ type: 'whatsapp', number: body.toNumber }, { type: 'whatsapp', number: process.env.FROMNUMBER }, {
            content: {
                type: 'file',
                file: {
                    url: body.file && body.file.url,
                    caption: body.file && body.file.caption
                }
            }
        }, callback);
    }
};
