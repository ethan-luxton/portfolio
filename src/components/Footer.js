import React, { Component } from "react";

class Footer extends Component {
  render() {
  
    return (
      <footer>
        <div className="container">
          <div className="row">
           
            <div className="col">
              <div 
                onClick={() =>
                  this.props.applyPickedLanguage(
                    window.$primaryLanguage,
                    window.$secondaryLanguageIconId
                  )
                }
                style={{ display: "inline" }}
              >
                <span
                  className="iconify language-icon mr-5"
                  data-icon="twemoji-flag-for-flag-united-kingdom"
                  data-inline="false"
                  id={window.$primaryLanguageIconId}
                ></span>
              </div>
              <div 
                onClick={() =>
                  this.props.applyPickedLanguage(
                    window.$secondaryLanguage,
                    window.$primaryLanguageIconId
                  )
                }
                style={{ display: "inline" }}
              >
                <span
                  className="iconify language-icon"
                  data-icon="twemoji-flag-for-flag-poland"
                  data-inline="false"
                  id={window.$secondaryLanguageIconId}
                ></span>
              </div>
            </div>
            <div className="col">
              <div className="copyright py-4 text-center">
                <div className="container">
                  <small>
                    Copyright &copy;{" "}
                    {this.props.sharedBasicInfo
                      ? this.props.sharedBasicInfo.name
                      : "???"}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
