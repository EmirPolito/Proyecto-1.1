"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      console.log("Form submitted:", { email, password, confirmPassword });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 min-h-screen max-h-screen overflow-hidden">
      {/* Left Side - Form */}
      <div className="lg:col-span-3 flex items-center justify-center p-6 lg:p-8 bg-white overflow-y-auto">
        <div className="w-full max-w-lg">
          {/* Header */}
          <div
            className={`mb-10 text-center transition-all duration-500 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-2 hover:scale-105 transition-transform duration-300 cursor-default">
              Registrarse
            </h1>
            <p className="text-base text-gray-600 hover:text-gray-700 transition-colors duration-300">
              Bienvenido/a a RALQ. Por favor, introduzca sus datos.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div
              className={`space-y-2 transition-all duration-500 delay-75 ${
                animate
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2"
              }`}
            >
              <Label
                htmlFor="email"
                className="text-sm font-semibold text-gray-900"
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
                className="bg-white border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-gray-400 hover:shadow-sm hover:scale-105 focus:scale-105"
              />
            </div>

            {/* Password Field */}
            <div
              className={`space-y-2 transition-all duration-500 delay-100 ${
                animate
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2"
              }`}
            >
              <Label
                htmlFor="password"
                className="text-sm font-semibold text-gray-900"
              >
                Contraseña
              </Label>
              <div className="relative group">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Introduce tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-white border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-gray-400 hover:shadow-sm hover:scale-105 focus:scale-105 pr-20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div
              className={`space-y-2 transition-all duration-500 delay-125 ${
                animate
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2"
              }`}
            >
              <Label
                htmlFor="confirmPassword"
                className="text-sm font-semibold text-gray-900"
              >
                Confirmar contraseña
              </Label>
              <div className="relative group">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirma tu contraseña"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full bg-white border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-gray-400 hover:shadow-sm hover:scale-105 focus:scale-105 pr-20"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-black text-white py-5 rounded-lg font-semibold transition-all duration-500 delay-150 mt-3 hover:scale-105 hover:shadow-md active:scale-98 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              {isLoading ? "Registrando..." : "Registrarse"}
            </Button>
          </form>

          {/* Divider */}
          <div
            className={`flex items-center gap-3 my-6 transition-all duration-500 delay-175 ${
              animate ? "opacity-100 scale-100" : "opacity-0 scale-98"
            }`}
          >
            <div className="flex-1 h-px bg-gray-200 hover:bg-gray-400 transition-colors duration-300" />
            <span className="text-sm text-gray-600 font-medium whitespace-nowrap">
              O continúa con
            </span>
            <div className="flex-1 h-px bg-gray-200 hover:bg-gray-400 transition-colors duration-300" />
          </div>

          {/* Social Buttons */}
          <div
            className={`grid grid-cols-3 gap-3 transition-all duration-500 delay-200 ${
              animate ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Google */}
            <Button
              type="button"
              variant="outline"
              className="border-2 border-gray-200 bg-white py-5 rounded-lg transition-all duration-300 group hover:scale-105 hover:bg-white/20 hover:border-gray-200 hover:shadow-sm active:scale-98"
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
              className="border-2 border-gray-200 bg-white py-5 rounded-lg transition-all duration-300 group hover:scale-105 hover:bg-white/20 hover:border-gray-200 hover:shadow-sm active:scale-98"
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
              className="border-2 border-gray-200 bg-white py-5 rounded-lg transition-all duration-300 group hover:scale-105 hover:bg-white/20 hover:border-gray-200 hover:shadow-sm active:scale-98"
            >
              <Image
                src="/icons/apple-logo.png"
                alt="Apple"
                width={24}
                height={24}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </Button>
          </div>

          {/* Login Link */}
          <p
            className={`text-center text-sm text-gray-600 mt-12 transition-all duration-500 delay-225 hover:opacity-100 ${
              animate ? "opacity-100" : "opacity-0"
            }`}
          >
            ¿Ya tienes una cuenta?{" "}
            <a
              href="#"
              className="font-semibold text-gray-900 hover:text-black-900 hover:underline transition-all duration-300 hover:scale-105 inline-block"
            >
              Inicia sesión
            </a>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block lg:col-span-2 relative bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden">
        <Image
          src="/img/1.jpg"
          alt="Laboratory scientist conducting research"
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
          priority
        />
      </div>
    </div>
  );
}
