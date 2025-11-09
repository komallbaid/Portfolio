import { motion } from 'motion/react';
import { Award, Languages } from 'lucide-react';

const technicalSkills = {
  languages: [
    'C++', 'C', 'JavaScript', 'MySQL', 'PostgreSQL'
  ],
  frameworkTools: [
    'React','Node.js','Express.js','TailwindCSS', 'MongoDB','Git', 'VS Code'
  ],
  coursework: [
    'Data Structures and Algorithms', 'OOP', 'Operating Systems', 'Database Management', 'SQL',
    'Computer Networks'
  ],
  blockchainWeb3: [
    'Solidity', 'Hardhat', 'ether.js', 'Slither', 'Foundry',
    'Smart Contracts', 'DeFi', 'Web3'
  ]
};

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mb-12 shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Bio & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl text-primary">Career Interests</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate software engineer interested in full-stack product development, intelligent systems, and human-centered engineering.
                My interests span scalable web architectures, machine learning applications, and data-driven systems that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With experience building scalable full-stack applications, real-time systems, and AI-driven solutions, I bring a strong blend of engineering depth and product-focused problem solving to every project.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl text-accent flex items-center gap-2">
                <Award className="text-accent" />
                Achievements
              </h3>
              <div className="space-y-3">
                {[
                  'Published research in quantitative finance journals',
                  'Developed profitable algorithmic trading strategies',
                  'AWS & Azure cloud certifications',
                  'Top performer in competitive programming contests',
                ].map((achievement, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
                    <p className="text-sm text-muted-foreground">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl text-secondary">Technical Skills</h3>
            
            <div className="grid grid-cols-1 gap-4">
              {/* Languages & Frameworks */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
              >
                <h4 className="mb-3 text-sm text-primary">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.languages.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-md bg-white/5 border border-primary/20 text-xs text-foreground hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Tools & Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
              >
                <h4 className="mb-3 text-sm text-primary">Frameworks and Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.frameworkTools.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-md bg-white/5 border border-primary/20 text-xs text-foreground hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Data Structures & Algorithms */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
              >
                <h4 className="mb-3 text-sm text-primary">Coursework</h4>
                {/* <p className="text-xs text-muted-foreground mb-2">Solved 700+ questions covering:</p> */}
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.coursework.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-md bg-white/5 border border-primary/20 text-xs text-foreground hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Blockchain & Web3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
              >
                <h4 className="mb-3 text-sm text-primary">Blockchain & Web3</h4>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.blockchainWeb3.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-md bg-white/5 border border-primary/20 text-xs text-foreground hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}