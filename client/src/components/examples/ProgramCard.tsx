import ProgramCard from '../ProgramCard'
import { GraduationCap, Beaker, Globe, Palette } from 'lucide-react'
import academicImage from '@assets/generated_images/Students_in_classroom_learning_6a740ef2.png'

export default function ProgramCardExample() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
      <ProgramCard
        title="Academic Excellence"
        description="Rigorous curriculum following CBSE standards with emphasis on critical thinking and problem-solving."
        icon={GraduationCap}
        image={academicImage}
      />
      <ProgramCard
        title="STEM Programs"
        description="State-of-the-art laboratories and hands-on learning in Science, Technology, Engineering, and Mathematics."
        icon={Beaker}
      />
      <ProgramCard
        title="Global Perspective"
        description="International curriculum exposure and cultural exchange programs to prepare global citizens."
        icon={Globe}
      />
      <ProgramCard
        title="Arts & Culture"
        description="Comprehensive programs in music, dance, drama, and visual arts to nurture creativity."
        icon={Palette}
      />
    </div>
  )
}
