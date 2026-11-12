import { navItems } from "@/utils/path";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router";

function SharedNav({ active = "" }: { active?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-50 border-b border-[#e7e3dc] bg-[#faf9f6] sticky top-0">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-6 md:px-12 lg:px-20">
        <Link to="/" className="flex items-center gap-3">
          <span
            className="grid size-10 place-items-center 
          
           font-serif text-[10px]"
          >
            <img
              src="/assets/logo-re-bom.png"
              alt="다시 봄 로고"
              className="max-h-7"
            />
          </span>

          <span className="re-bom text-[18px]">다시, 봄</span>
          <span className="re-bom text-[12px]">by</span>
          <span className="text-[10px]">
            <img
              src="/assets/logo-mollys-black.png"
              className="max-h-3"
              alt="몰리스 로고"
            />
          </span>
        </Link>
        <nav className="hidden items-center gap-10 text-[12px] md:flex">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              to={href}
              className={
                active === href
                  ? "bg-[#2d2520] px-5 py-2.5 text-white"
                  : "text-[#514943]"
              }
            >
              {label}
            </Link>
          ))}
        </nav>
        <button
          className="grid size-8 place-items-center text-[24px] text-black"
          onClick={() => setOpen(!open)}
          aria-label="메뉴 열기"
        >
          <RxHamburgerMenu />
          {/* {open ? "닫기" : "메뉴"} */}
        </button>
      </div>
      {open && (
        <nav className="absolute inset-x-0 top-full bg-[#faf9f6] px-6 py-4 shadow md:hidden">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              to={href}
              className="block border-b border-[#e7e3dc] py-4 text-sm last:border-0"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export default SharedNav;
