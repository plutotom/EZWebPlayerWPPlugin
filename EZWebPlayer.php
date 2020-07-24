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
    'EZWebPlayer-script-handle',
    esc_url( plugins_url( '/build/index.js', __FILE__ ) ),
    array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components'),
    '1.0.0',
	true // Enqueue the script in the footer.

);
}

add_action( 'enqueue_block_assets', 'enqueue_ezweb_player_block' );









