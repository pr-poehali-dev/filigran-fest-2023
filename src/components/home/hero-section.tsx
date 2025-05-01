import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-tr from-filigree-yellow/20 via-filigree-orange/10 to-filigree-lime/20 z-0"></div>
      
      <div className="container relative z-10 py-20 md:py-32 flex flex-col items-center">
        <div className="w-full max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            <span className="bg-gradient-to-r from-filigree-yellow via-filigree-orange to-filigree-lime text-transparent bg-clip-text">
              Филигрань fest
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Ремикс традиций и инноваций, где старинное ремесло встречается с будущим
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-filigree-yellow to-filigree-orange hover:opacity-90 text-black font-medium">
              <Link to="/program">Программа фестиваля</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Узнать больше</Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 relative w-full max-w-4xl aspect-[16/9] rounded-lg overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1530469641274-cc283df2cbfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Филигрань фестиваль" 
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white">
            <p className="text-sm md:text-base">Вход на фестиваль бесплатный</p>
          </div>
        </div>
      </div>
    </section>
  );
}
