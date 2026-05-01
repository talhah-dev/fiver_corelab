import Ballpit from '@/components/Ballpit'
import StaggeredMenu from '@/components/StaggeredMenu'
import Footer from '@/components/footer'
import Blog from '@/components/blog'
import Lanyard from '@/components/Lanyard'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Services from '@/components/Services'
import SplitDoorSection from '@/components/split-door-section'

const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home section', link: '#' },
    { label: 'Services', ariaLabel: 'View our services', link: '#services' },
    { label: 'Work', ariaLabel: 'View our work', link: '#work' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
];

const socialItems = [
    { label: 'YouTube', link: 'https://youtube.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' },
    { label: 'Email', link: 'mailto:hello@corelabs.agency' }
];


export default function HomePage() {
    return (
        <div className='overflow-hidden'>


            <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0F2D0F] px-5 py-20 text-white">
                <div className="absolute inset-0 z-30">
                    <StaggeredMenu
                        position="right"
                        items={menuItems}
                        socialItems={socialItems}
                        displaySocials
                        displayItemNumbering={true}
                        menuButtonColor="#F4FFE7"
                        openMenuButtonColor="#0F2D0F"
                        changeMenuColorOnOpen={true}
                        colors={['#9BFF00', '#D9FF8A']}
                        logoText="Corelabs"
                        accentColor="#9BFF00"
                    />
                </div>
                <div className="absolute inset-0 opacity-80">
                    <Ballpit
                        count={115}
                        colors={[0x9BFF00, 0xC8FF5E, 0xE8FFB8]}
                        ambientColor={0xF4FFE7}
                        ambientIntensity={1.6}
                        lightIntensity={320}
                        materialParams={{
                            metalness: 0.18,
                            roughness: 0.26,
                            clearcoat: 1,
                            clearcoatRoughness: 0.06,
                        }}
                        gravity={0.01}
                        friction={0.9975}
                        wallBounce={0.95}
                        followCursor={false}
                    />
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,45,15,0.1),rgba(15,45,15,0.10)_62%,#071607_100%)]" />
                <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
                    <p className="mb-5 rounded-full border border-[#9BFF00]/35 bg-[#9BFF00]/10 px-5 py-2 text-sm font-normal text-[#D9FF8A]">
                        Corelabs - AI, software, automation, and content growth
                    </p>
                    <h1 className="max-w-5xl text-5xl font-bold leading-tight text-white sm:text-7xl">
                        Build systems that grow while you sleep.
                    </h1>
                    <p className="mt-7 max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
                        We create high-converting websites, CRM dashboards, AI
                        automations, workflow systems, and YouTube growth engines
                        for brands that want sharper operations and stronger
                        attention.
                    </p>
                    <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
                        <Link
                            className="group inline-flex min-h-14 w-full items-center justify-between  gap-4 rounded-full bg-[#9BFF00] py-2 pl-7 pr-2 text-sm font-medium text-[#0F2D0F] transition hover:bg-[#C8FF5E] sm:w-auto sm:min-w-52"
                            href="#contact"
                        >
                            <span>Start a Project</span>
                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#F4FFE7] text-[#0F2D0F] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                <ArrowRight className="h-4 w-4 -rotate-45" />
                            </span>
                        </Link>
                        <Link
                            className="group inline-flex min-h-14 w-full items-center justify-between  gap-4 rounded-full border border-white/22 bg-white/8 py-2 pl-7 pr-2 text-sm font-medium text-white transition hover:border-[#9BFF00]/70 hover:bg-[#9BFF00]/10 sm:w-auto sm:min-w-52"
                            href="#services"
                        >
                            <span>Explore Services</span>
                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#F4FFE7] text-[#0F2D0F] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                <ArrowRight className="h-4 w-4 -rotate-45" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            <Services />

            <SplitDoorSection />

            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />

            {/* <ResponsiveHeroBanner
                navLinks={[
                    { label: "Home", href: "#", isActive: true },
                    { label: "Websites", href: "#" },
                    { label: "Automation", href: "#" },
                    { label: "YouTube", href: "#" },
                    { label: "Work", href: "#" },
                ]}
                badgeLabel="Corelabs"
                badgeText="AI, software, automation, and content systems"
                title="Build smarter digital"
                titleLine2="experiences with Corelabs"
                description="We create high-performing websites, CRMs, AI automations, workflow systems, and YouTube growth engines for brands that want to move faster and look sharper online."
                primaryButtonText="Start a Project"
                secondaryButtonText="Explore Services"
                ctaButtonText="Book a Call"
                partnersTitle="Websites, CRM, AI automation, business automation, and YouTube A-Z marketing"
            />

            <AboutAndStats01 />
            <Features />
            <DarkProcessSection />
            <div className="text-7xl md:block hidden opacity-0 select-none">
                Lorem, ipsum dolor sit amet
            </div> */}
            {/* <div style={{ height: '600px', position: 'relative' }}>
                <FlowingMenu items={demoItems}
                    speed={15}
                    textColor="#101820"
                    bgColor="#fafafa"
                    marqueeBgColor="#FF5C4D"
                    marqueeTextColor="#120F17"
                    borderColor="#101820"
                />
            </div> */}
            {/* <div className="max-w-7xl p-5 w-full mx-auto md:mb-10">
                <ScrollReveal
                    baseOpacity={0.1}
                    enableBlur
                    baseRotation={3}
                    blurStrength={4}
                >
                    Corelabs builds the systems that turn attention into growth: websites that convert,
                    CRMs that organize your pipeline, AI automations that save time, and YouTube
                    content engines that keep your brand moving every day.
                </ScrollReveal>
            </div> */}
            {/* <div className="bg-white" style={{ height: '600px', position: 'relative' }}>
                <CircularGallery items={galleryItems} textColor="#101820"
                    bend={1}
                    borderRadius={0.05}
                    font="bold 28px Geist"
                    scrollSpeed={2}
                    scrollEase={0.05}
                />
            </div> */}
            {/* <div style={{ width: '100vw', height: '100vh' }}>
                <DomeGallery
                    fit={0.8}
                    minRadius={600}
                    maxVerticalRotationDeg={0}
                    segments={34}
                    dragDampening={2}
                    grayscale
                />
            </div> */}
            <Blog />
            <Footer />
        </div>
    )
}
