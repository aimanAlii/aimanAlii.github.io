"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { Search, Home, User, FolderGit2, Briefcase, Sparkles, Newspaper, Mail } from "lucide-react";
import { navItems } from "@/data/misc";
import { personalInfo } from "@/data/profile";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "/": Home,
  "/about": User,
  "/projects": FolderGit2,
  "/experience": Briefcase,
  "/skills": Sparkles,
  "/blog": Newspaper,
  "/contact": Mail,
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const go = useCallback(
    (href: string) => {
      router.push(href);
      setOpen(false);
    },
    [router],
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-background/70 p-4 pt-[15vh] backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <Command
        className="glass w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        label="Command palette"
      >
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <Search className="h-4 w-4 text-muted" />
          <Command.Input
            autoFocus
            placeholder="Jump to a page…"
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
          />
          <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted">
            esc
          </kbd>
        </div>
        <Command.List className="max-h-80 overflow-y-auto p-2">
          <Command.Empty className="px-3 py-6 text-center text-sm text-muted">
            No results found.
          </Command.Empty>
          <Command.Group heading="Pages" className="px-1 pb-1 pt-2 font-mono text-xs text-muted">
            {navItems.map((item) => {
              const Icon = iconMap[item.href] ?? Home;
              return (
                <Command.Item
                  key={item.href}
                  value={item.label}
                  onSelect={() => go(item.href)}
                  className="focus-ring flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground data-[selected=true]:bg-surface-hover"
                >
                  <Icon className="h-4 w-4 text-accent" />
                  {item.label}
                </Command.Item>
              );
            })}
          </Command.Group>
          <Command.Group heading="Actions" className="px-1 pb-1 pt-2 font-mono text-xs text-muted">
            <Command.Item
              value="Email me"
              onSelect={() => {
                window.location.href = `mailto:${personalInfo.email}`;
                setOpen(false);
              }}
              className="focus-ring flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground data-[selected=true]:bg-surface-hover"
            >
              <Mail className="h-4 w-4 text-accent" />
              Email {personalInfo.name.split(" ")[0]}
            </Command.Item>
            <Command.Item
              value="Download resume"
              onSelect={() => {
                window.open(personalInfo.resumeUrl, "_blank");
                setOpen(false);
              }}
              className="focus-ring flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground data-[selected=true]:bg-surface-hover"
            >
              <FolderGit2 className="h-4 w-4 text-accent" />
              Download résumé
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}
