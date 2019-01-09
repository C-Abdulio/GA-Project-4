class ArtworksController < ApplicationController
  before_action :set_artwork, only: [:show, :update, :destroy]

  # GET /artworks
  def index
    @artworks = Artwork.all
    render json: @artworks
  end

  # GET /artworks/1
  def show
    puts url_for(@artwork.image)
    render json: @artwork.attributes.merge(image_url: url_for(@artwork.image))
  end

  # POST /artworks
  def create
    @artwork = Artwork.new(artwork_params)
    # @artwork.image.attach(
    #   io: File.open('lib/images/Sketch_12_4_2018.png'),
    #   filename:'Sketch12_4_2018.png',
    #   content_type: 'application/png',
    #   identify:false
    # )

    if @artwork.save
      render json: @artwork, status: :created, location: @artwork
    else
      render json: @artwork.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /artworks/1
  def update
    if @artwork.update(artwork_params)
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
      @artwork = Artwork.find(params[:id])#wen u go into the database, grab image and take wit u
    end

    # Only allow a trusted parameter "white list" through.
    def artwork_params
      params.permit(:image, :title)
    end

end
