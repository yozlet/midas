import "midas_sails"

class midas_nodejs {

  #Install Node and NPM. may want make install to be true in future
  class { 'nodejs':
      version => 'stable',
      make_install => false,
  }

  package {'grunt-cli':
    provider    => 'npm',
    require     => Class['nodejs'],
  }

  package {'forever':
    provider  => 'npm',
    require   => Package['grunt-cli'],
  }

  include midas_sails

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
