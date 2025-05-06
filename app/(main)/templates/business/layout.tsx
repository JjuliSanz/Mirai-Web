export const metadata = {
  title: "Modern Business Website - Showcase Your Services and Products",
  description:
    "A professional and user-friendly website to showcase your business. Highlight your services, such as hairdressing, dental care, or any other service your business offers, along with a catalog of products available for purchase. Include detailed descriptions, pricing, and options for customers to contact you or make reservations easily.",
};

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
