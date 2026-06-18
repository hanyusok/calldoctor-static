
import React from "react";

const schedule = [
  { day: "월요일", time: "10:00 ~ 18:00", isClosed: false, isWeekend: false },
  { day: "화요일", time: "정기 휴진", isClosed: true, isWeekend: false },
  { day: "수요일", time: "정기 휴진", isClosed: true, isWeekend: false },
  { day: "목요일", time: "10:00 ~ 18:00", isClosed: false, isWeekend: false },
  { day: "금요일", time: "10:00 ~ 18:00", isClosed: false, isWeekend: false },
  { day: "토요일", time: "10:00 ~ 18:00", isClosed: false, isWeekend: true },
  { day: "일요일", time: "10:00 ~ 18:00", isClosed: false, isWeekend: true },
];

const Location = () => {
  return (
    <section id="location" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute bottom-0 right-0 -z-10 w-80 h-80 bg-primary/5 blur-[100px] rounded-full"></div>
      <div className="absolute top-0 left-0 -z-10 w-72 h-72 bg-secondary/5 blur-[90px] rounded-full"></div>

      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-secondary font-bold tracking-wider uppercase text-sm mb-3">Hours & Location</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            진료 시간 및 찾아오시는 길
          </h3>
          <p className="text-gray-600 text-lg">
            마트의원은 안성 롯데마트 2층에 있으며, 바쁜 현대인을 위해 주말(토·일요일)에도 정상 진료합니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          {/* Left: Location & Map (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-xl shadow-slate-100/50 flex-1 flex flex-col">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                위치 및 연락처
              </h4>

              {/* Address Details */}
              <div className="space-y-4 mb-8 text-gray-700">
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">의원 주소</p>
                  <p className="text-lg font-semibold text-gray-800 mt-1">
                    경기도 안성시 공도읍 서동대로 4478, 2층 (롯데마트 안성점 내)
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">대표 전화번호</p>
                    <p className="text-lg font-bold text-primary mt-1">031-657-8279</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">주차 안내</p>
                    <p className="text-lg font-semibold text-gray-800 mt-1">롯데마트 지상/지하 주차장 무료 이용</p>
                  </div>
                </div>
              </div>

              {/* Map Illustration Placeholder */}
              <div className="relative rounded-2xl overflow-hidden border border-gray-100 bg-slate-50 flex-1 min-h-[280px] flex flex-col items-center justify-center p-6 text-center group">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#0ea5e9_1.5px,transparent_1.5px)] [background-size:16px_16px]"></div>

                {/* Map Graphic Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>

                <h5 className="font-bold text-gray-800 text-lg mb-2">롯데마트 안성점 2층 마트의원</h5>
                <p className="text-gray-500 text-sm max-w-sm mb-6">
                  안성 IC 부근 롯데마트 2층 매장 내에 위치하여 넓고 쾌적한 전용 주차공간과 우수한 접근성을 제공합니다.
                </p>

                {/* Map Action Buttons */}
                <div className="flex flex-wrap gap-3 justify-center z-10">
                  <a
                    href="https://map.naver.com/v5/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%95%88%EC%84%B0%EC%8B%9C%20%EA%B3%B5%EB%8F%84%EC%9D%8D%20%EC%84%9C%EB%8F%99%EB%8C%80%EB%A1%9C%204478"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-md transition-colors"
                  >
                    네이버 지도에서 보기
                  </a>
                  <a
                    href="https://map.kakao.com/?q=%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%95%88%EC%84%B0%EC%8B%9C%20%EA%B3%B5%EB%8F%84%EC%9D%8D%20%EC%84%9C%EB%8F%99%EB%8C%80%EB%A1%9C%204478"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 hover:bg-yellow-500 text-yellow-950 font-bold text-sm px-5 py-2.5 rounded-full shadow-md transition-colors"
                  >
                    카카오 맵에서 보기
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Schedule (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-xl shadow-slate-100/50 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  진료 일정표
                </h4>

                <div className="divide-y divide-gray-100 mb-8">
                  {schedule.map((item, index) => (
                    <div key={index} className="py-3.5 flex justify-between items-center">
                      <span className={`font-bold ${item.isWeekend ? "text-accent" : item.isClosed ? "text-gray-400" : "text-gray-700"
                        }`}>
                        {item.day} {item.isWeekend && <span className="text-xs font-semibold px-1.5 py-0.5 bg-accent/10 rounded ml-1">주말진료</span>}
                      </span>
                      <span className={`font-semibold text-sm ${item.isClosed
                          ? "text-red-500 bg-red-50 px-3 py-1 rounded-full font-bold"
                          : item.isWeekend
                            ? "text-primary font-bold"
                            : "text-gray-600"
                        }`}>
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinic Notes */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 text-xs text-gray-500 space-y-2">
                <p className="flex items-start">
                  <span className="text-primary mr-1.5 font-bold">•</span>
                  <span><strong>점심시간</strong>은 오후 1시부터 2시까지 (13:00 ~ 14:00) 입니다.</span>
                </p>
                <p className="flex items-start">
                  <span className="text-primary mr-1.5 font-bold">•</span>
                  <span>안성 롯데마트 휴무일과 관계없이 <strong>매주 화요일과 수요일</strong>은 의원 정기 휴진입니다.</span>
                </p>
                <p className="flex items-start">
                  <span className="text-primary mr-1.5 font-bold">•</span>
                  <span>접수 마감 시간은 진료 종료 30분 전(17:30)입니다. 내원 시 참고 바랍니다.</span>
                </p>
                <p className="flex items-start">
                  <span className="text-accent mr-1.5 font-bold">•</span>
                  <span className="text-gray-600 font-semibold">대기 환자 및 긴급 수술 상황에 따라 조기 마감될 수 있으니 방문 전 대표번호로 문의주시면 보다 안내받으실 수 있습니다.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
