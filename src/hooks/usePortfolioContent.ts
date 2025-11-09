import { useEffect, useState } from "react";

type Content = {
  hero: {
    title: string;
    subtitle: string;
    cta_primary?: { label: string; href: string };
    cta_secondary?: { label: string; href: string };
  };
  about: { blurb: string; skills: { languages: string[]; frameworks_tools: string[] } };
  experience: Array<{ title: string; company: string; period?: string; start?: string; end?: string; location?: string; highlights?: string[] }>;
  projects: Array<{ name: string; summary?: string; stack?: string[]; highlights?: string[] }>;
  contact: { email?: string; phone?: string; github?: string; linkedin?: string; location?: string };
};

export function usePortfolioContent() {
  const [content, setContent] = useState<Content | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/content/content.json", { cache: "no-cache" });
        if (!res.ok) throw new Error(`Failed to load content.json: ${res.status}`);
        const data = (await res.json()) as Content;
        setContent(data);
      } catch (e: any) {
        setError(e?.message ?? "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return { content, loading, error };
}
