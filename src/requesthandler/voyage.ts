const Vonage = require('@vonage/server-sdk')

require('dotenv').config();

console.log(process.env.VONAGE_API_KEY)
const vonage = new Vonage({
    apiKey: process.env.VONAGE_API_KEY,
    apiSecret: process.env.VONAGE_API_SECRET,
    applicationId: process.env.VONAGE_APPLICATION_ID,
    privateKey: process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH
  }, {
    apiHost: process.env.BASE_URL
})

export const VonageInstance = vonage; 