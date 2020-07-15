import React, { Fragment } from "react";
import blockIcons from "../images/Logo.js";
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
	IconButton,
} = wp.components;

const {
	BlockIcon,
	BlockControls,
	AlignmentToolbar,
	inspectorControls,
	BlockAlignmentToolbar,
} = wp.blockEditor;

class App extends React.Component {
	constructor(attributes) {
		super(attributes);
		this.state = {
			EZWPvideoURL: this.props.attributes.EZWPvideoURL, // this may be used to hold link for btns
			EZWPresponceType: "4", // tells webservice what responsive we want
			EZWPrenderIframeR: this.props.attributes.EZWPdisplayIframe, // responsive == true, static == false
			EZWPresponsiveType: this.props.attributes.EZWPresponsiveType, // weather statice or responsive video
			EZWPinputedLink: this.props.attributes.EZWPinputedLink,
			EZWPerrorMessage: null, // If EZWPerrorMessage is not === to null then display EZWPerror message to user
			EZWPerror: false,
		};
	}
	//======================================================
	GetResponsiveCode = async (EZWPIFrameSrc, EZWPIFrameW, EZWPIFrameH) => {
		console.log("running get responsive code", EZWPIFrameW, EZWPIFrameH);
		EZWPIFrameSrc = EZWPIFrameSrc + "&r"; // requierd for responsive iframe
		//New Percent
		let NP = Math.round(
			(parseInt(EZWPIFrameH) / parseInt(EZWPIFrameW)) * 100
		);

		this.props.setAttributes({ EZWPIFrameW: EZWPIFrameW });
		this.props.setAttributes({ EZWPIFrameH: EZWPIFrameH });
		this.props.setAttributes({ EZWPresponsiveIFrameSrc: EZWPIFrameSrc });
		this.props.setAttributes({ EZWPvideoNP: NP });
	};
	GetStaticCode = (EZWPiframeSrc) => {
		console.log("running Static code");
		this.props.setAttributes({ EZWPstaticIframeSrc: EZWPiframeSrc });
	};

	//======================================================

