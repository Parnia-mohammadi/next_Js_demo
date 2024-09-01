function ReviewsIdDetailsPage({ params }) {
  console.log(params);
  return (
    <div>
      ReviewsIdDetailsPage- reviewId : {params.reviewsId} for productId{" "}
      {params.productId}
    </div>
  );
}

export default ReviewsIdDetailsPage;
