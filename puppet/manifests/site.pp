import "nodejs"
import "postgres"

node "devel" {
  # Make sure all the packages are up to date before loading any packages
  exec { 'apt-update':
    command => "/usr/bin/apt-get update",
  }

  Exec["apt-update"] -> Package <| |>

  #Set system timezone to UTC
  class { "timezone":
    timezone => 'UTC',
  }

  #include midas_nodejs
  include midas_postgres
}
