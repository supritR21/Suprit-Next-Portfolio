# 🚀 Suprit Next.js Portfolio

A modern, interactive portfolio website built with Next.js featuring smooth animations, dynamic content, and real-time integrations. This project showcases web development expertise with a focus on performance, user experience, and modern web technologies.

## ✨ Features

- **Smooth Animations**: Page scroll and scroll-trigger animations for engaging user interactions
- **Dynamic Page Transitions**: Seamless transitions with Next.js prefetching capabilities
- **Dynamic Content Management**: Project data loaded from JSON for easy updates
- **Real-time Chat Integration**: Intelliticks chat widget for visitor engagement
- **Spotify Now Playing**: Display currently playing Spotify track in real-time
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Analytics**: Built-in Vercel Analytics for performance monitoring
- **SEO Optimized**: Auto-generated sitemaps and metadata

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16 with React 19 |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Framer Motion |
| **Full-page Scroll** | Fullpage.js |
| **Progress Bar** | NProgress |
| **Icons** | FontAwesome |
| **Data Fetching** | SWR |
| **Image Optimization** | Sharp |
| **Package Manager** | pnpm |
| **Analytics** | Vercel Analytics |

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0 ([Install pnpm](https://pnpm.io/installation))
- **Git**

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/supritR21/Suprit-Next-Portfolio.git
cd Suprit-Next-Portfolio
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory and add your configuration:

```env
NEXT_PUBLIC_SPOTIFY_CLIENT_ID=your_spotify_client_id
NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token
```

**Getting Spotify Credentials:**
1. Visit [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create an application to get Client ID and Secret
3. Generate a refresh token using the Authorization Code flow

### 4. Start Development Server

```bash
pnpm dev
```

Visit `http://localhost:3000` in your browser.

## 📦 Available Scripts

```bash
# Development server with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint

# Generate sitemaps
pnpm generate-sitemap
```

## 📁 Project Structure

```
├── app/
│   ├── (root)/              # Home page
│   ├── about/               # About section with education, experience, skills
│   ├── projects/            # Projects showcase with archive
│   ├── api/                 # API routes for ratings (CodeChef, LeetCode)
│   ├── layout.jsx           # Root layout
│   └── globals.css          # Global styles
├── components/              # Reusable React components
├── json/
│   └── data.json            # Project data configuration
├── public/
│   ├── robots.txt           # SEO robots metadata
│   ├── sitemap.xml          # Auto-generated sitemap
│   ├── docs/                # Documentation files
│   └── image/               # Images (placeholder, projects)
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── package.json             # Project dependencies
└── README.md                # This file
```

## 🎨 Pages & Sections

### Home (`/`)
Landing page introducing your portfolio with an overview of your web development skills and passion.

### About (`/about`)
Comprehensive section featuring:
- **Education**: Academic background and qualifications
- **Experience**: Professional work history and roles
- **Skills**: Technical skills and expertise
- **Quote**: Inspirational or motivational quote
- **Spotify Widget**: Real-time now playing track

### Projects (`/projects`)
Showcase your work with:
- **Project Cards**: Featured projects with descriptions and technologies
- **Project Details**: Individual project pages via dynamic routes (`/projects/[slug]`)
- **Project Archive**: Historical or archived projects (`/projects/archive`)

### Additional Features
- **Chat Widget**: Intelliticks real-time chat for visitor engagement
- **Ratings Integration**: Display CodeChef and LeetCode ratings via API

## ⚙️ Configuration Guide

### Update Chat Widget

Edit the chat widget in your components directory to integrate Intelliticks:

```javascript
"use client"
import { useEffect } from "react";

// Component for Intelliticks chat widget
const Chat = () => {
  useEffect(() => {
    // Add your Intelliticks script here
    const script = document.createElement("script");
    script.src = "YOUR_INTELLITICKS_SCRIPT_URL";
    document.body.appendChild(script);
  }, []);

  return null;
};

export default Chat;
```

### Customize Project Data

Edit `json/data.json` to add or modify your projects:

```json
[
  {
    "id": 1,
    "title": "Project Title",
    "description": "Project description",
    "technologies": ["Tech1", "Tech2"],
    "link": "https://project-url.com",
    "image": "/image/projects/web/project-name/"
  }
]
```

## 🚀 Build & Deployment

### Build for Production

```bash
pnpm build
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com/):

```bash
npm i -g vercel
vercel
```

### Alternative Deployments
- **Netlify**: Connect your GitHub repository to Netlify dashboard
- **Docker**: Use the included `Dockerfile` for containerized deployment
- **Self-hosted**: Deploy the built application to any Node.js hosting service

## 🐳 Docker Deployment

```bash
docker build -t suprit-portfolio .
docker run -p 3000:3000 suprit-portfolio
```

## 🔍 SEO & Performance

- **Automatic Sitemap Generation**: Run `pnpm generate-sitemap` to update sitemap
- **Image Optimization**: Tailored image formats (WebP, AVIF) for different browsers
- **Analytics**: Vercel Analytics integrated for performance monitoring
- **Bundle Analysis**: Enable with `ANALYZE=true pnpm build`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 📄 License

This project is licensed under the **GPL-3.0 License** - see the [LICENSE](LICENSE) file for details.

Copyright © 2025 Suprit Raj

## 👨‍💼 Author

**Suprit Raj**
- Email: [supritraj30@gmail.com](mailto:supritraj30@gmail.com)
- GitHub: [@supritR21](https://github.com/supritR21)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Vercel](https://vercel.com/) - Hosting platform
- All open-source contributors and community

## 📞 Support

If you encounter any issues or have questions, feel free to:
- Open an issue on GitHub
- Contact me via email: supritraj30@gmail.com
- Check the [Next.js documentation](https://nextjs.org/docs)

---

**Happy coding! 🎉**

