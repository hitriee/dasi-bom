function CourseStatus({
  tag,
  title,
  date,
  location,
  green = false,
}: {
  tag: string;
  title: string;
  date: string;
  location: string;
  green?: boolean;
}) {
  return (
    <article className="border border-[#e6e1da] bg-[#faf9f6]">
      <div className="p-7">
        <span
          className={`rounded-full px-3 py-1 text-[9px] ${green ? "bg-[#dcebdc] text-[#4f7355]" : "bg-[#f6c8bd] text-[#a9503f]"}`}
        >
          {tag}
        </span>
        <span className="float-right text-[10px] text-[#837a72]">승인완료</span>
        <h3 className="mt-6 font-serif text-[19px]">{title}</h3>
        <p className="mt-3 text-[11px] leading-6 text-[#817870]">
          반려견과 보호자가 함께 이해하고 성장하는 교육 프로그램입니다.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 text-[10px] text-[#756c64]">
          <p>
            일정
            <br />
            <b className="font-normal">{date}</b>
          </p>
          <p>
            장소
            <br />
            <b className="font-normal">{location}</b>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between bg-[#f0eee9] px-7 py-4 text-[10px]">
        <span>보호자를 위한 실내 교육</span>
        <button className="bg-white px-4 py-2">신청 상세 보기</button>
      </div>
    </article>
  );
}

export default CourseStatus;
