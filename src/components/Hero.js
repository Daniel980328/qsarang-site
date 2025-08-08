export default function Hero() {
  return (
    <section
      id="hero"
      className="h-[70vh] bg-center bg-cover flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('/images/banner.png')" }}
    >
      <h1 className="text-5xl font-semibold leading-tight drop-shadow-[0_3px_8px_rgba(0,0,0,0.35)]">
        Leading Natural Mineral<br/>Coloring & Hair Health
      </h1>
    </section>
  );
}
