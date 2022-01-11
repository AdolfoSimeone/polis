import {Box} from 'theme-ui';
import styles from './badgeStyles';
//TODO later determine image based on badge type
const badgeImg = require('../../assets/hex.png');
const Badge = ({badgeType, level}) => {
    return (
        <Box>
            <img src={badgeImg} />
        </Box>        
    );
}