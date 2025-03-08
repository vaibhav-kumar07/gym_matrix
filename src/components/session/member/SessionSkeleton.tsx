export default function SessionsSkeleton() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="w-full max-w-2xl mx-auto h-12 bg-gray-200 rounded-lg mb-8 animate-pulse" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-white rounded-lg overflow-hidden shadow animate-pulse"
          >
            <div className="h-64 bg-gray-300" />
            <div className="p-8 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-gray-300 rounded-full" />
                <div className="space-y-2">
                  <div className="h-4 w-24 bg-gray-300 rounded" />
                  <div className="h-3 w-32 bg-gray-300 rounded" />
                </div>
              </div>
              <div className="h-6 w-3/4 bg-gray-300 rounded" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-300 rounded" />
                <div className="h-4 w-5/6 bg-gray-300 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
