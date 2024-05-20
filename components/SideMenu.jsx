"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useMenuStore } from "@/store/useMenuStore";
import { sidebarMenuLinks } from "@/constants";

const SideMenu = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(sidebarMenuLinks[0]);
  const { isOpen, closeMobileMenu } = useMenuStore();

  const handleLinkClick = (link) => {
    closeMobileMenu();
    setActiveLink(link);
  };

  const handleScroll = () => {
    const sections = sidebarMenuLinks.map((link) => document.getElementById(link.sectionId));

    const scrollPosition = window.scrollY;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section) {
        if (section.offsetTop <= scrollPosition + 100) {
          setActiveLink(sidebarMenuLinks[i]);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const cleanedPathname = pathname.replace(/^#/, "");

    const matchedLink = sidebarMenuLinks.find(
      (link) => cleanedPathname === link.route || (link.route === "/" && cleanedPathname === "")
    );
    if (matchedLink) {
      setActiveLink(matchedLink);
    }
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <section className={`side-menu border-r ${isOpen ? "max-lg:block" : "max-md:hidden"}`}>
        <div className="flex w-full flex-1 flex-col gap-30 justify-between items-center">
          <div className="flex justify-center items-center flex-col gap-2">
          </div>
          <div>
            {sidebarMenuLinks.map((link) => {
              const isActive = activeLink === link;

              return (
                <a
                  href={`${link.route}`}
                  key={link.label}
                  className={`relative flex justify-center items-center rounded-lg p-3 ${
                    isActive ? "bg-dark-red text-white" : ""
                  }`}
                  onClick={() => handleLinkClick(link)}
                >
                  <p>{link.label}</p>
                </a>
              );
            })}
          </div>
          <div className="flex items-center flex-col justify-center text-center">
            <p className="max-lg:hidden text-xs">Copyright © 2023 Antonio Rogers. All rights reserved.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SideMenu;
