# Production setup

## 1. Requirements
- Node.js 20+
- PostgreSQL 14+
- A production HTTPS domain

## 2. Install
```bash
npm install
```

## 3. Environment
Copy `.env.example` to `.env.local` and set:
- `DATABASE_URL`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD_HASH`
- `SESSION_SECRET`
- `NEXT_PUBLIC_SITE_URL`

Generate an administrator password hash:
```bash
node scripts-generate-admin-hash.mjs "YOUR-STRONG-PASSWORD"
```
Put the result in `ADMIN_PASSWORD_HASH`. Generate a long random `SESSION_SECRET` and keep it private.

## 4. Database
```bash
npx prisma generate
npx prisma migrate dev --name init
```
For production migrations use `npx prisma migrate deploy`.

## 5. Run
```bash
npm run dev
```
Open `/` for the public site and `/admin/login` for administration.

## 6. Before public launch
- Replace all image placeholders with campaign-approved assets.
- Replace official contact details.
- Have the campaign approve every biography, agenda, event and newsroom statement.
- Configure production PostgreSQL backups.
- Add email/SMS provider only after appropriate consent and opt-out workflows are approved.
- Add rate limiting/WAF protection at the hosting layer or API gateway.
- Configure privacy notice, retention policy and data-subject request process.
- Review Kenya-specific election, data-protection and campaign-compliance requirements with qualified counsel.
- Test forms, authentication, mobile layouts, backups and recovery before launch.
