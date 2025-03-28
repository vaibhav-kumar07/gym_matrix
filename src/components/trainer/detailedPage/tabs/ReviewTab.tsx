import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
// import { ITrainerReview } from "@/types/trainer";

interface ReviewsTabProps {
//   reviews: ITrainerReview[];
}

export default function ReviewsTab({  }: ReviewsTabProps) {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        {/* {reviews.map((review, index) => (
          <div key={index} className="flex gap-4 pb-6 border-b last:border-0">
            <Avatar>
              <img src={review.userImage} alt={review.userName} />
            </Avatar>
            <div>
              <h3 className="font-semibold">{review.userName}</h3>
              <div className="flex items-center gap-1 text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <i 
                    key={i} 
                    className={`fas fa-star ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  ></i>
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          </div>
        ))} */}
      </div>
    </Card>
  );
}