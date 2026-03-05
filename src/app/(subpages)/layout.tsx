import NavBar from "../NavBar";

export default function SubpagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar isStatic />
      {children}
    </>
  );
}
