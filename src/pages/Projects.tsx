import { portfolioData } from "@/data/portfolio";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Code2 } from "lucide-react"; // Retrait de ExternalLink
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  return (
    <div className="container py-20">
      {/* ... reste du code identique ... */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 rounded-3xl p-10 mb-12">
        <h1 className="text-4xl font-bold mb-4">Mes Projets</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Découvrez mes réalisations techniques.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.projects.map((project: any, index: number) => (
          <Card key={index} className="overflow-hidden hover:shadow-xl transition-all border-2">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-primary/10 rounded-lg text-primary mb-2">
                  <Code2 size={24} />
                </div>
                <span className="text-sm font-mono bg-muted px-2 py-1 rounded">{project.year}</span>
              </div>
              <CardTitle className="text-2xl">{project.title}</CardTitle>
              <CardDescription className="text-base mt-2">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, i: number) => (
                  <Badge key={i} variant="secondary" className="px-3 py-1">{tech}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="bg-muted/30 gap-4 py-4">
              <Button asChild className="flex-1">
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer"><Github className="mr-2 h-4 w-4" /> Voir le code</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}