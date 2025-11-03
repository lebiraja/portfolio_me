# Your React Portfolio

A modern, responsive portfolio website built with React and Vite.

## 🚀 Getting Started

The development server is already running at http://localhost:5173/

If you need to restart it:
```bash
npm run dev
```

## 📝 Customization Guide

### 1. Personal Information

**Update Hero Section** (`src/components/Hero.jsx`):
- Change "Your Name" to your actual name
- Update the subtitle with your title/role
- Modify the description

**Update Contact Section** (`src/components/Contact.jsx`):
- Replace email, phone, and location
- Update social media links (GitHub, LinkedIn, Twitter)

**Update Footer** (`src/components/Footer.jsx`):
- Change "Your Name" to your actual name

### 2. About Section

Edit `src/components/About.jsx` to tell your story:
- Add your background
- Highlight your passions
- Share your interests

### 3. Skills

Edit the skills array in `src/components/Skills.jsx`:
```javascript
const skills = [
  { name: 'Your Skill', level: 90 },
  // Add more skills...
];
```

### 4. Experience

Update the experiences array in `src/components/Experience.jsx`:
```javascript
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: '2023 - Present',
    description: 'Brief description of your role',
    achievements: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3'
    ]
  },
  // Add more experiences...
];
```

### 5. Projects

Update the projects array in `src/components/Projects.jsx`:
- Replace placeholder images with your project screenshots
- Add your project titles and descriptions
- Update GitHub and demo links
- Modify technologies used

Example:
```javascript
{
  title: 'Your Project',
  description: 'Project description',
  technologies: ['React', 'Node.js'],
  image: '/path/to/image.jpg',
  github: 'https://github.com/yourusername/project',
  demo: 'https://yourproject.com'
}
```

### 6. Colors and Styling

The main gradient colors are defined in CSS files:
- Primary gradient: `#667eea` to `#764ba2`
- Accent color: `#ffd700`

To change colors, search for these hex codes in:
- `src/components/Hero.css`
- `src/components/Skills.css`
- `src/components/Projects.css`

### 7. Adding Images

Place your images in the `public` folder and reference them:
```javascript
image: '/your-image.jpg'
```

Or import them in components:
```javascript
import myImage from './assets/my-image.jpg'
```

## 📦 Building for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## 🎨 Features

- ✅ Responsive design (mobile-friendly)
- ✅ Smooth scrolling navigation
- ✅ Animated sections
- ✅ Modern gradient design
- ✅ Contact form
- ✅ Project showcase
- ✅ Skills visualization

## 📱 Sections

1. **Hero** - Eye-catching introduction
2. **About** - Your background and story
3. **Skills** - Visual skill representation
4. **Experience** - Timeline of your work history
5. **Projects** - Showcase your work
6. **Contact** - Get in touch form and social links

## 🛠️ Tech Stack

- React 18
- Vite
- CSS3 (with animations)
- Modern JavaScript (ES6+)

## 📝 Next Steps

1. Replace all placeholder text with your information
2. Add your project images
3. Update contact information
4. Customize colors to match your brand
5. Add more sections if needed
6. Deploy to Netlify, Vercel, or GitHub Pages

Happy coding! 🎉
