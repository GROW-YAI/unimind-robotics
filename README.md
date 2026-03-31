# UniMind Robotics

## Project Overview
This is a modern e-commerce website built with React, Vite, and TypeScript. The site features a responsive design with multiple pages including landing, about, product catalog, education, gallery, shopping cart, and contact pages. It uses Tailwind CSS for styling and includes various React libraries for enhanced functionality such as animations (Framer Motion), icons (Lucide React and Heroicons), and accessibility features.

The website integrates the Boafo accessibility widget to make the site accessible to all users, including those with disabilities. This widget provides various accessibility tools and features to ensure compliance with accessibility standards.

## Technologies Used
- **React 18.3.1** - Frontend framework
- **Vite 7.3.1** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS 3.4.15** - Styling framework
- **React Router DOM 7.0.2** - Client-side routing
- **Framer Motion 11.13.1** - Animations
- **Boafo Accessibility Widget 1.1.8** - Accessibility features
- **Lucide React 0.465.0** - Icon library
- **Heroicons 2.2.0** - Additional icons
- **React Toastify 10.0.6** - Notification system
- **Swiper 12.1.2** - Carousel/slider functionality
- **EmailJS 4.4.1** - Email functionality

## How to Get Your Boafo API Key
1. Visit [boafo.co](https://boafo.co) to register for an account
2. Log in to your dashboard
3. Navigate to the API section
4. Generate your API key
5. Copy the key for use in your project

## How to Integrate the Boafo Widget
For detailed integration instructions, please refer to the official Boafo integration guide:
[Boafo Integration Guide](https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing)

## Setup Instructions
1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env`: `cp .env.example .env`
4. Add your Boafo API key to the `.env` file
5. Start the development server: `npm run dev`
6. Open your browser and navigate to `http://localhost:5174/`

## Development
- Run the development server: `npm run dev`
- Build for production: `npm run build`
- Run ESLint: `npm run lint`
- Preview the production build: `npm run preview`