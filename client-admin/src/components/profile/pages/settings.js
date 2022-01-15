import { Heading, Box, Grid, Text, Button, jsx } from 'theme-ui';
import React from 'react';
import Layout from '../../layouts/newLayout';
import UserAvatar from '../sections/personalInfo/avatar';
import SocialNetworks from '../sections/personalInfo/socialNetworks';
import SettingsFlags from '../sections/settingsFlags/settingsFlags';
import PersonalInfo from '../sections/personalInfo/personalInfo';
class ProfileSettings extends React.Component {
    render() {
        return (
            <Layout>
                <Box>
                    {/** Profile picture */}
                    <Grid width={[128, null]}>
                        <UserAvatar />
                        <Box>
                            <Box>Volver a tu alveolo</Box>
                            <Box>Avatar</Box>
                            <Grid columns={2}>
                                <Box>cambiar</Box>
                                <Box>borrar</Box>
                            </Grid>
                        </Box>
                    </Grid>
                    {/** Personal info */}
                    <Text>Datos personales</Text>
                    <PersonalInfo />
                    {/* Social networks */}
                    <Text>Conectar redes</Text>
                    <SocialNetworks />
                    <Box>Conectate para ver a tus amigos y a la gente que sigues en la visualización y en otras partes de la plataforma. No publicaremos en tu línea de tiempo</Box>
                    <Text>Opciones</Text>
                    <SettingsFlags />
                    <Grid columns={2}>
                        <Box>borrar cuenta</Box>
                        <Box>volver a tu alveolo</Box>
                    </Grid>
                </Box>
            </Layout>
        );
    }
}
export default ProfileSettings;