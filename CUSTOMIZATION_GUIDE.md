# Portfolio Customization Guide

This guide will help you personalize your portfolio with your own information. Follow the sections below to update all the necessary details.

---

## 📝 Table of Contents
1. [Personal Information (Hero Section)](#1-personal-information-hero-section)
2. [About Section](#2-about-section)
3. [Skills Section](#3-skills-section)
4. [Experience Section](#4-experience-section)
5. [Projects Section](#5-projects-section)
6. [Contact Information](#6-contact-information)
7. [Profile Image](#7-profile-image)
8. [Meta Information & SEO](#8-meta-information--seo)

---

## 1. Personal Information (Hero Section)

**File:** `src/components/Hero.jsx`

### What to Change:
- **Line 26:** Your name/title
- **Line 28:** Your professional title/role
- **Line 31:** Your description/tagline
- **Line 35:** Primary CTA button text and link
- **Line 36:** Secondary CTA button text

### Current Content:
```jsx
<h1 className="hero-title">
  Hi, I'm <span className="gradient-text">Your Name</span>
</h1>
<p className="hero-subtitle">Full Stack Developer & Creative Problem Solver</p>
<p className="hero-description">
  I craft beautiful, functional, and user-centric digital experiences...
</p>
```

### Replace With:
- Your actual name
- Your job title (e.g., "Frontend Developer", "UI/UX Designer", "Software Engineer")
- A brief 1-2 sentence description about what you do

---

## 2. About Section

**File:** `src/components/About.jsx`

### What to Change:
- **Lines 8-15:** All paragraph text about yourself
- **Lines 19-21:** Stats numbers and labels (Years of Experience, Projects Completed, Happy Clients)

### Current Content:
```jsx
<p>
  Hey there! I'm a passionate developer who loves turning ideas into reality...
</p>
```

### Information to Collect:
- **Personal Introduction:** 2-3 paragraphs about:
  - Who you are professionally
  - Your background and journey
  - What drives/motivates you
  - Your approach to work
  
- **Professional Stats:**
  - Years of experience
  - Number of completed projects
  - Number of clients/companies worked with

---

## 3. Skills Section

**File:** `src/components/Skills.jsx`

### What to Change:
- **Lines 4-67:** The entire `skills` array with your actual technologies

### Current Technologies Listed:
1. React
2. JavaScript
3. HTML/CSS
4. Node.js
5. Python
6. Git
7. TypeScript
8. MongoDB

### Information to Collect:
List 6-8 of your primary technologies/skills. For each skill:
- **Name:** Technology name
- **Icon:** You can use SVG icons from sources like:
  - [Simple Icons](https://simpleicons.org/)
  - [DevIcons](https://devicon.dev/)
  - [Heroicons](https://heroicons.com/)

### How to Add/Replace Skills:
Replace the skills array with your own. Example format:
```jsx
{
  name: 'Your Technology',
  icon: (
    <svg><!-- Your SVG code here --></svg>
  )
}
```

---

## 4. Experience Section

**File:** `src/components/Experience.jsx`

### What to Change:
- **Lines 4-38:** The entire `experiences` array

### Current Placeholder Data:
```jsx
{
  title: 'Senior Full Stack Developer',
  company: 'Tech Company Inc.',
  period: '2022 - Present',
  description: '...',
  achievements: ['...']
}
```

### Information to Collect for Each Position:
1. **Job Title:** Your role/position
2. **Company Name:** Organization name
3. **Time Period:** Start date - End date (use "Present" for current roles)
4. **Description:** 1-2 sentences about your role
5. **Achievements:** 2-4 bullet points of key accomplishments

### Example Format:
- Use specific metrics where possible (e.g., "Increased performance by 40%")
- Focus on impact and results
- Include technologies used
- Highlight leadership or collaboration

---

## 5. Projects Section

**File:** `src/components/Projects.jsx`

### What to Change:
- **Lines 4-55:** The entire `projects` array

### Current Placeholder Data:
```jsx
{
  title: 'E-Commerce Platform',
  description: '...',
  image: '/project1.jpg',
  tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  liveLink: 'https://demo.com',
  githubLink: 'https://github.com/yourusername/project'
}
```

### Information to Collect for Each Project (3-6 projects):
1. **Project Title:** Name of the project
2. **Description:** 2-3 sentences explaining:
   - What the project does
   - Key features
   - Your role/contribution
3. **Project Image:** Screenshot or banner image (see [Section 7](#7-project-images))
4. **Technologies Used:** Array of tech stack
5. **Live Demo Link:** URL to live project (if available)
6. **GitHub Link:** Repository URL (if public)

### Tips:
- Choose your best/most impressive projects
- Include diverse projects (web apps, mobile, tools, etc.)
- Highlight projects that solve real problems
- Mention any notable metrics (users, performance, etc.)

---

## 6. Contact Information

**File:** `src/components/Contact.jsx`

### What to Change:
- **Lines 20-22:** Email address
- **Lines 25-27:** Phone number
- **Lines 30-32:** Location
- **Lines 40-42:** GitHub profile link
- **Lines 49-51:** LinkedIn profile link
- **Lines 58-60:** Twitter/X profile link

### Information to Collect:
- ✉️ **Email:** Professional email address
- 📱 **Phone:** Phone number (optional, consider privacy)
- 📍 **Location:** City/Country or "Remote"
- 🔗 **Social Links:**
  - GitHub username/profile URL
  - LinkedIn profile URL
  - Twitter/X handle (optional)

### Current Links:
```jsx
<a href="https://github.com/yourusername" ...>
<a href="https://linkedin.com/in/yourusername" ...>
<a href="https://twitter.com/yourusername" ...>
```

---

## 7. Profile Image

**File:** `src/components/About.jsx` (Line 6)

### Current Code:
```jsx
<div className="profile-image">
  {/* Add your profile image here */}
</div>
```

### How to Add Your Image:

#### Option 1: Using a Local Image
1. Save your professional photo in the `public` folder (e.g., `public/profile.jpg`)
2. Replace line 6 with:
```jsx
<div className="profile-image">
  <img src="/profile.jpg" alt="Your Name" />
</div>
```

#### Option 2: Using an External Image
```jsx
<div className="profile-image">
  <img src="https://your-image-url.com/image.jpg" alt="Your Name" />
</div>
```

### Image Recommendations:
- **Format:** JPG or PNG
- **Size:** 400x400px or larger (square aspect ratio)
- **Quality:** High resolution, professional-looking
- **Background:** Clean, neutral background or transparent
- **File Size:** Optimize to under 500KB for fast loading

---

## 8. Project Images

**Location:** `public` folder

### What to Do:
1. Create screenshots or banner images for each project
2. Save them in the `public` folder with descriptive names:
   - `project1.jpg` / `project1.png`
   - `project2.jpg` / `project2.png`
   - etc.

3. Update the image paths in `src/components/Projects.jsx`:
```jsx
image: '/project1.jpg',  // Update with your actual filename
```

### Image Recommendations:
- **Dimensions:** 800x500px (16:10 aspect ratio) or similar
- **Format:** JPG for photos, PNG for screenshots with transparency
- **Quality:** High resolution but optimized (under 200KB per image)
- **Content:** Show the actual project interface, homepage, or key feature
- **Consistency:** Use similar styling/framing for all project images

---

## 9. Meta Information & SEO

**File:** `index.html`

### What to Change:
- **Line 4:** Page title
- **Line 5:** Meta description
- **Line 6:** Meta keywords

### Current Content:
```html
<title>Your Name - Portfolio</title>
<meta name="description" content="Portfolio of Your Name - Full Stack Developer">
<meta name="keywords" content="developer, portfolio, web development">
```

### Information to Collect:
- **Title:** Your name + profession (e.g., "John Doe - Frontend Developer")
- **Description:** 150-160 character summary of who you are and what you do
- **Keywords:** 5-10 relevant keywords about your skills and profession

---

## 10. Footer

**File:** `src/components/Footer.jsx`

### What to Change:
- **Line 8:** Your name in the copyright notice

### Current Content:
```jsx
<p>&copy; 2024 Your Name. All rights reserved.</p>
```

### Replace With:
```jsx
<p>&copy; 2024 Your Actual Name. All rights reserved.</p>
```

---

## 🎨 Optional Customizations

### Color Scheme
If you want to change the color scheme, edit the CSS variables in:
**File:** `src/index.css` (Lines 8-11)

```css
:root {
  --primary-blue: #3b82f6;     /* Main blue color */
  --primary-purple: #8b5cf6;   /* Accent purple */
  --dark: #1e293b;             /* Dark text */
  --gray: #64748b;             /* Gray text */
}
```

### Fonts
To change fonts, update the font-family in:
**File:** `src/index.css` (Line 14)

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', ...;
```

---

## 📋 Quick Checklist

Use this checklist to track your progress:

- [ ] Update name in Hero section
- [ ] Update job title and description in Hero
- [ ] Write About section paragraphs
- [ ] Update professional stats (years, projects, clients)
- [ ] Add/update all skills with proper icons
- [ ] Add all work experience entries
- [ ] Add 3-6 project entries with details
- [ ] Upload and link profile image
- [ ] Upload and link all project images
- [ ] Update email address
- [ ] Update phone number (if including)
- [ ] Update location
- [ ] Update GitHub profile link
- [ ] Update LinkedIn profile link
- [ ] Update Twitter/X link (if including)
- [ ] Update page title and meta tags
- [ ] Update footer copyright

---

## 🚀 After Customization

1. **Test Locally:**
   ```bash
   npm run dev
   ```
   Visit http://localhost:5173/ to preview your changes

2. **Check Responsiveness:**
   - Test on different screen sizes
   - Use browser dev tools to check mobile view

3. **Optimize Images:**
   - Use tools like [TinyPNG](https://tinypng.com/) to compress images
   - Ensure fast loading times

4. **Deploy:**
   ```bash
   npm run build
   ```
   Deploy the `dist` folder to your hosting platform

---

## 💡 Tips for Great Content

### Writing Your About Section:
- Be authentic and conversational
- Show personality while staying professional
- Focus on what makes you unique
- Include your passion and motivation

### Describing Projects:
- Lead with the problem you solved
- Highlight impact and results
- Mention interesting technical challenges
- Keep it concise but informative

### Choosing Projects to Showcase:
- Quality over quantity (3-6 strong projects)
- Show variety in skills and technologies
- Include projects you're proud of
- Prioritize projects with live demos

---

## ❓ Need Help?

If you need help finding icons or have questions:
- **Icons:** [Simple Icons](https://simpleicons.org/), [Heroicons](https://heroicons.com/)
- **Images:** [Unsplash](https://unsplash.com/) for placeholders
- **Colors:** [Coolors](https://coolors.co/) for color palettes

Good luck customizing your portfolio! 🎉
