import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "wouter";

interface ProgramCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  href?: string;
}

export default function ProgramCard({ title, description, icon: Icon, image, href = "/academics" }: ProgramCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300 hover:-translate-y-1" data-testid={`card-program-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      {image && (
        <div className="h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={href} asChild>
          <Button variant="ghost" className="group p-0 h-auto hover-elevate" data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
