import React, { Fragment } from "react";
import blockIcons from "./images/Logo.js";
const { InspectorControls } = wp.editor;
const { __ } = wp.i18n;
const {
	Button,
	Placeholder,
	ExternalLink,
	ToggleControl,
	PanelRow,
	PanelBody,
	Toolbar,
	IconButton
} = wp.components;

const {
	BlockIcon,
	BlockControls,
	AlignmentToolbar,
	inspectorControls,
	BlockAlignmentToolbar
} = wp.blockEditor;

class App extends React.Component {
	constructor(attributes) {
		super(attributes);
		this.state = {
			videoURL: this.props.attributes.videoURL, // this may be used to hold link for btns
			responceType: "4", // tells webservice what responsive we want
			renderIframeR: this.props.attributes.displayIframe, // responsive == true, static == false
			responsiveType: this.props.attributes.responsiveType, // weather statice or responsive video
			inputedLink: this.props.attributes.inputedLink,
			errorMessage: null, // If errorMessage is not === to null then display error message to user
			error: false
		};
	}
	//======================================================
	GetResponsiveCode = async (IFrameSrc, IFrameW, IFrameH) => {
		console.log("running get responsive code", IFrameW, IFrameH);
		IFrameSrc = IFrameSrc + "&r"; // requierd for responsive iframe
		//New Percent
		var NP = Math.round((parseInt(IFrameH) / parseInt(IFrameW)) * 100);

		this.props.setAttributes({ IFrameW: IFrameW });
		this.props.setAttributes({ IFrameH: IFrameH });
		this.props.setAttributes({ responsiveIFrameSrc: IFrameSrc });
		this.props.setAttributes({ videoNP: NP });
	};
	GetStaticCode = iframeSrc => {
		console.log("running Static code");
		this.props.setAttributes({ staticIframeSrc: iframeSrc });
	};

	//======================================================

