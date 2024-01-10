import { paymentWebhookHandler } from '../controller/webhookCallback';
import { Router } from 'express';

const webHookCallbackRouter = Router();

webHookCallbackRouter.post('/webhook-callback', paymentWebhookHandler);

export default webHookCallbackRouter;
