import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // J'ai repris les noms exacts de ton image
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

        {/* MENU PC (Caché sur mobile) */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} className="text-sm font-medium hover:text-primary">
              {item.name}
            </Link>
          ))}
        </div>

        {/* BOUTON MENU MOBILE (Hamburger) */}
        <div className="flex md:hidden items-center">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* MENU DÉROULANT MOBILE (S'affiche quand on clique sur le bouton) */}
      {isOpen && (
        <div className="md:hidden border-t bg-background px-4 py-4 flex flex-col gap-4 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-base font-medium hover:text-primary"
              onClick={() => setIsOpen(false)} // Ferme le menu au clic
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}