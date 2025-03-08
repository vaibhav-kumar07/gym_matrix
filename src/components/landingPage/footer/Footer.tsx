"use client";

import Logo from "@/components/navbar/Logo";
import Link from "next/link";
import React from "react";
import { FaInfinity } from "react-icons/fa6";

// Footer sections data
const footerLinks = [
    {
        title: "Product",
        links: ["Features", "Solutions", "Pricing", "Updates"],
    },
    {
        title: "Company",
        links: ["About", "Careers", "Blog", "Contact"],
    },
    {
        title: "Legal",
        links: ["Privacy", "Terms", "Security"],
    },
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="max-w-7xl mx-auto px-6">
                {/* Grid Layout for Sections */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-8">
                    {/* Brand Section */}
                    <div>
                        <Logo />

                        <p className="mt-4">
                            Empowering fitness businesses worldwide with smart
                            management solutions.
                        </p>
                    </div>

                    {/* Footer Links (Looped) */}
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-white font-medium mb-4">
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link, idx) => (
                                    <li key={idx}>
                                        <Link
                                            href="#"
                                            className="hover:text-white transition-colors"
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Copyright */}
                <div className="pt-6 border-t border-gray-800 text-center">
                    <p>© 2025 Fitify. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
