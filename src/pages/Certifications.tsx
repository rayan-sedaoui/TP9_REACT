import { portfolioData } from "@/data/portfolio";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, CheckCircle2 } from "lucide-react"; // Retrait de ExternalLink

export default function Certifications() {
  return (
    <div className="container py-20">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800 rounded-3xl p-10 mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Certifications</h1>
        <p className="text-muted-foreground">Validation de mes compétences techniques et académiques.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {portfolioData.certifications.map((cert: any, i: number) => (
          <Card key={i} className="hover:border-primary transition-all">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-4">
                <Award size={32} />
              </div>
              <CardTitle>{cert.name || cert.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{cert.issuer || cert.institution} • {cert.date}</p>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-green-600 mb-6 text-sm font-medium">
                <CheckCircle2 size={16} /> Certificat vérifié
              </div>
              <Button asChild variant="outline" className="w-full">
                <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">🔍 Vérifier en ligne</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}