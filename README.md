# payment-notify-service

This service notifies you by email whenever you have a successful payment made to your `FLUTTERWAVE` account.

## Tech Stack

- Node.js
- Express.js
- Nodemailer

## Endpoints

```txt
POST /api/webhook-callback - webhook
```

## Environment Variables

```txt
NODE_ENV=
PORT=
CORS_ORIGIN=

SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
EMAIL_FROM=
EMAIL_TO=

FLW_PUBLIC_KEY=
FLW_SECRET_KEY=
FLW_SECRET_HASH=
```

## Get it started

Clone Repo.

```bash
git clone <repo url>
```

Install deps.

```bash
npm install
```

create a file called `.env` in the root of the project and fill in the environment variables

Start Project

```bash
npm run start
```
