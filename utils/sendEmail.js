import config from '../config/config';
import transporter from '../config/email';
import ejs from 'ejs';
import fs from 'fs';

const successEmailTemplate = fs.readFileSync('../templates/success.html');

export function sendSuccessEmailNotificationEmail(paymentInfo) {
  const mailOptions = {
    from: config.email.from,
    to: config.email.to,
    subject: `Payment Received: ${'amount'}`,
    html: ejs.render(successEmailTemplate, paymentInfo),
  };
  transporter?.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Success email notification sent', info);
    }
  });
}
