"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsappService = void 0;
const voyage_1 = require("../requesthandler/voyage");
exports.WhatsappService = {
    sendTextMessage: (body, callback) => {
        voyage_1.VonageInstance.channel.send({ "type": "whatsapp", "number": body.toNumber }, { "type": "whatsapp", "number": process.env.FROMNUMBER || "" }, {
            "content": {
                "type": "text",
                "text": body.textBody || ""
            }
        }, callback);
    },
    sendLocation: (body, callback) => {
        voyage_1.VonageInstance.channel.send({ "type": "whatsapp", "number": body.toNumber }, { "type": "whatsapp", "number": process.env.FROMNUMBER || "" }, {
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
        voyage_1.VonageInstance.channel.send({ type: 'whatsapp', number: body.toNumber }, { type: 'whatsapp', number: process.env.FROMNUMBER || "" }, {
            content: {
                type: 'template',
                template: {
                    name: `${body.template && body.template.namespace || ""}:${body.template && body.template.name || ""}`,
                    parameters: tempData,
                },
                text: "asdas"
            },
            whatsapp: {
                policy: 'deterministic',
                locale: 'en',
            },
        }, callback);
    },
    sendReplyMessage: (body, callback) => {
        let tempData = [];
        if (body.reply) {
            body.reply.replyData.forEach((val) => {
                tempData.push({
                    "type": "reply",
                    "reply": {
                        "id": val[0],
                        "title": val[1]
                    }
                });
            });
        }
        voyage_1.VonageInstance.channel.send({ type: 'whatsapp', number: body.toNumber }, { type: 'whatsapp', number: process.env.FROMNUMBER || "" }, {
            content: {
                type: 'custom',
                custom: {
                    type: 'interactive',
                    interactive: {
                        type: 'button',
                        header: {
                            type: 'text',
                            text: `${body.reply && body.reply.header}`,
                        },
                        body: {
                            text: `${body.reply && body.reply.body}`,
                        },
                        footer: {
                            text: `${body.reply && body.reply.footer}`,
                        },
                        action: {
                            buttons: tempData,
                        },
                    },
                },
            },
            whatsapp: {
                policy: 'deterministic',
                locale: 'en',
            },
        }, callback);
    },
    sendInteractiveMessage: (body, callback) => {
        let tempData = [];
        if (body.reply) {
            body.reply.replyData.forEach((val) => {
                tempData.push({
                    "type": "interactive",
                    "reply": {
                        "id": val[0],
                        "title": val[1]
                    }
                });
            });
        }
        voyage_1.VonageInstance.channel.send({ type: 'whatsapp', number: body.toNumber }, { type: 'whatsapp', number: process.env.FROMNUMBER || "" }, {
            content: {
                type: 'custom',
                custom: {
                    type: 'interactive',
                    "interactive": {
                        "type": "list",
                        "header": {
                            "type": "text",
                            "text": "your-header-content"
                        },
                        "body": {
                            "text": "your-text-message-content"
                        },
                        "footer": {
                            "text": "your-footer-content"
                        },
                        "action": {
                            "button": "cta-button-content",
                            "sections": [
                                {
                                    "title": "your-section-title-content",
                                    "rows": [
                                        {
                                            "id": "unique-row-identifier",
                                            "title": "row-title-content",
                                            "description": "row-description-content",
                                        }
                                    ]
                                },
                                {
                                    "title": "your-section-title-content",
                                    "rows": [
                                        {
                                            "id": "unique-row-identifier",
                                            "title": "row-title-content",
                                            "description": "row-description-content",
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                },
            },
            whatsapp: {
                policy: 'deterministic',
                locale: 'en',
            },
        }, callback);
    },
    sendContact: (body, callback) => {
        voyage_1.VonageInstance.channel.send({ type: 'whatsapp', number: body.toNumber }, { type: 'whatsapp', number: process.env.FROMNUMBER || "" }, {
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
        voyage_1.VonageInstance.channel.send({ type: 'whatsapp', number: body.toNumber }, { type: 'whatsapp', number: process.env.FROMNUMBER || "" }, {
            content: {
                type: 'custom',
                custom: {
                    type: 'template',
                    template: body.templateMedia
                }
            }
        }, callback);
    },
    sendImage: (body, callback) => {
        voyage_1.VonageInstance.channel.send({ type: 'whatsapp', number: body.toNumber }, { type: 'whatsapp', number: process.env.FROMNUMBER || "" }, {
            content: {
                type: 'image',
                image: {
                    url: body.image && body.image.url || "",
                    caption: body.image && body.image.caption || ""
                },
                text: body.image && body.image.caption || ""
            }
        }, callback);
    },
    sendAudio: (body, callback) => {
        voyage_1.VonageInstance.channel.send({ type: 'whatsapp', number: body.toNumber }, { type: 'whatsapp', number: process.env.FROMNUMBER || "" }, {
            content: {
                type: 'audio',
                audio: {
                    url: body.audio && body.audio.url || ""
                },
                text: ""
            }
        }, callback);
    },
    sendVideo: (body, callback) => {
        voyage_1.VonageInstance.channel.send({ type: 'whatsapp', number: body.toNumber }, { type: 'whatsapp', number: process.env.FROMNUMBER || "" }, {
            content: {
                type: 'video',
                video: {
                    url: body.video && body.video.url || "",
                },
                text: body.video && body.video.caption || ""
            }
        }, callback);
    },
    sendFile: (body, callback) => {
        voyage_1.VonageInstance.channel.send({ type: 'whatsapp', number: body.toNumber }, { type: 'whatsapp', number: process.env.FROMNUMBER || "" }, {
            content: {
                type: 'file',
                file: {
                    url: body.file && body.file.url || "",
                    caption: body.file && body.file.caption || ""
                },
                text: body.file && body.file.caption || ""
            }
        }, callback);
    }
};
