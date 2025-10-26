import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface FacultyCardProps {
  name: string;
  position: string;
  qualification: string;
  experience: string;
  specialization: string[];
  avatar: string;
}

export default function FacultyCard({
  name,
  position,
  qualification,
  experience,
  specialization,
  avatar,
}: FacultyCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="hover-elevate transition-all duration-300" data-testid={`faculty-card-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
              {initials}
            </AvatarFallback>
          </Avatar>
        </div>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="text-sm">{position}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-sm">
          <div className="font-medium text-foreground mb-1">{qualification}</div>
          <div className="text-muted-foreground">{experience} years of experience</div>
        </div>
        <div className="flex flex-wrap gap-2">
          {specialization.map((spec, index) => (
            <Badge key={index} variant="secondary" className="text-xs" data-testid={`badge-specialization-${index}`}>
              {spec}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
