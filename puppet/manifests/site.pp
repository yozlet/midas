import "midas_nodejs"
import "midas_postgres"
import "midas_sails"

node "devel" {
  Exec { path => [ "/bin/", "/sbin/" , "/usr/bin/", "/usr/sbin/" ] }

  # Make sure all the packages are up to date before loading any packages
  exec { 'apt-update':
    command => "apt-get update",
  }

  Exec["apt-update"] -> Package <| |>

  #Set system timezone to UTC
  class { "timezone":
    timezone => 'UTC',
  }

#  include midas_nodejs
#  include midas_postgres
  include midas_sails
}
