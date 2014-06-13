Installation
=====

## Linux (Ubuntu 12.04 LTS)

### Set your system's timezone to UTC

     sudo echo "UTC" | sudo tee /etc/timezone
     sudo dpkg-reconfigure --frontend noninteractive tzdata

### Get prerequisite packages

     sudo apt-get install -y python-software-properties python g++ make git software-properties-common

### Install Postgres 9.2+ and remove any Ubuntu installed earlier version

     sudo add-apt-repository -y ppa:pitti/postgresql
     sudo apt-get update
     sudo apt-get remove postgresql
     sudo apt-get remove postgresql-9.1
     sudo apt-get remove postgresql-client-9.1
     sudo apt-get remove postgresql-doc-9.1
     sudo rm -rf /etc/postgresql/9.1
     sudo apt-get install -y --force-yes postgresql-9.2
     sudo apt-get install -y --force-yes postgresql-server-dev-9.2

After installing postgres, you may want to modify the configuration settings so that local applications can make connections to the database server.

Modify `pg_hba.conf` in `/etc/postgresql/*/main` (`-` is for lines to be removed and `+` is for lines to be added, like a diff):

     # "local" is for Unix domain socket connections only
     -local   all             all                                     peer
     +local   all             all                                     md5

For connections outside `localhost`, modify `postgresql.conf`:

     -#listen_addresses = 'localhost'
     +listen_addresses = '*'

AND modify `pg_hba.conf`:

     # IPv4 local connections:
     -host    all             all             127.0.0.1/32            md5
     +host    all             all             0.0.0.0/0               md5

### Create the database

     sudo -u postgres createdb midas
     sudo -u postgres psql -c "CREATE USER midas WITH PASSWORD 'midas';"
     sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE midas to midas;"
     sudo -u postgres psql -c "ALTER SCHEMA public OWNER TO midas;" midas

### Install node.js

     sudo add-apt-repository -y ppa:chris-lea/node.js
     sudo apt-get update
     sudo apt-get install nodejs

### Install GraphicsMagick

     sudo apt-get install graphicsmagick

### Clone Forked Libraries

This project uses forked repositories and libaries, which you will
need to `npm link` in order for everything to function properly.

[sails-postgresql](https://github.com/Innovation-Toolkit/sails-postgresql). Forked to provide soft deletes and support binary objects.

     git clone https://github.com/Innovation-Toolkit/sails-postgresql.git
     cd sails-postgresql
     git checkout bytea
     npm install
     sudo npm link

### Clone the git repository.

     git clone https://github.com/Innovation-Toolkit/midas.git
     cd midas

### Install global node packages

     sudo npm install -g grunt-cli
     sudo npm install -g forever

### Install midas node packages (from the midas git folder)

Important: first link in the forked sails-postgresql

     npm link sails-postgresql

Then run the normal npm package installer

     npm install

### Copy the main settings files and edit them

     cd config
     cp local.ex.js local.js
     vi local.js

### Copy and edit the backend module configuration files

     cd config/settings
     cp auth.ex.js auth.js
     cp sources.ex.js sources.js
     cp tags.ex.js tags.js
     vi auth.js
     vi sources.js
     vi tags.js

### Edit the front-end configuration files

Tag configuration:

     cd assets/js/backbone/config
     vi tag.js
     vi login.js

`tag.js` specifies the tags that the frontend understands and stores in the backend.

`login.js` specifies the login options available on the frontend, and must have a corresponding backend component or configuration enabled (see `config/settings/auth.ex.js`).

### Compile production JS and CSS (from the midas git folder)

     make build

Alternatively, you can also run:

     grunt build

### Initialize the database

The database needs to be populated with the tag defaults for your application's configuration.

Edit the configuration file at `test/init/init/config.js` to match your tags in `assets/js/backbone/components/tag.js`

Then initialize the database with:

     make init

If you'd like to include a sample project, also run:

     make demo

### Start the forever server (from the midas git folder)

This will run the application server on port 1337

     forever start app.js --prod

You can now access the server at `http://localhost:1337`

### Optional: install nginx

     sudo add-apt-repository -y ppa:nginx/stable
     sudo apt-get update
     sudo apt-get install nginx

Configure nginx with the files in the tools folder.  Use the SSL config file if you want to enable SSL, but be sure to set your SSL key.

     cd tools/nginx
     sudo cp sites-enabled.default /etc/nginx/sites-enabled/default
     sudo service nginx restart

With the application server running and nginx running, you should now be able to access the application at `http://localhost`

## Windows (Windows 2008 Server)

### Install Visual C++ 2008 x64 or x86 Redistributable Package

[Runtime 64](http://www.microsoft.com/en-us/download/details.aspx?id=15336)
     or
[Runtime 32](http://www.microsoft.com/en-us/download/details.aspx?id=29)

Reboot server once finished

### Install/Configure Postgres 9.2+ via windows msi installer

[PostgreSQL](http://www.postgresql.org/download/windows/`)

Establish admin user account during the wizard and verify that PostgreSQL is running as a service

Open pgAdmin

     Create database 'midas', user account 'midas' with password 'midas', and assign user 'midas' full rights to administer DB 'midas'

### Install Node.js via Windows MSI, select all available add-ons

[Node.js](http://nodejs.org/download/`)

### Install GraphicsMagick

[GraphicsMagick](ftp://ftp.graphicsmagick.org/pub/GraphicsMagick/windows/`)

Select Q8 version along with latest corresponding to 32 bit vs. 64 bit OS

### Set System Path Variables

Go to Control Panel -> System -> Advanced System Settings -> Environment Variables
Find "Path" Variable in System Variables table and double click to edit it. Make sure it contains all of the following parts (in 	addition to anything else) separated by a semi-colon.

	DRIVE:\program files\graphicsmagick-1.3.18-q8;
	(or similar, depending on your graphicsmagick version)
	DRIVE:\Program Files\nodejs\;

Save.

### Host and Configure Application

#### If hosting on an on-line server

Follow instructions as above in Linux Install Guide to retrieve necessary files from GitHub.

Install NPM Modules as directed above.

#### If hosting on an off-line server

Retrieve Midas from GitHub as above on an online pc. Install NPM modules as directed. Copy to offline server your local npm_modules directory (in project home) as well as the contents of the directory found in Users/YOUR_USER_NAME/AppData/Roaming/npm to corresponding locations on offline-server.

#### Starting Midas

Navigate to Midas directory via windows cmd.exe prompt

Enter the following commands

	npm install sails -g
	npm install
	npm link sails-postgresql
	grunt requirejs

Raise sails with

     sails lift

You can now access the server at `http://localhost:1337`
