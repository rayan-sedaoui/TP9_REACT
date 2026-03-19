import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Projets", path: "/projects" },
    { name: "Parcours", path: "/" },
    { name: "Formations", path: "/" },
    { name: "Certifications", path: "/" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="font-bold text-xl">MonPortfolio</Link>

        {/* MENU ORDINATEUR (Géré par la Media Query CSS) */}
        <div className="menu-ordinateur items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} className="text-sm font-medium hover:text-primary">
              {item.name}
            </Link>
          ))}
        </div>

        {/* BOUTON MOBILE (Géré par la Media Query CSS) */}
        <div className="bouton-menu-mobile items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* LISTE DÉROULANTE MOBILE */}
      {isOpen && (
        <div className="border-t px-4 py-4 flex flex-col gap-4 bg-background bouton-menu-mobile">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-base font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}