import {Grid, Box} from 'theme-ui';
import Badge from './badge';
const BadgeCarousel = ({badges}) => {
    return (
        <Box>
            {/** TODO find appropriate carousel plugin to wrap this */}
            {badges.map(badge => {
                <Badge />
            })}
        </Box>
    );
}

export default BadgeCarousel;