"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body className="flex min-h-screen items-center justify-center bg-[#1a1024] px-6 text-center">
        <div className="max-w-md">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">
            <AlertTriangle className="h-6 w-6" />
          </span>
          <h1 className="mt-6 text-2xl font-semibold text-white">Something broke.</h1>
          <p className="mt-2 text-sm text-slate-400">
            An unexpected error occurred while rendering this page. You can try again, or head back home.
          </p>
          <Button onClick={reset} className="mt-6">
            Try again
          </Button>
        </div>
      </body>
    </html>
  );
}
