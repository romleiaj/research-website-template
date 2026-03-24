import { aboutMe } from "@/data/aboutme";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="max-w-screen-md mx-auto px-6 py-14 md:py-16">
        <h1 className="font-serif text-3xl font-light tracking-wide mb-4">Blog</h1>
        <p className="text-zinc-700 leading-relaxed mb-3">
          This section is intentionally lightweight for now.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          Posts and research notes are coming soon. In the meantime, feel free to
          reach out at{" "}
          <a
            href={`mailto:${aboutMe.email}`}
            className="underline hover:text-zinc-900 transition-colors duration-300"
          >
            {aboutMe.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
