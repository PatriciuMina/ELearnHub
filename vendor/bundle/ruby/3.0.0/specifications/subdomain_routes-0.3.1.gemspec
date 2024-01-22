# -*- encoding: utf-8 -*-
# stub: subdomain_routes 0.3.1 ruby lib

Gem::Specification.new do |s|
  s.name = "subdomain_routes".freeze
  s.version = "0.3.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Matthew Hollingworth".freeze]
  s.date = "2009-10-10"
  s.description = "      SubdomainRoutes add subdomain conditions to the Rails routing system. Routes may be restricted to\n      one or many specified subdomains. An URL will be recognised only if the host subdomain matches the\n      subdomain specified in the route. Route generation is also enhanced, so that the subdomain of a\n      generated URL (or path) will be changed if the requested route has a different subdomain to that of\n      the current request. Model-based subdomain routes can also be defined.\n".freeze
  s.email = "mdholling@gmail.com".freeze
  s.extra_rdoc_files = ["LICENSE".freeze, "README.textile".freeze]
  s.files = ["LICENSE".freeze, "README.textile".freeze]
  s.homepage = "http://github.com/mholling/subdomain_routes".freeze
  s.rdoc_options = ["--charset=UTF-8".freeze]
  s.rubygems_version = "3.3.5".freeze
  s.summary = "A Rails library for incorporating subdomains into route generation and recognition.".freeze

  s.installed_by_version = "3.3.5" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 3
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<actionpack>.freeze, [">= 2.2.1"])
  else
    s.add_dependency(%q<actionpack>.freeze, [">= 2.2.1"])
  end
end
