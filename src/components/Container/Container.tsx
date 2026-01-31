export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="bg-[var(--background)] md:rounded-[60px]  w-full md:max-w-[95%] xl:max-w-[1920px] mx-auto">{children}</div>;
}
