"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/ui/buttonDL";

export function AnimatedHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  const hideMenuRoutes = [
    "/inicio-sesion",
    "/contacto",
    "/ayuda",
    "/nosotros",
    "/blog",
    "/registro",
  ];

  const shouldHideMenu = hideMenuRoutes.some((route) =>
    pathname.startsWith(route)
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Blog", href: "/blog" },
    { label: "Ayuda", href: "/ayuda" },
    { label: "Contacto", href: "/contacto" },
    { label: "Nosotros", href: "/nosotros" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 
                  transition-colors transition-shadow transition-opacity 
                  duration-500 ease-out
                  ${
                    isMobileMenuOpen
                      ? "bg-background/95 backdrop-blur-xl border-b border-border"
                      : isScrolled
                      ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
                      : "bg-transparent"
                  }`}
    >
      {/* Para hacer el header más oscuro, descomenta la siguiente línea */}
      {/* className="bg-background/90 backdrop-blur-xl border-b border-border shadow-sm" */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* LOGO */}
          <Link
            href="/"
            className="relative block transition-all duration-200"
            style={{
              animation:
                "slideInLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both",
            }}
          >
            <img
              src="/modo-claro.png"
              alt="Logo RALQ Light"
              className="dark:hidden h-25 w-25 max-h-full max-w-full object-contain"
            />
            <img
              src="/modo-oscuro-removebg-preview.png"
              alt="Logo RALQ Dark"
              className="hidden dark:block h-25 w-25 max-h-full max-w-full object-contain"
            />
          </Link>

          {/* MENÚ ESCRITORIO */}
          {!shouldHideMenu && (
            <>
              <nav className="hidden md:flex items-center gap-1">
                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group overflow-hidden
                      text-foreground/70 hover:text-foreground`}
                    style={{
                      animation: `fadeInDown 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${
                        index * 0.1 + 0.2
                      }s both`,
                    }}
                  >
                    <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                      {item.label}
                    </span>

                    {/* Hover: solo línea inferior */}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary -translate-x-1/2 transition-all duration-300 group-hover:w-3/4"></span>
                  </a>
                ))}
              </nav>

              {/* BOTONES DESKTOP */}
              <div className="hidden md:flex items-center gap-3">
                <div
                  style={{
                    animation:
                      "fadeInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.45s both",
                  }}
                >
                  <ModeToggle />
                </div>

                <Link href="/inicio-sesion">
                  <Button
                    variant="ghost"
                    className="relative text-sm font-medium overflow-hidden group"
                    style={{
                      animation:
                        "fadeInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s both",
                    }}
                  >
                    <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                      Iniciar sesión
                    </span>
                  </Button>
                </Link>

                <Link href="/registro">
                  <Button
                    className="relative text-sm font-medium overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300
                      bg-[#637b6c] text-white hover:bg-[#516458]
                      dark:bg-white dark:text-black dark:hover:bg-gray-200"
                    style={{
                      animation:
                        "fadeInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s both",
                    }}
                  >
                    <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                      Registrarse
                    </span>
                  </Button>
                </Link>
              </div>
            </>
          )}

          {/* BOTÓN DE MENÚ MÓVIL */}
          {!shouldHideMenu && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-90"
              aria-label="Toggle menu"
              style={{
                animation:
                  "fadeInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s both",
              }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 animate-spin-in text-white" />
              ) : (
                <Menu className="w-6 h-6 animate-spin-in text-white" />
              )}
            </button>
          )}
        </div>

        {/* MENÚ MÓVIL */}
        {!shouldHideMenu && (
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
                <Link href="/inicio-sesion">
                  <Button
                    variant="ghost"
                    className="relative text-sm font-medium text-foreground/70 overflow-hidden group bg-transparent border-none shadow-none"
                  >
                    <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                      Iniciar sesión
                    </span>

                    {/* Línea inferior al pasar el cursor */}
                    <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-primary -translate-x-1/2 transition-all duration-300 group-hover:w-3/4"></span>
                  </Button>
                </Link>

                <Link href="/registro">
                  <Button
                    className="w-full text-sm font-medium transition-all duration-300 hover:scale-105
                      bg-[#637b6c] text-white hover:bg-[#516458]
                      dark:bg-white dark:text-black dark:hover:bg-gray-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      animation: isMobileMenuOpen
                        ? `slideInLeft 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s both`
                        : "none",
                    }}
                  >
                    Registrarse
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* ANIMACIONES */}
      <style jsx global>{`
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

        @keyframes spin-in {
          from {
            transform: rotate(-180deg) scale(0);
          }
          to {
            transform: rotate(0) scale(1);
          }
        }

        .animate-spin-in {
          animation: spin-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </header>
  );
}
