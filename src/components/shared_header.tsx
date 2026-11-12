function SharedHeader({ sub_title, title, explain }: HeaderType) {
  return (
    <>
      <p className="section-label">{sub_title}</p>
      <h1 className="mt-4 font-serif text-[48px] tracking-[-0.05em]">
        {title}
      </h1>
      <p className="mt-3 text-[13px] text-[#756b63] font-serif">{explain}</p>
    </>
  );
}

export default SharedHeader;
