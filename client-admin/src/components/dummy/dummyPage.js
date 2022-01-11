import {Box, Grid} from 'theme-ui';
import Layout from "../landers/lander-layout";

const DummyPage = () => {
    return (
        <Layout>
            <div style={{width: '50%'}}>
                <img src={require('../../assets/logo.png')} />
            </div>
            <div style={{width: '50%'}}>
                <p>Hola mundo</p>
            </div>
        </Layout>
    )
}

export default DummyPage;