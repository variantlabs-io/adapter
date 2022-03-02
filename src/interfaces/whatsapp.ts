export interface WhRequest {
    toNumber: string
    textBody?: string
    location?: Locations
    template?: Template
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
}