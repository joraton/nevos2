import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  step: number;
  index: number;
}

export const ProcessStep = ({ icon: Icon, title, description, step, index }: ProcessStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="relative"
    >
      <div className="flex items-start space-x-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
            <Icon className="text-primary" size={28} />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-sm">{step}</span>
          </div>
        </div>
        
        <div className="flex-1 pt-2">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
      
      {/* Connector Line */}
      {index < 3 && (
        <div className="hidden lg:block absolute top-8 left-8 w-full h-0.5 bg-gradient-to-r from-primary to-transparent opacity-30" />
      )}
    </motion.div>
  );
};
