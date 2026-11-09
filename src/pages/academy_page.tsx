import SharedFooter from "@/components/shared_footer";
import SharedHeader from "@/components/shared_header";
import { academy } from "@/path";
import { useState } from "react";

function AcademyPage() {
  const [tab, setTab] = useState<"guardian" | "dog">("guardian");
  const [appliedCourse, setAppliedCourse] = useState<string | null>(null);
  const guardianCourses = [
    [
      "/assets/classroom.jpg",
      "STEP 01",
      "반려견의 언어와 감정 이해하기",
      "기초 이론과 교감 원칙, 사례 정리 등 반려견의 바디랭귀지를 정확히 읽고 교감하는 방법을 학습합니다.",
      "이론 중심",
    ],
    [
      "/assets/dog-care.jpg",
      "STEP 02",
      "올바른 입양 준비와 응급 처치",
      "안전한 식단 구성부터 위급 상황 시 대처 요령, 기본 응급 처치법까지 실용적 직접비를 필수 지식입니다.",
      "실습 중심",
    ],
    [
      "/assets/dog-walk.jpg",
      "STEP 03",
      "주거 환경 조성과 사회화",
      "반려견이 스트레스 받지 않는 안전한 공간과 산책, 외부 자극에 대한 올바른 사회화 방법을 배웁니다.",
      "야외 수업",
    ],
  ];
  const dogCourses = [
    [
      "/assets/dog-care.jpg",
      "PROGRAM 01",
      "행동 고민 1:1 솔루션",
      "짖음, 분리불안, 낯선 사람에 대한 경계처럼 반복되는 행동의 원인을 관찰하고 개별 생활 환경에 맞는 솔루션을 제안합니다.",
      "1:1 맞춤",
    ],
    [
      "/assets/dog-walk.jpg",
      "PROGRAM 02",
      "산책 매너와 사회화 클래스",
      "리드줄 당김과 외부 자극에 대한 반응을 낮추고, 보호자와 보폭을 맞춰 안정적으로 걷는 방법을 실습합니다.",
      "야외 수업",
    ],
    [
      "/assets/golden-story.jpg",
      "PROGRAM 03",
      "퍼피 스쿨 기초 과정",
      "생후 6개월 미만 반려견을 위한 교감, 배변, 켄넬 적응과 건강한 사회화 습관을 단계별로 익힙니다.",
      "소수 정원",
    ],
  ];

  const teachers = ["강훈민", "나원경", "박지은", "이강훈"];
  const courses = tab === "guardian" ? guardianCourses : dogCourses;
  function selectIdx() {
    return Math.floor(Math.random() * 4);
  }
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#302721]">
      <SharedHeader active={academy} />
      <main>
        <section className="mx-auto max-w-[1440px] px-6 pb-10 pt-20 md:px-12 lg:px-20">
          <h1 className="mt-6 font-serif text-[25px]">반려가족 수업</h1>
          <p className="mt-4 max-w-[850px] font-serif text-[18px] leading-8">
            올바른 지식과 교감으로 행복한 동행을 시작하세요. <br /> 보호자 필수
            교육 과정을 이수하고 반려견과 함께 성장하는 전문 프로그램을
            만나보세요.
          </p>
          <div className="mt-12 flex gap-10 border-b border-[#e5e0d9] text-[13px]">
            <button
              className={`pb-4 ${tab === "guardian" ? "border-b-2 border-[#c47b67] text-[#302721]" : "text-[#827970]"}`}
              onClick={() => setTab("guardian")}
            >
              보호자 교육 (필수 과정)
            </button>
            <button
              className={`pb-4 ${tab === "dog" ? "border-b-2 border-[#c47b67] text-[#302721]" : "text-[#827970]"}`}
              onClick={() => setTab("dog")}
            >
              반려견 맞춤 교육 프로그램
            </button>
          </div>
        </section>
        <section className="mx-auto max-w-[1440px] px-6 py-14 md:px-12 lg:px-20">
          <h2 className="font-serif text-[21px]">
            {tab === "guardian"
              ? "입양 전 반려인 필수 보호자 교육"
              : "우리 아이를 위한 맞춤형 반려견 교육"}
          </h2>
          <p className="mt-3 text-[12px] text-[#817870]">
            {tab === "guardian"
              ? "모든 입양 대기자 및 보호자가 반드시 수강해야 하는 기초 복지 및 행동 심리 교육입니다."
              : "반려견의 나이와 성향, 생활 환경을 세심하게 살펴 가장 필요한 교육 과정을 제안합니다."}
          </p>
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {courses.map(([image, step, title, text, badge], index) => (
              <article key={title} className="border border-[#e8e3dc] bg-white">
                <div className="relative">
                  <img
                    src={image}
                    alt=""
                    className="aspect-[1.48/1] w-full object-cover"
                  />
                  <span
                    className={`absolute left-5 top-5 rounded-full px-3 py-1 text-[9px] ${index === 1 ? "bg-[#ef9c87]" : "bg-white/85"}`}
                  >
                    {badge}
                  </span>
                </div>
                <div className="p-7">
                  <p className="text-[9px] text-[#9c928a]">{step}</p>
                  <h3 className="mt-3 font-serif text-[20px]">{title}</h3>
                  <p className="mt-4 text-[12px] leading-6 text-[#776e67]">
                    {text}
                  </p>
                  <div className="mt-8 flex items-center justify-between text-[10px] text-[#8a817a]">
                    <span>강사: {teachers[selectIdx()]}</span>
                    <button
                      className={`${index === 1 ? "bg-[#aa4d39]" : "bg-[#211a17]"} px-5 py-3 text-white`}
                      onClick={() => setAppliedCourse(title)}
                    >
                      {appliedCourse === title ? "신청 완료" : "신청하기"}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {tab === "dog" && (
            <div className="mt-14 grid gap-px bg-[#e4dfd8] md:grid-cols-3">
              {[
                [
                  "01",
                  "사전 설문 작성",
                  "반려견의 기본 정보와 평소 고민 행동을 알려주세요.",
                ],
                [
                  "02",
                  "전문가 진단",
                  "교육사가 생활 환경과 행동 원인을 세심하게 확인합니다.",
                ],
                [
                  "03",
                  "맞춤 수업 진행",
                  "진단 결과에 따라 가장 적합한 수업과 과제를 안내합니다.",
                ],
              ].map(([number, title, text]) => (
                <article key={number} className="bg-[#f4f2ed] p-7">
                  <span className="text-[9px] text-[#b35e49]">{number}</span>
                  <h3 className="mt-5 font-serif text-[17px]">{title}</h3>
                  <p className="mt-3 text-[11px] leading-6 text-[#7d746c]">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
      <SharedFooter />
    </div>
  );
}

export default AcademyPage;
