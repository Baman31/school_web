import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Admissions", href: "/admissions" },
    { name: "Faculty", href: "/faculty" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const resources = [
    { name: "Student Portal", href: "/portal/student" },
    { name: "Parent Portal", href: "/portal/parent" },
    { name: "Career Opportunities", href: "/careers" },
    { name: "Alumni Network", href: "/alumni" },
    { name: "Blog & News", href: "/blog" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Refund Policy", href: "/refund" },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">EA</span>
              </div>
              <span className="ml-3 text-lg font-bold">Excellence Academy</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Empowering future leaders through excellence in education since 1999.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="hover-elevate" data-testid="social-facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-elevate" data-testid="social-twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-elevate" data-testid="social-instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-elevate" data-testid="social-youtube">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid={`footer-resource-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>123 Education Lane, Green Valley, Mumbai - 400001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+912212345678" className="hover:text-foreground">+91 22 1234 5678</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info@excellenceacademy.edu" className="hover:text-foreground">
                  info@excellenceacademy.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Excellence Academy. All rights reserved.
            </p>
            <div className="flex gap-4">
              {legal.map((link) => (
                <Link key={link.name} href={link.href} className="text-sm text-muted-foreground hover:text-foreground" data-testid={`footer-legal-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
