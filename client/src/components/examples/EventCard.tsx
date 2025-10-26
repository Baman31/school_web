import EventCard from '../EventCard'
import eventImage from '@assets/generated_images/School_community_assembly_gathering_6e0ddf44.png'

export default function EventCardExample() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      <EventCard
        title="Annual Sports Day"
        description="Join us for a day of athletic competitions, team spirit, and celebration of sportsmanship."
        date="December 15, 2024"
        time="9:00 AM - 4:00 PM"
        location="Main Sports Ground"
        category="Sports"
        image={eventImage}
      />
      <EventCard
        title="Science Exhibition"
        description="Student projects showcasing innovative solutions and scientific discoveries."
        date="December 20, 2024"
        time="10:00 AM - 2:00 PM"
        location="School Auditorium"
        category="Academic"
      />
      <EventCard
        title="Cultural Fest"
        description="Celebrating diversity through music, dance, drama, and art performances."
        date="January 10, 2025"
        time="5:00 PM - 8:00 PM"
        location="Open Air Theatre"
        category="Cultural"
        image={eventImage}
      />
    </div>
  )
}
