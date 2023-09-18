export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
    

      <div className="container mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Latest News:</h2>

        {/* Placeholder for articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Sample Article Card */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-2">Article Title</h3>
            <p className="text-gray-600">article summary...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
