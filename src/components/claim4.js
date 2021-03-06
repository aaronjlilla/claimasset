import React, { Component } from 'react';
import GreenCheck from '../img/greencheck.png';
import GreyCheck from '../img/greycheck.png';

class Add1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }

    this.back = this.back.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }

  back() {
    this.props.goback();
  }

  nextStep() {
    this.props.gonext(this.state, "add3");
  }

  componentWillMount() {
    this.props.getsummary();
  }

  render() {
    console.log(this.props.summarydata);
    return (
      <div className="modalwrap modal_big animated slideInRight faster">
      <div className="topbar topbar_orange">
          Claim Asset <a>- Summary</a>
          <div className="closebutton" onClick={this.handleClose}>×</div>
      </div>
      <div className="modal_contentwrap">
        <div className="summarytitle">{this.props.summarydata.assetname}</div>
        <div className="summarymain">
          <div className="summarymain_top">
            <div className="summarymain_pic">
            ?
              <div>{this.props.summarydata.city}, {this.props.summarydata.county}</div>
            </div>
            <div className="summarymain_top_right">
              <div className="summarymain_top_right_left">
                <h2>Property Address</h2>
                <h3>{this.props.summarydata.address}</h3>
                <h3>{this.props.summarydata.city}, {this.props.summarydata.State}</h3>
                <h2>{this.props.summarydata.county}</h2>
                <div>
                  {this.props.summarydata.note && <h4><strong>Note -</strong> Secured by Mixed Use Commercial Property</h4>}
                </div>
              </div>
              <div className="summarymain_top_right_right">
                <div>
                  <h5>List Price</h5>
                  <h1>${(this.props.summarydata.purchaseprice) && this.props.summarydata.purchaseprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
                  <h1 className="h1extrasmall">Last Priced: 02/05/2019</h1>
                  <h6>110 Units</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="dualwrap2">
            <div className="summaryochc">
              <strong>Operating Company:</strong> {this.props.summarydata.operating}
            </div>
            <div className="summaryochc">
              <strong>Holding Company:</strong> {this.props.summarydata.holding}
            </div>
          </div>
        </div>
        <div className="summarymiddlewrap">
          <div><strong>Included in</strong> ABC123 Portfolio</div>
          <div><strong>27</strong> Assets in Portfolio</div>
        </div>
        <div className="documentswrap">
          <div className="documentitem di_uploaded di_small">
            <div>Title Insurance Policy</div>
            <img alt="" src={GreenCheck} />
          </div>
          <div className="documentitem di_uploaded di_small">
            <div>Vesting Deed</div>
            <img alt="" src={GreenCheck} />
          </div>
          <div className="documentitem di_nouploaded di_small">
            <div>Other Documents</div>
            <img alt="" src={GreyCheck} />
          </div>
          <div className="documentitem di_uploaded di_big">
            <div>State Documentation</div>
            <img alt="" src={GreenCheck} />
          </div>
          <div className="documentitem di_nouploaded di_big">
            <div>Offering Memorandum</div>
            <img alt="" src={GreyCheck} />
          </div>
        </div>
        <div className="modalfooter">
          <div className="footerextra footerapn">
            <strong>APN #: </strong> {this.props.summarydata.apns && this.props.summarydata.apns.map(item => {
              return item.value
            }).join(", ")}
          </div>
          <div className="buttonwrap">
            <div className="submitbtn submitorange top20 hvr-float-shadow" onClick={this.back}>Back</div>
            <div className="submitbtn top20 hvr-float-shadow" onClick={this.nextStep}>Claim Asset</div>
          </div>
        </div>
      </div>
  </div>
    );
  }
}

export default Add1;
