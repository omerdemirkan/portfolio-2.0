import Head from "next/head";
import Layout from "../components/Layout";

function aboutMePage() {
    return (
        <Layout activePath="/about-me">
            <Head>
                <title>Omer Demirkan - About Me</title>
            </Head>
        </Layout>
    );
}

export default aboutMePage;
