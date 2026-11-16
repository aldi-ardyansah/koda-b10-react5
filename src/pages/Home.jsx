import { Link } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { CiBellOn, CiSearch } from "react-icons/ci";
import { MdOutlineBookmarkAdd, MdThumbDown } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { PiHandsClapping } from "react-icons/pi";
import { FaComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import articles from "../data/articles.json";

function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      <nav className="sticky top-0 z-10 bg-white border-b border-neutral-200 flex items-center px-6 py-3">
        <div className="flex items-center gap-4">
          <RxHamburgerMenu className="text-xl text-neutral-600 cursor-pointer hover:text-black" />
          <Link to="/" className="text-3xl font-serif font-bold tracking-tight text-black">
            Medium
          </Link>
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

      <main className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex gap-8 text-sm border-b border-neutral-200">
          <button className="pb-3 border-b border-black font-medium text-black">
            For you
          </button>
          <button className="pb-3 text-neutral-500 hover:text-black">
            Featured
          </button>
        </div>

        <div className="divide-y divide-neutral-200">
          {/* Artikel 1 mengambil data index [0] dari JSON */}
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
                The You You Haven't Met Yet
              </h2>
            </Link>

            <p className="text-neutral-600 font-serif text-base line-clamp-2">
              Getting older doesn't just change who we are. It changes how we understand who we've been.
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
                The Difference Between Privacy and Secrecy
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
        </div>
      </main>
    </div>
  );
}

export default Home;