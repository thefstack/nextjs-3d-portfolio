import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

const BASE_URL = "https://sample-3d-portfolio.thefstack.com"

export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Raj Sharma | Full Stack Developer",
    template: "%s | Raj Sharma",
  },
  description:
    "Interactive 3D portfolio of Raj Sharma, a Full Stack Developer from Kolkata specializing in Next.js, React, Node.js, and AI-integrated web applications. Features a live Three.js robot and smooth Framer Motion animations.",
  keywords: [
    "Raj Sharma",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Three.js",
    "3D Portfolio",
    "AI Developer",
    "Node.js",
    "Web Developer India",
    "Kolkata Developer",
    "thefstack",
    "nextjs-3d-portfolio",
  ],
  authors: [{ name: "Raj Sharma", url: "https://github.com/thefstack" }],
  creator: "Raj Sharma",
  publisher: "Raj Sharma",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Raj Sharma — 3D Portfolio",
    title: "Raj Sharma | Full Stack Developer",
    description:
      "Interactive 3D portfolio featuring a live Three.js robot, scroll animations, and a showcase of full-stack projects built with Next.js, React, and AI.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Raj Sharma — Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Raj Sharma | Full Stack Developer",
    description:
      "Interactive 3D portfolio featuring a live Three.js robot, scroll animations, and a showcase of full-stack projects built with Next.js, React, and AI.",
    images: ["/opengraph-image"],
    creator: "@thefstack",
  },

  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },

  category: "technology",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Raj Sharma",
  url: BASE_URL,
  image: `${BASE_URL}/opengraph-image`,
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, React, Node.js, and AI-integrated web applications.",
  email: "rajsharmahwh19@gmail.com",
  telephone: "+91-9142892678",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/thefstack",
    "https://linkedin.com/in/thefstack",
  ],
  knowsAbout: [
    "JavaScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Three.js",
    "REST APIs",
    "AI Integration",
  ],
  worksFor: {
    "@type": "Organization",
    name: "IVY Knowledge Service Pvt Ltd",
    url: "https://ivyprofessionalschool.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Delhi",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
