# User Dashboard - PK Interview Task

A modern, responsive user dashboard built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. This application fetches user data from the JSONPlaceholder API and provides a beautiful interface for browsing and searching users.

## 🚀 Features

### Core Functionality
- **User List Dashboard**: Display all users in a clean, organized grid layout
- **Real-time Search**: Filter users by name or email with instant results
- **Pagination**: Navigate through users with 6 users per page
- **User Details**: Comprehensive user information pages with full details
- **Responsive Design**: Mobile-first approach with breakpoints for all devices

### Animation & UX
- **Smooth Animations**: Page transitions, hover effects, and loading states
- **Framer Motion**: Professional animations for enhanced user experience
- **Loading States**: Skeleton screens and spinners for better UX
- **Error Handling**: Graceful error handling with user-friendly messages

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **Custom Hooks**: Reusable hooks for data management and search
- **API Integration**: JSONPlaceholder API integration with error handling
- **Modern React**: Functional components with hooks and modern patterns

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **API**: JSONPlaceholder (REST API)

## 📁 Project Structure

```
dashboard-app/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main dashboard page (user list)
│   └── user/
│       └── [id]/
│           └── page.tsx     # User details page
├── components/
│   ├── Layout.tsx           # Main layout component with navigation
│   ├── SearchBar.tsx        # Search input with clear functionality
│   ├── UserCard.tsx         # Individual user card component
│   ├── Pagination.tsx       # Pagination controls
│   └── LoadingSpinner.tsx   # Loading animation component
├── hooks/
│   ├── useUsers.ts          # Custom hook for user data management
│   └── useSearch.ts         # Custom hook for search functionality
├── types/
│   └── user.types.ts        # TypeScript interfaces for user data
├── utils/
│   └── api.ts               # API utility functions
└── package.json             # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dashboard-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 API Endpoints

The application uses the following JSONPlaceholder API endpoints:

- **All Users**: `GET https://jsonplaceholder.typicode.com/users`
- **Single User**: `GET https://jsonplaceholder.typicode.com/users/{id}`

## 🎨 Design Features

### Responsive Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Color Scheme
- Primary: Blue (#3B82F6)
- Secondary: Purple (#8B5CF6)
- Background: Gradient from gray-50 to gray-100
- Cards: White with subtle shadows
- Text: Gray scale for optimal readability

### Animations
- **Page Transitions**: Fade and slide animations
- **Card Hover**: Lift effect with shadow changes
- **Loading**: Smooth spinning animations
- **Search**: Real-time filtering with smooth transitions

## 🔧 Customization

### Adding New Features
1. Create new components in the `components/` directory
2. Add new hooks in the `hooks/` directory
3. Extend types in `types/user.types.ts`
4. Add new API functions in `utils/api.ts`

### Styling Changes
- Modify `app/globals.css` for global styles
- Use Tailwind CSS classes for component styling
- Customize color scheme in Tailwind config

## 📋 Requirements Met

### ✅ Must Have
- [x] Project runs without errors
- [x] All 10 users load from API
- [x] Search functionality works for name and email
- [x] Pagination displays 6 users per page
- [x] User details page shows complete information
- [x] Navigation works between pages
- [x] Responsive on mobile and desktop
- [x] Loading states implemented
- [x] Error handling implemented

### ✅ Nice to Have
- [x] Smooth animations implemented (Framer Motion)
- [x] Modern UI/UX design
- [x] TypeScript implementation
- [x] Custom hooks for state management
- [x] Responsive grid layout
- [x] Professional error handling
- [x] SEO-friendly metadata

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill the process using port 3000
   npx kill-port 3000
   ```

2. **TypeScript errors**
   ```bash
   # Clear TypeScript cache
   rm -rf .next
   npm run dev
   ```

3. **API not responding**
   - Check internet connection
   - Verify JSONPlaceholder API status
   - Check browser console for errors

## 📝 Development Notes

- The application uses Next.js 15 with the new App Router
- All components are client-side rendered for optimal interactivity
- Framer Motion provides smooth animations without performance impact
- Tailwind CSS ensures consistent styling and responsive design
- TypeScript provides type safety and better development experience

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for the PK Interview Task. All rights reserved.

---

**Built with ❤️ using Next.js, TypeScript, and Framer Motion**
