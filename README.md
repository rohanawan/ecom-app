# E-Commerce Store Project

## Overview

Welcome to the E-Commerce Store Project! This React-based application is designed to provide a seamless shopping experience. The project leverages modern frontend development practices, including custom hooks, context API, and modular code organization.

## Project Structure

The project is organized into several key directories and files to ensure scalability and maintainability:

- **`src/`**: The source code of the application.
  - **`assets/`**: Contains static assets such as images and fonts.
    - `images/`: Folder for image assets (e.g., product images, logos).
    - `fonts/`: Folder for custom fonts.
  - **`hooks/`**: Custom React hooks for reusable logic.
    - `useCart.js`: Custom hook for managing the shopping cart.
    - `useAuth.js`: Custom hook for handling user authentication.
    - `useProduct.js`: Custom hook for fetching and managing product data.
  - **`components/`**: React components used throughout the application.
  - **`config/`**: Configuration files and environment variables.
  - **`constants/`**: Constant values used across the application.
  - **`pages/`**: Page components representing different views or routes.
    - `AboutUs.js`
    - `ChangePassword.js`
    - `Checkout.js`
    - `Home.js`
    - `ItemDetails.js`
    - `OrderHistory.js`
    - `OrderHistory.js`
    - `ShowCart.js`
    - `LoginPage.js`
  - **`styles/`**: CSS or styled-components for styling the application.
    - `index.css`
    - `item.css`
    - `showCart.css`
  - **`contexts/`**: Context API providers and custom context hooks.
    - `AuthContext.js`: Context provider and hook for handling user authentication state.

## Features

- **Custom Hooks**:
  - **`useCart`**: Manages cart state, including adding/removing items and calculating totals.
  - **`useAuth`**: Handles user login, logout, and authentication state.
  - **`useProduct`**: Fetches product data from an API and manages product-related logic.

- **Constants**:
  - Located in the `constants/` directory, these values include route paths, action types, and currency symbols.

- **Context API**:
  - **`AuthContext`**: Manages user authentication state and provides login and logout functionalities.

## Getting Started

To get started with the development environment:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <project-directory>

2. **Install Dependencies**:
   ```bash
  npm install / npm i

3. **Run Project**:
   ```bash
   npm start