	render() {
		if (
			// responsive iframe render
			this.props.attributes.EZWPdisplayIframe === true &&
			this.props.attributes.EZWPresponsiveType === true
		) {
			return (
				<Fragment>
					{console.log(this.props.attributes.EZWPblock_alignment)}
					<style
						dangerouslySetInnerHTML={{
							__html:
								".Video iframe,.Video object,.Video embed,.Video video,.Video img {position:absolute; width:100%; height:100%; left:0; top:0;}",
						}}
					/>
					<div
						className={`Video video responsive-iframe wp-block-embed align${this.props.attributes.EZWPblock_alignment}`}
						style={{
							position: "relative",
							width: "100%",
							height: "0",
							paddingBottom: `${this.props.attributes.EZWPvideoNP}%`,
						}}
					>
						<iframe
							className="iframe"
							src={
								this.state.EZWPIFrameSrc ||
								this.props.attributes.EZWPresponsiveIFrameSrc
							}
							scrolling="no"
							style={{
								borderWidth: "0",
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
										EZWPdisplayIframe: false,
									})
								}
							/>
						</Toolbar>

						{
							// Adds icon in toopbar to align left, center, right
							<BlockAlignmentToolbar
								value={
									this.props.attributes.EZWPblock_alignment
								}
								onChange={(new_val) => {
									this.props.setAttributes({
										EZWPblock_alignment: new_val,
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
					{console.log(this.props.attributes.EZWPblock_alignment)}
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
								{
									// may be used still
								}
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
							{__(
								"   Paste your video or channel's Quick View URL"
							)}
							{__("to display your player on your site.")}
						</div>
						<div className="components-placeholder__fieldset">
							<form>
								<input
									type="url"
									id="ezWebPlayer-link-input"
									className="input-text"
									placeholder={__("Enter URL to embed here…")}
									value={
										this.props.attributes.EZWPinputedLink
									}
									onChange={(e) => {
										this.props.setAttributes({
											EZWPinputedLink: e.target.value,
										});
									}}
									style={{
										marginTop: "0",
										marginRight: "8px",
										flex: "1 1 auto",
										flexGrow: "1",
										flexShrink: "1",
										flexBasis: "auto",
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
								{this.state.EZWPerror ? (
									<div
										display="block"
										word-wrap="break-word"
										className="alert"
										style={{
											padding: "5px",
											color: "red",
											display: "block",
										}}
									>
										{`${this.state.EZWPerrorMessage}`}
									</div>
								) : null}
								{
									// end dissplaying EZWPerror message
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
											{__("Learn more about embeds")}
											<span class="screen-reader-text">
												{__("(opens in a new tab)")}
											</span>
										</a>
									</ExternalLink>
								</div>
							</div>
						</div>
					</Placeholder>
					<BlockControls>
						<BlockAlignmentToolbar
							value={this.props.attributes.EZWPblock_alignment}
							onChange={(new_val) => {
								this.props.setAttributes({
									EZWPblock_alignment: new_val,
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
			.GetVideoGet(VID, this.state.EZWPresponceType).onResult = async (
			result
		) => {
			console.log(result.StatusMessage, " this is results");
			if ((await result.Object) === null) {
				console.log("Error! Not able to get Video.");
				this.setState({
					EZWPerrorMessage:
						"Error! Unable to get video, maybe bad link",
					EZWPerror: true,
				});
			} else {
				try {
					let EZWPTempIframeCode = await result.Object.Share.IFrameCode.toString();

					this.setState({ finalIframeCode: EZWPTempIframeCode });
					this.setState({ renderIframeR: true });

					// Getting responsive iframe URL
					await this.GetResponsiveCode(
						EZWPTempIframeCode.split('"')[1],
						EZWPTempIframeCode.split("w=")[1].split("&")[0],
						EZWPTempIframeCode.split("h=")[1].split('"')[0]
					);
					// Getting static iframe URL
					await this.GetStaticCode(EZWPTempIframeCode.split('"')[1]);
					this.props.setAttributes({
						EZWPdisplayIframe: true,
					});
				} catch (err) {
					console.log("Error! ", err.message);
					this.setState({
						EZWPerrorMessage:
							"Error! Unable to get video, maybe bad link",
						EZWPerror: true,
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
				this.state.EZWPresponceType // setting what kind of response the users wants from EZWebPlayer web script.
			).onResult = async (result) => {
			if ((await result.Object) === null || undefined) {
				console.log("Error! Not able to get Video.");
				this.setState({
					EZWPerrorMessage:
						"Error! Unable to get video, maybe bad link",
					EZWPerror: true,
				});
			} else {
				try {
					let EZWPTempIframeCode = await result.Object.Share.IFrameCode.toString();
					this.setState({ finalIframeCode: EZWPTempIframeCode });

					// Getting responsive iframe URL
					await this.GetResponsiveCode(
						EZWPTempIframeCode.split('"')[1],
						EZWPTempIframeCode.split("w=")[1].split("&")[0],
						EZWPTempIframeCode.split("h=")[1].split('"')[0]
					);
					// Getting static iframe URL
					await this.GetStaticCode(EZWPTempIframeCode.split('"')[1]);
					this.props.setAttributes({
						EZWPdisplayIframe: true,
					});
				} catch (err) {
					console.log("Error! ", err);
					this.setState({
						EZWPerrorMessage:
							"Error! Unable to get video, maybe bad link",
						EZWPerror: true,
					});
				}
			}
		};
	};
	//======================================================
	initEmbed = (e) => {
		if (e) {
			e.preventDefault();
		}
		this.SplitingLink();
	};
	SplitingLink = () => {
		// SplitingLink takes the users input and determs weather it is a channal or video
		this.props.setAttributes({ EZWPresponsiveType: true });
		// needs to be changed to a ref
		if (document.querySelector(".input-text")) {
			this.props.setAttributes({
				EZWPvideoURL: (this.state.EZWPvideoURL = document.querySelector(
					".input-text"
				).value),
			});
		}
		console.log(this.state.EZWPvideoURL, "Getting Iframe");
		//Text Area Length
		var TAL = this.state.EZWPvideoURL.split(".");
		if (TAL.length == 2) {
			//https://domain.com/playerinfo
			if (TAL[1].split("/C/").length >= 2) {
				//Channel Player
				this.GetChannelPlayerInfo(
					TAL[1].split("/C/")[1],
					this.props.attributes.EZWPresponsiveType
				);
			} else if (TAL[1].split("/V").length >= 2) {
				//Video Player

				this.GetVideoPlayerInfo(
					TAL[1].split("/V")[1],
					this.props.attributes.EZWPresponsiveType
				);
			}
		} else if (TAL.length == 3) {
			//https://cname.domain.com/playerinfo
			if (TAL[2].split("/C/").length >= 2) {
				//Channel Player

				this.GetChannelPlayerInfo(
					TAL[2].split("/C/")[1],
					this.props.attributes.EZWPresponsiveType
				);
			} else if (TAL[2].split("/V").length >= 2) {
				//Video Player

				this.GetVideoPlayerInfo(
					TAL[2].split("/V")[1],
					this.props.attributes.EZWPresponsiveType
				);
			} else {
				console.log("can not use this link");
			}
		} else {
			this.setState({
				EZWPerror: true,
				EZWPerrorMessage: "Please enter link from EZWebPlayer",
			});
		}
	};
}

export default App;
