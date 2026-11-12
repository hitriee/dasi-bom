import Arrow from "@/components/arrow";
import SharedFooter from "@/components/shared_footer";
import SharedHeader from "@/components/shared_header";
import SharedNav from "@/components/shared_nav";
import { campaign, consultation } from "@/utils/path";
import { Link } from "react-router";

function CampaignPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#302721]">
      <SharedNav active={campaign} />
      <main>
        <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 lg:px-20">
          <SharedHeader
            sub_title="캠페인 소개"
            title="다시 봄 캠페인"
            explain="유기견에게 새로운 가족과 따뜻한 봄날을 전합니다."
          />

          <p className="mt-7 max-w-[980px] text-[13px] leading-7 text-[#71675f]">
            ‘다시 봄’은 주변 보호소의 기다림이 길고 따뜻한 사람의 손길이 필요한
            <br />
            유기견들을 위한 특별한 캠페인입니다. <br />
            사랑과 응원 모두에게 소중한 일상을 선물하고, 성숙한 반려 문화를
            만들어갑니다.
          </p>
        </section>
        <section className="bg-[#f4f2ed] px-6 py-16">
          <div className="mx-auto max-w-[1440px] md:px-6 lg:px-14">
            <h2 className="font-serif text-[21px]">참여형 프로그램</h2>
            <p className="mt-3 text-[12px] text-[#7e756d]">
              진행 중인 프로그램에 참여하거나 다가올 일정을 확인해보세요.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                [
                  "2024.08.01 - 2024.08.31",
                  "책임을 배우는 입양 프로젝트",
                  "보호소 유기견들과 함께 입양을 신중하게 시작하는 시간을 담은 프로젝트입니다.",
                ],
                [
                  "2024.09.15 - 2024.09.25",
                  "유기견 응원데이 체험 클래스",
                  "입양 전 건강 돌봄을 미리 경험하며 반려 생활을 준비합니다.",
                ],
                [
                  "2024.11.01 - 2024.11.30",
                  "겨울나기 마음 나눔 캠페인",
                  "추운 계절 보호소 아이들에게 필요한 물품과 따뜻한 마음을 전합니다.",
                ],
              ].map(([date, title, text], index) => (
                <article
                  key={title}
                  className="flex min-h-[360px] flex-col bg-[#faf9f6] p-8"
                >
                  <span
                    className={`w-fit rounded-full px-3 py-1 text-[9px] ${index === 0 ? "bg-[#214d35] text-white" : "bg-[#ebe8e2]"}`}
                  >
                    {index === 0 ? "진행 중" : "진행 예정"}
                  </span>
                  <div className="mt-auto">
                    <p className="text-[9px] text-[#ae6652]">{date}</p>
                    <h3 className="mt-3 font-serif text-[18px]">{title}</h3>
                    <p className="mt-4 text-[11px] leading-6 text-[#786f68]">
                      {text}
                    </p>
                    <Link
                      to={consultation}
                      className="mt-7 flex justify-between border-t border-[#e6e1da] pt-5 text-[10px]"
                    >
                      상세보기 및 신청 <Arrow />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1440px] md:px-6 lg:px-14">
            <div className="text-center">
              <p className="section-label">Participation guide</p>
              <h2 className="mt-4 font-serif text-[24px]">참여 방법 안내</h2>
              <p className="mt-3 text-[11px] text-[#817870]">
                작은 관심과 손길이 모여 유기견들에게 커다란 세상의 시작이
                됩니다.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                [
                  "01",
                  "신청 행사 활동",
                  "매주 주말, 보호소 정기 돌봄 및 산책활동에 참여할 수 있습니다.",
                ],
                [
                  "02",
                  "소셜 공유 캠페인",
                  "SNS에 유기견의 이야기를 공유하고 새로운 가족을 찾는 소중한 활동입니다.",
                ],
                [
                  "03",
                  "정기 후원",
                  "구조와 치료, 보호 환경 개선을 위한 정기 후원으로 함께할 수 있습니다.",
                ],
              ].map(([num, title, text]) => (
                <article key={num} className="bg-[#f4f2ed] p-8">
                  <span className="grid size-10 place-items-center rounded-lg bg-[#302721] text-[10px] text-white">
                    {num}
                  </span>
                  <h3 className="mt-7 font-serif text-[18px]">{title}</h3>
                  <p className="mt-4 text-[11px] leading-6 text-[#796f68]">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#efede8] px-6 py-16 text-center">
          <span className="font-serif text-[38px] text-[#a9523e]">”</span>
          <p className="mx-auto max-w-[850px] font-serif text-[15px] leading-7">
            처음엔 눈치만 보던 아이가 이제는 우리 가족의 가장 밝은 미소가
            되었어요. 다시 봄 캠페인을 통해 평생의 인연을 만났습니다.
          </p>
          <p className="mt-5 text-[10px] text-[#857c74]">
            다시 봄 캠페인 2호 입양 가족 · 반려견 ‘마루’ 보호자
          </p>
        </section>
        <section className="px-6 py-14">
          <div className="mx-auto max-w-[1160px] border border-[#e5dfd8] bg-[#f6f4ef] p-7 text-[11px] leading-6 text-[#756b63]">
            <b className="mr-3 font-serif text-[#302721]">안내 사항</b> 본 실제
            입양 상담 및 행사 신청은 공식 채널에서 확인해 주세요.
          </div>
        </section>
      </main>
      <SharedFooter />
    </div>
  );
}

export default CampaignPage;
