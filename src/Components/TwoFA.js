import React from "react";
import './styles/twoFA.css'
function TwoFA({ authenticated }) {
  return (
    <div className="two_fa_box">
      <header className="header_two_fa"><h1>2FA Authentication</h1></header>
      <div className="main_body_two_fa">
        <div className="main_body_two_fa_1">
          <h3>instructions!!</h3>
          <ol>
            <li>Download <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_IN&gl=US" target="_blank" ><span className="link_Style"><b>Google Authentication</b></span></a> on your mobile </li>
            <li>
              Crete a new account with Setup key method.
            </li>
            <li>
              Provide the required details (name/secret key).
            </li>
            <li>
              Select the time based authentication.
            </li>
            <li>
              Submit the generated key in the form.
            </li>
          </ol>
          <br/>
          <h4>Secret Tokens</h4>
          <div className = "secret_token_css_box btn_dark">
              <input className = "secret_token_css" type="text" name="secret_Token" value="TMKQR6SDG65D4FGSDF1G6SD5FG16" readonly/>
          </div>
          <div className = "secret_token_css_box btn copy_button">
              <input className = "secret_token_submit"  value="Copy" type="submit"/>
          </div>
        </div>



        <div className="main_body_two_fa_2">
          <h4>
            Generated OTP
          </h4>
          <div className="gen-otp_container">
              <div className = "generated_otp">
                  <input className = "generated_otp_css" type="text" name="secret_Token" />
              </div>
              <div className = "secret_token_css_box btn copy_button">
                  <input className = "secret_token_submit"  value="Authenticate User" type="submit"/>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoFA;
