import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  variant?: "primary" | "accent";
}

export default function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
  variant = "primary",
}: CTASectionProps) {
  const bgClass = variant === "primary" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground";

  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primaryButton.href} asChild>
              <Button
                size="lg"
                variant={variant === "primary" ? "secondary" : "default"}
                className="h-12 px-8"
                data-testid="button-cta-primary"
              >
                {primaryButton.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            {secondaryButton && (
              <Link href={secondaryButton.href} asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className={`h-12 px-8 ${variant === "primary" ? "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" : ""}`}
                  data-testid="button-cta-secondary"
                >
                  {secondaryButton.text}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
