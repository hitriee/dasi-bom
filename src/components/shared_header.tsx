function SharedHeader({ sub_title, title, explain }: HeaderType) {
  return (
    <>
      <p className="section-label">상담 안내</p>
      <h1 className="mt-4 font-serif text-[48px] tracking-[-0.05em]">
        입양 상담
      </h1>
      <p className="mt-3 text-[13px] text-[#756b63]">
        가족이 된다는 일은 새로운 시작을 준비하는 일입니다.
      </p>
    </>
  );
}

export default SharedHeader;
