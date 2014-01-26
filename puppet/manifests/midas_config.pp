class midas_config {
  require midas_sails

  # Copy the main settings files and edit them
  file { "/vagrant/config/local.js":
    ensure => "file",
#    owner  => "vagrant",
#    group  => "vagrant",
#    mode   => 750,
    source => "/vagrant/config/local.ex.js"
  }

  # Copy and edit the backend module configuration files
  file { "/vagrant/config/settings/auth.js":
    ensure => "file",
#    owner  => "vagrant",
#    group  => "vagrant",
#    mode   => 750,
    source => "/vagrant/config/settings/auth.ex.js"
  }

  file { "/vagrant/config/settings/sources.js":
    ensure => "file",
#    owner  => "vagrant",
#    group  => "vagrant",
#    mode   => 750,
    source => "/vagrant/config/settings/sources.ex.js"
  }

  file { "/vagrant/config/settings/tags.js":
    ensure => "file",
#    owner  => "vagrant",
#    group  => "vagrant",
#    mode   => 750,
    source => "/vagrant/config/settings/tags.ex.js"
  }

  # Compile production JS and CSS
  exec { 'make_build':
    command   => "make build",
    cwd       => "/vagrant",
    timeout   => 20000,
#    user      => "vagrant",
  }

  # Initialize the database
  #TODO how to 'Edit the configuration file at test/init/init/config.js to match your tags in assets/js/backbone/components/tag.js' ??
  exec { 'init_db':
    command   => "make init",
    cwd       => "/vagrant",
    timeout   => 20000,
#    user      => "vagrant",
    before    => Exec['make_build'],
  }

}
