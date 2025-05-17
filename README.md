# India Ply

India Ply is a modern, responsive web application for a plywood and hardware business, built with React and Vite. The site showcases products, brands, gallery, and company information, providing a seamless experience for customers and partners.

---

## Table of Contents

- [Features](#features)
- [Tech Stack & Dependencies](#tech-stack--dependencies)
- [Project Structure](#project-structure)
- [Available Routes](#available-routes)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [License](#license)

---

## Features

- **React + Vite**: Fast development and optimized production build.
- **React Router**: Client-side routing for a multi-page SPA feel.
- **Bootstrap 5**: Responsive layout and components.
- **AOS (Animate On Scroll)**: Smooth scroll-based animations.
- **React Icons**: Scalable vector icons.
- **Image Gallery & Carousels**: Interactive product and gallery displays.
- **Custom CSS**: Tailored styles for branding and layout.
- **Contact & Social Links**: Easy access to business contact and social media.
- **404 Not Found Page**: User-friendly error handling.

---

## Tech Stack & Dependencies

**Main Stack:**
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Bootstrap 5](https://getbootstrap.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- [React Icons](https://react-icons.github.io/react-icons/)

**Key dependencies in `package.json`:**
- `react`
- `react-dom`
- `react-router-dom`
- `bootstrap`
- `react-bootstrap`
- `aos`
- `react-icons`
- `vite`

---

## Project Structure

```
src/
  App.jsx
  main.jsx
  index.css
  landing_pages/
    Footer.jsx
    Navbar.jsx
    NotFound.jsx
    About/
      AboutPage.jsx
      AboutPage.css
      Founder.jsx
      Hero.jsx
      ProductsDeal.jsx
      RightImage.jsx
      Vision.jsx
    Decoratives/
      DecorativesPage.jsx
      ...
    Gallery/
      GalleryPage.jsx
      Hero.jsx
      RenderImages.jsx
      Gallery.css
    Home/
      HomePage.jsx
      HomePage.css
      Hero.jsx
      LeftImage.jsx
      RightImage.jsx
      HappyClinets.jsx
      Partners.jsx
      AnotherLeftImage.jsx
      OurGallery.jsx
    OurBrands/
      OurBrandsPage.jsx
      BrandSection.jsx
      Hero.jsx
    Products/
      ProductsPage.jsx
      Hero.jsx
      PlyWood.jsx
      HardWare.jsx
      HDHMR.jsx
      Locks.jsx
      DecorativesHandle.jsx
      Laminates.jsx
      DecorativeProducts.jsx
      Veener.jsx
      Tape.jsx
      GlImages.jsx
public/
  media/
    images/
      ... (product, brand, and gallery images)
index.html
vite.config.js
package.json
README.md
```

---

## Available Routes

The app uses React Router for navigation. Main routes include:

| Route                | Component/Page                | Description                                   |
|----------------------|------------------------------|-----------------------------------------------|
| `/`                  | `HomePage`                   | Landing page with hero, gallery, reviews, etc.|
| `/about`             | `AboutPage`                  | About the company, founder, mission, vision   |
| `/products`          | `ProductsPage`               | All products and categories                   |
| `/decoratives`       | `DecorativesPage`            | Decorative products section                   |
| `/gallery`           | `GalleryPage`                | Image gallery                                 |
| `/brands`            | `OurBrandsPage`              | Brands and partners                           |
| `*` (any other path) | `NotFound`                   | 404 Not Found page                            |

**Route Details:**

- **Home (`/`)**: Hero section, featured products, gallery, client reviews, partners.
- **About (`/about`)**: Company history, founder, products dealt, mission & vision.
- **Products (`/products`)**: Plywood, hardware, HDHMR, locks, handles, laminates, decorative products, veneer, tapes, and more.
- **Decoratives (`/decoratives`)**: Charcoal panels, corian, wooden floor, laminate doors, metal, stone, HPL, etc.
- **Gallery (`/gallery`)**: Visual gallery of projects and products.
- **Brands (`/brands`)**: List and details of all brands and partners.
- **404 (`*`)**: Friendly error page for unmatched routes.

---

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```

3. **Build for production:**
   ```sh
   npm run build
   ```

4. **Preview the production build:**
   ```sh
   npm run preview
   ```

---

## Customization

- Update images in `public/media/images/` for your own products and branding.
- Edit content in the `src/landing_pages/` folders for each section (Home, About, Products, etc).
- Adjust styles in `src/landing_pages/Home/HomePage.css` and other CSS files.
- Update contact info and social links in `Footer.jsx` and `Navbar.jsx`.

---

## License

This project is for demonstration and business use by India Ply.

---

**Designed & Developed by Alpha Media**