export interface CommandRequest {
    messageApp: string
    messageType: string
    message: WhatsappRequest 
}

export interface WhatsappRequest {
    toNumber: string
    textBody: string
}