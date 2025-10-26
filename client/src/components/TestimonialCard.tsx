import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

export default function TestimonialCard({ quote, author, role, avatar }: TestimonialCardProps) {
  const initials = author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="h-full" data-testid={`testimonial-${author.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="pt-6">
        <Quote className="h-8 w-8 text-primary/20 mb-4" />
        <p className="text-base leading-relaxed mb-6 text-card-foreground">
          "{quote}"
        </p>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold text-sm">{author}</div>
            <div className="text-sm text-muted-foreground">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
