"use client";

import React from 'react';


const ContactSection: React.FC = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center font-inter"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="flex items-center justify-center min-h-screen bg-black/60 px-4 py-12">
        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-12">
          {/* Texto Izquierdo */}
          <div className="text-white lg:w-1/2 w-full">
            <h1 className="text-3xl lg:text-4xl font-bold capitalize">Contáctanos</h1>
            <p className="mt-5 text-lg max-w-xl">
              ¿Tienes preguntas, comentarios o deseas colaborar con nosotros?
              Estamos aquí para ayudarte. Comparte tus ideas o necesidades, ¡nos encantaría saber de ti!
            </p>

            {/* Redes sociales */}
            <div className="mt-8">
              <h3 className="text-gray-300 font-semibold">Redes sociales</h3>
              <div className="flex items-center gap-5 mt-4">
                {/* Twitter */}
                <a href="#" className="text-white hover:text-blue-400 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48..." />
                  </svg>
                </a>
                {/* Facebook */}
                <a href="#" className="text-white hover:text-blue-600 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0H1.325C.593..." />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="text-white hover:text-pink-600 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.2c3.2..." />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="text-white hover:text-blue-500 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.568..." />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Formulario Derecho */}
          <div className="bg-white dark:bg-gray-900 p-7 rounded-xl shadow-2xl w-full lg:w-1/2">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Formulario de contacto</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Pregúntanos lo que necesites, estamos listos para responderte.
            </p>
            <form className="mt-8 space-y-5">
              <div>
                <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">Nombre completo</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">Mensaje</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md transition duration-300"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
