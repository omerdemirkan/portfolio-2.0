import Head from "next/head";
import Layout from "../components/Layout";

function contactMePage() {
    return (
        <Layout activePath="/contact-me">
            <Head>
                <title>Omer Demirkan - Contact Me</title>
            </Head>
        </Layout>
    );
}

export default contactMePage;
