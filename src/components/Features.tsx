const features = [
    {
        title: "초고속 진료 예약",
        description: "대기 시간 없이 스마트폰 하나로 가장 가까운 병원의 전문의에게 진료를 예약하세요.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: "전자 처방전 발급",
        description: "진료 후 발급된 전자 처방전을 원하는 약국으로 전송하여 즉시 조제받을 수 있습니다.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        title: "엄선된 의료진",
        description: "Calldoc이 검증한 믿을 수 있는 병원과 숙련된 전문의들로부터 안심하고 진료받으세요.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        title: "보안 및 프라이버시",
        description: "모든 진료 내역과 데이터는 강력한 보안 시스템으로 보호되어 안심하고 이용 가능합니다.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
    },
];

const Features = () => {
    return (
        <section id="features" className="py-24 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Core Benefits</h2>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                        왜 비대면 진료는 <span className="text-primary italic">Calldoc</span> 일까요?
                    </h3>
                    <p className="text-gray-600 text-lg">
                        환자의 편의를 최우선으로 생각하는 Calldoc만의 혁신적인 기능을 경험해보세요.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
