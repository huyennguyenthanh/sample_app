class UsersController < ApplicationController
  before_action :logged_in_user, except: %i(show new create)
  before_action :load_user, except: %i(index new create)
  before_action :admin_user, only: :destroy
  before_action :correct_user, only: %i(edit update)

  def new
    @user = User.new
  end

  def index
    @pagy, @users = pagy(User.all, page: params[:page],
items: Settings.pagination.item_per_page)
  end

  def show
    @pagy, @microposts = pagy(@user.microposts, page: params[:page],
      items: Settings.pagination.item_per_page)
  end

  def create
    @user = User.new user_params
    if @user.save
      @user.send_activation_email
      flash[:info] = t ".mail_validate_send"
      redirect_to root_path
    else
      flash.now[:fail] = t ".signup_fail"
      render :new
    end
  end

  def edit; end

  def update
    if @user.update user_params
      flash[:success] = t ".update_success"
      redirect_to @user
    else
      flash.now[:danger] = t ".update_fail"
      render :edit
    end
  end

  def destroy
    if @user.destroy
      flash[:success] = t ".destroy_success"
    else
      flash[:danger] = t ".destroy_fail"
    end
    redirect_to users_path
  end

  def following
    @title = t ".title"
    @pagy, @users = pagy(@user.following, page: params[:page])
    render :show_follow
  end

  def followers
    @title = t ".title"
    @pagy, @users = pagy(@user.followers, page: params[:page])
    render :show_follow
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password,
                                 :password_confirmation)
  end

  def correct_user
    return if current_user?(@user)

    flash[:error] = t ".update_correct_user_mess"
    redirect_to root_url
  end

  def load_user
    @user = User.find_by id: params[:id]
    return if @user

    flash[:danger] = t ".not_found_user"
    redirect_to root_path
  end

  def admin_user
    redirect_to root_path unless current_user.admin?
  end
end
