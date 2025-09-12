import { Navbar } from "@/components/navbar"
import { TechMarquee } from "@/components/sections/tech-marquee"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { Portfolio } from "@/components/sections/portfolio"
import { Testimonials } from "@/components/sections/testimonials"
import { Process } from "@/components/sections/process"
import { Contact } from "@/components/sections/contact"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"
import Hero from "@/components/sections/hero"

export default function Home() {
  return (
    <main className="">
      <div className="hero-section lg:bg-contain bg-cover bg-no-repeat bg-center lg:bg-right">
        <Navbar />
        <div className="container mx-auto px-4 py-10 flex items-center h-full min-h-[98vh]">
          <div className="grid xl:grid-cols-2 grid-cols-1">
            <Hero />
          </div>
        </div>
      </div>
      <TechMarquee />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Process />
      <Contact />
      <CTA />
      <Footer />
    </main>
  )
}