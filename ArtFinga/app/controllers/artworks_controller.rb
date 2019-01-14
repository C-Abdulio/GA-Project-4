class ArtworksController < ApplicationController
  before_action :set_artwork, only: [:show, :update, :destroy]

  # GET /artworks
  def index
    @artworks = Artwork.all
    render json: @artworks.map{ |artwork| artwork.attributes.merge(image_url: url_for(artwork.image))}
  end

  # GET /artworks/1
  def show
    puts url_for(@artwork.image)
    render json: @artwork
  end

  # POST /artworks
  def create
    @artwork = Artwork.new(artwork_params)

    if @artwork.save
      puts url_for(@artwork.image)
      render json: @artwork.attributes.merge(image_url: url_for(@artwork.image)), status: :created, location: @artwork
    else
      render json: @artwork.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /artworks/1
  def update
    if @artwork.update(artwork_params)
      puts url_for(@artwork.image)
      render json: @artwork
    else
      render json: @artwork.errors, status: :unprocessable_entity
    end
  end

  # DELETE /artworks/1
  def destroy
    @artwork.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_artwork
      @artwork = Artwork.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def artwork_params
      params.permit(:title, :image)
    end
end
