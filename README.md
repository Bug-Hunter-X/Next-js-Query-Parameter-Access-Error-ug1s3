# Next.js Query Parameter Access Error

This repository demonstrates a common error encountered when accessing query parameters in Next.js applications. The error occurs when attempting to access a query parameter that might be undefined, resulting in a runtime error.

## Problem

The `router.query` object in Next.js provides access to URL query parameters. However, if a specific parameter is missing from the URL, trying to access it directly will result in a runtime error: `Cannot read properties of undefined (reading 'myParam')`.

## Solution

The solution involves using optional chaining (?.) or the nullish coalescing operator (??) to safely access the query parameter, preventing the error.

## Setup

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Run the development server: `npm run dev`

## Related Issues

* [Next.js Routing](https://nextjs.org/docs/routing)