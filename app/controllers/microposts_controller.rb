class MicropostsController < ApplicationController
  before_action :logged_in_user, only: [:create, :destroy]
  before_action :correct_user, only: :destroy

  def create
    @micropost = current_user.microposts.build(micropost_params)
    @micropost.image.attach(params[:micropost][:image])
    process_micropost_save
  end

  def destroy
    @micropost.destroy
    flash[:success] = t ".delete"
    redirect_to request.referer || root_url
  end

  private
  def micropost_params
    params.require(:micropost).permit(:content, :image)
  end

  def correct_user
    @micropost = current_user.microposts.find_by(id: params[:id])
    redirect_to root_url if @micropost.nil?
  end

  def process_micropost_save
    if @micropost.save
      flash[:success] = t ".success"
      redirect_to root_url
    else
      @pagy, @feed_items = pagy current_user.feed, page: params[:page]
      render "static_pages/home"
    end
  end
end
