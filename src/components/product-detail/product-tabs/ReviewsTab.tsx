const ReviewsTab = () => {
  return (
    <div className="row">
      <div className="col-xl-5 col-lg-5">
        <div className="ps-block--average-rating">
          <div className="ps-block__header">
            <h3>4.00</h3>
            <span className="ps-rating">★★★★☆</span>
            <span>1 Review</span>
          </div>
        </div>
      </div>
      <div className="col-xl-7 col-lg-7">
        <form className="ps-form--review">
          <h4>Submit Your Review</h4>
          <textarea
            className="form-control"
            rows={6}
            placeholder="Write your review here"
          ></textarea>
          <input className="form-control" type="text" placeholder="Your Name" />
          <input
            className="form-control"
            type="email"
            placeholder="Your Email"
          />
          <button className="ps-btn">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewsTab;
