import { recipes } from "@/data/recipes";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">📖 Ons receptenboek</h1>
      <ul className="space-y-4">
        {recipes.map((recipe) => (
          <li key={recipe.slug} className="p-4 border rounded shadow">
            <Link href={`/recepten/${recipe.slug}`} className="text-xl font-semibold text-blue-600 hover:underline">
              {recipe.title}
            </Link>
            <p className="text-sm text-gray-600">{recipe.notes}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}