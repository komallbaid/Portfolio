import { motion } from 'motion/react';
import { Briefcase, TrendingUp, Users, GraduationCap } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const experiences = {
  work: [
    {
      title: 'Software Development Intern',
      company: 'IgniteU Learning Ventures Pvt. Ltd.',
      period: "Mar 2025 – Apr 2025",
      description: 'Developed frontend systems for a real-time internal analytics dashboard used by student and mentor cohorts.',
      highlights: [
        'Built the React.js interface for tracking student progress and performance analytics',
        'Integrated Node.js APIs with MongoDB pipelines, improving report accuracy by 65%',
        'Contributed to Docker setup and GitHub Actions CI/CD for smoother deployments',
      ],
    },
    {
      title: 'Web Development Intern',
      company: 'Elevate Labs',
      period: "Aug 2025 – Sep 2025",
      description: 'Completed full-stack development program focused on practical coding tasks and project execution.',
      highlights: [
        'Developed “GitHub Explorer,” a full-stack analytics tool',
        'Implemented Node.js APIs to fetch and process GitHub REST data efficiently',
        'Enhanced user insights with dynamic data visualization and modular React components',
      ],
    },
  ],
  activities: [
    {
      title: 'Core Team Member, Cultural Committee',
      company: 'VIT Bhopal University',
      period: '2024 - 2025',
      description: 'Contributed to planning and execution of the university’s flagship cultural festival, AdVitya.',
      highlights: [
        'Coordinated event logistics and stage operations for a 3000+ attendee festival',
        'Managed team schedules and on-ground execution during events',
        'Collaborated with multiple teams to ensure smooth event flow',
      ],
    },
  ],
  education: [
    {
      title: 'B.Tech in Computer Science and Engineering',
      company: 'VIT Bhopal University',
      period: '2022 - 2026',
      description: 'Focused on core computer science fundamentals and practical engineering skills.',
      highlights: [
        'CGPA: 8.76/10',
        'Relevant Coursework: DSA, DBMS, OS, CN',
        'Projects in full-stack development and AI/ML',
      ],
    },
  ],
};

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mb-12 shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
        </motion.div>

        <Tabs defaultValue="work" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-white/5 border border-white/10">
            <TabsTrigger value="work" className="data-[state=active]:bg-primary data-[state=active]:text-[#0f0f10]">
              <Briefcase className="w-4 h-4 mr-2" />
              Work
            </TabsTrigger>
            <TabsTrigger value="activities" className="data-[state=active]:bg-accent data-[state=active]:text-[#0f0f10]">
              <Users className="w-4 h-4 mr-2" />
              Activities
            </TabsTrigger>
            <TabsTrigger value="education" className="data-[state=active]:bg-secondary data-[state=active]:text-white">
              <GraduationCap className="w-4 h-4 mr-2" />
              Education
            </TabsTrigger>
          </TabsList>

          {Object.entries(experiences).map(([key, items]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary shadow-[0_0_10px_rgba(0,212,255,0.5)]" />

                <div className="space-y-8">
                  {items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="relative pl-20"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_20px_rgba(0,212,255,0.8)] border-4 border-[#0f0f10]" />

                      {/* Content card */}
                      <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] group">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl mb-1 text-white group-hover:text-primary transition-colors">
                              {item.title}
                            </h3>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <TrendingUp size={16} className="text-accent" />
                              <span>{item.company}</span>
                            </div>
                          </div>
                          <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs text-primary">
                            {item.period}
                          </span>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4">{item.description}</p>

                        <ul className="space-y-2">
                          {item.highlights.map((highlight, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shadow-[0_0_5px_rgba(0,255,136,0.8)]" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}