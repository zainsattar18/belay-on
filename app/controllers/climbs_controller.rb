class ClimbsController < ApplicationController
  
  before_action :set_climb, only: [:update, :destroy]

  # GET /climbs
  def index
    @state = State.find(params[:state_id])
    @climbs = Climb.where(state_id: @state.id)

    render json: @climbs, include: :state, status: :ok
  end

  # GET /climbs/1
  def show
    @state = State.find(params[:state_id])
    @climbs = Climb.where(state_id: @state.id)
    # @climbs = Climb.find(params[:climb_id])

    render json: @climbs, include: :state, status: :ok
    # render json: @climb, include: :state, status: :ok
  end


  # POST /climbs
  def create
    @climbData = Climb.new(climb_params)
    @climbData.state_id = params[:state_id]

    if @climbData.save
      render json: @climbData, status: :created
    else
      render json: @climbData.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /climbs/1
  def update
    if @climb.update(climb_params)
      render json: @climb
    else
      render json: @climb.errors, status: :unprocessable_entity
    end
  end

  # DELETE /climbs/1
  def destroy
    @climb.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_climb
      @climb = Climb.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def climb_params
      params.require(:climb).permit(:climb_name, :img_url, :type_of_climb, :location)
    end
end
