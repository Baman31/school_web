import SectionHeader from '../SectionHeader'

export default function SectionHeaderExample() {
  return (
    <div className="space-y-8 p-8">
      <SectionHeader
        title="Our Programs"
        subtitle="Comprehensive education programs designed to nurture every aspect of student development."
        align="center"
      />
      <SectionHeader
        title="Why Choose Excellence Academy"
        subtitle="Discover what makes us the premier choice for quality education."
        align="left"
      />
    </div>
  )
}
