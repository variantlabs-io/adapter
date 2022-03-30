class Testing {
    newintt(){
        const Vonage = require('@vonage/server-sdk');

const vonage = new Vonage(
    {
        apiKey: "a210d78b",
        apiSecret: "yuztsKZWnnv9XJSx",
        applicationId: "855eb179-4eb0-45b1-a972-0f82e5d0d794",
        privateKey: "/Users/rohan/Downloads/private.key",
    },
    {
        apiHost: "https://messages-sandbox.nexmo.com",
    }
);

vonage.channel.send(
    { type: 'whatsapp', number: "918197937705" },
    { type: 'whatsapp', number: "14157386102" },
    {
        "content": {
          "type": "text",
          "text": "This is a WhatsApp Message text message sent using the Messages API"
        }
    },
    (err, data) => {
        if (err) {
            console.error(err);
        } else {
            console.log(data.message_uuid);
        }
    }
);
    }
}
t1 = new Testing()
t1.newintt()