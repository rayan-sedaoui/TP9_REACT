import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, MapPin, GraduationCap, Target } from "lucide-react"; // Retrait de Mail
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const { personal, skills } = portfolioData;

  return (
    <div className="container py-10 space-y-12 animate-in fade-in duration-1000">
      {/* ... reste du code identique à celui envoyé précédemment ... */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <Badge variant="outline" className="text-primary border-primary">DÉVELOPPEUR FULL STACK</Badge>
          <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl">{personal.name}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">{personal.bio}</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full shadow-lg">
              <a href="/projects">Voir mes projets</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href={personal.github} target="_blank" rel="noopener noreferrer"><Github className="mr-2 h-5 w-5" /> GitHub</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="mr-2 h-5 w-5" /> LinkedIn</a>
            </Button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border rounded-3xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-6 text-center">Technologies principales</h3>
          <div className="grid grid-cols-2 gap-4">
            {[...skills.frontend, ...skills.backend].slice(0, 6).map((skill, i) => (
              <div key={i} className="bg-background border rounded-xl p-4 flex items-center justify-center font-medium shadow-sm">
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-2xl bg-card">
          <div className="text-primary mb-2"><MapPin /></div>
          <h4 className="font-semibold text-sm text-muted-foreground uppercase">Localisation</h4>
          <p className="text-lg font-bold">{personal.location}</p>
        </div>
        <div className="p-6 border rounded-2xl bg-card">
          <div className="text-primary mb-2"><GraduationCap /></div>
          <h4 className="font-semibold text-sm text-muted-foreground uppercase">Formation</h4>
          <p className="text-lg font-bold">Licence SIR</p>
        </div>
        <div className="p-6 border rounded-2xl bg-card">
          <div className="text-primary mb-2"><Target /></div>
          <h4 className="font-semibold text-sm text-muted-foreground uppercase">Objectif</h4>
          <p className="text-lg font-bold">Stage / Opportunité Full-Stack</p>
        </div>
      </section>
    </div>
  );
}