import {Grid, Box, Button} from 'theme-ui';
const hexagon = require('../../../../assets/hexagon.png');
const CommunityQuest = ({quest}) => {
    <Grid width={[250, null]}>
        <img src={hexagon} />
        <Box>
            <Text>Quest grupal</Text>
            <Text>¡La colmena te necesita!</Text>
            <Button>participar</Button>
        </Box>
    </Grid>
}

export default CommunityQuest;