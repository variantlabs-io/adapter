"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const whatsapp_1 = require("./whatsapp");
class BaseController {
    constructor() {
        this.init = (request, response, next) => {
            let req = request.body;
            switch (req.messageApp) {
                case "whatsapp":
                    const whatsapp = new whatsapp_1.WhatsappController();
                    whatsapp.sendTextMessage(request, response, next);
                    break;
                case "facebook":
                    console.log("send facebook msg");
                    response.status(500).json("Wrong app name");
                    break;
                default:
                    response.status(500).json("Wrong app name");
                    break;
            }
        };
        this.inbound = (request, response, next) => {
            response.status(200).json("Testing");
        };
    }
}
exports.BaseController = BaseController;
