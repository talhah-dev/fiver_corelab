import CorelabsHero from '@/components/corelabs-hero'
import Footer from '@/components/footer'
import Blog from '@/components/blog'
import Services from '@/components/Services'
import SplitDoorSection from '@/components/split-door-section'
import CorelabsShowcaseGrid from '@/components/corelabs-showcase-grid'
import CorelabsMarquee from '@/components/corelabs-marquee'


export default function HomePage() {
    return (
        <div className='overflow-hidden'>
            <CorelabsHero />

            {/* <CorelabsCurveTicker /> */}
            <Services />

            <SplitDoorSection />
            <CorelabsShowcaseGrid />
            <CorelabsMarquee />

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
