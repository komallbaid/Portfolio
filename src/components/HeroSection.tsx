import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const roles = ['Software Engineer','Full-Stack Developer'];

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
        
        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.4) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.4) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Name and Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <Sparkles className="text-primary w-5 h-5" />
              <span className="text-muted-foreground tracking-wider uppercase text-sm"></span>
            </motion.div>

            {/* Name */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl leading-tight">
                  <span className="block text-foreground">Komal</span>
                  <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-[gradient-shift_5s_ease_infinite]" style={{ backgroundSize: '200% 200%' }}>
                    Baid
                  </span>
                </h1>
              </motion.div>

              {/* Animated Role */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="h-12 flex items-center"
              >
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent" />
                  <motion.span
                    key={currentRole}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl md:text-2xl text-primary"
                  >
                    {roles[currentRole]}
                  </motion.span>
                </div>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-muted-foreground text-lg max-w-xl leading-relaxed"
            >
              Crafting fast, intuitive, and resilient software that solves real problems.
              Focused on full-stack development, system design fundamentals, and turning ideas into production-ready products.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all duration-300"
              >
                View Projects
              </Button>
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 px-8 py-6 transition-all duration-300"
              >
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Photo with Graphical Border */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Animated rotating border rings */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute inset-0 rounded-full border-2 border-transparent"
                  style={{
                    borderImage: 'linear-gradient(45deg, #00d4ff, transparent, #a78bfa) 1',
                    borderImageSlice: 1,
                  }}
                />
                <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(0,212,255,0.8)]" />
                <div className="absolute bottom-0 left-0 w-3 h-3 rounded-full bg-accent shadow-[0_0_20px_rgba(244,114,182,0.8)]" />
              </motion.div>

              <motion.div
                className="absolute inset-4"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute inset-0 rounded-full border-2 border-transparent"
                  style={{
                    borderImage: 'linear-gradient(225deg, #a78bfa, transparent, #f472b6) 1',
                    borderImageSlice: 1,
                  }}
                />
                <div className="absolute top-1/4 right-0 w-2 h-2 rounded-full bg-secondary shadow-[0_0_15px_rgba(167,139,250,0.8)]" />
              </motion.div>

              {/* Hexagonal frame */}
              <div className="absolute inset-8">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#00d4ff', stopOpacity: 0.5 }} />
                      <stop offset="50%" style={{ stopColor: '#a78bfa', stopOpacity: 0.3 }} />
                      <stop offset="100%" style={{ stopColor: '#f472b6', stopOpacity: 0.5 }} />
                    </linearGradient>
                  </defs>
                  <polygon
                    points="50,5 90,25 90,75 50,95 10,75 10,25"
                    fill="none"
                    stroke="url(#hexGradient)"
                    strokeWidth="0.5"
                  />
                </svg>
              </div>

              {/* Profile Image */}
              <motion.div
                className="absolute inset-12 rounded-full overflow-hidden border-4 border-primary/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://i.ibb.co/7JgykfDz/profile.jpg"
                  alt="Komal Baid"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
              </motion.div>

              {/* Glow effect */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl opacity-50 -z-10 animate-[glow_4s_ease-in-out_infinite]" />

              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 w-16 h-16">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
                <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-primary to-transparent" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16">
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-accent to-transparent" />
                <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-accent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown size={24} className="text-primary" />
        </motion.button>
      </motion.div>
    </section>
  );
}