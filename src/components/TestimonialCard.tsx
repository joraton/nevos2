import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  company: string;
  role: string;
  content: string;
  avatar: string;
  index: number;
}

export const TestimonialCard = ({ name, company, role, content, avatar, index }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className="glass-card p-8 h-full">
        <Quote className="text-primary mb-4" size={32} />
        
        <p className="text-foreground mb-6 leading-relaxed">
          "{content}"
        </p>
        
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
            <span className="text-primary font-heading font-bold text-lg">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-foreground">
              {name}
            </h4>
            <p className="text-sm text-muted-foreground">
              {role} • {company}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
