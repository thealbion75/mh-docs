export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Welcome to MH Docs</h1>
      <p className="text-fd-muted-foreground">
        <a href="/docs" className="text-fd-primary underline">
          Open Documentation
        </a>
      </p>
    </main>
  );
}