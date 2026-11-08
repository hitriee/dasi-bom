function SharedFooter() {
  return (
    <footer className="border-t border-[#e7e3dc] bg-[#faf9f6]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-6 py-10 text-[10px] text-[#8a817a] md:flex-row md:items-center md:justify-between md:px-12 lg:px-20">
        <p>© 2026 Molly&apos;s. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="/">이용약관</a>
          <a href="/">개인정보처리방침</a>
          <a href="/">캠페인 소개</a>
        </div>
      </div>
    </footer>
  );
}

export default SharedFooter;
