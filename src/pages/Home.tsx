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

{/* Section Certifications - Version Mobile Friendly */}
<section className="py-12 px-4">
  <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Mes Certifications</h2>

  {/* Le secret est ici : grid-cols-1 pour mobile, grid-cols-2 pour tablette/PC */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {portfolioData.certifications.map((cert) => (
      <div key={cert.id} className="p-4 border rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
        <h3 className="font-bold text-lg">{cert.name}</h3>
        <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.date}</p>
        <a
          href={cert.verifyUrl}
          target="_blank"
          className="text-primary text-sm mt-2 inline-block hover:underline"
        >
          Vérifier le certificat →
        </a>
      </div>
    ))}
  </div>
</section>

    </div>
  );
}