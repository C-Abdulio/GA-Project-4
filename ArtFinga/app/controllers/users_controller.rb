class UsersController < ApplicationController
  before_action :set_artwork, only: [:show, :destroy]
  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def destroy
    @user = User.destroy(params[:id])
  end

end
