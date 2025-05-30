<?php
namespace tangible;
use tangible\api;
use tangible\framework;

class api {
  static $state;
}

api::$state = (object) [
  'version' => framework::$state->version,
  'path'    => __DIR__,
  'url'     => framework\module_url( __FILE__ ),  
];

require_once __DIR__.'/action.php';
require_once __DIR__.'/ajax.php';
require_once __DIR__.'/enqueue.php';
require_once __DIR__.'/nonce.php';
require_once __DIR__.'/response.php';
require_once __DIR__.'/rest/index.php';
