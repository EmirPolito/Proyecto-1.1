"use client";

import Link from "next/link";


export default function BlogPage() {
  return (
<main className="min-h-screen font-sans bg-gray-100 dark:bg-gray-950">

      {/* Botón volver al inicio */}
      <Link
        href="/"
        className="fixed top-23 left-6 bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-2 rounded-lg shadow-lg transition"
      >
        Inicio
      </Link>

      {/* Contenido principal */}
      <section className="max-w-4xl mx-auto px-4 py-12 space-y-12">

        {/* Título */}
        <h1 className="text-3xl lg:text-4xl font-bold text-blue-600 text-center">
          From the Blog
        </h1>

        {/* ========== BLOG CARD 1 ========== */}
        <article className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
          <img
            className="w-full lg:w-1/2 h-72 lg:h-auto object-cover"
            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
            alt="Blog Image"
          />

          <div className="p-6 flex flex-col justify-between">
            <div>
              <p className="text-sm text-blue-500 uppercase">Category</p>

              <Link
                href="#"
                className="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:underline"
              >
                All the features you want to know
              </Link>

              <p className="mt-3 text-gray-500 dark:text-gray-300 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                veritatis sint autem nesciunt, laudantium quia tempore delect.
              </p>

              <Link
                href="#"
                className="inline-block mt-3 text-blue-500 underline hover:text-blue-400"
              >
                Read more
              </Link>
            </div>

            <div className="flex items-center mt-6">
              <img
                className="w-10 h-10 rounded-full object-cover object-center"
                src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"
                alt="Author"
              />

              <div className="ml-4">
                <h3 className="text-sm text-gray-700 dark:text-gray-200">
                  Amelia Anderson
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Lead Developer
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* ========== BLOG CARD 2 ========== */}
        <article className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
          <img
            className="w-full lg:w-1/2 h-72 lg:h-auto object-cover"
            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
            alt="Blog Image"
          />

          <div className="p-6 flex flex-col justify-between">
            <div>
              <p className="text-sm text-blue-500 uppercase">Category</p>

              <Link
                href="#"
                className="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:underline"
              >
                Everything you need to know
              </Link>

              <p className="mt-3 text-gray-500 dark:text-gray-300 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                veritatis sint autem nesciunt, laudantium quia tempore delect.
              </p>

              <Link
                href="#"
                className="inline-block mt-3 text-blue-500 underline hover:text-blue-400"
              >
                Read more
              </Link>
            </div>

            <div className="flex items-center mt-6">
              <img
                className="w-10 h-10 rounded-full object-cover object-center"
                src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"
                alt="Author"
              />

              <div className="ml-4">
                <h3 className="text-sm text-gray-700 dark:text-gray-200">
                  John Doe
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  UI/UX Designer
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* ========== BLOG CARD 3 ========== */}
        <article className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
          <img
            className="w-full lg:w-1/2 h-72 lg:h-auto object-cover"
            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
            alt="Blog Image"
          />

          <div className="p-6 flex flex-col justify-between">
            <div>
              <p className="text-sm text-blue-500 uppercase">Category</p>

              <Link
                href="#"
                className="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:underline"
              >
                Top tips for developers
              </Link>

              <p className="mt-3 text-gray-500 dark:text-gray-300 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                veritatis sint autem nesciunt, laudantium quia tempore delect.
              </p>

              <Link
                href="#"
                className="inline-block mt-3 text-blue-500 underline hover:text-blue-400"
              >
                Read more
              </Link>
            </div>

            <div className="flex items-center mt-6">
              <img
                className="w-10 h-10 rounded-full object-cover object-center"
                src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"
                alt="Author"
              />

              <div className="ml-4">
                <h3 className="text-sm text-gray-700 dark:text-gray-200">
                  Jane Smith
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Backend Developer
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6 md:px-24 mt-12">
        <div className="border-t border-gray-700"></div>
        <p className="text-center mt-6 text-gray-400">
          © 2025 RALQ. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}
