import {Grid, Box} from 'theme-ui';
const facebookLogo = require('../../../../assets/fblogo.png');
const twitterLogo = require('../../../../assets/twlogo.png');
const googleLogo = require('../../../../assets/glogo.png');
const metamaskLogo = require('../../../../assets/msklogo.png');
const SocialNetworks = ({facebook, twitter, google, metamask}) => {
    return (
        <Grid columns={4}>
            {facebook && <a target="_blank" href="#">
                <img src={facebookLogo} />
            </a>}
            {twitter && <a target="_blank" href="#">
                <img src={twitterLogo} />
            </a>}
            {google && <a target="_blank" href="#">
                <img src={googleLogo} />
            </a>}
            {metamask && <a target="_blank" href="#">
                <img src={metamaskLogo} />
            </a>}
        </Grid>
    );
};

export default SocialNetworks;