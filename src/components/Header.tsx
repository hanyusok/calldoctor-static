"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="relative w-10 h-10">
                        <Image
                            src="/logo.png"
                            alt="Calldoc Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        Calldoc
                    </span>
                </Link>

                <nav className="hidden md:flex items-center space-x-8">
                    <Link href="#features" className="text-gray-600 hover:text-primary font-medium transition-colors">
                        서비스 소개
                    </Link>
                    <Link href="#how-it-works" className="text-gray-600 hover:text-primary font-medium transition-colors">
                        이용방법
                    </Link>
                    <Link href="#faq" className="text-gray-600 hover:text-primary font-medium transition-colors">
                        자주 묻는 질문
                    </Link>
                    <Link
                        href="https://calldoc.co.kr"
                        className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary/30"
                    >
                        예약하기
                    </Link>
                </nav>

                <button className="md:hidden text-gray-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
