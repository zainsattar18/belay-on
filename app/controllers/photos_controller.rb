class PhotosController < ApplicationController
  before_action :set_photo, only: [:show, :update, :destroy]

  # GET /photos
  def index
    # @state = State.find(params[:state_id])
    # @climb = Climb.find(params[:climb_id])
    @review = Review.find(params[:review_id])
    @photos = Photo.where(params[review_id: @review.id])

    # render json: @photos, include:[review: { include: [climb: {include: :state }]}]
    render json: @photos, include: :review, status: :ok
  end

  # GET /photos/1
  def show
    render json: @photo, include: :review
  end

  # POST /photos
  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      render json: @photo, status: :created, location: @photo
    else
      render json: @photo.errors, status: :unprocessable_entity
    end
  end

  

  # DELETE /photos/1
  def destroy
    @photo.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_photo
      @photo = Photo.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def photo_params
      params.require(:photo).permit(:image, :review_id)
    end
end
