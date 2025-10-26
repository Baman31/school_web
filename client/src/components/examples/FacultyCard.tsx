import FacultyCard from '../FacultyCard'
import teacherFemale from '@assets/generated_images/Female_teacher_professional_portrait_8405caec.png'
import teacherMale from '@assets/generated_images/Male_teacher_professional_portrait_f0cd058b.png'

export default function FacultyCardExample() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      <FacultyCard
        name="Dr. Sarah Johnson"
        position="Head of Mathematics Department"
        qualification="Ph.D. in Mathematics, MIT"
        experience="15"
        specialization={["Advanced Calculus", "Statistics", "Math Olympiad Coaching"]}
        avatar={teacherFemale}
      />
      <FacultyCard
        name="Prof. Michael Chen"
        position="Science Department Head"
        qualification="M.Sc. Physics, Stanford University"
        experience="12"
        specialization={["Physics", "Astronomy", "Research Methodology"]}
        avatar={teacherMale}
      />
      <FacultyCard
        name="Ms. Anjali Reddy"
        position="English & Literature Teacher"
        qualification="M.A. English Literature, Oxford"
        experience="10"
        specialization={["Creative Writing", "Public Speaking", "Debate"]}
        avatar={teacherFemale}
      />
    </div>
  )
}
