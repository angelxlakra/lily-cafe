import twilio from 'twilio'

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifySid = "VA8f57d1e7f19b7966d8327c040bced151"
const client = twilio(accountSid, authToken);

const verifyOtp = async (parent, args) => {
    const phone = args.phone;
    const code = args.otp
    const verification = await client.verify.v2
        .services(verifySid)
        .verificationChecks
        .create({ to: phone, code })
    
    console.log({verification})
    return {
        status: verification.status === 'approved' ? 200 : 400,
        message: verification.status === 'approved' ? "OTP verified!" : "Wrong OTP!"
    }
}

export default verifyOtp;