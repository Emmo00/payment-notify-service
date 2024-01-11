import Flutterwave from 'flutterwave-node-v3';
import config from '../config/config';
import { Transactions } from '../utils/db';
import { sendSuccessEmailNotificationEmail } from '../utils/sendEmail';

const flw = new Flutterwave(
  config.flutterwave.public_key,
  config.flutterwave.secret_key
);

export async function paymentWebhookHandler(req, res) {
  const signature = req.headers['verif-hash'];
  if (!signature || signature !== config.flutterwave.secret_hash) {
    return res.status(401).end();
  }
  const payload = req.body;
  const response = await flw.Transaction.verify({ id:`${payload.data.id}` });
  if (
    !(new Transactions()).exists(payload.data.id) &&
    response.data &&
    response.data.status === 'successful'
  ) {
    sendSuccessEmailNotificationEmail(payload.data);
    new Transactions().save(payload.data.id);
  }
  res.status(200).end();
}
