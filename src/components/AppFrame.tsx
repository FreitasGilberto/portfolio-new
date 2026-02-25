export function AppFrame({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex justify-center p-6">
      <div className="w-full max-w-155">
        <div className="rounded-[28px] border border-black/10 bg-white shadow-sm overflow-hidden">
          {children}
        </div>
      </div>
    </main>
  );
}
