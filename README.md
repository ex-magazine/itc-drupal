## Prerequisites
Web Server: Apache or Nginx.
PHP: Version 8.3 or higher.
Database: MySQL/MariaDB (5.7.8+), PostgreSQL (10+), or SQLite (3.26+).
Composer: For managing Drupal's dependencies.

## WampServer
See the [WampServer](https://www.wampserver.com/en/category/documentation-en/) 

## DDEV
This project requires [DDEV](https://ddev.readthedocs.io/en/latest/users/install/) and [Composer 2](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos) be installed before you begin.

### Setup

Checkout the project and run the following commands from project root:

* `ddev start`
* `composer install`
* `ddev auth ssh`

### Import DB
ddev import-db --file=itc-db.sql

### Export DB
ddev export-db --gzip=false --file=itc-db.sql

### Login to Drupal Admin

https://itc-local.site/user/login
U:admin
P:admin

### Login to Drupal Admin using drush
* `vendor/bin/drush uli`

