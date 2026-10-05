# CPA Luke Kimutai Smith — Campaign Platform

Full-stack Next.js foundation for the 2027 Elgeiyo Marakwet gubernatorial campaign website and Campaign Command Centre.

## Included
- Responsive public campaign website
- Volunteer registration backed by Prisma/PostgreSQL
- Contact/community issue submissions backed by Prisma/PostgreSQL
- Campaign dashboard foundation
- Vision, agenda, events and newsroom pages
- Image placeholders for approved campaign photography
- Validation with Zod
- Environment configuration template

## Production requirements
Before public launch, configure PostgreSQL, authentication/authorization, rate limiting, CSRF/session protections, email/SMS delivery, secure file storage, backups, privacy/consent notices, monitoring and HTTPS.

## Run
```bash
npm install
cp .env.example .env.local
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

Open http://localhost:3000.
