import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/useIsMobile";
import { getScrollAnimation } from "@/utils/animations";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  index: number;
}

export const ServiceCard = ({ icon: Icon, title, description, features, index }: ServiceCardProps) => {
  const isMobile = useIsMobile(768);
  return (
    <motion.div
      {...getScrollAnimation(isMobile, { delay: index * 0.1 })}
    >
      <Card className="glass-card glass-card-hover p-8 h-full">
        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
          <Icon className="text-primary" size={28} />
        </div>
        
        <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6">
          {description}
        </p>
        
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
              <span className="text-primary mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
};
