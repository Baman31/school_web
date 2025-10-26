import FacilityCard from '../FacilityCard'
import { FlaskConical, Dumbbell, BookOpen, Laptop } from 'lucide-react'
import labImage from '@assets/generated_images/Science_lab_with_students_8bb7b718.png'
import sportsImage from '@assets/generated_images/Students_playing_sports_outdoors_250be082.png'

export default function FacilityCardExample() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
      <FacilityCard
        title="Science Laboratories"
        description="State-of-the-art labs for Physics, Chemistry, and Biology with modern equipment."
        icon={FlaskConical}
        image={labImage}
      />
      <FacilityCard
        title="Sports Complex"
        description="Olympic-sized swimming pool, basketball courts, cricket ground, and indoor stadium."
        icon={Dumbbell}
        image={sportsImage}
      />
      <FacilityCard
        title="Digital Library"
        description="Over 50,000 books, digital resources, and quiet study spaces for students."
        icon={BookOpen}
        image={labImage}
      />
      <FacilityCard
        title="Computer Labs"
        description="Advanced computing facilities with latest hardware and software for digital learning."
        icon={Laptop}
        image={sportsImage}
      />
    </div>
  )
}
