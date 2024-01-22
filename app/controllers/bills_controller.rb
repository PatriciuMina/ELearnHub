class BillsController < ApplicationController

  def show
    @bill = Bill.find(params[:id])
  end

  def index
    @bills= Bill.all.paginate(page: params[:page])
  end

  def create
    @bill = Bill.new(bill_params)
    if @bill.save
      redirect_to root_path
    else
      redirect_to root_path
    end
  end


  def bill_params
    params.require(:bill).permit(:name, :email, :product_id, :amount)
  end
end
