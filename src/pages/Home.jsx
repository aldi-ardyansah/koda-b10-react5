import { Link } from "react-router";
import Navbar from "../components/Navbar";
import { MdOutlineBookmarkAdd, MdThumbDown } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { PiHandsClapping } from "react-icons/pi";
import { FaComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import articles from "../data/articles.json";

function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex gap-8 text-sm border-b border-neutral-200">
          <Link to="/" className="pb-3 border-b border-black font-medium text-black">
            For you
          </Link>
          <Link to="/featured" className="pb-3 text-neutral-500 hover:text-black">
            Featured
          </Link>
        </div>

        <div className="divide-y divide-neutral-200">
          <article className="py-8 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs text-neutral-600 mb-1">
              <div className="w-5 h-5 rounded-full bg-neutral-300" />
              <div className="flex gap-1">
                <span className="font-medium text-neutral-900">{articles[0].author}</span>
                <span>·</span>
                <span>Oct 14</span>
              </div>
            </div>

            <Link to={articles[0].url}>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 hover:underline cursor-pointer">
                {articles[0].title}
              </h2>
            </Link>

            <p className="text-neutral-600 font-serif text-base line-clamp-2">
              To be fair, I wasn’t exactly making it difficult for them to assume.
            </p>

            <div className="flex items-center justify-between text-xs text-neutral-500 mt-3">
              <div className="flex items-center gap-3">
                <div className="flex flex-row gap-1 items-center">
                  <PiHandsClapping className="text-xl text-neutral-600 hover:text-black cursor-pointer" />
                  <span>2.3K</span>
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <FaComment className="text-xl text-neutral-600 hover:text-black cursor-pointer" />
                  <span>92</span>
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <BiRepost className="text-xl text-neutral-600 hover:text-black cursor-pointer" />
                  <span>48</span>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <MdThumbDown className="text-xl text-neutral-600 hover:text-black cursor-pointer" />
                <MdOutlineBookmarkAdd className="text-xl text-neutral-600 hover:text-black cursor-pointer" />
                <BsThreeDots className="text-xl text-neutral-600 hover:text-black cursor-pointer" />
              </div>
            </div>
          </article>

          <article className="py-8 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs text-neutral-600 mb-1">
              <div className="w-5 h-5 rounded-full bg-neutral-300" />
              <div className="flex gap-1">
                <span className="font-medium text-neutral-900">{articles[1].author}</span>
                <span>·</span>
                <span>Sep 1</span>
              </div>
            </div>

            <Link to={articles[1].url}>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 hover:underline cursor-pointer">
                {articles[1].title}
              </h2>
            </Link>

            <p className="text-neutral-600 font-serif text-base line-clamp-2">
              Why keeping parts of yourself private can be healthy, while secrecy often begins where trust starts to erode.
            </p>

            <div className="flex items-center justify-between text-xs text-neutral-500 mt-3">
              <div className="flex items-center gap-3">
                <div className="flex flex-row gap-1 items-center">
                  <PiHandsClapping className="text-xl text-neutral-600 hover:text-black cursor-pointer" />
                  <span>10.4K</span>
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <FaComment className="text-xl text-neutral-600 hover:text-black cursor-pointer" />
                  <span>394</span>
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <BiRepost className="text-xl text-neutral-600 hover:text-black cursor-pointer" />
                  <span>242</span>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <MdThumbDown className="text-xl text-neutral-600 hover:text-black cursor-pointer" />
                <MdOutlineBookmarkAdd className="text-xl text-neutral-600 hover:text-black cursor-pointer" />
                <BsThreeDots className="text-xl text-neutral-600 hover:text-black cursor-pointer" />
              </div>
            </div>
          </article>

          <article className="py-8 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs text-neutral-600 mb-1">
              <div className="w-5 h-5 rounded-full bg-neutral-300" />
              <div className="flex gap-1">
                <span className="font-medium text-neutral-900">{articles[2].author}</span>
                <span>·</span>
                <span>Jun 1</span>
              </div>
            </div>

            <Link to={articles[2].url}>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 hover:underline cursor-pointer">
                {articles[2].title}
              </h2>
            </Link>

            <p className="text-neutral-600 font-serif text-base line-clamp-2">
              Why keeping parts of yourself private can be healthy, while secrecy often begins where trust starts to erode.
            </p>

            <div className="flex items-center justify-between text-xs text-neutral-500 mt-3">
              <div className="flex items-center gap-3">
                <div className="flex flex-row gap-1 items-center">
                  <PiHandsClapping className="text-xl text-neutral-600 hover:text-black cursor-pointer" />
                  <span>23K</span>
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <FaComment className="text-xl text-neutral-600 hover:text-black cursor-pointer" />
                  <span>548</span>
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <BiRepost className="text-xl text-neutral-600 hover:text-black cursor-pointer" />
                  <span>2.8K</span>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <MdThumbDown className="text-xl text-neutral-600 hover:text-black cursor-pointer" />
                <MdOutlineBookmarkAdd className="text-xl text-neutral-600 hover:text-black cursor-pointer" />
                <BsThreeDots className="text-xl text-neutral-600 hover:text-black cursor-pointer" />
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

export default Home;