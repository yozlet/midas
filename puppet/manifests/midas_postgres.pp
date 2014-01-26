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
      ip_mask_deny_postgres_user => '0.0.0.0/32',
      ip_mask_allow_all_users    => '0.0.0.0/0',
      listen_addresses           => '*',
      ipv4acls                   => ['hostssl all midas 192.168.0.0/24 cert'],
      manage_firewall            => false,
      postgres_password          => 'midaspassword',
      require             => Class['postgresql::globals'],
    }


#    postgresql::server::role { 'midas':
#      createrole          => true,
#      require             => Class['postgresql::server'],
#    } ->

    postgresql::server::db { 'midas':
      user     => 'midas',
      password  => 'midas',
      grant     => 'all',
      #password => postgresql_password('midas', 'midas'),
    }

    class { 'postgresql::lib::devel':
     package_name => 'postgresql-server-dev-9.2'
    }
}



