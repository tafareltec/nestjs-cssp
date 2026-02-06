import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 text-transparent bg-clip-text">
          O Saas mais simples do mundo
        </h2>
        <p className="text-xg text-gray-600 mb-8 max-w-2xl mx-auto">
          Crie e gerencie suas tarefas de forma fácil e rápida.
        </p>
        <Link href="/pricing">
          <Button>Começar Agora</Button>
        </Link>
      </section>
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Simplex</CardTitle>
              <CardDescription>
                Nossa plataforma é fácil de usar, com uma interface intuitiva que permite
                que você crie e gerencie suas tarefas sem complicações.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Saiba Mais</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
