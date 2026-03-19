import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // C'est ça qui importe les 3 traits (Menu) et la croix (X)

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

        {/* --- MENU PC (Visible sur grand écran) --- */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} className="text-sm font-medium hover:text-primary">
              {item.name}
            </Link>
          ))}
        </div>

        {/* --- LES 3 TRAITS POUR LE TÉLÉPHONE --- */}
        <div className="flex md:hidden items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 border rounded-md">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* --- MENU DÉROULANT MOBILE (Quand on clique sur les 3 traits) --- */}
      {isOpen && (
        <div className="md:hidden border-t px-4 py-4 flex flex-col gap-4 bg-background">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-base font-medium hover:text-primary"
              onClick={() => setIsOpen(false)} /* Ferme le menu quand on clique sur un lien */
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}