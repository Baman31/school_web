import TestimonialCard from '../TestimonialCard'

export default function TestimonialCardExample() {
  return (
    <div className="grid md:grid-cols-3 gap-6 p-8">
      <TestimonialCard
        quote="Excellence Academy has transformed my daughter's approach to learning. The teachers are exceptional and truly care about each student's growth."
        author="Priya Sharma"
        role="Parent of Grade 8 Student"
      />
      <TestimonialCard
        quote="The facilities are world-class and the focus on both academics and extracurricular activities has helped my son become a well-rounded individual."
        author="Rajesh Kumar"
        role="Parent of Grade 10 Student"
      />
      <TestimonialCard
        quote="I'm grateful for the guidance and support from the faculty. The school has prepared me well for my future and I've made lifelong friends here."
        author="Ananya Patel"
        role="Grade 12 Student"
      />
    </div>
  )
}
