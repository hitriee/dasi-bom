import SharedFooter from "@/components/shared_footer";
import SharedHeader from "@/components/shared_header";
import SharedNav from "@/components/shared_nav";
import { consultation } from "@/utils/path";
import { useState } from "react";

function ConsultationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const faqs = [
    [
      "입양이 확정되지 않았는데 상담만 받아도 되나요?",
      "네. 충분히 고민할 수 있도록 상담부터 천천히 시작하실 수 있습니다.",
    ],
    [
      "입양 비용이 따로 발생하나요?",
      "기본 건강검진과 예방접종에 필요한 최소 비용만 안내드립니다.",
    ],
    [
      "초보 반려인도 유기견을 입양할 수 있나요?",
      "가능합니다. 보호자 교육과 적응 상담을 함께 제공합니다.",
    ],
    [
      "오프라인 상담은 어디서 진행되나요?",
      "신청 완료 후 가까운 상담 센터와 가능한 시간을 개별 안내드립니다.",
    ],
  ];
  return (
    <div className="bg-[#faf9f6] text-[#302721]">
      <SharedNav active={consultation} />
      <main>
        <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-20 md:px-12 lg:px-20">
          <SharedHeader
            sub_title="상담 안내"
            title="입양 상담"
            explain="가족이 된다는 일은 새로운 시작을 준비하는 일입니다."
          />
          <div className="mt-20 grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <p className="text-[10px] text-[#a85b49]">
                입양 전 꼭 읽어주세요
              </p>
              <h2 className="mt-5 font-serif text-[31px] leading-[1.35]">
                상처를 품은 아이들에게
                <br />
                따뜻한 내일을 건네는 방법
              </h2>
              <p className="mt-7 text-[13px] leading-7 text-[#756b63]">
                유기견 입양은 단순한 동물과의 동거를 의미하지 않습니다. 한
                생명을 온전히 책임지는 일이자, 새로운 가족의 시작입니다. 충분한
                준비와 이해를 통해 아이와 보호자가 함께 행복한 내일을
                만들어갑니다.
              </p>
              <p className="mt-5 border-l-2 border-[#c98471] pl-4 font-serif text-[12px] italic text-[#756b63]">
                “아이의 속도까지 사랑할 준비가 되었는지 천천히 생각해 보세요.”
              </p>
            </div>
            <img
              src="/assets/golden-home.jpg"
              alt="따뜻한 거실에 누워 있는 반려견"
              className="aspect-[1.45/1] w-full object-cover object-center"
            />
          </div>
        </section>

        <section className="bg-[#f4f2ed] py-20">
          <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
            <div className="text-center">
              <p className="section-label">세부 절차</p>
              <h2 className="mt-4 font-serif text-[30px]">입양 진행 절차</h2>
              <p className="mt-3 text-[12px] text-[#847b74]">
                안전하고 신중한 입양을 위해 5단계의 체계적인 과정을 거칩니다.
              </p>
            </div>
            <div className="mt-12 grid gap-px bg-[#e6e1da] md:grid-cols-5">
              {[
                [
                  "01",
                  "입양 정보 확인",
                  "보호 중인 아이들의 정보를 살펴봅니다.",
                ],
                [
                  "02",
                  "상담 신청",
                  "온라인 또는 전화로 입양 상담을 신청합니다.",
                ],
                ["03", "보호소 연계", "담당자와 함께 아이를 만나 교감합니다."],
                [
                  "04",
                  "상담 및 만남",
                  "생활 환경과 가족 구성에 대해 이야기합니다.",
                ],
                ["05", "입양 절차 진행", "최종 확인 후 새로운 가족이 됩니다."],
              ].map(([num, title, text]) => (
                <article key={num} className="min-h-[210px] bg-[#faf9f6] p-7">
                  <span className="text-[11px] text-[#bd715d]">{num}</span>
                  <h3 className="mt-6 font-serif text-[18px]">{title}</h3>
                  <p className="mt-4 text-[11px] leading-6 text-[#827870]">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-[760px] border border-[#e5e0d9] bg-white p-8 md:p-14">
            <div className="text-center">
              <p className="section-label">입양 전 확인</p>
              <h2 className="mt-4 font-serif text-[29px]">
                입양 준비 자가 체크리스트
              </h2>
              <p className="mt-3 text-[11px] text-[#8a817a]">
                입양 전 스스로의 준비 상태를 꼼꼼히 확인해 보세요.
              </p>
            </div>
            <div className="mt-8 space-y-3">
              {[
                "사료, 예방접종 및 정기적인 치료 비용을 감당할 준비가 되었나요?",
                "유기견과의 일상생활을 가족 모두가 함께 동의하고 있나요?",
                "하루 중 아이와 함께 교감하고 산책할 충분한 시간이 있나요?",
                "함께 거주하는 모든 가족 구성원이 입양에 동의했나요?",
                "주거지가 반려견과 함께 생활하기에 적합한 환경인가요?",
              ].map((item) => (
                <label
                  key={item}
                  className="flex cursor-pointer gap-4 bg-[#f5f3ef] p-4 text-[11px] leading-5 text-[#675e57]"
                >
                  <input type="checkbox" className="mt-0.5 accent-[#2d2520]" />
                  {item}
                </label>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[820px] px-6 pb-24">
          <div className="text-center">
            <p className="section-label">Faq</p>
            <h2 className="mt-4 font-serif text-[29px]">자주 묻는 질문</h2>
            <p className="mt-3 text-[11px] text-[#8a817a]">
              입양 상담에 대해 궁금하신 점을 모았습니다.
            </p>
          </div>
          <div className="mt-8">
            {faqs.map(([question, answer], index) => (
              <div key={question} className="border-b border-[#e4dfd8]">
                <button
                  className="flex w-full items-center justify-between py-5 text-left text-[13px]"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  {question}
                  <span>{openFaq === index ? "−" : "+"}</span>
                </button>
                {openFaq === index && (
                  <p className="pb-5 text-[12px] leading-6 text-[#7a7068]">
                    {answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#f3f1ec] px-6 py-24">
          <div className="mx-auto max-w-[650px] text-center">
            <p className="section-label">상담 신청</p>
            <h2 className="mt-4 font-serif text-[30px]">입양 상담 신청하기</h2>
            <p className="mt-3 text-[11px] text-[#8a817a]">
              상담 신청 후 담당자가 확인하여 연락드립니다.
            </p>
            {submitted ? (
              <div className="mt-10 border border-[#d9d1c7] bg-white p-12 font-serif text-xl">
                상담 신청이 접수되었습니다.
              </div>
            ) : (
              <form
                className="mt-9 space-y-4 bg-white p-8 text-left md:p-12"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
              >
                <label className="form-label">
                  신청자 성함 *
                  <input
                    required
                    className="form-input"
                    placeholder="성함을 입력해주세요"
                  />
                </label>
                <label className="form-label">
                  연락처 *
                  <input
                    required
                    className="form-input"
                    placeholder="010-0000-0000"
                  />
                </label>
                <fieldset>
                  <legend className="form-label mb-2">상담 방식 *</legend>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="form-choice">
                      <input type="radio" name="type" defaultChecked /> 온라인
                      화상 상담
                    </label>
                    <label className="form-choice">
                      <input type="radio" name="type" /> 오프라인 방문 상담
                    </label>
                  </div>
                </fieldset>
                <label className="form-label">
                  상담 목적 / 희망 유기견
                  <input
                    className="form-input"
                    placeholder="상담 내용을 입력해주세요"
                  />
                </label>
                <label className="form-label">
                  남길 말씀
                  <textarea
                    className="form-input min-h-28 resize-none"
                    placeholder={`궁금한 점이나 현재 상황을 자세히 적어주세요.\n오프라인 방문 상담은 스타필드 내의 몰리스 지점까지 기입해주세요.`}
                  />
                </label>
                <label className="flex gap-2 text-[10px] text-[#756b63]">
                  <input required type="checkbox" /> 개인정보 수집 및 이용에
                  동의합니다.
                </label>
                <button className="w-full bg-[#1f1916] py-4 text-[12px] text-white">
                  상담 신청 완료하기
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <SharedFooter />
    </div>
  );
}

export default ConsultationPage;
