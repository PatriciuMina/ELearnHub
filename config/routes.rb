require 'sidekiq/web'
Rails.application.routes.draw do
  #devise_for :users, :path => 'auth'
  devise_for :users, controllers: {
    omniauth_callbacks: 'users/omniauth_callbacks',
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  # devise_for :users, controllers: {
  #   omniauth_callbacks: 'users/omniauth_callbacks',
  #   sessions: 'users/sessions',
  #   registrations: 'users/registrations'
  # }

  get '/auth/google/callback', to: 'sessions#create'

  root 'home#index'

  authenticate :user, ->(user) {user.role == 'admin'} do
    mount Sidekiq::Web => "/sidekiq"
  end


  resources :users_admin, :controller => 'users' do
    collection do
      post 'import_users'
      post 'export_users'
      post 'export_users_conditional'
      post 'report_users'
      get 'report_users'
      get 'user_profile'
    end
  end
  get 'users_admin/:id/updates', to: 'users#updates', as: 'user_updates'
  get '/export_users_conditional', to: 'users#export_users_conditional'
  post '/export_users_conditional', to: 'users#export_users_conditional'
  get '/report_users', to: 'users#report_users'
  post '/report_users', to: 'users#report_users'
  resources :lessons
  resources :enrollments

  resources :schools
  resources :assignments
  resources :parent_relations

  resources :courses do
    collection do
      get 'report_courses'
      post 'report_courses'
    end
  end
  get '/report_courses', to: 'courses#report_courses'
  post '/report_courses', to: 'courses#report_courses'
  resources :groups
  resources :group_enrollments
  resources :bills
  resources :meetings
  get '/meetings/:id/invite_users', to: 'meetings#invite_users'
  post '/meetings/:id/invite_users', to: 'meetings#send_invitations'

  get '/export', to: 'users#export_users_conditional'

  post 'jobs', to: "notifications#jobs"
  resources :notifications
  #resources :rooms
  resources :checkout do
    collection do
      get 'show_pay_pal_order'
      post 'success_pay_pal_order'
    end
  end
  post "checkout/create", to: "checkout#create"
  resources :grading_scales


  resources :rooms do
    resources :messages
  end
  get '/rooms', to:'rooms#index'


  get '/course/:course_id/assignments', to: 'assignments#index'
  get '/course/:course_id/calendar', to: 'assignments#calendar'
  get "/course/:course_id/assignments/new", to: 'assignments#new'
  get '/course/:course_id/assignments/:id', to: 'assignments#show'
  resources :answears
  get '/course/:course_id/assignments/:assignment_id/answears', to: 'answears#index'
  get '/course/:course_id/assignments/:assignment_id/answears/new', to: 'answears#new'
  get '/course/:course_id/assignments/:assignment_id/answears/:id', to: 'answears#show'


  resources :user_answears
  get '/course/:course_id/assignments/:assignment_id/answears/:answear_id/user_answears/new', to: 'user_answears#new'
  resources :questions
  get '/course/:course_id/assignments/:assignment_id/questions/new', to: 'questions#new'
  get '/course/:course_id/assignments/:assignment_id/questions/:question_id/edit', to: 'questions#edit'
  get '/course/:course_id/assignments/:assignment_id/questions/:id', to: 'questions#show'

  get '/course/:course_id/assignments/:assignment_id/edit', to: 'assignments#edit'

  get '/course/:course_id/assignments/new', to: 'assignments#new'

  resources :options
  get '/course/:course_id/assignments/:assignment_id/questions/:question_id/options/new', to: 'options#new'

  get '/courses/:id/new', to: 'enrollments#new'
  get '/my_courses', to: 'courses#my_courses'
  get '/child_courses', to: 'courses#child_courses'
  get 'course/:id/users', to: 'courses#enroll_users'
  post 'course/:id/users', to: 'courses#save_enroll_users'

  get 'shop', to: 'courses#shop'
  get 'success', to: 'checkout#success'

  get '/course/:id/enrolled', to: 'enrollments#show_enrolled'
  delete '/course/:id/enrolled', to: 'enrollments#destroy'
  delete 'remove_enrollment', to: 'enrollments#destroy'
  get 'remove_enrollment', to: 'enrollments#destroy'

  get 'group/:id/users', to: 'groups#enroll_users'
  post 'group/:id/users', to: 'groups#save_enroll_users'
  get '/group/:id/enrolled', to: 'group_enrollments#show_enrolled'
  delete '/group/:id/enrolled', to: 'group_enrollments#destroy'
  delete 'remove_group_enrollment', to: 'group_enrollments#destroy'



  resources :resources do
    get 'show_resource_docx'
  end

  get '/course/:id/add_resource', to: 'resources#new_resource_course'
  get '/lessons/:id/add_resource', to: 'resources#new_resource_lesson'
  get 'course/:id/resources', to: 'resources#show_resource_course'
  get '/parents_resources', to: 'resources#show_resource_parent'





  get '/course/:course_id/assignments/:assignment_id/answears/ruby_compiler', to: 'answears#ruby_compiler'
  post '/course/:course_id/assignments/:assignment_id/answears/ruby_compiler', to: 'answears#parse_compiler'

  resources :courses, shallow: true do
    resources :lessons
    resources :enrollments
    resources :assignments, shallow: true do
      resources :answears
      collection do
        get 'ruby_compiler'
        post 'parse_compiler'
      end
    end

    delete 'remove_enrollment', to: 'enrollments#destroy'
    delete '/course/:id/enrollments', to: 'enrollments#destroy'
    get '/courses/:id/new', to: 'enrollments#new'
  end


  constraints subdomain: 'ubb' do
    resources :users_admin, :controller => 'users'
    get '/courses/:id/new', to: 'enrollments#new'
  end


  constraints subdomain: 'utcn' do
    resources :users_admin, :controller => 'users'
  end


  constraints subdomain: 'umf' do
    resources :users_admin, :controller => 'users'
  end

  constraints subdomain: 'fsg' do
    resources :users_admin, :controller => 'users'
  end

  constraints subdomain: 'aaa' do
    resources :users_admin, :controller => 'users'
  end

  constraints subdomain: 'bbb' do
    resources :users_admin, :controller => 'users'
  end

end
