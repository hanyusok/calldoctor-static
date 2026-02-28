import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 bg-primary/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/4 bg-secondary/10 blur-[100px] rounded-full"></div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                            아플 땐 참지 말고 <br />
                            <span className="text-primary">똑똑하게</span> 진료 예약
                        </h1>
                        <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-2xl">
                            어디서든 간편하게, Calldoc으로 비대면 진료를 시작하세요.
                            병원 방문 없이 전문의 상담부터 처방전 발급까지 한 번에 해결됩니다.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link
                                href="https://calldoc.co.kr"
                                className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-xl shadow-primary/30 text-center"
                            >
                                비대면 진료 시작하기
                            </Link>
                            <Link
                                href="#features"
                                className="bg-white border-2 border-gray-100 hover:border-primary text-gray-700 hover:text-primary px-10 py-4 rounded-full text-lg font-bold transition-all text-center"
                            >
                                서비스 둘러보기
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center justify-center lg:justify-start space-x-6">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                        <div className="w-full h-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                                            U{i}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-gray-500 font-medium">
                                <span className="text-gray-900 font-bold">10,000+</span> 명의 환자가 이용 중
                            </p>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10 animate-float">
                            <Image
                                src="/hero-image.png"
                                alt="Telemedicine service illustration"
                                width={700}
                                height={500}
                                className="rounded-3xl shadow-2xl"
                                priority
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 rounded-2xl -rotate-12 blur-sm"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-sm"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
