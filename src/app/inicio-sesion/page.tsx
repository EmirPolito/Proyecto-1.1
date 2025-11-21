"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function SignUpForm() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      console.log("Form submitted:", { email });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-20 min-h-screen max-h-screen overflow-hidden bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Left Side - Form */}
      <div className="lg:col-span-11 flex items-center justify-center p-6 lg:p-8 bg-white dark:bg-black overflow-y-auto">
        <div className="w-full max-w-lg">


          {/* Header */}
          <div
            className={`mb-11 text-center transition-all duration-500 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3 hover:scale-105 transition-transform duration-300 cursor-default">
              Iniciar sesión
            </h1>

            <p className="text-base text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Bienvenido/a de nuevo a RALQ. Por favor, introduzca sus datos.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div
              className={`space-y-2 transition-all duration-500 delay-75 ${
                animate
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2"
              }`}
            >
              <Label
                htmlFor="email"
                className="text-sm font-semibold text-gray-900 dark:text-white"
              >
                Correo
              </Label>

              <Input
                id="email"
                type="email"
                placeholder="Introduce tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white dark:bg-black border-2 border-gray-300 dark:border-gray-700 
                text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-300 
                px-3 py-2.5 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 
                hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-sm hover:scale-105 focus:scale-105"
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isLoading}
              className={`w-full 
                bg-black dark:bg-white 
                text-white dark:text-black 
                py-4 rounded-lg font-semibold 
                transition-all duration-500 delay-150 mt-1 
                hover:scale-105 hover:shadow-md active:scale-98
                ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
            >
              {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
            </Button>
          </form>

          {/* Divider */}
          <div
            className={`flex items-center gap-5 my-9 transition-all duration-500 delay-175 ${
              animate ? "opacity-100 scale-100" : "opacity-0 scale-98"
            }`}
          >
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
            <span className="text-sm text-gray-600 dark:text-gray-300 font-medium whitespace-nowrap">
              O continúa con
            </span>
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
          </div>


          {/* Social Buttons */}
          <div
            className={`flex flex-col space-y-6 transition-all duration-500 delay-200 ${
              animate ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Google */}
            <Button
              type="button"
              variant="outline"
              className="border-2 border-gray-300 dark:border-gray-600 
              bg-white dark:bg-black 
              text-black dark:text-white 
              py-5.5 rounded-lg transition-all duration-300 group 
              hover:scale-105 hover:bg-white/80 dark:hover:bg-black/80 
              hover:shadow-sm active:scale-98"
            >
              <Image
                src="/icons/google-logo.png"
                alt="Google"
                width={24}
                height={24}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </Button>

            {/* Facebook */}
            <Button
              type="button"
              variant="outline"
              className="border-2 border-gray-300 dark:border-gray-600 
              bg-white dark:bg-black 
              text-black dark:text-white 
              py-5.5 rounded-lg transition-all duration-300 group 
              hover:scale-105 hover:bg-white/80 dark:hover:bg-black/80 
              hover:shadow-sm active:scale-98"
            >
              <Image
                src="/icons/facebook-logo.png"
                alt="Facebook"
                width={24}
                height={24}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </Button>

            {/* Apple */}
            <Button
              type="button"
              variant="outline"
              className="border-2 border-gray-300 dark:border-gray-600 
              bg-white dark:bg-black 
              text-black dark:text-white 
              py-5.5 rounded-lg transition-all duration-300 group 
              hover:scale-105 hover:bg-white/80 dark:hover:bg-black/80 
              hover:shadow-sm active:scale-98"
            >
              {mounted ? (
                <Image
                  unoptimized
                  src={
                    theme === "dark"
                      ? "/icons/apple-logo-white.png"
                      : "/icons/apple-logo-black.png"
                  }
                  alt="Apple"
                  width={24}
                  height={24}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <div className="w-6 h-6" />
              )}
            </Button>
          </div>

          {/* Login link */}
          <p
            className={`text-center text-sm text-gray-600 dark:text-gray-300 mt-20 transition-all duration-500 delay-225 hover:opacity-100 ${
              animate ? "opacity-100" : "opacity-0"
            }`}
          >
            ¿Todavia no tienes una cuenta?{" "}
            <a
              href="registro"
              className="font-semibold text-gray-900 dark:text-white hover:underline hover:scale-105 inline-block transition-all duration-300"
            >
              Registrate
            </a>
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden lg:block lg:col-span-9 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-black dark:to-black opacity-70" />
        <Image
          src="/img/1.jpg"
          alt="Laboratory"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
