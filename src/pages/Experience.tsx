import { portfolioData } from "@/data/portfolio";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <div className="container py-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <h1 className="text-4xl font-bold mb-8">Expériences</h1>
      <div className="space-y-6">
        {portfolioData.experience.length > 0 ? (
          portfolioData.experience.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{(exp as any).title || (exp as any).role}</CardTitle>
                      <p className="text-lg font-medium text-muted-foreground">
                        {(exp as any).company || (exp as any).institution}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} /> {(exp as any).date || (exp as any).period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{(exp as any).description}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-muted-foreground italic">En cours de formation...</p>
        )}
      </div>
    </div>
  );
}