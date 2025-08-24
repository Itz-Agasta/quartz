import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { Button } from '@/components/ui/button';
import { TextEffect } from '@/components/ui/text-effect';
import { HeroHeader } from './header';

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden contain-strict lg:block"
        >
          <div className="-translate-y-87.5 -rotate-45 absolute top-0 left-0 h-320 w-140 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="-rotate-45 absolute top-0 left-0 h-320 w-60 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="-translate-y-87.5 -rotate-45 absolute top-0 left-0 h-320 w-60 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24">
            <div className="-z-10 absolute inset-0 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]" />
            <div className="mx-auto max-w-5xl px-6">
              <div className="sm:mx-auto lg:mt-0 lg:mr-auto">
                <TextEffect
                  as="h1"
                  className="mt-8 max-w-2xl text-balance font-medium text-5xl md:text-6xl lg:mt-16"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                >
                  Organize your ideas with crystal clarity
                </TextEffect>
                <TextEffect
                  as="p"
                  className="mt-8 max-w-2xl text-pretty text-lg"
                  delay={0.5}
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                >
                  A powerful note-taking system designed for thinkers and
                  creators. Capture thoughts effortlessly, connect them into
                  knowledge, and keep everything under your control.
                </TextEffect>

                <AnimatedGroup
                  className="mt-12 flex items-center gap-2"
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                >
                  <div
                    className="rounded-[calc(var(--radius-xl)+0.125rem)] border bg-foreground/10 p-0.5"
                    key={1}
                  >
                    <Button
                      asChild
                      className="rounded-xl px-5 text-base"
                      size="lg"
                    >
                      <Link href="#link">
                        <span className="text-nowrap">Start Writing</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    asChild
                    className="h-10.5 rounded-xl px-5 text-base"
                    key={2}
                    size="lg"
                    variant="ghost"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">See Quartz in action</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="-mr-56 relative mt-8 overflow-hidden px-2 sm:mt-12 sm:mr-0 md:mt-20">
                <div
                  aria-hidden
                  className="absolute inset-0 z-10 bg-linear-to-b from-35% from-transparent to-background"
                />
                <div className="relative inset-shadow-2xs mx-auto max-w-5xl overflow-hidden rounded-2xl border bg-background p-4 shadow-lg shadow-zinc-950/15 ring-1 ring-background dark:inset-shadow-white/20">
                  <Image
                    alt="app screen"
                    className="relative hidden aspect-15/8 rounded-2xl bg-background dark:block"
                    height="1440"
                    src="/mail2.png"
                    width="2700"
                  />
                  <Image
                    alt="app screen"
                    className="relative z-2 aspect-15/8 rounded-2xl border border-border/25 dark:hidden"
                    height="1440"
                    src="/mail2-light.png"
                    width="2700"
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
      </main>
    </>
  );
}
