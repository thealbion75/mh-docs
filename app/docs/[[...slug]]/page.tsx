interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Documentation Page</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-4">
          Page: {slug?.join('/') || 'index'}
        </p>
        <p>This is a documentation page. Content will be added here.</p>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: [] },
    { slug: ['getting-started'] },
  ];
}