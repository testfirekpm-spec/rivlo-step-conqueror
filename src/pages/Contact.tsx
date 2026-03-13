import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Contact
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground font-grotesk tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Have a question, partnership idea, or just want to say hi? We'd love to hear from you.
          </p>

          <div className="mt-12 inline-flex flex-col items-center gap-4 rounded-2xl border border-border bg-card px-10 py-10">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">Email us at</p>
            <a
              href="mailto:dev@3bytes.org"
              className="text-xl font-semibold text-foreground hover:text-primary transition-colors font-grotesk"
            >
              dev@3bytes.org
            </a>
            <p className="text-xs text-muted-foreground mt-2 max-w-xs">
              We typically respond within 24–48 hours.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
