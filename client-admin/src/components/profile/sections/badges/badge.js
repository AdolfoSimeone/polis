import {Box} from 'theme-ui';
import ProgressBar from '../../../common/progressBar';
import styles from './badgeStyles';
//TODO later determine image based on badge type
const badgeImg = require('../../assets/hex.png');
const Badge = ({badgeType, level, progress}) => {
    return (
        <Box>
            <img src={badgeImg} />
            <ProgressBar progress={progress} />
        </Box>        
    );
}

export default Badge;