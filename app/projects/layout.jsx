import Footer from "@/components/Footer";

export const metadata = {
  title: "Suprit Raj | Projects",
  description: "A collection of all projects built by Suprit Raj — AI systems, full-stack apps, Web3 platforms and more.",
};

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}