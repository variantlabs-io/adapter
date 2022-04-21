import { RequestHandler, response } from "express";
import { CommandRequest } from "../interfaces/baserequest"
import { WhatsappController } from "./whatsapp";

export class BaseController {
    init: RequestHandler = (request, response, next) => {
        let req : CommandRequest = request.body
        switch (req.messageApp) {
            case "whatsapp":
                const whatsapp = new WhatsappController()
                whatsapp.sendTextMessage(request, response, next)
                break;
            case "facebook":
                console.log("send facebook msg");
                response.status(500).json("Wrong app name");
                break;
            default:
                response.status(500).json("Wrong app name");
                break;
        }
    }

    inbound: RequestHandler = (request, response, next) => {
        response.status(200).json("Testing");
    }
}