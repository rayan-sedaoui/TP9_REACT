import { Outlet, NavLink } from "react-router-dom";
import { useTheme } from "@/components/theme-provider"; // Importe le hook
import { Button } from "@/components/ui/button";

export default function RootLayout() {
  const { theme, setTheme } = useTheme(); // Utilise le hook

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 border-b backdrop-blur z-50">
        <nav className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between p-4 gap-4">
          <div className="flex w-full justify-between items-center md:w-auto">
            <NavLink to="/" className="font-bold text-lg">MonPortfolio</NavLink>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm font-medium w-full md:w-auto">
            <NavLink to="/projects" className="hover:text-primary">Projets</NavLink>
            <NavLink to="/experience" className="hover:text-primary">Parcours</NavLink>
            <NavLink to="/education" className="hover:text-primary">Formations</NavLink>
            <NavLink to="/certifications" className="hover:text-primary">Certifications</NavLink>
            <NavLink to="/contact" className="hover:text-primary">Contact</NavLink>

            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex ml-2"
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

      <footer className="border-t py-6 text-center text-sm text-muted-foreground mt-auto hidden">
      </footer>
    </div>
  );
}