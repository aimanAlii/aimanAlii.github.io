import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center px-6 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
        <SearchX className="h-7 w-7" />
      </span>
      <p className="prompt-label mt-6 font-mono text-xs uppercase tracking-widest text-muted">
        error 404
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
        This route doesn&apos;t exist.
      </h1>
      <p className="mt-3 text-muted">
        The page you&apos;re looking for was moved, renamed, or never existed in the first place.
      </p>
      <Button asChild size="lg" className="mt-8">
        <Link href="/">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
      </Button>
    </div>
  );
}
