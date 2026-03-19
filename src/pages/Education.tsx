import { portfolioData } from "@/data/portfolio";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function Education() {
  return (
    <div className="container py-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <h1 className="text-4xl font-bold mb-8">Formations</h1>
      <div className="space-y-6">
        {portfolioData.education.map((edu: any, index: number) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-primary">{edu.degree || edu.title}</CardTitle>
                    <p className="text-lg font-medium">
                      {edu.school || edu.institution}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground md:items-end">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} /> {edu.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} /> {edu.period || edu.date}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {edu.description || (edu.points && edu.points.join(". "))}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}