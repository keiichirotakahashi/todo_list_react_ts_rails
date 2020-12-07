class Api::V1::ProjectsController < Api::V1::BaseController
  before_action :set_project, only: %i[update destroy]

  def index
    projects = current_user.projects.order(created_at: :desc)
    render json: projects, status: :ok
  end

  def show
    @project = Project.find_by!(url: params[:url])
    unless @project.user_id == current_user.id
      render json: 'Forbidden request', status: :forbidden and return
    end
    render json: @project, status: :ok
  end

  def create
    project = current_user.projects.build(project_params)
    if project.save
      render json: project, status: :ok
    else
      render json: project.errors.full_messages, status: :bad_request
    end
  end

  def update
    if @project.update(project_params)
      render json: @project, status: :ok
    else
      render json: @project.errors.full_messages, status: :bad_request
    end
  end

  def destroy
    @project.destroy
    render json: @project, status: :ok
  end

  private

  def set_project
    @project = Project.find(params[:id])
    unless @project.user_id == current_user.id
      render json: 'Forbidden request', status: :forbidden and return
    end
  end

  def project_params
    params.require(:project).permit(:name, :url)
  end
end
