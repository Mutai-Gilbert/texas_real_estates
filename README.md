# Texas Real Estate Executives - Next Level Agents

A modern, responsive real estate website built with Next.js, TypeScript, and Tailwind CSS. This platform serves as the digital presence for Texas Real Estate Executives, showcasing properties and services in the Longview, TX area.


## Features

- 🏠 **Modern Property Search**: Advanced property search functionality with filters
- 👥 **Agent Profiles**: Detailed agent profiles and contact information
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **Fast Performance**: Built with Next.js for optimal loading speeds
- 🎨 **Modern Design**: Sleek, professional interface with smooth animations
- 📄 **Document Downloads**: Easy access to important real estate documents
- 📞 **Contact Integration**: Direct contact forms and scheduling capabilities

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Fonts**: 
  - Playfair Display (Headers)
  - Inter (Body text)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/texas-real-estate.git
cd texas-real-estate
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add necessary environment variables:
```env
NEXT_PUBLIC_API_URL=your_api_url_here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
texas-real-estate/
├── app/                    # Next.js app directory
├── components/             # React components
│   ├── ui/                # Reusable UI components
│   └── ...                # Feature-specific components
├── public/                # Static assets
├── styles/                # Global styles
└── types/                 # TypeScript type definitions
```

## Key Components

- `Navbar`: Main navigation component with responsive design
- `Hero`: Landing page hero section
- `PropertySearch`: Property search and filtering system
- `AgentProfiles`: Agent listing and detail pages
- `ContactForm`: Contact and scheduling forms
- `Downloads`: Document download center

## Development

### Code Style

- We use ESLint and Prettier for code formatting
- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Component names use PascalCase
- File names use kebab-case

### Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

## Deployment

The site is automatically deployed to Vercel through GitHub integration. Each push to the main branch triggers a new deployment.

### Manual Deployment

```bash
npm run build
npm run start
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is proprietary and confidential. Unauthorized copying or distribution of this project's files, via any medium, is strictly prohibited.

## Contact

Texas Real Estate Executives  
Phone: (903) 297-0591  
Website: [www.texasrealestateexecutives.com](https://www.texasrealestateexecutives.com)

---

Built with ♥️ for Texas Real Estate Executives 