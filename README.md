# Fetch Hook NPM Package

## Introduction

The Fetch Hook package is an open-source NPM package designed to enhance the native fetch function with additional capabilities through a convenient hook mechanism. This package is built using TypeScript for type safety and seamless integration with modern JavaScript projects. It aims to provide developers with a robust tool for making HTTP requests while ensuring code quality and consistency with ESLint and Prettier, and reliability through comprehensive testing and continuous integration (CI).

## Features

- **Fetch Hook**: Easily integrate with the native fetch function to extend its capabilities.
- **TypeScript Support**: Full support for TypeScript for type safety and better development experience.
- **Code Quality**: Ensured by ESLint and Prettier to maintain a consistent and clean codebase.
- **Continuous Integration**: Automated testing and publishing to NPM for every significant change.
- **Comprehensive Tests**: Critical functionalities are covered by tests to ensure reliability and stability.

## Getting Started

### Installation

To use the Fetch Hook package in your project, install it via npm:

```bash
npm install @remi.rubis/fetch-hook
```

Replace `@remi.rubis` with the actual username or organization name under which the package is published on NPM.

### Usage

Here's a quick example of how to use the Fetch Hook in your project:

```typescript
import { useFetch } from '@remi.rubis/fetch-hook';

const { data, error, loading } = useFetch('https://api.example.com/data');

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>;

return (
  <div>
    <h1>Data</h1>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);
```

## Contributing

We welcome contributions from the community! If you're interested in improving the Fetch Hook package, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Write your code and tests.
4. Run the tests to ensure everything is working correctly.
5. Submit a pull request with a comprehensive description of your changes.

### Development Setup

To set up the development environment for contributing, you'll need Node.js and npm installed. Clone the repository, and run the following commands:

```bash
npm install
npm run lint # or npm run lint:fix to fix issues
npm test
```

This will install dependencies, run ESLint for code quality checks, and execute the tests.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Links

- NPM Package: [https://www.npmjs.com/package/@remi.rubis/fetch-hook](https://www.npmjs.com/package/@remi.rubis/fetch-hook)
