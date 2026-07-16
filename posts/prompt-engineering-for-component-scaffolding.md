## Why Scaffolding Is the Best Use Case for AI Prompts

Of all the things AI coding assistants are good at, scaffolding components might be the single best fit. It's repetitive, it's pattern-based, and it's exactly the kind of task where a slightly wrong prompt produces a *slightly* wrong component — annoying, but never dangerous. That makes it a safe place to get sloppy with prompting, and also the fastest place to notice when your prompting technique is holding you back.

Here's what actually changed my results.

## The Vague Prompt Problem

My first instinct was prompts like:

> "Create a button component"

This works, technically. You get *a* button. But it's a generic one — no idea about your design tokens, your prop conventions, whether you use `class-variance-authority`, or whether "Button" in your codebase means something very specific with five variants and three sizes.

The AI isn't wrong. It's just missing context you never gave it.

## What Good Scaffolding Prompts Actually Include

After a lot of trial and error, the prompts that consistently produced components I could drop in with zero edits had four things in common:

**1. The shape of existing components.**
Paste in one real example from your codebase. Not a description of your conventions — the actual code. The AI will match patterns far more reliably than it will follow a written style guide.

**2. Explicit prop contracts.**
Instead of "add some props," specify exactly what's needed:
> "Props: `variant: 'primary' | 'secondary' | 'ghost'`, `size: 'sm' | 'md' | 'lg'`, `isLoading?: boolean`, and standard button HTML attributes via spread."

**3. Styling system, named explicitly.**
"Use Tailwind" is fine. "Use Tailwind with our existing `cn()` utility for conditional classes, following the same variant pattern as `Badge.tsx`" is much better.

**4. Accessibility and edge cases, stated up front.**
Loading states, disabled states, `aria-` attributes — asking for these explicitly gets them included. Leaving them implicit gets them skipped more often than not.

## A Template That Worked Well

This is roughly the shape of prompt that gave me the most reliably usable output:

```
Create a [ComponentName] component for a Next.js + TypeScript + Tailwind project.

Reference example (match this style and structure):
[paste an existing component]

Requirements:
- Props: [list explicitly]
- Variants: [list explicitly]
- Must handle: loading state, disabled state, keyboard focus
- Use the existing `cn()` utility for class merging
- Export both the component and its prop types
```

Notice there's no ambiguity left for the model to guess at. Every guess it would otherwise have to make has been pre-answered.

## Where It Still Needs a Human Pass

Even with a tight prompt, I still review for a few things every time:

- **Naming consistency** — does this match what the rest of the team calls things?
- **Over-engineering** — AI-generated components sometimes add configurability nobody asked for. Trim it.
- **Actual accessibility testing** — asking for `aria-` attributes gets you attributes, not verified behavior. Tab through it yourself.

## The Real Lesson

Prompt engineering for scaffolding isn't really about clever phrasing — it's about front-loading the same information you'd give a new teammate on their first day: here's an example, here's the contract, here's what "done" looks like. The more of that context makes it into the prompt, the less cleanup makes it into your PR.

---

