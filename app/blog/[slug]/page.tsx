import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import fs from "fs";
import path from "path";
import { blogPosts } from "@/data/misc";
import { buildMetadata } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return buildMetadata({ title: "Post not found", description: "", noIndex: true });
  return buildMetadata({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}` });
}

function getPostContent(slug: string): string {
  const filePath = path.join(process.cwd(), "posts", `${slug}.md`);
  return fs.readFileSync(filePath, "utf8");
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = getPostContent(post.slug); // ← actually load the markdown

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <Link
        href="/blog"
        className="focus-ring inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to blog
      </Link>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {post.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <h1 className="mt-4 font-display text-3xl font-semibold text-foreground">{post.title}</h1>
      <div className="mt-3 flex items-center gap-4 text-xs text-muted">
        <span>{formatDate(post.date)}</span>
        <span className="flex items-center gap-1">
          <Clock className="h-3 w-3" /> {post.readingTime}
        </span>
      </div>

      <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-border bg-surface">
        <Image src={post.coverImage} alt={post.title} fill sizes="700px" className="object-cover" />
      </div>

      <div className="prose prose-invert mt-8 max-w-none text-sm leading-relaxed text-muted">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}