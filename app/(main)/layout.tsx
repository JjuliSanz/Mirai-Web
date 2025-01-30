import MobileMenu from "@/components/ui/MobileMenu";
import Navigation from "@/components/ui/Navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Navigation/>
      <MobileMenu/>
    </>
  );
}
