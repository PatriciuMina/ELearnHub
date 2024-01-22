require_relative "boot"

require "rails/all"
# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module LmsApplication
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.1
    # Configuration for the application, engines, and railties goes here.
    #  config.active_job.custom_serializers << Oj::Rails::ActiveJob
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    config.time_zone = "Bucharest"
    # config.eager_load_paths << Rails.root.join("extras")
  end
end
