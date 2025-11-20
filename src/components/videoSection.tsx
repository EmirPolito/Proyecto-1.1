export default function VideoSection() {
  const videos = [
    { src: "/video/5752738-uhd_3840_2160_30fps.mp4", text: "AMPLÍA TUS CONOCIMIENTOS" },
    { src: "/video/8326252-uhd_3840_2160_30fps (1).mp4", text: "SIÉNTETE CONFIADO" },
  ];

  return (
    <section className="bg-gray-200 py-20 px-4 md:px-16 flex flex-col gap-16">
      {videos.map((video, i) => (
        <div key={i} className={`flex flex-col md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""} items-center gap-8`}>
          <div className="group relative rounded-3xl overflow-hidden shadow-2xl transition-transform transform hover:scale-105 w-full md:w-1/2">
            <video src={video.src} autoPlay loop muted className="w-full h-72 md:h-[400px] object-cover"></video>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center h-[400px] px-4">
            <h3 className="text-2xl md:text-4xl font-bold text-black">{video.text}</h3>
          </div>
        </div>
      ))}
    </section>
  );
}
