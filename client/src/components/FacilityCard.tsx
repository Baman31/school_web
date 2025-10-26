import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FacilityCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export default function FacilityCard({ title, description, icon: Icon, image }: FacilityCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300" data-testid={`facility-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="h-48 overflow-hidden relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 h-12 w-12 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
