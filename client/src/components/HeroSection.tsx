import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "wouter";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
}

export default function HeroSection({
  title,
  subtitle,
  image,
  primaryCTA = { text: "Start Application", href: "/admissions" },
  secondaryCTA = { text: "Virtual Tour", href: "/gallery" },
}: HeroSectionProps) {
  return (
    <section className="relative h-[85vh] md:h-[85vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${image})`,
        }}
      />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={primaryCTA.href}>
              <Button
                size="lg"
                variant="default"
                className="text-base h-12 px-8 backdrop-blur-sm bg-primary hover:bg-primary/90"
                data-testid="button-hero-primary"
              >
                {primaryCTA.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href={secondaryCTA.href}>
              <Button
                size="lg"
                variant="outline"
                className="text-base h-12 px-8 backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20"
                data-testid="button-hero-secondary"
              >
                <Play className="mr-2 h-5 w-5" />
                {secondaryCTA.text}
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400" />
              <span className="text-sm font-medium">Ranked #1 in District</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400" />
              <span className="text-sm font-medium">CBSE Accredited</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400" />
              <span className="text-sm font-medium">25+ Years Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
