import nodemailer from 'nodemailer';
import config from './config';

let transporter;

async function createTestEmailTransporter() {
  const account = await nodemailer.createTestAccount();
  transporter = nodemailer.createTransport({
    host: account.smtp.host,
    port: account.smtp.port,
    secure: account.smtp.secure,
    auth: {
      user: account.user,
      pass: account.pass,
    },
  });
  return transporter;
}

function createEmailTransporter() {
  transporter = nodemailer.createTransport({
    host: config.email.smtp.host,
    port: Number(config.email.smtp.port),
    secure: false,
    auth: {
      user: config.email.smtp.auth.username,
      pass: config.email.smtp.auth.password,
    },
  });
  return transporter;
}

if (config.node_env === 'production') {
  createEmailTransporter();
} else {
  createTestEmailTransporter();
}

export default transporter;
