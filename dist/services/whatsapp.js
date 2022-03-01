"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsappService = void 0;
const voyage_1 = require("../requesthandler/voyage");
exports.WhatsappService = {
    sendTextMessage: (body, callback) => {
        console.log(body);
        voyage_1.VonageInstance.channel.send({ "type": "whatsapp", "number": body.toNumber }, { "type": "whatsapp", "number": process.env.FROMNUMBER }, {
            "content": {
                "type": "text",
                "text": body.textBody
            }
        }, callback);
    }
};
