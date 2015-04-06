# ECConnect Website

## Requirements
The target PHP version is PHP 5.5.

The following requirements are maintained by Composer, see the Installation section for installation instructions.

* smarty/smarty (3.1.x)

## Installation
1. Install Composer requirements

    ````
    $ php composer.phar update
    ````
2. Set up template cache directory with global write access

    ````
    $ mkdir templates/compile
    ````
    
    ````
    $ chmod 0777 templates/compile
    ````
3. Set up public directory for web access
    
    * There are many other ways to achieve this
    * This will set up the website at `http://{webserver}/~{user}/ecconnect/`

    ````
    $ ln -s /path/to/public ~/public_html/ecconnect
    ````

4. Configure the application as needed

    * Make sure that `Config::URL_BASE` is configured correctly.
    * If application is installed as `/home/user/public_html/ecconnect`, then configure `Config::URL_BASE` as:
    
    ````
    const URL_BASE = '/~user/ecconnect';
    ````