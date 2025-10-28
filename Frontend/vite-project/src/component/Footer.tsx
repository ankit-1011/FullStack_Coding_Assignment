import { footerLinks } from "../assets/assets";

export const Footer = () => {


    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24 bg-blue-100">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                <div>
                    <img className="w-34 md:w-32" src="https://www.elaia.com/wp-content/uploads/2022/09/vibe-logo.jpg" />
                    <p className="max-w-[410px] mt-6">Explore our range of high-performance hardware solutions designed for durability, speed, and precision , we aim to make your shopping experience simple and affordable</p>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.url} className="hover:underline transition">{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-4 text-center text-sm md:text-base  text-gray-900 ">
                Copyright 2025 © All Right Reserved.
            </p>
        </div>
    );
};