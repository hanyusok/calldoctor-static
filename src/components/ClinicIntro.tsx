import React from "react";

const departments = [
  {
    name: "내과",
    englishName: "Internal Medicine",
    description: "감기, 고혈압, 당뇨, 고지혈증 등 만성질환 및 성인병 예방·관리",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    name: "소아청소년과",
    englishName: "Pediatrics",
    description: "어린이 감기, 호흡기 질환, 예방접종 및 영유아 발달 상태 상담",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
  },
  {
    name: "이비인후과",
    englishName: "Otolaryngology",
    description: "비염, 부비동염(축농증), 편도염, 중이염 등 귀·코·목 통증 진료",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    ),
  },
  {
    name: "정형외과",
    englishName: "Orthopedics",
    description: "관절염, 척추·요통 통증 관리, 뼈/관절 질환 진단 및 치료 상담",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: "피부과",
    englishName: "Dermatology",
    description: "습진, 피부염, 아토피, 두드러기, 무좀 등 피부 질환의 올바른 진단",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
  {
    name: "가정의학과",
    englishName: "Family Medicine",
    description: "가족 구성원 전체의 예방 의학, 맞춤 건강 관리 및 1차 종합 진료",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

const ClinicIntro = () => {
  return (
    <section id="clinic-intro" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -z-10 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
      <div className="absolute top-0 right-0 -z-10 w-80 h-80 bg-secondary/5 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Medical Staff & Departments</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            마트의원 의료진 및 진료과목을 소개합니다
          </h3>
          <p className="text-gray-600 text-lg">
            환자 한 분 한 분을 내 가족처럼 생각하며, 신뢰할 수 있는 최선의 의료 서비스를 제공합니다.
          </p>
        </div>

        {/* Flex layout for Doctor and Departments */}
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Doctor Profile Card */}
          <div className="lg:w-2/5 flex flex-col">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-3xl p-8 border border-slate-100 flex-1 flex flex-col shadow-xl shadow-slate-100/20 relative overflow-hidden group">
              {/* Corner decorative accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[80px] transition-all duration-300 group-hover:scale-110"></div>

              {/* Doctor Header info */}
              <div className="flex items-center space-x-6 mb-8">
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-primary/20 to-secondary/20 flex items-center justify-center border-2 border-white shadow-md overflow-hidden relative">
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
                  {/* Styled Stethoscope SVG inside avatar */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-2">
                    마트의원 대표원장
                  </span>
                  <h4 className="text-2xl font-bold text-gray-900">한유석 원장</h4>
                  <p className="text-gray-500 text-sm font-medium mt-1">전문의</p>
                </div>
              </div>

              {/* Philosophy Quote */}
              <div className="border-l-4 border-primary pl-4 py-1 mb-8">
                <p className="text-gray-700 font-medium italic leading-relaxed text-base">
                  &ldquo;풍부한 진료 경험을 바탕으로, 지역 주민분들의 건강을 따뜻하고 세심하게 보살피는 든든한 건강 동반자가 되겠습니다.&rdquo;
                </p>
              </div>

              {/* Qualifications */}
              <div className="flex-1">
                <h5 className="text-gray-800 font-bold text-sm uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                  주요 약력 및 학회 활동
                </h5>
                <ul className="space-y-3.5 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 shrink-0"></span>
                    <span>전문의 자격 취득</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 shrink-0"></span>
                    <span>대한의사협회 평생회원</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 shrink-0"></span>
                    <span>대한비만학회 정회원</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 shrink-0"></span>
                    <span>전 주요 종합병원 및 아동병원 진료과장 역임</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 shrink-0"></span>
                    <span>콜닥(Calldoc) 비대면 진료 위원</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Departments Grid */}
          <div className="lg:w-3/5">
            <div className="grid md:grid-cols-2 gap-6 h-full">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                      {dept.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {dept.name}
                    </h4>
                    <span className="text-[11px] text-gray-400 font-medium uppercase tracking-wider block mt-0.5 mb-3">
                      {dept.englishName}
                    </span>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {dept.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicIntro;
