import {Grid, Box} from 'theme-ui';
import BadgeCarousel from '../badges/badgeCarousel';

const PlayerInfo = ({player}) => {
    return (
        <Grid width={[200, 100, null]}>
            <Text>{player.name}</Text>
            <Text>{player.points}/{player.total}</Text>
            <BadgeCarousel />
        </Grid>
    );
}

export default PlayerInfo;