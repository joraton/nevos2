import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  description: string;
  index: number;
}

export const ProjectCard = ({ title, category, image, description, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer">
        <div className="relative overflow-hidden aspect-video">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
            <ArrowUpRight className="text-primary" size={32} />
          </div>
        </div>
        
        <div className="p-6">
          <Badge className="mb-3">{category}</Badge>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
};
