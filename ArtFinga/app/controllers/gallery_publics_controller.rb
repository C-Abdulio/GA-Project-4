class GalleryPublicsController < ApplicationController
  before_action :set_gallery_public, only: [:show, :update, :destroy]

  # GET /gallery_publics
  def index
    @gallery_publics = GalleryPublic.all

    render json: @gallery_publics
  end

  # # GET /gallery_publics/1
  # def show
  #   render json: @gallery_public
  # end

  # # POST /gallery_publics
  # def create
  #   @gallery_public = GalleryPublic.new(gallery_public_params)
  #
  #   if @gallery_public.save
  #     render json: @gallery_public, status: :created, location: @gallery_public
  #   else
  #     render json: @gallery_public.errors, status: :unprocessable_entity
  #   end
  # end

  # PATCH/PUT /gallery_publics/1 - Would this be useful for admin purposes
  def update
    if @gallery_public.update(gallery_public_params)
      render json: @gallery_public
    else
      render json: @gallery_public.errors, status: :unprocessable_entity
    end
  end

  # DELETE /gallery_publics/1 - should be useful for admin purposes
  def destroy
    @gallery_public.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_gallery_public
      @gallery_public = GalleryPublic.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def gallery_public_params
      params.require(:gallery_public).permit(:artwork, :username)
    end
end
