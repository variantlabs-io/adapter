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
                case "templateMessage":
                    whatsapp_1.WhatsappService.sendTemplate(body, callback);
                    break;
                case "contactMessage":
                    whatsapp_1.WhatsappService.sendContact(body, callback);
                    break;
                case "templateMediaMessage":
                    whatsapp_1.WhatsappService.sendMediaTemplate(body, callback);
                    break;
                case "imageMessage":
                    whatsapp_1.WhatsappService.sendImage(body, callback);
                    break;
                case "audioMessage":
                    whatsapp_1.WhatsappService.sendAudio(body, callback);
                    break;
                case "videoMessage":
                    whatsapp_1.WhatsappService.sendVideo(body, callback);
                    break;
                case "fileMessage":
                    whatsapp_1.WhatsappService.sendFile(body, callback);
                    break;
                default:
                    response.status(500).json("Wrong message type");
            }
        };
    }
}
exports.WhatsappController = WhatsappController;
