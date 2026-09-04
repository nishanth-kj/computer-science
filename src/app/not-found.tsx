import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-lg px-4 py-24 text-center">
      <p className="font-mono text-xs text-muted">404</p>
      <h1 className="mt-2 font-display text-3xl">This page was not found</h1>
      <p className="mt-2 text-sm text-muted">The topic may have moved. Try search, or pick one from the sidebar.</p>
      <Link href="/" className="mt-6 inline-block text-sm text-link hover:underline">
        Back to home
      </Link>
    </main>
  );
}
