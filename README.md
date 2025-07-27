# 🎂 Nikki's Birthday Website 💖

A beautiful, interactive birthday website created with love for Nikki! This website features multiple sections including a heartfelt message, photo memories, journey timeline, and magical surprise animations.

## ✨ Features

- **🎁 Landing Page**: Beautiful welcome with gift button
- **💌 Personal Message**: Heartfelt birthday message section
- **📸 Our Memories**: Photo gallery with 6 beautiful memories
- **🗺️ Our Journey**: Interactive timeline of relationship milestones
- **🎉 Surprise Section**: Magical animation with balloons, confetti, hearts, and voice message

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Access the Website
- Development: http://localhost:5173/
- The website will be ready for deployment after running `npm run build`

## 🎨 Customization Guide

### 1. Update Photos
Replace the images in `src/assets/images/` with your own photos:
- Keep the same filenames OR update the import statements in `src/App.tsx`
- Recommended image size: 800x600 pixels or larger
- Supported formats: JPG, PNG, WebP

### 2. Customize Messages
Edit the personal messages in `src/App.tsx`:
- Search for "My dearest Nikki" to find the birthday message section
- Update the timeline events in the `timelineEvents` array
- Modify photo descriptions in the `memoryPhotos` array

### 3. Update Timeline
In `src/App.tsx`, modify the `timelineEvents` array:
```typescript
{
  id: 1,
  title: "Your Custom Title",
  date: "Your Date",
  description: "Your custom description",
  icon: <Heart className="w-6 h-6" />,
  color: "from-pink-400 to-rose-500"
}
```

### 4. Change Colors & Styling
- Main colors are defined in the Tailwind classes throughout the components
- Custom animations are in `src/index.css`
- Background gradients can be updated in the respective sections

### 5. Voice Message
The surprise section uses Web Speech API. To customize the voice message:
- Find `handleSurpriseClick` function in `src/App.tsx`
- Update the text in `new SpeechSynthesisUtterance('Your custom message here!')`

## 📱 Mobile Responsive

The website is fully responsive and works beautifully on:
- Desktop computers
- Tablets
- Mobile phones

## 🌟 Animation Features

- **Floating hearts** during message section
- **Balloons rising** during surprise
- **Confetti falling** during celebration
- **Photo hover effects** in gallery
- **Smooth scrolling** between sections
- **Particle animations** throughout

## 🎵 Audio Features

- Text-to-speech birthday message during surprise section
- Automatic voice selection (prefers female voices)
- Customizable speech rate, pitch, and volume

## 📁 Project Structure

```
src/
├── assets/
│   └── images/          # Photo gallery images
├── components/
│   └── RoadmapImage.tsx # Timeline component (if used)
├── App.tsx              # Main application component
├── index.css            # Styles and animations
└── main.tsx             # Application entry point
```

## 🚀 Deployment

### For Netlify:
1. Run `npm run build`
2. Upload the `dist` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### For Vercel:
1. Connect your GitHub repository
2. Vercel will automatically detect it's a Vite project
3. Deploy with default settings

### For GitHub Pages:
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

## 💝 Special Features

### Interactive Elements:
- **Clickable photos** that open in a beautiful modal
- **Smooth transitions** between all sections
- **Hover effects** on all interactive elements
- **Responsive design** that works on all devices

### Animations:
- **CSS keyframe animations** for smooth, professional effects
- **Staggered photo loading** for elegant appearance
- **Particle systems** for celebration effects
- **Transform animations** for interactive feedback

## 🎂 Ready for Monday, July 28th!

This website is complete and ready for Nikki's birthday! All features are implemented:
- ✅ Multi-section layout
- ✅ Personal birthday message
- ✅ Photo gallery with 6 memories
- ✅ Interactive timeline
- ✅ Celebration animations
- ✅ Mobile responsive
- ✅ Voice birthday message

## 💖 Made with Love

This website was crafted with care to celebrate Nikki's special day. Every animation, every word, and every detail was designed to bring joy and show how much she means to you.

Happy Birthday, Nikki! 🎉✨
