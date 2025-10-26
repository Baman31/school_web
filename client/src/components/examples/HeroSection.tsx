import HeroSection from '../HeroSection'
import heroImage from '@assets/generated_images/School_campus_hero_image_8fe69a50.png'

export default function HeroSectionExample() {
  return (
    <HeroSection
      title="Empowering Future Leaders Through Excellence in Education"
      subtitle="Join our community of 5000+ successful students. Experience world-class education with modern facilities, experienced faculty, and comprehensive programs from Pre-K to Grade 12."
      image={heroImage}
    />
  )
}
