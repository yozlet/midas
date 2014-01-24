class midas_sails {

  file { "/usr/local/share/sails-postgresql":
    ensure => "directory",
    owner  => "vagrant",
    group  => "vagrant",
    mode   => 750,
  }

  package {'make':
    ensure => 'installed',
    before => Exec['npm_sails_install','g++'],
  }

  exec { 'git_clone_sails':
    command   => "git clone https://github.com/Innovation-Toolkit/sails-postgresql.git .",
    cwd       => "/usr/local/share/sails-postgresql",
    timeout   => 20000,
    user      => "vagrant",
    require  => File['/usr/local/share/sails-postgresql'],
  }

  exec { 'git_sails_checkout':
    command   => "git checkout bytea",
    cwd       => "/usr/local/share/sails-postgresql",
    require  => Exec['git_clone_sails'],
  }

  exec { 'npm_sails_install':
    command   => "sudo npm install",
    cwd       => "/usr/local/share/sails-postgresql",
    timeout   => 20000,
    require  => Exec['git_sails_checkout'],
  }

  exec { 'npm_sails_link':
    command   => "sudo npm link",
    cwd       => "/usr/local/share/sails-postgresql",
    require  => Exec['npm_sails_install'],
  }

  exec { 'npm_midas_link':
    command   => "sudo npm link sails-postgresql",
    cwd       => "/vagrant",
    require  => Exec['npm_sails_link'],
  }

  exec { 'npm_midas_install':
    command   => "sudo npm install",
    cwd       => "/vagrant",
    require  => Exec['npm_midas_link'],
  }

}
