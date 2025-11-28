"use client";

import React from "react";

/**
 * manual-usuario.tsx
 * Componente React/TSX de un Manual de Usuario en español para ArcomsEdu.
 * - Usar TailwindCSS en el proyecto para estilos.
 * - Archivo autoconclusivo: tabla de contenidos, secciones, FAQ y accesibilidad.
 *
 * Inserta este archivo en tu carpeta de componentes o páginas (por ejemplo: /components/manual-usuario.tsx
 * o /app/manual-usuario/page.tsx en Next.js) y úsalo directamente.
 */

export default function ManualUsuario() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 py-12 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-lg bg-green-600/10 dark:bg-green-400/10 flex items-center justify-center ring-1 ring-green-600/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-green-600 dark:text-green-300"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 2v11h10V2H7zm11 0v12a2 2 0 0 1-2 2H8v7h8a4 4 0 0 0 4-4V2h-2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight">Manual de Usuario</h1>
              <p className="text-sm text-slate-600 dark:text-slate-300">ArcomsEdu — Realidad Aumentada para Laboratorios de Química</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* TOC */}
          <aside className="order-2 lg:order-1 lg:col-span-1">
            <nav className="sticky top-6 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
              <h2 className="text-sm font-semibold mb-3">Contenido</h2>
              <ul className="space-y-2 text-sm">
                <li><a href="#introduccion" className="hover:underline">1. Introducción</a></li>
                <li><a href="#que-es" className="hover:underline">2. ¿Qué es ArcomsEdu?</a></li>
                <li><a href="#requisitos" className="hover:underline">3. Requisitos del sistema</a></li>
                <li><a href="#inicio-rapido" className="hover:underline">4. Inicio rápido</a></li>
                <li><a href="#navegacion" className="hover:underline">5. Navegación del sitio</a></li>
                <li><a href="#visualizador" className="hover:underline">6. Visualizador 3D</a></li>
                <li><a href="#ra" className="hover:underline">7. Modo RA</a></li>
                <li><a href="#cuenta" className="hover:underline">8. Cuenta de usuario</a></li>
                <li><a href="#accesibilidad" className="hover:underline">9. Accesibilidad</a></li>
                <li><a href="#problemas" className="hover:underline">10. Solución de problemas</a></li>
                <li><a href="#seguridad" className="hover:underline">11. Seguridad</a></li>
                <li><a href="#faq" className="hover:underline">12. Preguntas frecuentes</a></li>
                <li><a href="#contacto" className="hover:underline">13. Contacto y soporte</a></li>
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <article className="order-1 lg:order-2 lg:col-span-3 prose prose-slate dark:prose-invert max-w-none">
            <section id="introduccion">
              <h2>1. Introducción</h2>
              <p>
                Bienvenido(a) a <strong>ArcomsEdu</strong>, la plataforma que facilita el aprendizaje de química a través de
                visualizaciones 3D y Realidad Aumentada (RA). En este manual encontrarás instrucciones paso a paso,
                recomendaciones y soluciones a problemas comunes para sacar el máximo provecho de la plataforma.
              </p>
            </section>

            <section id="que-es">
              <h2>2. ¿Qué es ArcomsEdu?</h2>
              <p>
                ArcomsEdu está diseñado para estudiantes y docentes que desean visualizar moléculas, instrumentos y
                prácticas de laboratorio con alto detalle. Los modelos se crean con herramientas como <em>Avogadro</em>
                y <em>Blender</em>, y se preparan para su visualización interactiva en navegadores y dispositivos móviles.
              </p>
            </section>

            <section id="requisitos">
              <h2>3. Requisitos del Sistema</h2>
              <ul>
                <li><strong>Navegadores recomendados:</strong> Google Chrome, Microsoft Edge y Safari (iOS).</li>
                <li><strong>Dispositivos:</strong> PC/Laptop (Windows/macOS), smartphones iOS/Android y tablets.</li>
                <li><strong>Conexión:</strong> Requiere internet para cargar recursos 3D y RA.</li>
              </ul>
            </section>

            <section id="inicio-rapido">
              <h2>4. Inicio Rápido</h2>
              <ol>
                <li>Visita la página principal de <strong>ArcomsEdu</strong>.</li>
                <li>Accede a la sección <em>Moléculas</em>, <em>Instrumentos</em> o <em>Laboratorios</em>.</li>
                <li>Selecciona un modelo y usa los controles 3D para explorarlo.</li>
                <li>Pulsa <strong>Ver en RA</strong> para proyectarlo en tu entorno físico.</li>
              </ol>
            </section>

            <section id="navegacion">
              <h2>5. Navegación del Sitio</h2>
              <p>El menú principal contiene accesos a las áreas principales:</p>
              <ul>
                <li><strong>Inicio:</strong> Presentación y accesos rápidos.</li>
                <li><strong>Moléculas:</strong> Biblioteca de compuestos en 3D.</li>
                <li><strong>Instrumentos:</strong> Equipos del laboratorio en 3D.</li>
                <li><strong>Laboratorios:</strong> Prácticas y simulaciones.</li>
                <li><strong>RA:</strong> Experiencia de Realidad Aumentada.</li>
                <li><strong>Ayuda:</strong> Documentación y soporte.</li>
              </ul>
            </section>

            <section id="visualizador">
              <h2>6. Visualizador 3D</h2>
              <p>
                El visualizador permite manipular los modelos con controles simples y accesibles.
              </p>

              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                <h3 className="text-lg font-medium">Controles</h3>
                <ul>
                  <li><strong>Arrastrar:</strong> Rotar el modelo.</li>
                  <li><strong>Scroll / Pinch:</strong> Acercar o alejar.</li>
                  <li><strong>Click derecho / Dos dedos:</strong> Desplazar cámara.</li>
                  <li><strong>Doble click:</strong> Enfocar objeto.</li>
                  <li><strong>Reset View:</strong> Restablecer vista inicial.</li>
                </ul>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Los materiales y luces están optimizados para claridad visual.</p>
              </div>
            </section>

            <section id="ra">
              <h2>7. Modo RA (Realidad Aumentada)</h2>
              <p>
                La experiencia RA permite proyectar modelos sobre superficies reales usando la cámara del dispositivo.
              </p>
              <h3>Cómo usar RA</h3>
              <ol>
                <li>Abre un modelo y pulsa <strong>Ver en AR / RA</strong>.</li>
                <li>Concede permisos de cámara cuando el navegador lo solicite.</li>
                <li>Apunta a una superficie plana y espera a que la escena cargue.</li>
                <li>Mueve, escala y rota el modelo con gestos táctiles.</li>
              </ol>
              <p className="text-sm text-slate-500 dark:text-slate-400">Asegúrate de buena iluminación y una superficie plana para mejores resultados.</p>
            </section>

            <section id="cuenta">
              <h2>8. Cuenta de Usuario</h2>
              <p>Crear una cuenta te permite guardar favoritos, ver historial y acceder a prácticas avanzadas.</p>
              <h3>Registro</h3>
              <ol>
                <li>Completa el formulario de registro.</li>
                <li>Verifica tu correo electrónico.</li>
                <li>Accede a tu panel personal.</li>
              </ol>
              <h3>Inicio de sesión</h3>
              <ul>
                <li>Inicia sesión con correo y contraseña.</li>
                <li>Usa "Recordarme" para sesiones persistentes en tu dispositivo.</li>
                <li>Recupera contraseña si olvidaste tus credenciales.</li>
              </ul>
            </section>

            <section id="accesibilidad">
              <h2>9. Accesibilidad</h2>
              <p>
                ArcomsEdu incluye modos de alto contraste, tipografías legibles y controles pensados para accesibilidad.
              </p>
              <ul>
                <li>Modo oscuro/claro.</li>
                <li>Controles táctiles optimizados.</li>
                <li>Interfaz minimalista y clara.</li>
              </ul>
            </section>

            <section id="problemas">
              <h2>10. Solución de Problemas Comunes</h2>

              <details className="mb-2" open>
                <summary className="cursor-pointer font-medium">El modelo 3D no carga</summary>
                <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Revisa tu conexión, actualiza el navegador o recarga la página. Si el problema persiste, prueba desde otro dispositivo.
                </div>
              </details>

              <details className="mb-2">
                <summary className="cursor-pointer font-medium">La RA no funciona</summary>
                <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Asegúrate de que el navegador tenga permiso para acceder a la cámara, usa Chrome o Safari y verifica compatibilidad del dispositivo.
                </div>
              </details>

              <details className="mb-2">
                <summary className="cursor-pointer font-medium">Rendimiento lento</summary>
                <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Cierra aplicaciones y pestañas innecesarias, activa modo de calidad baja si está disponible, o prueba en otro dispositivo.
                </div>
              </details>

              <details className="mb-2">
                <summary className="cursor-pointer font-medium">No puedo iniciar sesión</summary>
                <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Verifica que tu correo y contraseña sean correctos. Usa "Recuperar contraseña" o contacta soporte si el problema continúa.
                </div>
              </details>
            </section>

            <section id="seguridad">
              <h2>11. Seguridad y Buenas Prácticas</h2>
              <ul>
                <li>No compartas tu contraseña.</li>
                <li>No subas información personal innecesaria.</li>
                <li>Utiliza la plataforma solo con fines educativos.</li>
                <li>Mantén tu navegador actualizado.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>12. Preguntas Frecuentes (FAQ)</h2>
              <details className="mb-2" open>
                <summary className="cursor-pointer font-medium">¿Necesito instalar algo?</summary>
                <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">No. ArcomsEdu funciona directamente desde el navegador.</div>
              </details>

              <details className="mb-2">
                <summary className="cursor-pointer font-medium">¿Los modelos son precisos?</summary>
                <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">Sí. Se generan en Avogadro y se retocan en Blender para mayor claridad visual.</div>
              </details>

              <details className="mb-2">
                <summary className="cursor-pointer font-medium">¿La RA funciona sin internet?</summary>
                <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">No. La experiencia RA requiere conexión a internet para cargar recursos.</div>
              </details>

              <details className="mb-2">
                <summary className="cursor-pointer font-medium">¿Puedo usar ArcomsEdu en clase?</summary>
                <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">Sí, está diseñado para entornos educativos y presentaciones en aula.</div>
              </details>
            </section>

            <section id="contacto">
              <h2>13. Contacto y Soporte</h2>
              <p>
                Si necesitas ayuda adicional, contáctanos:
              </p>
              <ul>
                <li>Correo: <a className="text-green-600 dark:text-green-300 font-medium" href="mailto:soporte@arcomsedu.com">soporte@arcomsedu.com</a></li>
                <li>Sitio web: <span className="font-medium">ArcomsEdu</span></li>
              </ul>

              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/10 rounded-lg">
                <p className="text-sm">Créditos: Modelado molecular (Avogadro), renders (Blender 4.0), instrumentos (Tripo.ai), desarrollo (Next.js, React, TailwindCSS).</p>
              </div>
            </section>

            {/* Print / Download buttons */}
            <div className="mt-8 flex gap-3">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-900 text-white hover:opacity-95"
              >
                Imprimir
              </button>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md ring-1 ring-slate-200 dark:ring-slate-700"
              >
                Contacto
              </a>
            </div>

          </article>
        </div>

        <footer className="mt-12 text-center text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} ArcomsEdu — Todos los derechos reservados.
        </footer>
      </div>
    </main>
  );
}
