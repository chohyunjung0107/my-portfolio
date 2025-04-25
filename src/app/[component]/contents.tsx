export default function Contents({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="p-[1%]  h-[92vh]">{children}</div>;
}
