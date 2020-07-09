import React, { Component, Fragment } from "react";

class test extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Fragment>
				<div>
					<span style={{ color: "rgb(255, 0, 0)" }}>
						<svg
						// width="24"
						// height="24"
						// viewBox="0 0 24 24"
						// role="img"
						// aria-hidden="true"
						// focusable="false"
						>
							<path></path>
						</svg>
					</span>
					EZWebPlayer URL
				</div>
				<div>
					Paste a link to the content you want to display on your
					site.
				</div>
				<div class="components-placeholder__fieldset">
					<form>
						<input
							className="input-text"
							type="url"
							aria-label="EZWebPlayer URL"
							placeholder="Enter URL to embed here…"
						/>
						<button
							className="submit-btn"
							type="submit"
							onClick={this.initEmbed}
						>
							Embed
						</button>
					</form>
					<div>
						<a
							href="https=//wordpress.org/support/article/embeds/"
							target="_blank"
							rel="external noreferrer noopener"
						>
							Learn more about embeds
							<span class="screen-reader-text">
								(opens in a new tab)
							</span>
						</a>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default test;
