class ParentRelationsController < ApplicationController
  skip_before_action :authorize_admin
  def index
    @parent_relations = ParentRelation.all
  end

  def new
    @parents = User.where(role: 'parent')
    @children = User.where(role: 'student')
    @parent_relation = ParentRelation.new
  end

  def create
    @parent_relation = ParentRelation.new(parentsrelation_params)
    if @parent_relation.save
      redirect_to parent_relations_path, alert: "Parent relation created successfully."
    else
      redirect_to new_parent_relation_path, alert: "Error creating Parent relation."
    end
  end


  def parentsrelation_params
    params.require(:parent_relation).permit(:parent_id, :child_id)
  end
end
