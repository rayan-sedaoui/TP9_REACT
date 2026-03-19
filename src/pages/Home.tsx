import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Linkedin, GraduationCap, Award, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const { personal, education, projects, certifications } = portfolioData;

  return (
    <div className="container py-10 space-y-20 animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-6 pt-10 px-4">
        <Badge variant="outline" className="px-4 py-1 text-primary border-primary/20 bg-primary/5">
          {personal.role}
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">{personal.name}</h1>
        <p className="max-w-[700px] text-muted-foreground text-lg">
          {personal.bio}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/projects">Voir mes projets</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={personal.github} target="_blank" rel="noreferrer">
              <Github className="mr-2 h-5 w-5" /> GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={personal.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
            </a>
          </Button>
        </div>
      </section>

      {/* Grid pour Formation et Certifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4">
        {/* Education */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="text-primary h-6 w-6" />
            <h2 className="text-2xl font-bold">Formation</h2>
          </div>
          <div className="space-y-4">
            {education.map((edu) => (
              <Card key={edu.id}>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <p className="text-sm text-primary font-medium">{edu.school}</p>
                </CardHeader>
                <CardContent className="p-4 pt-0 text-sm text-muted-foreground">
                  {edu.period} • {edu.location}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications - Maintenant bien visibles sur mobile */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Award className="text-primary h-6 w-6" />
            <h2 className="text-2xl font-bold">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {certifications.map((cert) => (
              <Card key={cert.id} className="border-l-4 border-l-primary">
                <CardHeader className="p-4">
                  <CardTitle className="text-base">{cert.name}</CardTitle>
                  <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.date}</p>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <a href={cert.verifyUrl} target="_blank" rel="noreferrer" className="text-xs text-primary flex items-center hover:underline">
                    Vérifier le certificat <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Aperçu Projets */}
      <section className="space-y-8 px-4 pb-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Briefcase className="text-primary h-6 w-6" />
            <h2 className="text-2xl font-bold">Projets Récents</h2>
          </div>
          <Button variant="ghost" asChild>
            <Link to="/projects">Tout voir →</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 2).map((project) => (
            <Card key={project.id} className="group hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-[10px]">{tech}</Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                {project.codeUrl && (
                  <a href={project.codeUrl} target="_blank" rel="noreferrer" className="text-primary text-sm flex items-center hover:underline font-medium">
                    <Github className="mr-2 h-4 w-4" /> Voir le code
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}