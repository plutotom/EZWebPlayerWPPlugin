// importing dependecys
import edit from "./edit.js";
import blockIcons from "../images/Logo.js";
import { registerBlockType } from "@wordpress/blocks";
import { __, _x } from "@wordpress/i18n";
import { Fragment } from "react";
/**
 * Register: a Gutenberg Block.
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType("ezwebplayer/ezweb-player-embeded", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: "EZWebPlayer",
	description: (
		<p>
			{__("Sign up for your free trial account today:")}
			<a href="https://my.ezwebplayer.com/Register" target="_blank">
				{__("Here")}
			</a>
		</p>
	),
	icon: blockIcons.EZWebPlayerIcon,
	category: "embed", // https://developer.wordpress.org/block-editor/developers/filters/block-filters/#managing-block-categories
	keywords: [
		// Key words are search words, when someone types video, ezwebpalyer will be a response.
		("Video",
		"Streaming",
		"EZWebPlayer",
		"EZweb",
		"EZ Web Player",
		"embed",
		"video embed",
		"easy web player",
		"easy player"),
	],

	attributes: {
		EZWPresponsiveIFrameSrc: {
			type: "string",
			selector: "iframe",
			attribute: "src",
		},
		EZWPstaticIframeSrc: {
			type: "string",

			selector: "iframe",
			attribute: "src",
		},
		EZWPdisplayIframe: {
			type: "boolean",
		},
		EZWPresponsiveType: {
			type: "boolean",
		},
		EZWPvideoURL: {
			type: "string",
		},
		EZWPvideoNP: {
			type: "integer",
			selector: "div",
			attribute: "paddingBottom",
		},
		EZWPIFrameW: {
			type: "string",
			selector: "iframeR",
			attribute: "width",
		},
		EZWPIFrameH: {
			type: "string",
			selector: "iframe",
			attribute: "height",
		},
		EZWPinputedLink: {
			type: "string",
			slector: "input",
			attribute: "value",
			default: null,
		},
		EZWPblock_alignment: {
			type: "string",
			default: "wide",
		},
	},
	getEditWrapperProps: ({ EZWPblock_alignment }) => {
		// this gets the attribut element and looks to see if it is not set to default
		if (
			"left" === EZWPblock_alignment ||
			"right" === EZWPblock_alignment ||
			"full" === EZWPblock_alignment
		) {
			return { "data-align": EZWPblock_alignment };
		}
	},
	// @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	edit, //imported in from edit.js built in react + ES6
	save: function (props) {
		if (props.attributes.EZWPresponsiveType) {
			return (
				<Fragment>
					<div
						className={`wp-block-embed align${props.attributes.EZWPblock_alignment}`}
					>
						<style
							dangerouslySetInnerHTML={{
								__html:
									".Video iframe,.Video object,.Video embed,.Video video,.Video img {position:absolute; width:100%; height:100%; left:0; top:0;}",
							}}
						/>
						<div
							className="Video"
							style={{
								position: "relative",
								width: "100%",
								height: "0",
								paddingBottom: `${props.attributes.EZWPvideoNP}%`,
							}}
						>
							{console.log(props.attributes.EZWPblock_alignment)}
							<iframe
								className="iframeR "
								src={props.attributes.EZWPresponsiveIFrameSrc}
								scrolling="no"
								style={{
									borderWidth: "0",
								}}
								allowFullScreen=""
							></iframe>
						</div>
					</div>
				</Fragment>
			);
		} else {
			return <p>{__("somthing went wrong sorry")}</p>;
		}
	},
});
