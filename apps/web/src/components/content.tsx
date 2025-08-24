import { Cpu, Zap } from 'lucide-react';
import Image from 'next/image';

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl font-medium text-4xl lg:text-5xl">
          A workspace built for clarity and speed.
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              Quartz isn’t just a note-taking app.{' '}
              <span className="font-bold text-accent-foreground">
                It’s a complete system
              </span>{' '}
              - designed to help you capture ideas, connect knowledge, and stay
              in flow.
            </p>
            <p className="text-muted-foreground">
              From fast search to a powerful graph view, Quartz gives you the
              tools to think better, work smarter, and keep your notes truly
              yours.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="size-4" />
                  <h3 className="font-medium text-sm">Lightning Fast</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Open, search, and link notes instantly without breaking your
                  flow.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Cpu className="size-4" />
                  <h3 className="font-medium text-sm">Powerful Tools</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  From Markdown support to graph view and plugins — everything
                  you need to grow your knowledge base.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mt-6 sm:mt-0">
            <div className="relative aspect-67/34 rounded-2xl bg-linear-to-b from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                alt="Quartz app dark mode"
                className="hidden rounded-[15px] dark:block"
                height={612}
                src="/exercice-dark.png"
                width={1206}
              />
              <Image
                alt="Quartz app light mode"
                className="rounded-[15px] shadow dark:hidden"
                height={612}
                src="/exercice.png"
                width={1206}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
