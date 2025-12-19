import type { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main className="max-w-7xl mx-auto flex justify-center p-4 md:p-6">
      {children}
    </main>
  );
}
