<?php
/**
 * Plugin Name: EZWebPlayer - Video Plugin
 * Plugin URI: https://wordpress.org/plugins/ezwebplayer-wordpress-pro-video-plugin/
 * Version: 1.0.23
 * Description: Connects your WordPress Site to EZWebPlayer’s service for managing your video content.
 * Author: EZWebPlayer.com
 * Author URI: https://www.ezwebplayer.com 
 */
  

// include custom jQuery
// function shapeSpace_include_custom_jquery() {

// 	wp_deregister_script('jquery');
// 	wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js', array(), null, true);

// }
// add_action('wp_enqueue_scripts', 'shapeSpace_include_custom_jquery');

function enqueue_ezweb_player_block() {
  wp_enqueue_script(
    'EZWebPlayer-script-handle',
    esc_url( plugins_url( '/build/index.js', __FILE__ ) ),
    array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components', 'jquery' ),
    '1.0.0',
	true // Enqueue the script in the footer.
	

);
// EZWebPlayer script to recive video data. dependent on jquery
wp_register_script( 'WebService', 'https://ezwp.tv/Scripts/webService.js', array( 'jquery' ), '1.0.0', true ); 
wp_enqueue_script( 'WebService' );

wp_register_script( 'Jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js', array( 'jquery' ), '1.0.0', true );
wp_enqueue_script( 'Jquery' );

}

add_action( 'enqueue_block_assets', 'enqueue_ezweb_player_block' );









