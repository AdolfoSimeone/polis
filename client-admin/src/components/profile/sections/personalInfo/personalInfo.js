import {Box, Grid} from 'theme-ui';

const PersonalInfo = ({username, name, email}) => {
    return (
        <Box>
            <Grid width={[360, null]}>
                <Box>username:</Box>
                <Box>cambiar</Box>
                <Box>{username}</Box>
            </Grid>
            <Grid width={[360, 120, 120]}>
                <Box>Nombre (opcional)</Box>
                <Box>cambiar</Box>
                <Box>borrar</Box>
                <Box>{name}</Box>
            </Grid>
            <Box>
                <Grid width={[360, null]}>
                    <Box>correo</Box>
                    <Box>cambiar</Box>
                </Grid>
                <Box>{email}</Box>
            </Box>
            <Box>
                <Grid width={[360, null]}>
                    <Box>clave</Box>
                    <Box>cambiar</Box>
                </Grid>
                <Box>***********</Box>
            </Box>
        </Box>
    );
}

export default PersonalInfo;