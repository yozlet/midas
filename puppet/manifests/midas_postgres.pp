#Install PostGreSQL Database
class midas_postgres {

#    user {'postgres':
#        before          => Class['postgresql::globals']
#    }

    class { 'concat::setup':
      before => Class['postgresql::globals'],
    }

    class { 'postgresql::globals':
      manage_package_repo => true,
      version             => '9.2',
      encoding            => 'UTF8',
      locale              => 'en_US.UTF-8',
    }

    #Install and Configure database
    class { 'postgresql::server':
      require             => Class['postgresql::globals'],
    }


    postgresql::server::role { 'midas':
#      password_hash => postgresql_password('midas', 'midas'),
      require             => Class['postgresql::server'],
    }->

    postgresql::server::db { 'midas':

      user     => 'midas',
      password => postgresql_password('midas', 'midas'),

    }

}



