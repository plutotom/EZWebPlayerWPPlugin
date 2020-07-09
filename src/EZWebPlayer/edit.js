import React, { Fragment } from "react";
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
					{
						// if the player is responsive and aligned it does not work, we force it to be centered if responsive
					}
					{/* {this.props.setAttributes({ block_alignment: "center" })} */}
					{console.log(this.props.attributes.block_alignment)}
					{console.log(
						"displaying responsive iframe html",
						this.props.attributes
					)}
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
						// edit url btn
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
							// Aligns content
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

					{
						// Side bar settings
					}
					{/* <InspectorControls>
						<PanelBody>
							<PanelRow>
								{this.props.block_alignment === "left" ||
								"right" ||
								"full" ? (
									<div>
										<ToggleControl
											id={"toggle-responsive"}
											label="Responsive"
											checked={
												this.props.attributes
													.responsiveType
											} // this.state.responsiveType === props.attrubuts.responsiveType
											onChange={() => {
												this.props.setAttributes({
													responsiveType: !this.props
														.attributes
														.responsiveType
												});
											}}
										></ToggleControl>
										<p>
											Automatically adjusts the player
											size for different screen sizes and
											viewports.
											{console.log(
												this.props.attributes
													.block_alignment,
												" Alignment direction"
											)}
										</p>
									</div>
								) : null}
							</PanelRow>
						</PanelBody>
					</InspectorControls> */}
				</Fragment>
			);
		}
		// if (
		// 	// static iframe render

		// 	this.props.attributes.displayIframe === true &&
		// 	this.props.attributes.responsiveType === false
		// ) {
		// 	return (
		// 		<Fragment>
		// 			{console.log(
		// 				"displaying static iframe html",
		// 				this.props.attributes
		// 			)}
		// 			<div
		// 				className={`wp-block-embed align${this.props.attributes.block_alignment}`}
		// 			>
		// 				<iframe
		// 					src={this.props.attributes.staticIframeSrc}
		// 					style={{
		// 						borderWidth: "0",
		// 						width: `${this.props.attributes.IFrameW}px`,
		// 						height: `${this.props.attributes.IFrameH}px`
		// 					}}
		// 					scrolling="no"
		// 					allowFullScreen=""
		// 				></iframe>
		// 			</div>
		// 			{
		// 				// edit url btn
		// 			}
		// 			<BlockControls>
		// 				<Toolbar>
		// 					<IconButton
		// 						// this is the edit iframe button
		// 						align="true"
		// 						label="Edit URL"
		// 						icon="edit"
		// 						className="EZWebplayer-edit-btn"
		// 						onClick={() =>
		// 							this.props.setAttributes({
		// 								displayIframe: false
		// 							})
		// 						}
		// 					/>
		// 				</Toolbar>
		// 				<BlockAlignmentToolbar
		// 					value={this.props.attributes.block_alignment}
		// 					onChange={new_val => {
		// 						this.props.setAttributes({
		// 							block_alignment: new_val
		// 						});
		// 					}}
		// 				/>
		// 			</BlockControls>
		// 			{
		// 				// Side bar settings
		// 			}
		// 			<InspectorControls>
		// 				<PanelBody>
		// 					<PanelRow>
		// 						{this.props.attributes.block_alignment ===
		// 							"left" ||
		// 						"right" ||
		// 						"full" ? (
		// 							<div>
		// 								<ToggleControl
		// 									id={"toggle-responsive"}
		// 									label="Responsive"
		// 									checked={
		// 										this.props.attributes
		// 											.responsiveType
		// 									} // this.state.responsiveType === props.attrubuts.responsiveType
		// 									onChange={() => {
		// 										this.props.setAttributes({
		// 											responsiveType: !this.props
		// 												.attributes
		// 												.responsiveType
		// 										});
		// 									}}
		// 								></ToggleControl>

		// 								{console.log(
		// 									this.props.attributes
		// 										.block_alignment,
		// 									" Alignment direction"
		// 								)}
		// 							</div>
		// 						) : (
		// 							<div>
		// 								{/* <Disabled>
		// 									<ToggleControl
		// 										id={"toggle-responsive"}
		// 										label="Responsive"
		// 										checked={
		// 											this.props.attributes
		// 												.responsiveType
		// 										} // this.state.responsiveType === props.attrubuts.responsiveType
		// 										onChange={() => {
		// 											this.props.setAttributes({
		// 												responsiveType: !this
		// 													.props.attributes
		// 													.responsiveType
		// 											});
		// 										}}
		// 									></ToggleControl>
		// 								</Disabled> */}
		// 							</div>
		// 						)}
		// 					</PanelRow>
		// 					<p>
		// 						Automatically adjusts the player size for
		// 						different screen sizes and viewports.
		// 					</p>
		// 				</PanelBody>
		// 			</InspectorControls>
		// 		</Fragment>
		// 	);
		// }
		else {
			return (
				// Input Form
				<div>
					{console.log(this.props.attributes.block_alignment)}
					{console.log(
						"displaying input html",
						this.props.attributes,
						this.state
					)}

					<div>
						<Placeholder>
							<div className="components-placeholder__label">
								<span
									style={{ color: "rgb(255, 0, 0)" }}
									className="editor-block-icon block-editor-block-icon has-colors"
								>
									<img
										width="24"
										height="24"
										viewBox="0 0 24 24"
										role="img"
										aria-hidden="true"
										focusable="false"
										src="https://www.ezwebplayer.com/wp-content/uploads/2020/01/favicon-150x150.png"
									></img>
								</span>
								{__("EZWebPlayer Quick View URL")}
							</div>
							<div className="components-placeholder__instructions">
								Paste your video or channel's Quick View URL
								<br /> to display your player on your site.
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
										console.log(e.target.value);
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
									isLarge
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

					console.log(TempIframeCode);
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
			console.log(result, " this is results");
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
		// SplitingLink takes the users input and determs wether it is a channal or video
		// e is event
		this.props.setAttributes({ responsiveType: true });
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
			console.log(TAL + " this is TAL 2");
			//https://domain.com/playerinfo
			if (TAL[1].split("/C/").length >= 2) {
				//Channel Player
				console.log(
					TAL[1].split("/V")[1] + " this is TAL 2 channel player"
				);
				this.GetChannelPlayerInfo(
					TAL[1].split("/C/")[1],
					this.props.attributes.responsiveType
				);
			} else if (TAL[1].split("/V").length >= 2) {
				//Video Player
				console.log(
					TAL[1].split("/V")[1] + " this is TAL 2 video player"
				);

				this.GetVideoPlayerInfo(
					TAL[1].split("/V")[1],
					this.props.attributes.responsiveType
				);
			}
		} else if (TAL.length == 3) {
			//https://cname.domain.com/playerinfo
			if (TAL[2].split("/C/").length >= 2) {
				//Channel Player
				console.log("almost last");
				this.GetChannelPlayerInfo(
					TAL[2].split("/C/")[1],
					this.props.attributes.responsiveType
				);
			} else if (TAL[2].split("/V").length >= 2) {
				//Video Player
				console.log("last one");
				this.GetVideoPlayerInfo(
					TAL[2].split("/V")[1],
					this.props.attributes.responsiveType
				);
			} else {
				console.log("can not use this link");
			}
		} else {
			console.log("other broken place");
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
