import { notFound } from "next/navigation";

function ReviewsIdDetailsPage({ params }) {
  // console.log(params);
  if (parseInt(params.reviewsId) > 100) {
    notFound();
  }
  return (
    <div>
      ReviewsIdDetailsPage- reviewId : {params.reviewsId} for productId{" "}
      {params.productId}
    </div>
  );
}

export default ReviewsIdDetailsPage;
