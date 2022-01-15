import {Grid, Box} from 'theme-ui';
import PlayerInfo from './leaderboardPlayerInfo';

const Leaderboard = ({players}) => {
    return (
        <Box>
            {/** TODO use appropriate list plugin */}
            {players.map(player => {
                <PlayerInfo player={player} />
            })}
        </Box>
    );
}

export default Leaderboard;