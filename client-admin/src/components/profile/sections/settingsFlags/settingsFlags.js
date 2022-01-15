import {Grid, Box} from 'theme-ui';
const hexagon = require('../../../../assets/hexagon.png');
const SettingsFlags = ({flags}) => {
    return (
        <Box>
            {flags.map(item => {
                <Grid width={[80, null]}>
                    <Box><img src={hexagon} /></Box>
                    <Box>{item.description}</Box>
                </Grid>
            })}
        </Box>
    )
}

export default SettingsFlags;