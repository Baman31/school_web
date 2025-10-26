import StatsBar from '../StatsBar'

export default function StatsBarExample() {
  const stats = [
    { value: "5000+", label: "Students Enrolled" },
    { value: "98%", label: "Board Results" },
    { value: "150+", label: "Expert Faculty" },
    { value: "25+", label: "Years of Excellence" },
  ]

  return <StatsBar stats={stats} />
}
