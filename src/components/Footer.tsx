import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 lg:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-6">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">+</span>
                            </div>
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                Calldoc
                            </span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            환자와 의사를 잇는 가장 따뜻한 기술, <br />
                            언제 어디서나 전문적인 진료를 경험하세요.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">서비스</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="#features" className="hover:text-primary transition-colors">서비스 소개</Link></li>
                            <li><Link href="#how-it-works" className="hover:text-primary transition-colors">이용방법</Link></li>
                            <li><Link href="#faq" className="hover:text-primary transition-colors">자주 묻는 질문</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">고객지원</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">공지사항</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">고객센터</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">이용약관</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">개인정보처리방침</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact</h4>
                        <p className="text-gray-400 mb-2">경기도 안성시 공도읍 서동대로 4478, 2층</p>
                        <p className="text-gray-400 mb-2">대표번호: 031-657-8279</p>
                        <p className="text-gray-400">Email: hanyusok@gmail.com</p>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 lg:mb-0">
                        © 2026 (주)콜닥. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        {/* Social icons placeholder */}
                        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                            <span className="text-xs">FB</span>
                        </div>
                        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                            <span className="text-xs">IG</span>
                        </div>
                        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                            <span className="text-xs">YT</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
