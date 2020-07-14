class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]


   # GET /users
  #  def index
  #   @users = User.all

  #   render json: @users
  # end

  # # GET /user/1
  # def show

  #   render json: @user
  # end

  # POST /users
  def create
    @user = User.new(user_params)
    
    if @user.save
      @token = encode({id: @user.id})
      render json: {
        user: @user.attributes.except(:password_digest),
        token: @token
        }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:email, :username, :password_digest)
    end
end
