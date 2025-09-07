export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to MH Docs</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-4">Your documentation starts here</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Getting Started</h2>
        <p>This is your documentation homepage. Content will be added here.</p>
        <ul>
          <li><a href="/docs/getting-started" className="text-blue-600 underline">Getting Started Guide</a></li>
        </ul>
      </div>
    </div>
  );
}