<?php

function path2hash($path, $default_value='') {
    // Trim leading slash (only if first character)
    $path = ltrim($path, '/');
    // Remove any repeated slashes
    $path = preg_replace("/(\/)\\1+/", "$1", $path);
    // $path contains whatever you want to split
    $chunks = explode('/', $path);

    $action = array_shift($chunks);

    $result = array();
    for ($i = 0; $i < sizeof($chunks) - 1; $i+=2)
        $result[$chunks[$i]] = $chunks[$i+1];

    // If we have a leftover item, make it a key with the default value.
    if ((sizeof($chunks) > $i) && ($chunks[$i])) {
        $result[$chunks[$i]] = $default_value;
    }

    return [$action, $result];
}