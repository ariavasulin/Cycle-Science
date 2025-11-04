export function MissionStatement() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djRoNHYtNGgtNHptMC0xMHY0aDR2LTRoLTR6bS0xMCAwdjRoNHYtNGgtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />

      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-8">
            Our Mission
          </h2>

          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-white/90">
            <p>
              At Cycle Science, we believe that every cyclist deserves a bike that fits perfectly.
              Our mission is to optimize your cycling experience through expert bike fitting and
              custom insole solutions.
            </p>

            <p>
              With years of expertise and a personalized approach, we analyze your unique body
              mechanics, riding style, and goals to create the perfect setup. Whether you're a
              competitive racer, weekend warrior, or casual rider, we're dedicated to helping you
              ride longer, faster, and more comfortably.
            </p>

            <p className="text-xl md:text-2xl font-semibold text-white">
              Your perfect ride starts with the perfect fit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
