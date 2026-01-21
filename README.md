# SDE-1 Technical Assessment

A modern, responsive event landing page built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

**[View Live Site](https://technical-assessment-tan.vercel.app/)**

## ✨ Features

- ✅ **Pixel-Perfect Responsive Design** - Optimized for both mobile and desktop
- ✅ **Modern Tech Stack** - Next.js 16 (Turbopack), TypeScript, Tailwind CSS
- ✅ **Form Validation** - Client-side validation with error handling
- ✅ **Custom Branding** - Custom favicon and metadata
- ✅ **Performance Optimized** - Fast loading with Next.js Image optimization
- ✅ **Accessible** - Semantic HTML and ARIA labels

## 🛠️ Tech Stack

- **Framework:** Next.js 16.0.10 (with Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI, Lucide Icons
- **Deployment:** Vercel

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/vmallyaaaa007/Technical_Assessment.git
   cd Technical_Assessment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── hero-section.tsx   # Hero section with event details
│   ├── insights-section.tsx # Insights section with chess image
│   └── rsvp-form.tsx      # RSVP form component
├── public/                # Static assets
│   ├── images/           # Image assets
│   └── favicon.png       # Custom favicon
└── README.md             # Project documentation
```
Required Environment Variables

Create a file named .env and add:

AIRTABLE_TOKEN=your_airtable_api_token

AIRTABLE_BASE_ID=your_airtable_base_id

AIRTABLE_TABLE_NAME=your_airtable_table_name


### RSVP Form
- Email validation
- Multi-step form flow
- Success/error messaging
- Form reset on submission


## 🚀 Deployment

**Repository:** https://github.com/vmallyaaaa007/Technical_Assessment  
**Live Demo:** https://technical-assessment-tan.vercel.app/
