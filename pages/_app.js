import { RecoilRoot } from "recoil";
import { Layout } from "../global";

const App = ({ Component, pageProps }) => {
    return (
        <RecoilRoot>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </RecoilRoot>
    );
};

export default App;