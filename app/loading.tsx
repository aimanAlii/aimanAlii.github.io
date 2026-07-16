export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl animate-pulse px-6 py-16">
      <div className="h-4 w-40 rounded-full bg-surface" />
      <div className="mt-4 h-10 w-2/3 rounded-xl bg-surface" />
      <div className="mt-3 h-4 w-1/2 rounded-full bg-surface" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-64 rounded-2xl bg-surface" />
        ))}
      </div>
    </div>
  );
}
