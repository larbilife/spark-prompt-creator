import { PromptGenerator } from "@/components/PromptGenerator";
import { AboutMe } from "@/components/AboutMe";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-purple to-brand-indigo">
      <div className="container mx-auto py-12 px-4">
        <header className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            AI Prompt Generator
          </h1>
          <p className="text-xl text-white/80">
            Create powerful, optimized prompts for any AI model
          </p>
        </header>

        <main className="space-y-16">
          <section>
            <PromptGenerator />
          </section>

          <section>
            <AboutMe />
          </section>
        </main>

        <footer className="mt-16 text-center text-white/60">
          <p>© 2024 Larbi Aboudi. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;