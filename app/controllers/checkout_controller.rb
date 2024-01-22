class CheckoutController < ApplicationController
  skip_before_action :authorize_admin
  skip_before_action :verify_authenticity_token
  def create
    object= Course.where(:stripe_product_id => params[:stripe_product_id]).first
    if object.nil?
      object = Group.where(:stripe_product_id => params[:stripe_product_id]).first
    end
    @session = Stripe::Checkout::Session.create({
                                                  customer: current_user.stripe_customer_id,
                                                 payment_method_types: ['card'],
                                                 line_items: [{
                                                                price_data:{
                                                                  currency: 'usd',
                                                                  product_data:{
                                                                    name: object.name,
                                                                                   },
                                                                  unit_amount: object.price,
                                                                },
                                                                quantity: 1,
                                                              }],
                                                 mode: 'payment',
                                                  success_url: success_url + "?stripe_product_id="+params[:stripe_product_id],
                                                 cancel_url: root_url,
                                               })

    respond_to do |format|
      format.js
    end
  end

  def success
    object= Course.where(:stripe_product_id => params[:stripe_product_id]).first
    if object.nil?
      object = Group.where(:stripe_product_id => params[:stripe_product_id]).first
    end
    @bill = Bill.new(name: current_user.name, email: current_user.email, product_id:object.stripe_product_id, amount: object.price)
    if @bill.save(:validate => false)
      BillMailer.send_bill(current_user.email, object.price, object.name, current_user.name).deliver_now
      object= Course.where(:stripe_product_id => params[:stripe_product_id]).first
      if object.nil?
        object = Group.where(:stripe_product_id => params[:stripe_product_id]).first
        @group_enroll = GroupEnrollment.new(user_id: current_user.id, group_id: object.id)
        @group_enroll.save(:validate => false)
      else
        @enroll= Enrollment.new(user_id: current_user.id, course_id: object.id)
        @enroll.save(:validate => false)
      end
    end
  end

  def show_pay_pal_order
    unless params[:course_id].nil?
      @course = Course.where(id: params[:course_id]).first
      @total_price = @course.price
      @product_id = @course.stripe_product_id
    end
    unless params[:group_id].nil?
      @group = Group.where(id: params[:group_id]).first
      @total_price = @group.price
      @product_id = @group.stripe_product_id
    end
  end

  def success_pay_pal_order
    @amount = params[:amount].to_i * 100
    @bill = Bill.new(name: params[:name], email: params[:email], product_id: params[:product_id], amount: @amount)
    if @bill.save(:validate => false)
      object= Course.where(:stripe_product_id => params[:product_id]).first
      if object.nil?
        object = Group.where(:stripe_product_id => params[:product_id]).first
        @group_enroll = GroupEnrollment.new(user_id: current_user.id, group_id: object.id)
        @group_enroll.save(:validate => false)
      else
        @enroll= Enrollment.new(user_id: current_user.id, course_id: object.id)
        @enroll.save(:validate => false)
      end
    end
  end

end