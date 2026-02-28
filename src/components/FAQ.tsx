"use client";

import { useState } from "react";

const faqs = [
    {
        question: "비대면 진료는 어떻게 진행되나요?",
        answer: "Calldoc 예약 후 약속된 시간에 전문의와 화상 또는 음성 통화로 연결됩니다. 병원 방문과 동일하게 상담과 증상 확인이 이루어지며, 필요한 경우 전자 처방전이 발급됩니다.",
    },
    {
        question: "처방전은 어떻게 받나요?",
        answer: "진료가 종료되면 앱 내에서 전자 처방전을 확인할 수 있습니다. 환자분이 지정한 약국으로 처방전이 전송되거나, 근처 약국에서 직접 수령하실 수 있도록 안내해 드립니다.",
    },
    {
        question: "진료비는 어떻게 결제하나요?",
        answer: "예약 시 등록한 결제 수단으로 진료 완료 후 자동으로 결제됩니다. 건강보험 적용 여부에 따라 본인 부담금이 산정되며, 상세 내역은 진료 후 확인 가능합니다.",
    },
    {
        question: "모든 질환에 대해 비대면 진료가 가능한가요?",
        answer: "보건복지부 가이드라인에 따라 초진 및 재진 대상 여부가 결정됩니다. 만성질환이나 최근 대면 진료 이력이 있는 경우 더 원활하게 이용 가능하며, 마약류나 오남용 우려 의약품은 처방이 제한될 수 있습니다.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-surface">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-3">Common Questions</h2>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                        궁금한 점이 있으신가요?
                    </h3>
                    <p className="text-gray-600 text-lg">
                        Calldoc 이용에 대해 가장 많이 묻는 질문들을 모았습니다.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-bold text-gray-800">{faq.question}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-6 w-6 text-primary transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-600 mb-6">원하는 답변을 찾지 못하셨나요?</p>
                    <a
                        href="mailto:contact@calldoc.co.kr"
                        className="inline-flex items-center text-primary font-bold hover:underline"
                    >
                        고객센터에 문의하기
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
