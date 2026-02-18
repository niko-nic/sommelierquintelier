import { motion } from 'framer-motion';
import { Wine } from 'lucide-react';

export function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo with pulse animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="relative">
            {/* Shimmer effect background */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-shimmer" />
            </div>
            
            <Wine className="w-16 h-16 text-primary relative z-10" />
          </div>
        </motion.div>

        {/* Loading text with subtle animation */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-light">
            Loading
          </span>
          <motion.span
            className="flex gap-1"
            initial="start"
            animate="end"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-1 h-1 rounded-full bg-primary"
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}
