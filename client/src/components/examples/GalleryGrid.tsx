import GalleryGrid from '../GalleryGrid'
import campusImage from '@assets/generated_images/School_campus_hero_image_8fe69a50.png'
import classroomImage from '@assets/generated_images/Students_in_classroom_learning_6a740ef2.png'
import labImage from '@assets/generated_images/Science_lab_with_students_8bb7b718.png'
import sportsImage from '@assets/generated_images/Students_playing_sports_outdoors_250be082.png'

export default function GalleryGridExample() {
  const images = [
    { src: campusImage, alt: "Campus Building" },
    { src: classroomImage, alt: "Students Learning" },
    { src: labImage, alt: "Science Lab" },
    { src: sportsImage, alt: "Sports Activities" },
    { src: campusImage, alt: "Main Entrance" },
    { src: classroomImage, alt: "Interactive Class" },
  ]

  return (
    <div className="p-8">
      <GalleryGrid images={images} />
    </div>
  )
}
