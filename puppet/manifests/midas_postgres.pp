#Install PostGreSQL Database
class midas_postgres {

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
      require             => Class['postgresql::server'],
    }->

    postgresql::server::db { 'midas':

      user     => 'midas',
      password => postgresql_password('midas', 'midas'),

    }

    class { 'postgresql::lib::devel':
     package_name => 'postgresql-server-dev-9.2'
    }
}



