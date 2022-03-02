import { RequestHandler, response } from "express";
import { CommandRequest } from "../interfaces/baserequest"
import { WhatsappService } from "../services/whatsapp"
import { WhRequest, WhResponse } from "../interfaces/whatsapp"

export class WhatsappController {
    sendTextMessage: RequestHandler = (request, response, next) => {
        let req : CommandRequest = request.body
        const body : WhRequest =  req.message;
        const callback = (err: any, resp: WhResponse) => {
            if(err){
                console.log(err)
                response.status(500).json("Internal server error")
            } else {
                
                response.status(200).json(resp)
            }
        }
        switch (req.messageType) {
            case "textMessage":
                WhatsappService.sendTextMessage(body, callback)
                break;
            case "locationMessage":
                WhatsappService.sendLocation(body, callback)
                break;
            default:
                response.status(500).json("Wrong message type")
        }
    }
}