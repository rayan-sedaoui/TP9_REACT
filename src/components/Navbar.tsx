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
    <>
      {/* LA BARRE DE NAVIGATION PRINCIPALE EN HAUT */}
      <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center px-4">

          {/* BOUTON "MENU" GAUCHE SUR TÉLÉPHONE */}
          <div className="flex md:hidden items-center mr-4">
            <button onClick={() => setIsOpen(true)} className="flex items-center gap-2 p-2 border rounded-md">
              <Menu className="h-5 w-5" />
              <span className="font-medium">Menu</span>
            </button>
          </div>

          {/* LE LOGO */}
          <Link to="/" className="font-bold text-xl mr-auto md:mr-0">MonPortfolio</Link>

          {/* MENU ORDINATEUR */}
          <div className="hidden md:flex items-center gap-6 ml-auto">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className="text-sm font-medium hover:text-primary">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* =========================================================
          LE MENU LATERAL (LA BARRE À GAUCHE)
          ========================================================= */}

      {/* 1. Le fond sombre */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* 2. La barre avec les liens */}
      <div className={`fixed top-0 left-0 h-full w-[250px] bg-background border-r z-50 transform transition-transform duration-300 md:hidden flex flex-col ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>

        {/* En-tête de la barre */}
        <div className="h-16 flex items-center justify-between px-4 border-b">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setIsOpen(false)} className="p-2 border rounded-md hover:bg-muted">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Liste des liens */}
        <div className="flex flex-col gap-4 p-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-lg font-medium hover:text-primary py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>

      </div>
    </>
  );
}