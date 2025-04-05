# Scoop - Local Ice Cream Shop Website

Scoop is a full-stack web application designed for a local ice cream shop. It allows customers to browse the menu, view product details, add items to a cart, and proceed through a simple checkout process. The project also includes basic backend functionality for managing products.

This project was developed for the TigerHackathon and won **First Prize**.

## Features

* **Product Menu:** Browse available ice cream products with images, names, and prices. Includes a search functionality.
* **Product Details:** View detailed information about each product.
* **Theme Selector:** Customize the website's appearance with multiple themes.
* **Shopping Cart:** Add/remove items, adjust quantities, and view the total price. Cart persists using local storage [created based on user request].
* **Simple Checkout:** A basic checkout page to simulate order placement [created based on user request].
* **Contact Page:** A form for users to send messages to the shop [created based on user request].
* **Backend Product Management:** Basic CRUD (Create, Read, Update, Delete) API endpoints for managing products.
* **Security:** Includes basic security measures like rate limiting and bot detection via Arcjet and security headers via Helmet.

## Technology Stack

**Frontend:**
* **Language:** JavaScript (JSX)
* **Framework/Library:** React.js
* **Routing:** `react-router-dom`
* **State Management:** Zustand (with `persist` middleware for cart)
* **HTTP Client:** Axios
* **Styling:** Tailwind CSS with daisyUI component library
* **Icons:** `lucide-react`
* **Notifications:** `react-hot-toast`
* **Build Tool:** Vite (inferred)

**Backend:**
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** PostgreSQL (using Neon serverless driver `@neondatabase/serverless`)
* **Security:** Arcjet (@arcjet/node), Helmet
* **Middleware:** Cors, Morgan
* **Environment Variables:** `dotenv`

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/TrungMai2028/StoreWeb.git
    cd scoop
    ```

2.  **Backend Setup:**
    * Navigate to the backend directory (e.g., `cd backend` or your actual backend folder name).
    * Install dependencies:
        ```bash
        npm install
        # or
        yarn install
        ```
    * Create a `.env` file in the backend directory based on environment variables used in `config/db.js` and `lib/arcjet.js`. You'll need:
        ```dotenv
        PORT=3000 # Or any other port
        # Neon Database Credentials
        PGHOST=your_neon_db_host
        PGUSER=your_neon_db_user
        PGPASSWORD=your_neon_db_password
        PGDATABASE=your_neon_db_name
        # Arcjet Key
        ARCJET_KEY=your_arcjet_site_key
        ```
    * **(Optional) Seed the database:** Run the seed script to populate initial product data. Make sure your database connection is configured correctly first.
        ```bash
        node seed/products.js
        ```
    * Start the backend server:
        ```bash
        npm start
        # or
        node server.js
        # or if using nodemon
        npm run dev
        ```

3.  **Frontend Setup:**
    * Navigate to the frontend directory (e.g., `cd ../src` or your actual frontend folder name).
    * Install dependencies:
        ```bash
        npm install
        # or
        yarn install
        ```
    * Start the frontend development server:
        ```bash
        npm run dev
        # or
        yarn dev
        ```
    * The application should now be running, typically at `http://localhost:5173` (Vite's default).

*(Note: Folder names like `backend` and `src` should be replaced with your actual folder names if different)*

## Future Enhancements

* Implement user authentication (Login/Register).
* Integrate a real payment gateway.
* Add advanced filtering and sorting options to the menu.
* Implement product reviews and ratings.
* Develop a proper admin dashboard for managing products, orders, etc.