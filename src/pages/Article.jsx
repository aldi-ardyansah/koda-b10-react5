import { useLocation } from "react-router";
import { Link } from "react-router";
import articles from "../data/articles.json";

import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { CiBellOn, CiSearch } from "react-icons/ci";

function Article() {
  const { pathname } = useLocation();
  const currentArticle = articles.find((item) => item.url === pathname);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      <nav className="sticky top-0 z-10 bg-white border-b border-neutral-200 flex items-center px-6 py-3">
        <div className="flex items-center gap-4">
          <RxHamburgerMenu className="text-xl text-neutral-600 cursor-pointer hover:text-black" />
          <span className="text-3xl font-serif font-bold tracking-tight text-black">
            <Link to={"/"}>Medium</Link>
          </span>
          <div className="hidden sm:flex items-center bg-neutral-100 rounded-full px-3 py-2 ml-2 gap-2">
            <CiSearch className="text-xl text-neutral-500" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-sm outline-none placeholder-neutral-500 w-48"
            />
          </div>
        </div>

        <div className="flex items-center gap-6 ml-auto text-neutral-600">
          <button className="flex items-center gap-2 text-sm hover:text-black cursor-pointer">
            <HiOutlinePencilSquare className="text-2xl font-light" />
            <span>Write</span>
          </button>
          <CiBellOn className="text-2xl hover:text-black cursor-pointer" />
          <div className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center text-sm font-medium cursor-pointer">
            AA
          </div>
        </div>
      </nav>
      <main>
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-4">
            {currentArticle.title}
          </h1>
          <div className="flex items-center gap-2 text-xs text-neutral-600 mb-6">
            <div className="w-5 h-5 rounded-full bg-neutral-300" />
            <span className="font-medium text-neutral-900">{currentArticle.author}</span>
            <span>·</span>
            <span>Oct 14</span>
          </div>
          <div>
            {currentArticle.body.map((paragraph, index) => (
              <p key={index} className="text-neutral-700 font-serif text-lg leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Article;