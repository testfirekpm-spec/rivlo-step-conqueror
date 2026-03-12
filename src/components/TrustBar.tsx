import { motion } from "framer-motion";
import { Star, Users, Shield, Award } from "lucide-react";

const trustItems = [
  { icon: Star, text: "4.9★ App Store", highlight: true },
  { icon: Users, text: "50K+ Active Users", highlight: false },
  { icon: Shield, text: "Privacy First", highlight: false },
  { icon: Award, text: "App of the Day", highlight: true },
];

const TrustBar = () => {
  return (
    <section className="py-8 border-b border-border bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-2.5"
            >
              <item.icon
                className={`w-4 h-4 ${
                  item.highlight ? "text-primary" : "text-muted-foreground"
                }`}
              />
              <span className="text-sm font-medium text-muted-foreground">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
