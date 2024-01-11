import nodemailer from 'nodemailer';
import Transport from 'nodemailer-brevo-transport';
import config from './config';


function createEmailTransporter() {
  const transporter = nodemailer.createTransport(
    new Transport({ apiKey: config.email.sendinblue_api_key })
  );
  return transporter;
}

const transporter = createEmailTransporter()

export default transporter;
