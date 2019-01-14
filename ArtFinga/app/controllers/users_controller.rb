class UsersController < ApplicationController
  before_action :set_artwork, only: [:show, :destroy]

#Register/Create a new user
  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
  end

  #Find all Users (Maybe Useful to the Gallery)
  def index
    @users = User.all
    render json: @users
  end
  #Find one User by Id (Maybe useful for rendering account info)
  def show
    @user = User.find(params[:id])
    render json: @user
  end

  #Delete a User. Used by the admin. Maybe a feature for the user.
  def destroy
    @user = User.destroy(params[:id])
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:users).permit(:title, :username, :password)
    end

end
