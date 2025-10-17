import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Demo } from "@/components/Demo";

const DemoPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-16">
        <Demo />
      </div>
      <Footer />
    </div>
  );
};

export default DemoPage;
