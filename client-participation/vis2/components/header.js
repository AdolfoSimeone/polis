import React from "react";
import _ from "lodash";
import Logo from "./hexLogo";
import Gear from "./gear";

class Header extends React.Component {
  render() {
    return (
      <div class="header">
        {this.props.is_embedded ? "" : <Logo/>}
        {this.props.is_owner ? <Gear conversation_id={this.props.conversation_id}/> : ""}
      </div>
    )
  }
}

export default Header;
