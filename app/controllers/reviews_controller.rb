class ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]

  # GET /reviews
  def index
    @state = State.find(params[:state_id])
    @climb = Climb.find(params[:climb_id])

    @reviews = Review.where(climb_id: @climb.id)

    render json: @reviews, include: [climb: { include: :state }]
  end

  # GET /reviews/1
  def show
    render json: @review
  end

  # POST /reviews
  def create
    @review = Review.new(review_params)
    @climb = Climb.find(params[:climb_id])
    @review.climb = @climb

    if @review.save
      render json: @review, status: :created
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reviews/1
  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reviews/1
  def destroy
    @review.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def review_params
      # params.require(:review).permit(:review, :rating, :img, :climb_id, :user_id)
      params.require(:review).permit(:review, :rating, :img, :climb_id, :user_id)
    end
end
