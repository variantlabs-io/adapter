export interface WhRequest {
    toNumber: string
    textBody?: string
    location?: Locations
    template?: Template
    contact?: ContactMessage[]
    templateMedia?: TemplateMedia
    image?: ImageSend
    audio?: Audio
    video?: ImageSend
    file?: ImageSend
}

export interface Audio {
    url: string
}

export interface ImageSend {
    url: string
    caption: string
}

export interface WhResponse {
    message_uuid: string
}

export interface Locations {
    longitude: number
    latitude: number
    name: string
    address: string
}

export interface Template {
    name: string
    namespace: string
    data: string[]
}

export interface TemplateMedia {
    namespace: string
    name: string
    language: Language
    components: Component[]
}

export interface Language {
    policy: string
    code: string
}

export interface Component {
    type: string
    sub_type?: string
    index?: number
    parameters: TextBody[]|QuickReply[]|ImageMessage[]
}

export interface TextBody {
    type: string
    text: string
}

export interface QuickReply {
    type: string
    payload: string
}

export interface ImageMessage {
    type: string
    image: ImageLink
}

export interface ImageLink {
    link: string
}

export interface TemplateData {
    default: string
}

export interface ContactMessage {
    name: ContactName
    phones: Phone[]
}

export interface ContactName {
    first_name: string
    formatted_name: string
    last_name: string
}

export interface Phone {
    phone: string
    type: string
    wa_id?: string
}