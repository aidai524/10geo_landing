/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "@/src/components/sections/Navbar"
import { Hero } from "@/src/components/sections/Hero"
import { HeroMockup } from "@/src/components/sections/HeroMockup"
import { LogoCloud } from "@/src/components/sections/LogoCloud"
import { HowItWorks } from "@/src/components/sections/HowItWorks"
import { FeatureCrawlers } from "@/src/components/sections/FeatureCrawlers"
import { FeaturePrompts } from "@/src/components/sections/FeaturePrompts"
import { BentoGrid } from "@/src/components/sections/BentoGrid"
import { Testimonials } from "@/src/components/sections/Testimonials"
import { Footer } from "@/src/components/sections/Footer"
import { ThemeProvider } from "@/src/components/ThemeProvider"

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 font-sans selection:bg-indigo-500/30 overflow-x-hidden transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <HeroMockup />
          <LogoCloud />
          <HowItWorks />
          <FeatureCrawlers />
          <FeaturePrompts />
          <BentoGrid />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
