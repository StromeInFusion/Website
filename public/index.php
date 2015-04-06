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
 * TODO: We should check for the existence of 'vendor/autoload.php'
 *       If it doesn't exists, then it probably means composer hasn't installed dependencies.
 */
require_once('vendor/autoload.php');
require_once('config/site_config.php');
require_once('lib/utils/routing.php');

$smarty = new Smarty();
$smarty->template_dir = 'templates/';
$smarty->compile_dir = 'templates/compile/';

$content_dir = BASE_DIR.'/data/content';
$route_table = [''             => 'index.phtml',
                'index'        => 'index.phtml',
                'about_us'     => 'about_us.phtml',
                'competition'  => 'competition.phtml',
                'resources'    => 'resources.phtml',
                'risks'        => 'risks.phtml',
                'solution'     => 'solution.phtml',
                'user_stories' => 'user_stories.phtml',
                '404'          => '404.phtml',
];

if (Config::URL_BASE) {
    $server_uri = str_replace(Config::URL_BASE, '', $_SERVER['REQUEST_URI']);
} else {
    $server_uri = $_SERVER['REQUEST_URI'];
}

$raw_path_hash = path2hash($server_uri);
$action = $raw_path_hash[0];
$path_hash = $raw_path_hash[1];

if (array_key_exists($action, $route_table)) {
    $content_file = $route_table[$action];
} else {
    $content_file = $route_table['404'];
}

$content = file_get_contents($content_dir.'/'.$content_file);

if (!$content) {
    /*
     * We'd probably want this to send a notification to the developers/system admins here.
     * This means that an entry is in the route table, but the content file is either empty or
     * doesn't exist.  We can do more checks to narrow it down, but this will work for now.
     */
    throw new ErrorException('File not configured.  Please contact your system administrator.');
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
