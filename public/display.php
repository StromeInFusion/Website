<?php
/**
 * Display all errors when APPLICATION_ENV is development.
 */
if ($_SERVER['APPLICATION_ENV'] == 'development') {
    error_reporting(E_ALL);
    ini_set("display_errors", 1);
}

/**
 * This makes our life easier when dealing with paths. Everything is relative
 * to the application root now.
 */
define('BASE_DIR', dirname(__DIR__));
chdir(BASE_DIR);

/*
 *  If it doesn't exists, then it probably means composer hasn't installed dependencies.
 */
if (!file_exists('vendor/autoload.php')) {
    http_response_code(520);
    die('ERROR: The application is missing needed libraries.  Install Composer requirements.');
}
require_once('vendor/autoload.php');
require_once('config/site_config.php');

$smarty = new Smarty();
$smarty->template_dir = 'templates/';
$smarty->compile_dir = 'templates/compile/';

if (!isset($content)) {
    /*
     * We'd probably want this to send a notification to the developers/system admins here.
     */
    header('Location: 404.php');
}

//$smarty->assign('title_text', 'TITLE: This is the Smarty basic example ...');
$smarty->assign('body_html', $content);


/**
 *  Assigning site configurations
 */
$rc = new ReflectionClass('Config');
$config_array = $rc->getConstants();
$smarty->assign('CONFIG', $config_array);

$smarty->display('index.tpl');
