import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
    return (
        <Layout activePath="/">
            <Head>
                <title>Omer Demirkan - Home</title>
            </Head>
            <h1>👋 Hi There! I’m Omer</h1>
        </Layout>
    );
}
