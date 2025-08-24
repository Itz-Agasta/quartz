import Link from 'next/link';
import { Button } from '@/components/ui/button';
export default function CallToAction() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance font-semibold text-4xl lg:text-5xl">
            Take notes. Think deeper. Work smarter.
          </h2>
          <p className="mt-4">
            Start building your second brain today with Quartz — fast, private,
            and built for clarity.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/">
                <span>Try Quartz</span>
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/">
                <span>Explore Features</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
