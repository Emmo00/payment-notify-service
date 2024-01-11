import { Router } from 'express';
import { paymentWebhookHandler } from '../controller/webhookCallback';

const webHookCallbackRouter = Router();

webHookCallbackRouter.post('/webhook-callback', paymentWebhookHandler);

export default webHookCallbackRouter;
