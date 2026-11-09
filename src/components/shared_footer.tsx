import { Link } from "react-router";

function SharedFooter() {
  return (
    <footer className="border-t border-[#e7e3dc] bg-[#faf9f6]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-6 py-10 text-[10px] text-[#8a817a] md:flex-row md:items-center md:justify-between md:px-12 lg:px-20">
        <p>© 2026 Molly&apos;s. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/">이용약관</Link>
          <Link to="/">개인정보처리방침</Link>
          <Link to="/">캠페인 소개</Link>
        </div>
      </div>
    </footer>
  );
}

export default SharedFooter;
