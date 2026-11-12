import Arrow from "../components/arrow";
import Story from "../components/story";
import {
  academy,
  campaign,
  consultation,
  dashboard,
  navItems,
} from "../utils/path";
import SharedFooter from "../components/shared_footer";
import SharedNav from "../components/shared_nav";
import { Link } from "react-router";

export default function IndexPage() {
  return (
    <div className="bg-[#f8f7f3] text-[#302721]">
      <SharedNav />
      <main id="top">
        <section className="relative isolate min-h-[590px] overflow-hidden text-white lg:min-h-[660px]">
          <img
            src="/assets/korean-spring.jpg"
            alt="봄 풍경"
            className="absolute inset-0 size-full object-cover object-[center_45%]"
          />
          <div className="absolute inset-0 bg-[#241c18]/72" />
          <div className="relative mx-auto flex min-h-[590px] max-w-[1440px] items-center px-6 py-20 md:px-12 lg:min-h-[660px] lg:px-20">
            <div className="max-w-[680px]">
              <div className="flex gap-3">
                <h1 className="re-bom text-[30px] tracking-[0.16em] text-white/75 text-bold">
                  다시, 봄
                </h1>
                <img
                  src="/assets/logo-re-bom-white.png"
                  alt="다시 봄 로고"
                  className="max-h-9"
                />
              </div>
              <h2 className="mt-7 font-serif text-[20px] leading-[1.75] tracking-[-0.03em] md:text-[35px]">
                1. 유기견을 다른 시각으로 바라봄
                <br />
                2. 보호자와 유기견에게 따뜻한 봄을 선물함
              </h2>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to={campaign}
                  className="inline-flex items-center gap-8 bg-white px-6 py-4 text-[12px] text-[#302721] transition hover:bg-[#e8ddcd]"
                >
                  캠페인 참여하기 <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="campaign" className="bg-[#faf9f6]">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-6 py-24 md:px-12 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:gap-24 lg:px-20 lg:py-32">
            <div className="max-w-[680px]">
              <p className="section-label">캠페인 소개</p>
              <h2 className="mt-7 font-serif text-[25px] tracking-[-0.03em]">
                다시 봄, 새로운 시작을 만나다.
              </h2>
              <p className="mt-7 font-serif text-[17px] italic text-[#655950]">
                “우리의 만남이 봄날 같을 수 있도록”
              </p>
              <p className="mt-8 text-[14px] leading-[2] text-[#71675f]">
                다시 봄은 유기견에게 새로운 가족을 찾아주고, 책임 있는 입양
                문화를 만들어가는 Molly&apos;s의 캠페인입니다. 상처받은 아이들이
                다시 따스한 일상에서 미소 지을 수 있도록 여러분의 따뜻한 시선과
                손길을 기다립니다.
              </p>
              <Link
                to={campaign}
                className="mt-9 inline-flex items-center gap-8 bg-[#2d2520] px-6 py-4 text-[12px] text-white"
              >
                더 알아보기 <Arrow light />
              </Link>
            </div>
            <img
              src="/assets/with-you.jpg"
              alt="공원에서 반려견에게 눈을 맞추고 있는 여성"
              className="aspect-[1.05/1] w-full object-cover object-center shadow-[14px_18px_30px_rgba(53,42,34,.10)] lg:translate-y-4"
            />
          </div>
        </section>

        <section id="stories" className="bg-[#f2f0eb]">
          <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 lg:px-20 lg:py-32">
            <div className="grid gap-5 md:grid-cols-2 md:items-end">
              <div>
                <p className="section-label">입양, 그 후</p>
                <h2 className="mt-4 font-serif text-[24px]">
                  다시 만난 봄날의 이야기
                </h2>
              </div>
              <p className="max-w-[460px] text-[13px] leading-7 text-[#756b63] md:justify-self-end">
                가족을 만나 평범한 시작들을 누리는 아이들.
                <br />
                따뜻한 후기들을 전해드립니다.
              </p>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-2">
              <Story
                image="/assets/golden-story.jpg"
                alt="거실에 앉아 있는 골든리트리버"
                name="봄이"
                text="처음에는 조심스러웠지만, 이제는 매일 현관 앞에서 산책하는 법을 배우고 있어요. 우리 가족의 가장 다정한 봄날입니다."
              />
              <Story
                image="/assets/sleeping-dog.jpg"
                alt="포근한 침대에서 잠든 반려견"
                name="마루"
                text="작고 겁 많던 아이가 편안하게 잠든 모습을 볼 때면, 그 모든 기다림이 참 고마웠다는 생각이 들어요."
                position="object-[center_58%]"
              />
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#faf9f6]">
          <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 lg:px-20 lg:py-32">
            <div className="text-center">
              <p className="section-label justify-center">프로그램</p>
              <h2 className="mt-4 font-serif text-[26px]">프로그램 소개</h2>
              <p className="mt-5 text-[13px] text-[#756b63]">
                반려견과의 행복한 동행을 위해 Molly&apos;s가 체계적인 프로그램을
                제공합니다.
              </p>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                [
                  "01",
                  "입양 상담",
                  "새로운 가족을 기다리는 아이들의 현재 상태와 성향, 입양가정 환경을 상담해 드립니다.",
                  "입양 상담 확인하기",
                  consultation,
                ],
                [
                  "02",
                  "보호자 교육",
                  "처음 만나는 반려생활, 올바른 시작을 함께합니다. 책임감 있는 보호자가 되기 위한 필수 가이드.",
                  "보호자 교육 알아보기",
                  academy,
                ],
                [
                  "03",
                  "반려견 교육",
                  "반려견을 이해하고 함께 살아가기 위한 교육을 준비했어요. 건강한 일상을 시작해 보세요.",
                  "반려견 교육 알아보기",
                  academy,
                ],
              ].map(([number, title, description, link, url]) => (
                <article
                  key={number}
                  className="flex min-h-[300px] flex-col bg-[#f4f2ed] p-8 lg:p-10"
                >
                  <span className="text-[10px] text-[#b65e49]">{number}</span>
                  <h3 className="mt-8 font-serif text-[20px]">{title}</h3>
                  <p className="mt-5 text-[13px] leading-7 text-[#756b63]">
                    {description}
                  </p>
                  <Link
                    to={url}
                    className="mt-auto inline-flex items-center gap-2 pt-8 text-[11px] text-[#ae5c48]"
                  >
                    {link} <Arrow />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#2b221e] text-center text-white">
          <div className="mx-auto max-w-[1440px] px-6 py-24 md:py-28">
            <p className="font-serif text-[17px] text-white/90">
              당신의 관심이 한 아이의 새로운 봄이 됩니다.
            </p>
            <h2 className="mt-7 font-serif text-[24px] leading-10 tracking-[-0.02em]">
              지금 ‘다시 봄’ 캠페인에 동참하여 <br /> 유기견들에게
              <br className="hidden md:block" /> 따뜻한 내일을 선물해 주세요.
            </h2>
            <Link
              to="#top"
              className="mt-10 inline-flex items-center gap-8 bg-white px-7 py-4 text-[12px] text-[#2b221e]"
            >
              다시 봄 캠페인 참여하기 <Arrow />
            </Link>
          </div>
        </section>
      </main>

      <SharedFooter />
    </div>
  );
}
