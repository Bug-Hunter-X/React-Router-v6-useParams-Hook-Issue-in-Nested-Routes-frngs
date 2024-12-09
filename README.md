# React Router v6 useParams Issue in Nested Routes

This repository demonstrates a common issue with the `useParams` hook in React Router v6 when used within deeply nested routes. The problem arises when parent route parameters are not correctly propagated to child components.

## Problem

When navigating to a deeply nested route, the `useParams` hook in the child component might not receive the parameters from its parent routes, resulting in undefined or incorrect parameter values.

## Solution

The provided solution shows how to structure the routes to ensure the correct parameter propagation and fix this issue. The use of Outlet Component will be necessary in this scenario.

## How to run

1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.