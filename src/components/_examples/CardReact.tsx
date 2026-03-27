const shell =
  "group relative overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-950/70 p-7 shadow-[0_28px_90px_-32px_rgba(0,0,0,0.92)] ring-1 ring-zinc-700/20 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-amber-500/35 hover:shadow-[0_32px_100px_-28px_rgba(245,158,11,0.18)]"
const wash =
  "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_130%_90%_at_10%_-25%,rgba(245,158,11,0.16),transparent_55%),radial-gradient(ellipse_90%_70%_at_110%_60%,rgba(20,184,166,0.09),transparent_50%)] opacity-90"
const grain =
  'pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay [background-image:url("data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E")]'

export default function Card() {
  return (
    <div
      className="no-repeat mx-auto flex max-w-[894px] flex-col rounded-[6px] border border-[#d1d9e0] bg-cover bg-center p-4"
      style={{
        backgroundImage:
          "url('https://github.githubassets.com/images/modules/memexes/projects-beta-banner.png')",
      }}
    >
      <div className="flex items-start gap-10">
        <div>
          <h2 className="text-2xl font-bold">Welcome to React</h2>
          <p className="mt-1 max-w-[55%] text-sm">
            Built to be flexible and adaptable, Projects gives you a live canvas
            to filter, sort, and group issues and pull requests in a table,
            board, or roadmap. Tailor them to your needs with custom fields,
            saved views, workflows, and insights.
          </p>
          <a
            href="#0"
            className="mt-4 inline-flex flex-row rounded-md border border-[#d1d9e0] bg-stone-100 px-4 py-[5px] text-sm leading-5 font-medium text-zinc-800"
          >
            Learn More
          </a>
        </div>

        <button type="button" className="shrink-0">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
          >
            <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
          </svg>
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  )
}
