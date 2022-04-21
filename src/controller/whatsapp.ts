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
            case "templateMessage":
                WhatsappService.sendTemplate(body, callback)
                break;
            case "replyMessage":
                WhatsappService.sendReplyMessage(body, callback)
                break;
            case "interactiveMessage":
                WhatsappService.sendInteractiveMessage(body, callback)
                break;
            case "contactMessage":
                WhatsappService.sendContact(body, callback)
                break;
            case "templateMediaMessage":
                WhatsappService.sendMediaTemplate(body, callback)
                break;
            case "imageMessage":
                WhatsappService.sendImage(body, callback)
                break;
            case "audioMessage":
                WhatsappService.sendAudio(body, callback)
                break;
            case "videoMessage":
                WhatsappService.sendVideo(body, callback)
                break;
            case "fileMessage":
                WhatsappService.sendFile(body, callback)
                break;
            default:
                response.status(500).json("Wrong message type")
        }
    }
}