	render() {
		if (
			// responsive iframe render
			this.props.attributes.displayIframe === true &&
			this.props.attributes.responsiveType === true
		) {
			return (
				<Fragment>
					{console.log(this.props.attributes.block_alignment)}
					<style
						dangerouslySetInnerHTML={{
							__html:
								".Video iframe,.Video object,.Video embed,.Video video,.Video img {position:absolute; width:100%; height:100%; left:0; top:0;}"
						}}
					/>
					<div
						className={`Video video responsive-iframe wp-block-embed align${this.props.attributes.block_alignment}`}
						style={{
							position: "relative",
							width: "100%",
							height: "0",
							paddingBottom: `${this.props.attributes.videoNP}%`
						}}
					>
						<iframe
							className="iframe"
							src={
								this.state.IFrameSrc ||
								this.props.attributes.responsiveIFrameSrc
							}
							scrolling="no"
							style={{
								borderWidth: "0"
							}}
							allowFullScreen=""
						></iframe>
					</div>

					{
						// adds icon in toolbar to edit url
					}
					<BlockControls>
						<Toolbar>
							<IconButton
								// this is the edit iframe button
								align="true"
								label="Edit URL"
								icon="edit"
								className="EZWebplayer-edit-btn"
								onClick={() =>
									this.props.setAttributes({
										displayIframe: false
									})
								}
							/>
						</Toolbar>

						{
							// Adds icon in toopbar to align left, center, right
							<BlockAlignmentToolbar
								value={this.props.attributes.block_alignment}
								onChange={new_val => {
									this.props.setAttributes({
										block_alignment: new_val
									});
								}}
							/>
						}
					</BlockControls>
				</Fragment>
			);
		} else {
			return (
				// Input Form
				<div>
					{console.log(this.props.attributes.block_alignment)}
					{console.log(
						"displaying input html",
						this.props.attributes,
						this.state
					)}

					<Placeholder className="wp-block-embed">
						<div className="components-placeholder__label ">
							<span
								style={{ color: "rgb(255, 0, 0)" }}
								className="editor-block-icon block-editor-block-icon has-colors"
							>
								{blockIcons.EZWebPlayerIcon}
								{/* <img
									width="24"
									height="24"
									viewBox="0 0 24 24"
									role="img"
									aria-hidden="true"
									focusable="false"
									// src="https://www.ezwebplayer.com/wp-content/uploads/2020/01/favicon-150x150.png"
									src=
								></img> */}
							</span>
							{__("EZWebPlayer Quick View URL")}
						</div>
						<div className="components-placeholder__instructions">
							{__("Paste your video or channel's Quick View URL")}
							{__("to display your player on your site.")}
						</div>
						<form>
							<input
								type="url"
								id="ezWebPlayer-link-input"
								className="input-text"
								placeholder={__("Enter URL to embed here…")}
								value={this.props.attributes.inputedLink}
								onChange={e => {
									this.props.setAttributes({
										inputedLink: e.target.value
									});
								}}
								style={{
									marginTop: "0",
									marginRight: "8px",
									flex: "1 1 auto",
									flexGrow: "1",
									flexShrink: "1",
									flexBasis: "auto"
								}}
							/>
							<Button
								isSecondary
								class="components-button"
								type="submit"
								onClick={this.initEmbed}
							>
								{__("Embed", "Embed")}
							</Button>
						</form>
						<div display="block">
							{
								// displaying Error message
							}
							{this.state.error ? (
								<div
									display="block"
									word-wrap="break-word"
									className="alert"
									style={{
										padding: "5px",
										color: "red",
										display: "block"
									}}
								>
									{`${this.state.errorMessage}`}
								</div>
							) : null}
							{
								// end dissplaying error message
							}

							<div
								className="components-placeholder__learn-more"
								style={{ display: "block" }}
								display="block"
							>
								<ExternalLink>
									<a
										href="https://wordpress.org/support/article/embeds/"
										target="_blank"
										rel="external noreferrer noopener"
									>
										Learn more about embeds
										<span class="screen-reader-text">
											(opens in a new tab)
										</span>
									</a>
								</ExternalLink>
							</div>
						</div>
					</Placeholder>
					<BlockControls>
						<BlockAlignmentToolbar
							value={this.props.attributes.block_alignment}
							onChange={new_val => {
								this.props.setAttributes({
									block_alignment: new_val
								});
							}}
						/>
					</BlockControls>
				</div>
			);
		}
	}
	// ==================================================
	GetVideoPlayerInfo = async (VID, R) => {
		console.log("GetVideoPlayerInfo running", VID);
		window // window === whe whole dom, used to get webService script.
			.WebService("https://ezwp.tv/VideoServices")
			.GetVideoGet(
				VID,
				this.state.responceType
			).onResult = async result => {
			console.log(result.StatusMessage, " this is results");
			if ((await result.Object) === null) {
				console.log("Error! Not able to get Video.");
				this.setState({
					errorMessage: "Error! Unable to get video, maybe bad link",
					error: true
				});
			} else {
				try {
					let TempIframeCode = await result.Object.Share.IFrameCode.toString();

					this.setState({ finalIframeCode: TempIframeCode });
					this.setState({ renderIframeR: true });

					// Getting responsive iframe URL
					await this.GetResponsiveCode(
						TempIframeCode.split('"')[1],
						TempIframeCode.split("w=")[1].split("&")[0],
						TempIframeCode.split("h=")[1].split('"')[0]
					);
					// Getting static iframe URL
					await this.GetStaticCode(TempIframeCode.split('"')[1]);
					this.props.setAttributes({
						displayIframe: true
					});
				} catch (err) {
					console.log("Error! ", err.message);
					this.setState({
						errorMessage:
							"Error! Unable to get video, maybe bad link",
						error: true
					});
				}
			}
		};
	};
	//======================================================
	GetChannelPlayerInfo = async (CID, R) => {
		console.log(CID, "GetChannelPlayerInfo", R);

		window // window === the whole dom, used to get webService script.
			.WebService("https://ezwp.tv/VideoServices")
			.GetChannelGet(
				CID,
				this.state.responceType // setting what kind of response the users wants from EZWebPlayer web script.
			).onResult = async result => {
			if ((await result.Object) === null || undefined) {
				console.log("Error! Not able to get Video.");
				this.setState({
					errorMessage: "Error! Unable to get video, maybe bad link",
					error: true
				});
			} else {
				try {
					let TempIframeCode = await result.Object.Share.IFrameCode.toString();
					this.setState({ finalIframeCode: TempIframeCode });

					// Getting responsive iframe URL
					await this.GetResponsiveCode(
						TempIframeCode.split('"')[1],
						TempIframeCode.split("w=")[1].split("&")[0],
						TempIframeCode.split("h=")[1].split('"')[0]
					);
					// Getting static iframe URL
					await this.GetStaticCode(TempIframeCode.split('"')[1]);
					this.props.setAttributes({
						displayIframe: true
					});
				} catch (err) {
					console.log("Error! ", err);
					this.setState({
						errorMessage:
							"Error! Unable to get video, maybe bad link",
						error: true
					});
				}
			}
		};
	};
	//======================================================
	initEmbed = e => {
		if (e) {
			e.preventDefault();
		}
		this.SplitingLink();
	};
	SplitingLink = () => {
		// SplitingLink takes the users input and determs weather it is a channal or video
		this.props.setAttributes({ responsiveType: true });
		// needs to be changed to a ref
		if (document.querySelector(".input-text")) {
			this.props.setAttributes({
				videoURL: (this.state.videoURL = document.querySelector(
					".input-text"
				).value)
			});
		}

		console.log(this.state.videoURL, "Getting Iframe");
		//Text Area Length
		var TAL = this.state.videoURL.split(".");
		if (TAL.length == 2) {
			//https://domain.com/playerinfo
			if (TAL[1].split("/C/").length >= 2) {
				//Channel Player
				this.GetChannelPlayerInfo(
					TAL[1].split("/C/")[1],
					this.props.attributes.responsiveType
				);
			} else if (TAL[1].split("/V").length >= 2) {
				//Video Player

				this.GetVideoPlayerInfo(
					TAL[1].split("/V")[1],
					this.props.attributes.responsiveType
				);
			}
		} else if (TAL.length == 3) {
			//https://cname.domain.com/playerinfo
			if (TAL[2].split("/C/").length >= 2) {
				//Channel Player

				this.GetChannelPlayerInfo(
					TAL[2].split("/C/")[1],
					this.props.attributes.responsiveType
				);
			} else if (TAL[2].split("/V").length >= 2) {
				//Video Player

				this.GetVideoPlayerInfo(
					TAL[2].split("/V")[1],
					this.props.attributes.responsiveType
				);
			} else {
				console.log("can not use this link");
			}
		} else {
			this.setState({
				error: true,
				errorMessage: "Please enter link from EZWebPlayer"
			});
		}
	};

	//======================================================
	componentDidMount() {
		// loading both webservice script and Jquery
		// jquery is used inside of webservice script and must be loaded
		const EZWebScript = document.createElement("script");
		EZWebScript.type = "text/javascript";
		EZWebScript.src = "https://ezwp.tv/Scripts/webService.js";
		EZWebScript.async = false;
		document.head.appendChild(EZWebScript);
		console.log(EZWebScript);

		const de = document.createElement("script");
		de.type = "text/javascript";
		de.src = "https://code.jquery.com/jquery-3.5.1.min.js";
		de.async = false;
		document.head.appendChild(de);
		console.log(de);

		EZWebScript.onload = () => console.log("script loaded");
		de.onload = () => console.log("JQuer is loaded");
	}
	// ==================================================
}

export default App;
