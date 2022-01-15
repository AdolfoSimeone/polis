import {Grid, Box} from 'theme-ui';

const MyConversations = ({conversations}) => {
    return (
        <Box>
            <Grid columns={2}>
                <Text>Tus ideas</Text>
                <Box>expandir</Box>
            </Grid>
            {/** TODO use appropriate list plugin, with fetch on scroll and other events */}
        </Box>
    );
}

export default MyConversations;