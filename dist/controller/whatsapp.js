"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsappController = void 0;
const whatsapp_1 = require("../services/whatsapp");
class WhatsappController {
    constructor() {
        this.sendTextMessage = (request, response, next) => {
            let req = request.body;
            const body = req.message;
            const callback = (err, resp) => {
                if (err) {
                    console.log(err);
                    response.status(500).json("Internal server error");
                }
                else {
                    response.status(200).json(resp);
                }
            };
            switch (req.messageType) {
                case "textMessage":
                    whatsapp_1.WhatsappService.sendTextMessage(body, callback);
                    break;
                case "locationMessage":
                    whatsapp_1.WhatsappService.sendLocation(body, callback);
                    break;
                default:
                    response.status(500).json("Wrong message type");
            }
        };
    }
}
exports.WhatsappController = WhatsappController;
