import Head from "next/head";
import Link from "next/link";
import Button from "../components/Button";
import Layout from "../components/Layout";

export default function Home() {
    return (
        <Layout activePath="/">
            <Head>
                <title>Omer Demirkan - Home</title>
            </Head>

            <div className="hero-section">
                <h1>👋 Hi There! I’m Omer</h1>
                <h6>
                    Software developer, Typescript enthusiast, and third-year
                    Computer Science major at UCLA.
                </h6>
                <hr />
                <p>
                    I build scalable progressive web applications, from
                    intuitive user interfaces to API design and data modelling.
                </p>
                <div className="hero-button-section">
                    <Link href="/about-me">
                        <a>
                            <Button variant="contained" fullWidth>
                                See My Work
                            </Button>
                        </a>
                    </Link>
                    <a href="mailto:omerfarukpiano@gmail.com">
                        <Button variant="text" fullWidth>
                            Contact Me
                        </Button>
                    </a>
                </div>
            </div>

            <style jsx>{`
                .hero-section {
                    width: 100%;
                    max-width: 700px;
                }
                .hero-button-section {
                    padding: 1rem 0;
                    width: 100%;
                    max-width: 400px;
                    display: grid;
                    grid-template-columns: 50% auto;
                    grid-gap: 2rem;
                }

                @media (max-width: 500px) {
                    .hero-button-section {
                        grid-template-columns: 100%;
                    }
                }
            `}</style>
        </Layout>
    );
}
