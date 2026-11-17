import { Link, useSearchParams } from "react-router";
import articles from "../data/articles.json";

function Home() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="divide-y divide-neutral-200">
      {filteredArticles.length > 0 ? (
        filteredArticles.map((article) => (
          <article key={article.url} className="py-8 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs text-neutral-600 mb-1">
              <div className="w-5 h-5 rounded-full bg-neutral-300" />
              <div className="flex gap-1">
                <span className="font-medium text-neutral-900">{article.author}</span>
              </div>
            </div>

            <Link to={article.url}>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 hover:underline cursor-pointer">
                {article.title}
              </h2>
            </Link>

            <p className="text-neutral-600 font-serif text-base line-clamp-2">
              {article.body[0]}
            </p>
          </article>
        ))
      ) : (
        <p className="py-8 text-center text-neutral-500">
          No articles found for "{search}".
        </p>
      )}
    </div>
  );
}

export default Home;