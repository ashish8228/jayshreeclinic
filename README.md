Jayshree Skin Clinic
Live Site: https://ashish8228.github.io/jayshreeclinic/

Overview
Jayshree Skin Clinic is a modern portfolio website for Dr. Seepika Jaiswal and Dr. Hari Mohan Rai, built using Next.js and deployed on GitHub Pages. The website showcases clinic services, patient testimonials, team details, and contact information—all optimized for performance and usability.

Features
Responsive design for all devices

Fast static exports (Next.js output: "export")

Image assets stored in public/images and correctly referenced using an absolute path (e.g., /images/logo.png)

SEO meta tags and structured data for search visibility

Modern React components with TypeScript types

Getting Started
Prerequisites
Node.js and npm installed on your machine

Installation
Clone the repository:

bash
git clone https://github.com/ashish8228/jayshreeclinic.git
cd jayshreeclinic
Install dependencies:

bash
npm install
Local Development
Start the development server:

bash
npm run dev
Visit http://localhost:3000 to see the site in action.

Export and Deployment
Export static files for GitHub Pages:

bash
npm run build
npm run export
Deploy the contents of the out/ folder to your GitHub Pages branch (gh-pages).

The site is live at: https://ashish8228.github.io/jayshreeclinic/

Special Notes
All images must be placed in the public/images directory and referenced as /images/yourfile.png in code.

The project configures Next.js image optimization as unoptimized: true due to the use of static export.

To update your live site, push your changes and redeploy the out/ directory to GitHub Pages.

Built With
Next.js

React

TypeScript

Tailwind CSS (if used)

Framer Motion
