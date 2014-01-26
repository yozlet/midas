import "midas_sails"

class midas_nodejs {

  #Install Node and NPM. may want make install to be true in future
  class { 'nodejs':
      version => 'v0.10.25',
      make_install => false,
  }

#  $packages = ['nodejs', 'npm']
#  package {$packages:
#    require => Exec['apt-update'],
#  }->
#  exec { 'npm update':
#    command => "npm config set registry http://registry.npmjs.org/",
#  }

#  apt::ppa { 'ppa:chris-lea/node.js':
#  }

#    $packages = ['python2.7', 'nodejs', 'npm']
      $packages = ['python2.7']
#  package {$packages:
#    require => Exec['apt-update'],
#  }
  package {$packages:
  }
  #->
#exec { 'npm update':
#    command => "npm config set registry http://registry.npmjs.org/",
#  }->
#
#    exec { 'grunt-cli':
#    command => "npm install -g grunt-cli",
#  }->
#
#    exec { 'forever':
#    command => "npm install -g forever",
#  }

  package {'grunt-cli':
    provider    => 'npm',
#    require     => Class['nodejs'],
  }

  package {'forever':
    provider  => 'npm',
#    require   => Package['grunt-cli'],
  }



}


#class mynodejs {

#    file { "/opt/node":
#        ensure  => "link",
#        target  => "/vagrant",
#        force   => true,
#    }

#    exec { "apt-get update":
#        path => "/usr/bin",
#        require => File["/opt/node"]
#    }

#    $nodejs_deps = [ "python-software-properties", "g++", "make", "git" ]
#        package { $nodejs_deps:
#        ensure => installed,
#        require => Exec["apt-get update"],
#    }

#    file { "/tmp/deploy_node.sh":
#        ensure  => present,
#        mode    => '0775',
#        source  => "puppet:///files/deploy_node.sh",
#        require => Package[$nodejs_deps]
#    }

#    exec { "install_node":
#        command => "/bin/bash /tmp/deploy_node.sh",
#        path => "/usr/bin:/usr/local/bin:/bin:/usr/sbin:/sbin",
#        timeout => 0,
#        unless => "ls /usr/local/bin/node ",
#        require => File["/tmp/deploy_node.sh"]
#    }

#    exec { "npm_install":
#        cwd => "/opt/node",
#        command => "npm install",
#        path => "/usr/bin:/usr/local/bin:/bin:/usr/sbin:/sbin",
#        require => Exec["install_node"]
#    }

#}

#Node.js configuration
#include nodejs
