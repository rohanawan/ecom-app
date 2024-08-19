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
    - `Header.js`: Component for the top navigation bar.
    - `Footer.js`: Component for the bottom footer section.
    - `ProductCard.js`: Component for displaying individual product details.
    - `Cart.js`: Component for the shopping cart interface.
    - `LoginForm.js`: Component for user login form.
    - `CheckoutForm.js`: Component for the checkout process.
  - **`config/`**: Configuration files and environment variables.
    - `apiConfig.js`: Configuration file for API endpoints and request settings.
    - `appConfig.js`: General configuration settings for the application.
  - **`constants/`**: Constant values used across the application.
    - `routes.js`: Constant values for application routes.
    - `actionTypes.js`: Constants for action types in state management tools.
    - `currency.js`: Constants for currency symbols and formats.
  - **`pages/`**: Page components representing different views or routes.
    - `HomePage.js`: Component for the homepage with featured products.
    - `ProductPage.js`: Component for displaying details of a single product.
    - `CartPage.js`: Component for the shopping cart overview.
    - `CheckoutPage.js`: Component for the checkout process.
    - `LoginPage.js`: Component for user login.
  - **`styles/`**: CSS or styled-components for styling the application.
    - `main.css`: Global CSS styles.
    - `ProductCard.module.css`: CSS module for the `ProductCard` component.
    - `CheckoutPage.module.css`: CSS module for the `CheckoutPage` component.
  - **`contexts/`**: Context API providers and custom context hooks.
    - `CartContext.js`: Context provider and hook for managing the shopping cart state.
    - `AuthContext.js`: Context provider and hook for handling user authentication state.

## Features

- **Custom Hooks**:
  - **`useCart`**: Manages cart state, including adding/removing items and calculating totals.
  - **`useAuth`**: Handles user login, logout, and authentication state.
  - **`useProduct`**: Fetches product data from an API and manages product-related logic.

- **Constants**:
  - Located in the `constants/` directory, these values include route paths, action types, and currency symbols.

- **Context API**:
  - **`CartContext`**: Provides cart state and actions to manage the shopping cart across the application.
  - **`AuthContext`**: Manages user authentication state and provides login and logout functionalities.

## Getting Started

To get started with the development environment:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <project-directory>
