import Footer from "@/components/Footer";

export const metadata = {
  title: "Suprit | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
