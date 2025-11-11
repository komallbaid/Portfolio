import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'Real-Time Event Prediction Market',
    description: 'A real-time prediction platform with dynamic pricing, user sentiment analysis, and LLM-powered market creation.',
    tech: ['React', 'TypeScript', 'Node.js', 'WebSocket', 'PostgreSQL', 'LLM APIs'],
    github: 'https://github.com/komallbaid',
    demo: 'https://example.com',
  },
  {
    title: 'Focus Master – Productivity App',
    description: 'A productivity tool combining Pomodoro, task management, and analytics to boost focus and workflow efficiency.',
    tech: ['React', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/komallbaid',
    demo: 'https://example.com',
  },
  {
    title: 'Vision in Dark – Low-Light CV System',
    description: 'Computer vision pipeline for detecting vehicles and pedestrians in low-light environments using enhanced models.',
    tech: ['Python', 'OpenCV', 'YOLOv8', 'TensorFlow'],
    github: 'https://github.com/komallbaid',
    demo: null,
  },
  {
    title: 'CNN-based Fraud Detection',
    description: 'Deep learning model for detecting fraudulent transactions using convolutional neural networks.',
    tech: ['Python', 'Keras', 'scikit-learn', 'NumPy'],
    github: 'https://github.com',
    demo: null,
  },
  {
    title: 'Options Pricing Engine',
    description: 'Real-time options pricing calculator using Black-Scholes and Monte Carlo simulation methods.',
    tech: ['C++', 'Python', 'QuantLib', 'Matplotlib'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Portfolio Optimizer',
    description: 'Modern portfolio theory implementation with risk analysis and diversification recommendations.',
    tech: ['Python', 'SciPy', 'Plotly', 'FastAPI'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mb-12 shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

              {/* Card */}
              <div className="relative h-full p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 flex flex-col">
                {/* Content */}
                <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-white/5 border border-primary/20 text-xs text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all duration-300"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  {project.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-accent/50 hover:bg-accent/10 hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all duration-300"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}