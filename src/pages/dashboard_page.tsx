import CourseStatus from "@/components/course_status";
import SharedFooter from "@/components/shared_footer";
import SharedNav from "@/components/shared_nav";
import { dashboard } from "@/utils/path";

function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#f7f6f2] text-[#302721]">
      <SharedNav active={dashboard} />
      <main className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 lg:px-20">
        <section className="flex flex-col gap-6 border-b border-[#e4dfd8] pb-14 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-6">
            <span className="grid size-20 place-items-center rounded-2xl bg-[#2d2520] font-serif text-2xl text-white">
              김
            </span>
            <div>
              <p className="text-[10px] text-[#ae6652]">
                일반 회원 · 가입일 2023. 10. 15
              </p>
              <h1 className="mt-2 font-serif text-[36px]">
                김나연 님, 환영합니다
              </h1>
              <p className="mt-2 text-[12px] text-[#817870]">
                반려동물과 함께하는 따뜻한 동행, 몰리스가 응원합니다.
              </p>
            </div>
          </div>
          <button className="border border-[#dcd6cf] bg-[#efede8] px-5 py-3 text-[11px]">
            프로필 페이지 보기
          </button>
        </section>
        <section className="grid gap-5 py-14 md:grid-cols-3">
          {[
            ["신청한 교육", "2건", "다음 교육일: 10월 23일 (목)"],
            ["이수 완료 교육", "1건", "수료증 발급 가능"],
            ["다시 봄 캠페인 후원", "50,000원", "정기 후원 진행 중"],
          ].map(([label, value, detail]) => (
            <article
              key={label}
              className="border border-[#ebe7e1] bg-[#faf9f6] p-8"
            >
              <p className="text-[11px] text-[#8a817a]">{label}</p>
              <p className="mt-5 font-serif text-[38px]">{value}</p>
              <p className="mt-3 text-[11px] text-[#9b938c]">{detail}</p>
            </article>
          ))}
        </section>
        <section>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-serif text-[27px]">교육 신청 내역</h2>
              <p className="mt-2 text-[11px] text-[#877e77]">
                보호자 교육 및 반려견 맞춤 교육 신청 현황입니다.
              </p>
            </div>
            <button className="border-b border-[#302721] pb-1 text-[10px]">
              전체 보기
            </button>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <CourseStatus
              tag="필수교육"
              title="[반려견 행동이해] 올바른 교감과 시작 가이드"
              date="10월 23일 (목) 14:00"
              location="몰리스 라이프 센터 대강당"
            />
            <CourseStatus
              tag="반려견 교육"
              title="[퍼피 스쿨] 생후 6개월 미만 사회화 프로그램"
              date="10월 26일 (일) 10:30"
              location="몰리스 센터 교육장"
              green
            />
          </div>
        </section>
        <section className="mt-16 flex flex-col gap-5 border border-[#e6e0d9] bg-[#faf9f6] p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <span className="grid size-12 place-items-center rounded-xl bg-[#f8c8bd] font-serif">
              P
            </span>
            <div>
              <p className="text-[10px] text-[#b66b58]">
                나의 반려견 등록 정보
              </p>
              <h2 className="mt-1 font-serif text-[23px]">
                초코 (말티즈, 3세)
              </h2>
              <p className="mt-1 text-[10px] text-[#8a817a]">
                중성화 완료 · 예방접종 완료
              </p>
            </div>
          </div>
          <button className="border border-[#d9d2ca] px-5 py-3 text-[11px]">
            반려견 정보 수정
          </button>
        </section>
      </main>
      <SharedFooter />
    </div>
  );
}

export default DashboardPage;
