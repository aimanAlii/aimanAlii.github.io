import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { blogPosts } from "@/data/misc";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import ReactMarkdown from 'react-markdown';

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description: "Notes on shipping software — Next.js, API design, and lessons from open source.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        title="Blog"
        description="Occasional, long-form notes. This section is MDX-ready — drop .mdx files into a /content/posts folder and wire up next-mdx-remote or Contentlayer to go live."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="focus-ring group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/40"
          >
            <div className="relative aspect-[16/10] w-full bg-surface-hover">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              <h2 className="mt-3 font-display text-base font-semibold text-foreground transition-colors group-hover:text-accent">
                {post.title}
              </h2>
              <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-muted">
                <span>{formatDate(post.date)}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {post.readingTime}
                </span>
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
