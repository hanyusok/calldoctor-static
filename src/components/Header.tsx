"use client";

import Link from "next/link";
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
                <Link href="/" className="flex items-center">
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        마트의원
                    </span>
                    <span className="text-xs text-gray-400 font-bold tracking-wider border-l border-gray-200 pl-2.5 ml-2.5 self-center hidden sm:inline-block">
                        Calldoc 비대면 진료
                    </span>
                </Link>

                <nav className="hidden md:flex items-center space-x-7">
                    <Link href="#clinic-intro" className="text-gray-600 hover:text-primary font-semibold text-[15px] transition-colors">
                        의원·의료진 소개
                    </Link>
                    <Link href="#how-it-works" className="text-gray-600 hover:text-primary font-semibold text-[15px] transition-colors">
                        비대면 이용방법
                    </Link>
                    <Link href="#location" className="text-gray-600 hover:text-primary font-semibold text-[15px] transition-colors">
                        진료시간·위치
                    </Link>
                    <Link href="#faq" className="text-gray-600 hover:text-primary font-semibold text-[15px] transition-colors">
                        자주 묻는 질문
                    </Link>
                    <Link
                        href="https://calldoc.co.kr"
                        className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-lg shadow-primary/30"
                    >
                        비대면 진료예약
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
