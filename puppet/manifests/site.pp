import "midas_nodejs"
import "midas_postgres"
import "midas_sails"
import "midas_config"

node "devel" {

  group {'create_midas_group':
    name => 'midas',
    ensure => present,
  }

  user {'create_midas_user':
    name => 'midas',
    groups => ['midas'],
    ensure => present,
    shell => '/bin/false',
    require => Group['create_midas_group'],
  }

#  File {
#    owner => 'midas',
#    group => 'midas',
#    mode   => 750,
#  }

  Exec {
      path => [ "/bin/", "/sbin/" , "/usr/bin/", "/usr/sbin/", "/usr/local/node/node-default/bin/" ],
      timeout   => 0,
  }

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
  include midas_config

#  exec { 'start':
#    command   => "forever start app.js --prod",
#    cwd       => "/vagrant",
#    user      => 'midas'
#    require   => Class['midas_config']
#  }
}
