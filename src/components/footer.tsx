"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.footer
      className="bg-muted/30 border-t border-border"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            className="col-span-1 md:col-span-2"
            variants={itemVariants}
          >
            <Link
              href="/"
              className="text-2xl font-semibold text-foreground hover:text-muted-foreground transition-colors duration-200"
            >
              <span className="font-bold">Arcoms</span>
              <span className="font-light ml-[1px]">Edu</span>
            </Link>

            <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-md">
              Revolucionando la educación química con tecnología 3D y realidad
              aumentada. Hacemos que el aprendizaje sea más interactivo, visual
              y efectivo.
            </p>
            <div className="flex space-x-4 mt-6">
              <motion.a
                href="mailto:emirpolitog@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://github.com/EmirPolito?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="www.linkedin.com/in/emir-polito-g"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com/arcomsedu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Productos */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Recursos
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/productos"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Modelos 3D
                </Link>
              </li>
              <li>
                <Link
                  href="/productos"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Realidad Aumentada
                </Link>
              </li>
              <li>
                <Link
                  href="/productos"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Instrumentos Virtuales
                </Link>
              </li>
              <li>
                <Link
                  href="/productos"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Plataforma Educativa
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Empresa */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Empresa
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/sobre-nosotros"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/tecnologia"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Tecnología
                </Link>
              </li>
              <li>
                <Link
                  href="/educacion"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Educación
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-border"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 ArcomsEdu. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacidad"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Privacidad
              </Link>
              <Link
                href="/terminos"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Términos
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Cookies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
