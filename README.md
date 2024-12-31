# Pokedex App

This is a Pokedex web application built with modern web technologies. The app fetches data from the [PokeAPI](https://pokeapi.co/) to display a list of Pokémon, allowing users to view detailed information about each Pokémon. The application is containerized with Docker for easy deployment.

## Features

- Fetch and display a list of Pokémon.
- View detailed information about selected Pokémon.
- Responsive and stylish UI built with TailwindCSS.
- Type-safe codebase using TypeScript.
- Server-side rendering and optimized performance with Next.js.
- Modular and reusable components for better maintainability.

## Built With

- **Next.js** - React framework for server-side rendering and static site generation.
- **React** - Frontend library for building user interfaces.
- **TypeScript** - Superset of JavaScript providing type safety.
- **TailwindCSS** - Utility-first CSS framework for styling.
- **Docker** - Containerization for consistent and portable deployments.
- **PokeAPI** - Free and open API for Pokémon data.

## Requirements

- [Docker](https://www.docker.com/) installed on your machine.

## Getting Started

Follow these steps to set up and run the application:

### Clone the Repository

```bash
git clone <repository-url>
cd <repository-name>
```

### Build the Docker Images
```bash
docker-compose build
```

### Run the Application

```bash
docker-compose up
```

### Access the Application

Once the container is running, you can access the app in your browser at:

```
http://localhost:3000
```

To stop the application, press `Ctrl+C` in the terminal and run:
```bash
docker-compose down
```

## Project Structure

```
.
├── app
│   ├── (root)/               # Main entry page
│   ├── components/           # Reusable React components
│   ├── favicon.ico           # Favicon for the app
│   ├── globals.css           # Global CSS styles
│   └── types.ts              # Type definitions
├── docker-compose.yml        # Docker Compose configuration
├── Dockerfile                # Dockerfile for containerization
├── eslint.config.mjs         # ESLint configuration
├── lst.txt                   # Sample list or utility file
├── next-env.d.ts             # Next.js TypeScript environment
├── next.config.ts            # Next.js configuration
└── node_modules/             # Node.js dependencies
```

## Development Setup

To run the app locally during development:

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open your browser at:

   ```
   http://localhost:3000
   ```

## Acknowledgements

- [PokeAPI](https://pokeapi.co/) for providing the Pokémon data.