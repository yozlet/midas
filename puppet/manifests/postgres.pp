#Install PostGreSQL Database
class midas_postgres {

    class { 'postgresql::globals':
      manage_package_repo => true,
      version             => '9.2',
    }

    #Install and Configure database
    class { 'postgresql::server':
      require             => Class['postgresql::globals'],
    }

    postgresql::server::db { 'midas':
      user     => 'midas',
      password => postgresql_password('midas', 'midas'),
      require             => Class['postgresql::server'],
    }
}



