import CTASection from '../CTASection'

export default function CTASectionExample() {
  return (
    <div className="space-y-4">
      <CTASection
        title="Begin Your Journey to Excellence"
        description="Join our community of successful students and experience world-class education. Applications now open for 2024-25 academic year."
        primaryButton={{ text: "Apply Now", href: "/admissions" }}
        secondaryButton={{ text: "Download Prospectus", href: "/admissions#prospectus" }}
        variant="primary"
      />
      <CTASection
        title="Schedule a Campus Visit"
        description="Experience our facilities firsthand. Book a personalized tour and meet our faculty."
        primaryButton={{ text: "Book Tour", href: "/contact" }}
        variant="accent"
      />
    </div>
  )
}
