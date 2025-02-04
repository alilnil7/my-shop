# My-Shop

My-Shop is a simple e-commerce application built with [Next.js](https://nextjs.org/). This project demonstrates a shopping cart functionality with a dynamic product list and an interactive cart page.

## Features

- **Product Listing:** Display a list of available products.
- **Shopping Cart:** Add and remove items from the cart.
- **Dynamic Routing:** Navigate between pages for products and the cart.
- **Responsive Design:** Mobile and desktop-friendly layout.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 16 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/my-shop.git
   ```

2. Navigate to the project directory:
   ```bash
   cd my-shop
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

### Running the Development Server

To start the development server, run:
```bash
npm run dev
```

- The application will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

To build the application for production, run:
```bash
npm run build
```

This will generate an optimized build in the `.next` folder.

### Starting the Production Server

To start the production server, after building, run:
```bash
npm start
```

The production server will be available at [http://localhost:3000](http://localhost:3000).

## File Structure

```plaintext
my-shop/
├── app/
│   ├── cart/
│   │   └── page.js      # Cart page
│   ├── context/
│   │   └── CartContext.js # Cart context for state management
│   ├── globals.css      # Global styles
│   ├── layout.js        # Root layout
│   └── page.js          # Home page
├── public/
│   ├── apple.png        # Product images
│   ├── banana.png
│   └── grape.png
├── .gitignore           # Git ignored files
├── package.json         # Project metadata and dependencies
├── README.md            # Project documentation
└── next.config.js       # Next.js configuration
```

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **React**: Frontend library for building user interfaces.
- **CSS**: Styling for the application.

## Screenshots

### Home Page
![Home Page](public/screenshot-home.png)

### Cart Page
![Cart Page](public/screenshot-cart.png)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel](https://vercel.com/) for hosting Next.js applications





