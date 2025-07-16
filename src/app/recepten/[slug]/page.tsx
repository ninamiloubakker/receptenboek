"use client";

import { recipes } from "@/data/recipes";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default function ReceptPage({ params }: Props) {
  const recipe = recipes.find((r) => r.slug === params.slug);

  const localStorageKey = `notitie-${params.slug}`;
  const [note, setNote] = useState(recipe?.notes ?? "");

  useEffect(() => {
    const saved = localStorage.getItem(localStorageKey);
    if (saved) {
      setNote(saved);
    }
  }, [localStorageKey]);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const newNote = e.target.value;
    setNote(newNote);
    localStorage.setItem(localStorageKey, newNote);
  }

  if (!recipe) return notFound();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>

      <p className="mb-4">
        📄{" "}
        <a href={recipe.source} target="_blank" className="text-blue-600 underline">
          Bekijk bron
        </a>
      </p>

      <h2 className="font-semibold mb-2">📝 Onze notities</h2>
      <textarea
        value={note}
        onChange={handleChange}
        placeholder="Typ hier je notitie..."
        className="w-full h-40 p-3 border rounded resize-none focus:outline-none focus:ring focus:border-blue-400"
      />
    </main>
  );
}