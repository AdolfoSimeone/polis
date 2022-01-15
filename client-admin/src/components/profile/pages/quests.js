import { Heading, Box, Grid, Text, Button, jsx } from 'theme-ui';
import React from 'react';
import Layout from '../../layouts/newLayout';
import UserAvatar from '../sections/personalInfo/avatar';
import BadgeCarousel from '../sections/badges/badgeCarousel';
import Leaderboard from '../sections/statsInfo/leaderboard';
import MyConversations from '../sections/statsInfo/myConversations';
import CommunityQuest from '../sections/quests/communityQuest';
class ProfileQuests extends React.Component {
    render() {
        //TODO get these using state and api
        const name = '';
        const conversationCount = 0;
        return (
            <Layout>
                <Text>Tu Alveolo</Text>
                <Grid width={[360, null]}>
                    <UserAvatar />
                    <Box>
                        <Text>Hola {name}</Text>
                        <Text>Hay {conversationCount} nuevas ideas desde tu última visita</Text>
                        <Button>votar</Button>
                    </Box>
                </Grid>
                <BadgeCarousel badges={[]} />
                <Text>Leaderboard</Text>
                <Leaderboard players={[]} />
                <BadgeCarousel badges={[]} />
                <Text>Seguí sumando puntos</Text>
                <Box>
                    <Button>testea tus conocimientos</Button>
                    <Button>vota o entrega ideas</Button>
                    <Button>invita amigos</Button>
                </Box>
                <CommunityQuest />
                <MyConversations conversations={[]} />
            </Layout>
        );
    }
}
export default ProfileQuests;