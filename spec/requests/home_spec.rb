require 'rails_helper'

RSpec.describe 'Home', type: :request do
  describe 'GET /' do
    subject do
      get '/'
      response
    end

    it { is_expected.to have_http_status 200 }
  end
end
