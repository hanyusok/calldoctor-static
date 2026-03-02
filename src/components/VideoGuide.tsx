import React from 'react';

const VideoGuide = () => {
    return (
        <section id="video-guide" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background elements for aesthetic */}
            <div className="absolute top-0 left-0 -z-10 w-1/3 h-1/3 bg-primary/5 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 -z-10 w-1/4 h-1/4 bg-secondary/10 blur-[80px] rounded-full"></div>

            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-secondary font-bold tracking-wider uppercase text-sm mb-3">Video Guide</h2>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                        영상으로 만나는 <span className="text-primary">Calldoc</span>
                    </h3>
                    <p className="text-gray-600 text-lg">
                        비대면 진료부터 처방전 발급까지, Calldoc 이용 방법을 영상으로 쉽고 빠르게 확인해보세요.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black border border-gray-100/50">
                        <div className="relative w-full pb-[56.25%]">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/PwM2RYjxAtU?autoplay=0&rel=0"
                                title="Calldoc 이용 가이드 영상"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoGuide;
