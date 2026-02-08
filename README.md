# carlosbaraza.com

Personal blog and portfolio of **Carlos Baraza** — CTO at [InPractise](https://inpractise.com), writing about agentic coding workflows, AI strategy, and building products.

## About

I've been writing code since I was a kid. These days I write it alongside AI agents — and I think that's the most exciting shift in software since the internet itself.

Previously shipped software at Bloomberg, Expedia (HomeAway/VRBO), and DAZN. Now focused on how AI agents are changing the way we build, and how teams can adopt them without the hype.

Topics I write about: agentic coding, AI strategy, web development, book notes, side projects, and whatever else catches my attention.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com)
- **React:** 19
- **Typography:** Playfair Display, Source Serif 4, Inter
- **Deployment:** Docker (standalone output) or any Node.js host

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Run

```bash
pnpm build
pnpm start
```

Or with Docker:

```bash
docker build -t carlosbaraza-blog .
docker run -p 3000:3000 carlosbaraza-blog
```

## License

[MIT](LICENSE)
