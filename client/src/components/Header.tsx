import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
      submenu: [
        { name: "Our Story", href: "/about" },
        { name: "Leadership Team", href: "/about#team" },
        { name: "Certifications", href: "/about#certifications" },
      ],
    },
    { name: "Academics", href: "/academics" },
    { name: "Admissions", href: "/admissions" },
    { name: "Facilities", href: "/facilities" },
    { name: "Faculty", href: "/faculty" },
    { name: "Student Life", href: "/student-life" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">EA</span>
              </div>
              <span className="ml-3 text-xl font-bold text-foreground hidden sm:block">
                Excellence Academy
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              if (item.submenu) {
                return (
                  <div key={item.name} className="relative group">
                    <Button
                      variant="ghost"
                      className="hover-elevate"
                      data-testid={`nav-${item.name.toLowerCase()}`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                    <div className="absolute left-0 mt-1 w-48 rounded-lg border bg-popover p-2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      {item.submenu.map((subitem) => (
                        <Link key={subitem.name} href={subitem.href} className="block px-3 py-2 text-sm rounded-md hover-elevate" data-testid={`nav-sub-${subitem.name.toLowerCase().replace(/\s+/g, '-')}`}>
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link key={item.name} href={item.href} asChild>
                  <Button
                    variant="ghost"
                    className={`hover-elevate ${location === item.href ? "bg-accent" : ""}`}
                    data-testid={`nav-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/admissions" asChild>
              <Button variant="default" className="hidden md:flex" data-testid="button-apply-now">
                Apply Now
              </Button>
            </Link>
            <Link href="/contact" asChild>
              <Button variant="outline" className="hidden sm:flex" data-testid="button-schedule-visit">
                Schedule Visit
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link href={item.href} asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-start hover-elevate"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`mobile-nav-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Button>
                </Link>
                {item.submenu && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.submenu.map((subitem) => (
                      <Link key={subitem.name} href={subitem.href} asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-sm hover-elevate"
                          onClick={() => setMobileMenuOpen(false)}
                          data-testid={`mobile-nav-sub-${subitem.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {subitem.name}
                        </Button>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-2">
              <Link href="/admissions" asChild>
                <Button
                  variant="default"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="mobile-button-apply-now"
                >
                  Apply Now
                </Button>
              </Link>
              <Link href="/contact" asChild>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="mobile-button-schedule-visit"
                >
                  Schedule Visit
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
