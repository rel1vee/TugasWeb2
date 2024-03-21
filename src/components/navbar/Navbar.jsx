"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import styles from "./navbar.module.css";

const routes = [
  { path: "/", label: "Beranda" },
  { path: "/biodata", label: "Biodata" },
  { path: "/prestasi", label: "Prestasi" },
  { path: "/galeri", label: "Galeri" },
  { path: "/portofolio", label: "Portofolio" },
  { path: "/kontak", label: "Kontak" },
];

const Navbar = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <nav className="bg-emerald-950">
      <ul className="flex justify-center space-x-8 py-4">
        {routes.map((route, index) => (
          <li key={index}>
            <Link href={route.path} className={`${styles.link} ${segment === route.path.slice(1) || (route.path === "/" && segment === null) ? styles.active : ""}`}>
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
