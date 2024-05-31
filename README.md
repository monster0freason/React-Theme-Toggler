# Project Title: E-Commerce Product Card with Theme Toggle

## Table of Contents
1. [Demo](#demo)
2. [Project Overview](#project-overview)
3. [Features](#features)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Components](#components)
    - [Card Component](#card-component)
    - [Theme Button Component](#theme-button-component)
    - [Theme Context and Hook](#theme-context-and-hook)
7. [Styling](#styling)
8. [Contributing](#contributing)
9. [License](#license)

## Demo
You can view a live demo of the project on Netlify: [E-Commerce Product Card Demo](https://pawpicks.netlify.app/)

## Project Overview
This project demonstrates a simple e-commerce product card with a theme toggle feature using React. The card displays a product image, title, rating, price, and an add-to-cart button. Users can switch between light and dark themes using a toggle button. The project utilizes React context for managing theme states.

## Features
- Product card with image, title, rating, price, and add-to-cart button.
- Theme toggle button to switch between light and dark modes.
- Responsive design using Tailwind CSS.
- React context for managing theme state globally.

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/monster0freason/React-Theme-Toggler
    cd React-theme-Switcher
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```

## Usage
1. Start the development server:
    ```sh
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:5173` to view the application.

## Components

### Card Component
The `Card` component displays the product information including the image, title, rating, price, and an add-to-cart button.

**Code:**
```jsx
import React from 'react';

export default function Card(): JSX.Element {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="https://images.pexels.com/photos/3628100/pexels-photo-3628100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Unleash Joy: Find Your Furry Companion Today!
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    {[...Array(4)].map((_, index) => (
                        <svg key={index} className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    ))}
                    <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a href="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
```

### Theme Button Component
The `ThemeBtn` component provides a toggle button to switch between light and dark themes.

**Code:**
```jsx
import React, { ChangeEvent } from 'react';
import useTheme from '../contexts/theme';

export default function ThemeBtn(): JSX.Element {
    const { themeMode, lightTheme, darkTheme } = useTheme();

    const onChangeBtn = (e: ChangeEvent<HTMLInputElement>) => {
        const darkModeStatus = e.currentTarget.checked;
        if (darkModeStatus) {
            darkTheme();
        } else {
            lightTheme();
        }
    };

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode === "dark"}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}
```

### Theme Context and Hook
The theme context and hook manage the global state for theme mode and provide functions to switch between light and dark themes.

**Code:**
```jsx
import { createContext, useContext } from 'react';

interface ThemeContextProps {
    themeMode: string;
    darkTheme: () => void;
    lightTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(): ThemeContextProps {
    return useContext(ThemeContext);
}
```

## Styling
This project uses Tailwind CSS for styling. The theme toggle button and card component utilize Tailwind's utility classes for responsive and theme-based styling.

**Example:**
```html
<div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <!-- Other content -->
</div>
```

## Contributing
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/my-feature`).
3. Commit your changes (`git commit -am 'Add my feature'`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.