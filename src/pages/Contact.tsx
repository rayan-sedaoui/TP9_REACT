import { portfolioData } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const { contact } = portfolioData;

  return (
    <div className="container py-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-10 mb-12">
          <h1 className="text-4xl font-bold mb-4">{contact.title}</h1>
          <p className="text-lg text-muted-foreground">{contact.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Informations de contact */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Mes coordonnées</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors">
                  <div className="p-2 bg-primary/10 rounded-full text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href={`mailto:${contact.email}`} className="font-medium hover:underline">
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors">
                  <div className="p-2 bg-primary/10 rounded-full text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Localisation</p>
                    <p className="font-medium">{contact.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Réseaux professionnels</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-4">
                <Button variant="outline" size="icon" asChild>
                  <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire de contact */}
          <Card>
            <CardHeader>
              <CardTitle>Envoyez-moi un message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nom complet</label>
                  <Input placeholder="Votre nom" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="votre@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="Votre message ici..." className="min-h-[120px]" />
                </div>
                <Button className="w-full gap-2 shadow-lg">
                  <Send size={16} /> Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}