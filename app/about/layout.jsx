import Footer from "@/components/Footer";

export const metadata = {
  title: "Suprit Raj | About",
  description: "Learn about Suprit Raj — Full Stack & GenAI Developer at NIT Patna.",
};

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}