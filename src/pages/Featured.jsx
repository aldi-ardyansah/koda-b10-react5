import { Link } from "react-router";
import Navbar from "../components/Navbar";

function Featured() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex gap-8 text-sm border-b border-neutral-200">
          <Link to="/" className="pb-3 text-neutral-500 hover:text-black">
            For you
          </Link>
          <Link to="/featured" className="pb-3 border-b border-black font-medium text-black">
            Featured
          </Link>
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 mt-8 mb-4">
            Featured Articles
          </h1>
          <p className="text-neutral-600 font-serif text-base">
            Explore our curated selection of featured articles, handpicked for their insightful content and engaging storytelling.
          </p>
          <article className="py-8 flex flex-col gap-2 items-center mt-10">
            <span className="font-medium text-neutral-900">No featured stories</span>
            <span className="font-medium text-neutral-900">Featured stories from the publications you follow will appear here.</span>
          </article>
        </div>
      </main>
    </div>
  );
}

export default Featured;