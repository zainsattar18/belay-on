class ReviewsController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy ]
  before_action :set_review, only: [:show, :update, :destroy]

  # GET /reviews
  def index
    # @state = State.find(params[:state_id])
    @climb = Climb.find(params[:climb_id])
    # @climb = State.find(params[:climb_id])

    @reviews = Review.where(climb_id: @climb.id)

    render json: @reviews, include: [{climb: { include: :state }}, :user]
  end

  # GET /reviews/1
  def show
    # @state = State.find(params[:state_id])
    # @climb = Climb.find(params[:climb_id])

    # @reviews = Review.where(climb_id: @climb.id)

    # render json: @reviews, include: [climb: { include: :state }]
    render json: @review, include: [climb: { include: :state }]
  end

  # POST /reviews
  def create
    @reviewData = Review.new(review_params)
    @reviewData.climb_id = params[:climb_id]
    @reviewData.user_id = @current_user.id 
    # @climb = Climb.find(params[:climb_id])
    # @review.climb = @climb
    # @review.user = @current_user

    # @review.climb_id = params[:climb_id]

    if @reviewData.save
      render json: @reviewData, status: :created
    else
      render json: @reviewData.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reviews/1
  def update
    # @review.climb_id = params[:climb_id]
    # @review.user_id = @current_user.id 
    if @review.update(review_params)
      render json: @review, include: [{climb: { include: :state }}, :user]
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
      params.require(:review).permit(:review, :rating, :img_url)
    end
end
