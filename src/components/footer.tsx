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

            
            {/* Logo (modo claro/oscuro) */}
            <Link href="/" className="inline-block -ml-4 mt-1">
              {/* Logo modo claro */}
              <img
                src="/modo-claro.png"
                alt="Logo RALQ Light"
                className="h-32 w-32 object-contain dark:hidden"
              />
              {/* Logo modo oscuro */}
              <img
                src="/modo-oscuro-removebg-preview.png"
                alt="Logo RALQ Dark"
                className="h-28 w-28 object-contain hidden dark:block"
              />
            </Link>

            <p className="mt-2 text-muted-foreground text-sm leading-relaxed max-w-md">
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


          {/* Fundadores */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Fundadores
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/productos"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Emir Polito Guevara
                </Link>
              </li>
              <li>
                <Link
                  href="/productos"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Irving Esteban Molina Méndez
                </Link>
              </li>
              <li>
                <Link
                  href="/productos"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Cristian Daniel Barraza Hernández
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
              © 2024 RALQ. Todos los derechos reservados.
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
