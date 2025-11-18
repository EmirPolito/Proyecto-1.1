"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/ui/buttonDL";

export function AnimatedHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Product", href: "#product" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
      
    >



      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo reemplazado */}

          
          <Link
            href="/"
            className="text-2xl font-semibold text-foreground hover:text-muted-foreground transition-colors duration-200"
            style={{
              animation:
                "slideInLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both",
            }}
          >
            <span className="font-bold">RALQ</span>
            <span className="font-light ml-[1px]"></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-300 group overflow-hidden"
                style={{
                  animation: `fadeInDown 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${
                    index * 0.1 + 0.2
                  }s both`,
                }}
              >
                <span className="relative z-10 inline-block transition-transform duration-300 group-hover:scale-110">
                  {item.label}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-muted to-muted/50 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 rounded-lg" />
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary -translate-x-1/2 group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <div
              style={{
                animation:
                  "fadeInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.45s both",
              }}
            >
              <ModeToggle />
            </div>

            <Button
              variant="ghost"
              className="relative text-sm font-medium overflow-hidden group"
              style={{
                animation:
                  "fadeInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s both",
              }}
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                Log in
              </span>
              <span className="absolute inset-0 bg-muted scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded-md opacity-50" />
            </Button>

            <Button
              className="relative text-sm font-medium overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                animation:
                  "fadeInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s both",
              }}
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                Get started
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md" />
              <span className="absolute inset-0 bg-primary/20 blur-xl scale-0 group-hover:scale-150 transition-transform duration-500 rounded-md" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-90"
            aria-label="Toggle menu"
            style={{
              animation:
                "fadeInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s both",
            }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 animate-spin-in" />
            ) : (
              <Menu className="w-6 h-6 animate-spin-in" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted rounded-lg transition-all duration-300 hover:translate-x-2 hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  animation: isMobileMenuOpen
                    ? `slideInLeft 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${
                        index * 0.1
                      }s both`
                    : "none",
                }}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-2 border-t border-border">
              <Button
                variant="ghost"
                className="w-full justify-start text-sm font-medium transition-all duration-300 hover:translate-x-2"
                style={{
                  animation: isMobileMenuOpen
                    ? `slideInLeft 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s both`
                    : "none",
                }}
              >
                Log in
              </Button>
              <Button
                className="w-full text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{
                  animation: isMobileMenuOpen
                    ? `slideInLeft 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s both`
                    : "none",
                }}
              >
                Get started
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {/* Animaciones CSS */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        @keyframes spin-in {
          from {
            transform: rotate(-180deg) scale(0);
          }
          to {
            transform: rotate(0) scale(1);
          }
        }

        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }

        .animate-spin-in {
          animation: spin-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </header>
  );
}
