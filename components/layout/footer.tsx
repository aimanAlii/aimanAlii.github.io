"use client";

import Link from "next/link";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { personalInfo } from "@/data/profile";
import { navItems } from "@/data/misc";
import { SocialIcons } from "@/components/shared/social-icons";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const year = new Date().getFullYear();

  async function copyEmail() {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-xl font-semibold text-foreground">{personalInfo.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              {personalInfo.shortBio}
            </p>
            <button
              onClick={copyEmail}
              className="focus-ring mt-5 flex items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-xs text-muted transition-colors hover:text-foreground"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-accent" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? "Copied to clipboard" : personalInfo.email}
            </button>
          </div>

          <div>
            <p className="prompt-label font-mono text-xs uppercase tracking-widest text-muted">Sitemap</p>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-ring text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="prompt-label font-mono text-xs uppercase tracking-widest text-muted">Elsewhere</p>
            <SocialIcons socials={personalInfo.socials} className="mt-4 flex-wrap" />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted sm:flex-row">
          <p>
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="focus-ring hover:text-foreground">
              Privacy Policy
            </Link>
            <span className="font-mono">Built with Next.js &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
