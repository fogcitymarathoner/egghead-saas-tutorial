This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
### Authentication scheme from 
[Supabase DOCS Auth Page](https://supabase.com/docs/guides/auth/quickstarts/nextjs)
### Attribution
Following Tutorial [Build a SaaS product with Next.js, Supabase and Stripe](https://egghead.io/lessons/supabase-create-a-supabase-project)
### Deploying to netlify from powershell
```aiignore
$env:NETLIFY_AUTH_TOKEN = 'dddd'
$env:NETLIFY_SITE_ID = 'dddddd9'
netlify deploy --build --prod
```
### next lint does not work in "eslint": "^9.12.0"
When fixed
```aiignore
"eslint-config-next": "^14.2.0",
```
should configure it to work.

### setting up create_new_user_profile trigger
Cannot use WEB Interface to create trigger
Must use sql window
[User Management](https://supabase.com/docs/guides/auth/managing-user-data)
### Ngrok must be configured to forward Non-SSL requests
SSL requests stall the create-stripe-customer callback
```aiignore
ngrok http 3000 --schema http,https
```
### NOTE: RLS has to be handled in-code because static code is retrieved as superuser
Test RLS exercises in /api/protected

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Supabase OAuth Tutorial

Helpful docs:

- https://supabase.com/docs/guides/auth/server-side/nextjs
- https://supabase.com/docs/guides/auth/social-login
- https://nextjs.org/docs/app/building-your-application/routing/middleware

My links:

- My personal website 👉 https://coleblender.com
- My business website 👉 https://superlativesites.com
- YouTube 👉 https://youtube.com/@coleblender
- GitHub 👉 https://github.com/ColeBlender
- X 👉 https://x.com/ColeBlender
- IG 👉 https://instagram.com/yazzibelani
- LinkedIn 👉 https://linkedin.com/in/cole-blender

Video 👉 https://www.youtube.com/watch?v=g3chAFaqr_c&t=811s

# BUGS
1) text-white in button element className breaks the browser.  all pages turn white
2) 