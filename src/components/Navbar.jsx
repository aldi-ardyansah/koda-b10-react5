import { Link } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { CiBellOn, CiSearch } from "react-icons/ci";

function Navbar() {
    return (
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
    )
}

export default Navbar;