require 'test_helper'

class GalleryPublicsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @gallery_public = gallery_publics(:one)
  end

  test "should get index" do
    get gallery_publics_url, as: :json
    assert_response :success
  end

  test "should create gallery_public" do
    assert_difference('GalleryPublic.count') do
      post gallery_publics_url, params: { gallery_public: { artwork: @gallery_public.artwork, username: @gallery_public.username } }, as: :json
    end

    assert_response 201
  end

  test "should show gallery_public" do
    get gallery_public_url(@gallery_public), as: :json
    assert_response :success
  end

  test "should update gallery_public" do
    patch gallery_public_url(@gallery_public), params: { gallery_public: { artwork: @gallery_public.artwork, username: @gallery_public.username } }, as: :json
    assert_response 200
  end

  test "should destroy gallery_public" do
    assert_difference('GalleryPublic.count', -1) do
      delete gallery_public_url(@gallery_public), as: :json
    end

    assert_response 204
  end
end
