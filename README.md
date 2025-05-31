# Modern Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. This project showcases a developer's skills, experience, and projects with a clean and professional design.

## ✨ Features

- 🎨 Modern and responsive design
- 🌓 Dark/Light mode toggle
- 🔄 Smooth animations with Framer Motion
- 📱 Mobile-friendly interface
- 🎯 Interactive skill cards with Tilt effect
- 📝 Contact form with EmailJS integration
- ⚡ Built with Vite for optimal performance
- 🔍 SEO-friendly structure
- 🎉 Toast notifications for form submissions

## 🛠️ Tech Stack

- **Frontend Framework**: React.js
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Smooth Scrolling**: React Scroll
- **Card Effects**: React Tilt
- **Form Handling**: @emailjs/browser
- **Notifications**: React Hot Toast
- **Build Tool**: Vite

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone ['Repository UrL']
```

2. Navigate to the project directory:
```bash
cd modern-portfolio
```

3. Install dependencies:
```bash
npm install
```

4. Set up EmailJS:
   - Sign up at EmailJS
   - Create an email service
   - Create an email template
   - Update the Contact component with your credentials

5. Start the development server:
```bash
npm run dev
```

6. Build for production:
```bash
npm run build
```

## 📁 Project Structure

```
modern-portfolio/
├── src/
│   ├── components/        # React components
│   │   ├── About.jsx     # About section
│   │   ├── Contact.jsx   # Contact form
│   │   ├── Experience.jsx # Work experience
│   │   ├── Footer.jsx    # Footer component
│   │   ├── Hero.jsx      # Landing section
│   │   ├── Navbar.jsx    # Navigation bar
│   │   ├── Projects.jsx  # Projects showcase
│   │   ├── Skills.jsx    # Skills section
│   │   └── ScrollToTop.jsx # Scroll button
│   ├── context/          # Context providers
│   │   └── ThemeContext.jsx # Theme management
│   ├── assets/           # Static assets
│   ├── App.jsx           # Main App component
│   └── main.jsx         # Entry point
├── public/              # Public assets
└── package.json        # Project dependencies
```

## 🎨 Components

- **Navbar**: Navigation bar with smooth scrolling and theme toggle
- **Hero**: Dynamic landing section with animated text
- **About**: Developer introduction with parallax effect
- **Skills**: Technical skills with animated cards and tilt effect
- **Experience**: Professional experience timeline
- **Projects**: Portfolio projects showcase with hover effects
- **Contact**: Contact form with EmailJS integration
- **Footer**: Site footer with social links
- **ScrollToTop**: Floating button for smooth scrolling to top

## ⚙️ Customization

1. **Personal Information**:
   - Update content in components
   - Modify social links in Contact and Footer
   - Add your projects in Projects.jsx

2. **Styling**:
   - Customize colors in `tailwind.config.js`
   - Modify component styles using Tailwind classes
   - Adjust animations in Framer Motion components

3. **Contact Form**:
   - Update EmailJS configuration in Contact.jsx
   - Customize form fields and validation
   - Modify success/error notifications


