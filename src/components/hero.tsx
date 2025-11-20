export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      <img src="/img/cerrar-cientifico-vistiendo-mascarilla.jpg" alt="Imagen de fondo" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6 md:px-16">
        <h1 className="text-6xl md:text-8xl font-light text-white drop-shadow-lg">
          Visualiza y Aprende en Realidad Aumentada
        </h1>
        <p className="text-xl md:text-4xl text-white drop-shadow-md max-w-2xl mt-4">
          Aprende química con modelos en realidad aumentada directamente en tu dispositivo.
        </p>
      </div>
    </section>
  );
}
