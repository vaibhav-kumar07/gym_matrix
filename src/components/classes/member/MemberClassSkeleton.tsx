export function MemberClassSkeleton() {
  return (
    <div className="space-y-8">
      {/* Header Skeleton */}
      <div className="space-y-4">
        <div className="h-8 w-48 bg-gray-200 rounded-md animate-pulse" />
        <div className="h-10 w-full max-w-md bg-gray-200 rounded-md animate-pulse" />
      </div>

      {/* Filters Skeleton */}
      <div className="space-y-4">
        <div className="h-6 w-32 bg-gray-200 rounded-md animate-pulse" />
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-9 w-24 bg-gray-200 rounded-full animate-pulse"
            />
          ))}
        </div>
      </div>

      {/* Classes Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse"
          >
            <div className="h-56 bg-gray-200" />
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-gray-200 rounded-full" />
                <div className="space-y-2">
                  <div className="h-4 w-32 bg-gray-200 rounded" />
                  <div className="h-3 w-24 bg-gray-200 rounded" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-6 w-3/4 bg-gray-200 rounded" />
                <div className="h-4 w-1/2 bg-gray-200 rounded" />
              </div>
              <div className="flex justify-end space-x-2">
                <div className="h-9 w-24 bg-gray-200 rounded-full" />
                <div className="h-9 w-24 bg-gray-200 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
