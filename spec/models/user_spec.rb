# == Schema Information
#
# Table name: users
#
#  id                  :bigint           not null, primary key
#  current_sign_in_at  :datetime
#  current_sign_in_ip  :string(255)
#  email               :string(255)      default(""), not null
#  encrypted_password  :string(255)      default(""), not null
#  last_sign_in_at     :datetime
#  last_sign_in_ip     :string(255)
#  remember_created_at :datetime
#  sign_in_count       :integer          default(0), not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
# Indexes
#
#  index_users_on_email  (email) UNIQUE
#
require 'rails_helper'

RSpec.describe User, type: :model do
  let(:email_attribute) { nil }
  let(:password_attribute) { nil }
  let(:user_attributes) { attributes_for(:user, email: email_attribute, password: password_attribute) }

  describe 'validations' do
    context 'when attributes are valid' do
      subject { User.new(email: 'hoge@example.com', password: 'hogehoge') }
      it { is_expected.to be_valid }
    end

    describe ':email' do
      subject do
        user = User.new(user_attributes)
        user.valid?
        user.errors[:email]
      end

      context 'when an email does not exist' do
        let(:email_attribute) { nil }
        let(:password_attribute) { 'hogehoge' }

        it { is_expected.to include 'を入力してください。' }
      end

      context 'when an email has invalid format' do
        let(:email_attribute) { 'example.com' }
        let(:password_attribute) { 'hogehoge' }

        it { is_expected.to include 'は不正な値です。' }
      end
    end

    describe ':password' do
      subject do
        user = User.new(user_attributes)
        user.valid?
        user.errors[:password]
      end

      context 'when a password does not exist' do
        let(:email_attribute) { 'hoge@example.com' }
        let(:password_attribute) { nil }

        it { is_expected.to include 'を入力してください。' }
      end

      context 'when a password has 5 characters' do
        let(:email_attribute) { 'hoge@example.com' }
        let(:password_attribute) { 'a' * 5 }

        it { is_expected.to include 'は6文字以上で入力してください。' }
      end

      context 'when a password has 129 characters' do
        let(:email_attribute) { 'hoge@example.com' }
        let(:password_attribute) { 'a' * 129 }

        it { is_expected.to include 'は128文字以内で入力してください。' }
      end
    end
  end
end
