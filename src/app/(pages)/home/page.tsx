import CorelabsHero from '@/components/corelabs-hero'
import Footer from '@/components/footer'
import Blog from '@/components/blog'
import Services from '@/components/Services'
import SplitDoorSection from '@/components/split-door-section'
import CorelabsShowcaseGrid from '@/components/corelabs-showcase-grid'
import CorelabsMarquee from '@/components/corelabs-marquee'
import CorelabsInnerPages from '@/components/corelabs-inner-pages'


export default function HomePage() {
    return (
        <div className='overflow-hidden'>
            <CorelabsHero />


            <CorelabsShowcaseGrid />
            <SplitDoorSection />
            <Services />
            <CorelabsInnerPages />
            <CorelabsMarquee />

            <Blog />
            <Footer />
        </div>
    )
}
