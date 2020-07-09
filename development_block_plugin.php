<?php
/**
 * Plugin Name: EZWebPlayer - Video Plugin
 * Plugin URI: https://wordpress.org/plugins/ezwebplayer-wordpress-pro-video-plugin/
 * Version: 1.0.23
 * Description: Connects your WordPress Site to EZWebPlayer’s service for managing your video content.
 * Author: EZWebPlayer.com
 * Author URI: https://www.ezwebplayer.com 
 */
  
function enqueue_ezweb_player_block() {
  wp_enqueue_script(
    'wrapper-block-example-js',
    esc_url( plugins_url( '/build/index.js', __FILE__ ) ),
    array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components' ),
    '1.0.0',
    true // Enqueue the script in the footer.
);
}
add_action( 'enqueue_block_editor_assets', 'enqueue_ezweb_player_block' );

function my_custom_block_register_block() {

	// Register JavasScript File build/index.js
	wp_register_script(
		'my-custom-block',
		plugins_url( 'build/index.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
	);
}

add_action( 'init', 'my_custom_block_register_block' );








