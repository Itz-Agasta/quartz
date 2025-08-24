import {
  FileText,
  GitBranch,
  Globe,
  HardDrive,
  type LucideIcon,
  Search,
  Settings,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the feature item type
type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  position?: 'left' | 'right';
  cornerStyle?: string;
};

// Create feature data arrays for left and right columns
const leftFeatures: FeatureItem[] = [
  {
    icon: HardDrive,
    title: 'Local First',
    description:
      'Your notes are stored safely on your device, giving you full ownership and privacy.',
    position: 'left',
    cornerStyle: 'sm:translate-x-4 sm:rounded-br-[2px]',
  },
  {
    icon: GitBranch,
    title: 'Knowledge Graph',
    description:
      'Visualize how your ideas connect with a powerful graph view of linked notes.',
    position: 'left',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-br-[2px]',
  },
  {
    icon: Search,
    title: 'Powerful Search',
    description:
      'Find anything instantly — from quick notes to deep connections across your vault.',
    position: 'left',
    cornerStyle: 'sm:translate-x-4 sm:rounded-tr-[2px]',
  },
];

const rightFeatures: FeatureItem[] = [
  {
    icon: FileText,
    title: 'Markdown at Core',
    description:
      'Write with plain Markdown, ensuring your notes stay future-proof and portable.',
    position: 'right',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-bl-[2px]',
  },
  {
    icon: Globe,
    title: 'Cross-Platform',
    description:
      'Seamlessly access your notes across desktop and mobile without compromise.',
    position: 'right',
    cornerStyle: 'sm:translate-x-4 sm:rounded-bl-[2px]',
  },
  {
    icon: Settings,
    title: 'Plugins & Customization',
    description:
      'Extend functionality with themes, plugins, and workflows that adapt to you.',
    position: 'right',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-tl-[2px]',
  },
];

// Feature card component
const FeatureCard = ({ feature }: { feature: FeatureItem }) => {
  const Icon = feature.icon;

  return (
    <div>
      <div
        className={cn(
          'relative rounded-2xl px-4 pt-4 pb-4 text-sm',
          'bg-secondary/50 ring ring-border',
          feature.cornerStyle
        )}
      >
        <div className="mb-3 text-[2rem] text-primary">
          <Icon />
        </div>
        <h2 className="mb-2.5 text-2xl text-foreground">{feature.title}</h2>
        <p className="text-pretty text-base text-muted-foreground">
          {feature.description}
        </p>
        {/* Decorative elements */}
        <span className="-bottom-px -translate-x-1/2 absolute left-1/2 h-px w-1/2 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-60" />
        <span className="absolute inset-0 bg-[radial-gradient(30%_5%_at_50%_100%,hsl(var(--primary)/0.15)_0%,transparent_100%)] opacity-60" />
      </div>
    </div>
  );
};

export default function Feature3() {
  return (
    <section className="pt-20 pb-8" id="features">
      <div className="mx-6 max-w-[1120px] pt-2 pb-16 max-[300px]:mx-4 min-[1150px]:mx-auto">
        <div className="flex flex-col-reverse gap-6 md:grid md:grid-cols-3">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {leftFeatures.map((feature, index) => (
              <FeatureCard feature={feature} key={`left-feature-${index}`} />
            ))}
          </div>

          {/* Center column */}
          <div className="order-[1] mb-6 self-center sm:order-[0] md:mb-0">
            <div className="relative mx-auto mb-4.5 w-fit rounded-full rounded-bl-[2px] bg-secondary px-4 py-2 text-foreground text-sm ring ring-border">
              <span className="relative z-1 flex items-center gap-2">
                Features
              </span>
              <span className="-bottom-px -translate-x-1/2 absolute left-1/2 h-px w-2/5 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />
              <span className="absolute inset-0 bg-[radial-gradient(30%_40%_at_50%_100%,hsl(var(--primary)/0.25)_0%,transparent_100%)]" />
            </div>
            <h2 className="mb-2 text-center text-2xl text-foreground sm:mb-2.5 md:text-[2rem]">
              Why Choose Quartz
            </h2>
            <p className="mx-auto max-w-[18rem] text-pretty text-center text-muted-foreground">
              A modern note-taking system designed to help you capture,
              organize, and grow your ideas with clarity.
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {rightFeatures.map((feature, index) => (
              <FeatureCard feature={feature} key={`right-feature-${index}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
