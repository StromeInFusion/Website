<head>
    <meta charset="utf-8">
    {if isset($title_text)}
        <title>{$title_text|escape}</title>
    {else}
        <title>{$CONFIG.SITE_NAME|escape}</title>
    {/if}
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Styles -->
    {*<link href="{$CONFIG.URL_BASE}/css/bootstrap.min.css" media="screen" rel="stylesheet" type="text/css">*}
    {*<link href="{$CONFIG.URL_BASE}/css/bootstrap-theme.min.css" media="screen" rel="stylesheet" type="text/css">*}
    <link href="{$CONFIG.URL_BASE}/css/bootstrap-dark.min.css" media="screen" rel="stylesheet" type="text/css">
    <link href="{$CONFIG.URL_BASE}/css/main.css" media="screen" rel="stylesheet" type="text/css">
    {*<link href="{$CONFIG.URL_BASE}/css/font-awesome.min.css" rel="stylesheet">*}
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <link href="{$CONFIG.URL_BASE}/img/favicon.ico" rel="shortcut icon" type="image/vnd.microsoft.icon">
    <!-- Scripts -->
    <!--[if lt IE 9]><script type="text/javascript" src="{$CONFIG.URL_BASE}/js/html5shiv.js"></script><![endif]-->
    <!--[if lt IE 9]><script type="text/javascript" src="{$CONFIG.URL_BASE}/js/respond.min.js"></script><![endif]-->
    {*<script type="text/javascript" src="{$CONFIG.URL_BASE}/js/jquery.min.js"></script>*}
    {*<script type="text/javascript" src="{$CONFIG.URL_BASE}/js/bootstrap.min.js"></script>*}
</head>