import Features from '@/components/features'
import ResponsiveHeroBanner from '@/components/responsive-hero-banner'
import FlowingMenu from '@/components/FlowingMenu'
import ScrollReveal from '@/components/ScrollReveal'
import CircularGallery from '@/components/CircularGallery'
import AboutAndStats01 from '@/components/shadcn-space/blocks/about-us-01'
import Footer from '@/components/footer'
import DarkProcessSection from '@/components/dark-process-section'
import Blog from '@/components/blog'
const demoItems = [
    { link: '#', text: 'Websites that convert', image: 'https://picsum.photos/seed/corelabs-web/600/400' },
    { link: '#', text: 'CRM systems that organize', image: 'https://picsum.photos/seed/corelabs-crm-menu/600/400' },
    { link: '#', text: 'AI automation that saves time', image: 'https://picsum.photos/seed/corelabs-ai-menu/600/400' },
    { link: '#', text: 'YouTube growth systems', image: 'https://picsum.photos/seed/corelabs-youtube-menu/600/400' }
];

const galleryItems = [
    { image: 'https://picsum.photos/seed/corelabs-websites/800/600', text: 'Conversion Websites' },
    { image: 'https://picsum.photos/seed/corelabs-web-apps/800/600', text: 'Custom Web Apps' },
    { image: 'https://picsum.photos/seed/corelabs-crm/800/600', text: 'CRM Dashboards' },
    { image: 'https://picsum.photos/seed/corelabs-ai/800/600', text: 'AI Workflows' },
    { image: 'https://picsum.photos/seed/corelabs-automation/800/600', text: 'Business Automation' },
    { image: 'https://picsum.photos/seed/corelabs-youtube/800/600', text: 'YouTube Growth' },
    { image: 'https://picsum.photos/seed/corelabs-content/800/600', text: 'Content Systems' },
    { image: 'https://picsum.photos/seed/corelabs-integrations/800/600', text: 'Tool Integrations' },
];

export default function HomePage() {
    return (
        <div className='overflow-hidden'>
            <ResponsiveHeroBanner
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
            </div>
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
            <div className="max-w-7xl p-5 w-full mx-auto md:mb-10">
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
            </div>
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
            <Blog/>
            <Footer />
        </div>
    )
}
