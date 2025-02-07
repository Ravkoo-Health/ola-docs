# Ola Digital Health Documentation Portal

A modern, interactive API documentation portal built with Next.js 14, Tailwind CSS, and Scalar API Reference.

## Features

- 🎯 Interactive API Documentation with Scalar
- 🎨 Modern UI with Tailwind CSS and Framer Motion animations
- 🌓 Light/Dark mode support
- 📱 Responsive design
- ⚡ Built with Next.js 14 and App Router
- 🔒 Multiple authentication method support
- 📚 OpenAPI 3.1.1 Specification

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Scalar API Reference
- Radix UI Components
- OpenAPI 3.1.1

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── openapi/    # OpenAPI specification endpoint
│   ├── client-api/     # Client API documentation routes
│   ├── page.tsx        # Landing page
│   └── layout.tsx      # Root layout with Geist font
```

## Getting Started

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the documentation.

## API Documentation

The API documentation is available through two main routes:

- `/api/openapi` - Raw OpenAPI specification
- `/client-api` - Interactive API documentation UI

## Development

### Modifying API Specification
Update the OpenAPI specification in:
```
src/app/api/openapi/route.ts
```

### Styling
The project uses Tailwind CSS with custom theme configuration. Global styles are defined in:
```
src/app/globals.css
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Deployment

Deploy using [Vercel](https://vercel.com):

```bash
vercel deploy
```

## License

This project is proprietary and confidential. © Ola Digital Health.
