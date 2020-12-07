class Api::V1::BaseController < ApplicationController
  before_action :authenticate_request

  private

  def authenticate_request
    render json: 'Unauthorized request', status: :unauthorized and return unless user_signed_in?
  end
end
