import "midas_nodejs"
import "midas_postgres"
import "midas_sails"
import "midas_config"

node "devel" {

#  group {'create_midas_group':
#    name => 'midas',
#    ensure => present,
#  }

  user {'midas':
    groups => ['sudo'],
    ensure => present,
    shell => '/bin/false',  #prevent user from logging in?
#    require => Group['create_midas_group'],
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

  class { 'apt':
    always_apt_update    => true,
    disable_keys         => undef,
    proxy_host           => false,
    proxy_port           => '8080',
    purge_sources_list   => false,
    purge_sources_list_d => false,
    purge_preferences_d  => false,
    update_timeout       => undef
  }

  # Make sure all the packages are up to date before loading any packages
#  exec { 'apt-update':
#    command => "apt-get update",
#  }

  #$packages = ['make', 'g++', 'python2.7']
#->
#  exec { 'npm update':
#    command => "npm config set registry http://registry.npmjs.org/",
#  }

#  Exec["apt-update"] -> Package <| |>

  #Set system timezone to UTC
  class { "timezone":
    timezone => 'UTC',
  }

  include midas_nodejs
  include midas_postgres
  include midas_sails
  include midas_config

  exec { 'start':
    command   => "forever start app.js --prod",
    cwd       => "/vagrant",
    user      => 'midas',
    require   => Class['midas_config'],
  }
}
