"use client";

import Link from "next/link";
import { useState } from "react";
import { nav } from "@/resources/content";

export default function TopBar() {
    const [openIndex, setOpenIndex] = useState(-1);

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="w-full flex justify-center fixed z-2">
            <nav className="m-2 w-min bg-white/50 rounded-2xl backdrop-blur-md">
                <ul className="flex justify-center space-x-4">
                    {nav.map((value, index) => (
                        value.children ? (
                            <li
                                key={index}
                                className="relative group m-1"
                                onMouseEnter={() => toggleDropdown(index)}
                                onMouseLeave={() => toggleDropdown(-1)}
                            >
                                <button className="px-3 py-2 rounded-md hover:bg-gray-200">
                                    {value.title}
                                </button>
                                {openIndex === index && (
                                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-2xl mt-1 p-2 z-10">
                                        <ul className="grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            {value.children.map((childValue, childIndex) => (
                                                <li key={childIndex}>
                                                    <Link href={childValue.path} passHref>
                                                        <button className="block px-2 py-1 rounded-md hover:bg-gray-100">
                                                            {childValue.title}
                                                        </button>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ) : (
                            <li key={index} className="m-1">
                                <Link href={value.path} passHref>
                                    <button className="block px-3 py-2 rounded-2xl hover:bg-gray-200">
                                        {value.title}
                                    </button>
                                </Link>
                            </li>
                        )
                    ))}
                </ul>
            </nav>
        </div>
    );
}