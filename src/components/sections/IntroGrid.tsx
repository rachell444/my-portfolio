'use client';

import { MotionDiv } from '@/components/motion';
import Image from 'next/image';
import { Code2, Clock, Brain, Laptop, Rocket, Library } from 'lucide-react';

type GridItemType = {
  id: number;
  type: 'image' | 'text' | 'stack';
  content: {
    src?: string;
    alt?: string;
    icon?: React.ReactNode;
    text?: string;
    title?: string;
    items?: string[];
  };
};

const gridItems: GridItemType[] = [
  {
    id: 1,
    type: 'image',
    content: {
      src: '/images/laptop-demo.png',
      alt: 'Project Demo on Laptop',
    },
  },
  {
    id: 2,
    type: 'text',
    content: {
      icon: <Code2 className="w-6 h-6 text-primary" />,
      text: "I prioritize client collaboration to ensure we're always on the same page.",
    },
  },
  {
    id: 3,
    type: 'text',
    content: {
      icon: <Clock className="w-6 h-6 text-primary" />,
      text: 'I am very flexible with timezone communications',
    },
  },
  {
    id: 4,
    type: 'text',
    content: {
      icon: <Brain className="w-6 h-6 text-primary" />,
      text: 'Tech enthusiast with a passion for development',
    },
  },
  {
    id: 5,
    type: 'stack',
    content: {
      icon: <Laptop className="w-6 h-6 text-primary" />,
      title: 'My tech stack',
      items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    },
  },
  {
    id: 6,
    type: 'text',
    content: {
      icon: <Library className="w-6 h-6 text-primary" />,
      text: 'Currently building a JS Animation library',
    },
  },
];

export function IntroGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridItems.map((item, index) => (
            <MotionDiv
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              {item.type === 'image' && item.content.src && (
                <div className="relative h-48 w-full">
                  <Image
                    src={item.content.src}
                    alt={item.content.alt || ''}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              )}
              {item.type === 'text' && item.content.text && (
                <div className="flex items-start gap-4">
                  {item.content.icon}
                  <p className="text-gray-300">{item.content.text}</p>
                </div>
              )}
              {item.type === 'stack' && item.content.title && item.content.items && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    {item.content.icon}
                    <h3 className="font-medium">{item.content.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.content.items.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
