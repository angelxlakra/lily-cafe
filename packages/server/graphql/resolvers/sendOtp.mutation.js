import twilio from 'twilio'
import 'dotenv/config'

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const verifySid = "VA8f57d1e7f19b7966d8327c040bced151"
console.log({accountSid, authToken});
const client = twilio(accountSid, authToken);

const sendOtp = async (parent, args) => {
    const phone = args.phone;
    const verification = await client.verify.v2
        .services(verifySid)
        .verifications
        .create({ to: phone, channel: "sms" })
            
    console.log({ verification });
    if (verification.status === "pending") {
        return { status: 200, message: "OTP sent succesfully!" }
    }
    return { status: 400, message: "Something went wrong!" }
}

export default sendOtp;