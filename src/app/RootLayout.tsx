import { Outlet, NavLink } from "react-router-dom";
import { useTheme } from "@/components/theme-provider"; // Importe le hook
import { Button } from "@/components/ui/button";

export default function RootLayout() {
  const { theme, setTheme } = useTheme(); // Utilise le hook

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 border-b backdrop-blur z-50">
        <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
          <NavLink to="/" className="font-bold text-lg">MonPortfolio</NavLink>
          <div className="flex items-center gap-6"> {/* Ajout de gap et div pour regrouper */}
            <div className="hidden md:flex items-center gap-4 text-sm font-medium">
              <NavLink to="/projects" className="hover:text-primary">Projets</NavLink>
              <NavLink to="/experience" className="hover:text-primary">Parcours</NavLink>
              <NavLink to="/education" className="hover:text-primary">Formations</NavLink>
              <NavLink to="/certifications" className="hover:text-primary">Certifications</NavLink>
              <NavLink to="/contact" className="hover:text-primary">Contact</NavLink>
            </div>

            {/* Le bouton magique */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </Button>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl p-6">
        <Outlet />
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground mt-auto">
        © {new Date().getFullYear()} • Mon Nom
      </footer>
    </div>
  );
}