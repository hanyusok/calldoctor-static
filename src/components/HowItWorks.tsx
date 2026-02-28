const steps = [
    {
        number: "01",
        title: "진료 예약 및 결제",
        description: "증상에 맞는 병원과 의사를 선택하고 진료 일정을 예약합니다.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "화상 또는 음성 진료",
        description: "약속된 시간에 전담 의사와 실시간으로 비대면 진료를 진행합니다.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "처방전 및 약 수령",
        description: "발급된 처방전으로 약국에서 약을 조제받거나 배송 서비스를 이용하세요.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-secondary font-bold tracking-wider uppercase text-sm mb-3">Service Process</h2>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                        Calldoc은 이렇게 이용할 수 있어요
                    </h3>
                    <p className="text-gray-600 text-lg">
                        단 3단계만으로 복잡한 병원 방문 없이 전문적인 의료 서비스를 받아보세요.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

                    <div className="grid lg:grid-cols-3 gap-16 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center group">
                                <div className="relative mb-10">
                                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 transform group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center font-bold text-lg">
                                        {step.number}
                                    </div>
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h4>
                                <p className="text-gray-600 text-center leading-relaxed px-4">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
