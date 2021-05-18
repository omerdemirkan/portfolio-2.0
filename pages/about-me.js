import Head from "next/head";
import Button from "../components/Button";
import ContentBlock from "../components/ContentBlock";
import Layout from "../components/Layout";

const education = [
    {
        title: "University of California, Los Angeles",
        subtitle: "Bachelor of Science, Computer Science",
        action: "2023 (Expected)",
    },
];

const expriences = [
    {
        title: "Software Engineer Intern",
        subtitle: "CarpeMed, Berkeley, CA (Remote)",
        items: [
            "Built on core features in mobile client of a bay area start-up in the healthcare/travel sector",
        ],
        action: "05/2021 - PRESENT",
    },
    {
        title: "Web Application Developer Intern",
        subtitle: "Orlando I. Spencer Inc., San Diego, CA (Remote)",
        items: [
            "Developed finance module for SaaS app for the aviation/education industry in Angular",
            "Implemented zero-cost improvements in query performance by using modern JavaScript features",
            "Enforced routing-friendly state management on the client-side to enable interaction between modules",
            "Prepared concise bi-weekly briefings on roadblocks in development and projections",
        ],
        action: "04/2020 - 06/2020",
    },
];

const achievements = [
    {
        title: 'Oracle: "Best Hack Using Machine Learning"',
        subtitle: "LA Hacks 2020, UCLA",
        learnMoreUrl: "https://devpost.com/software/socialsense-ai",
    },
    {
        title: 'Caltech: "Best Social Good Hack"',
        subtitle: "Hacktech 2021, Caltech",
        learnMoreUrl: "https://devpost.com/software/axess",
    },
    {
        title: 'Facebook: "Best Hack That Gives People a Voice"',
        subtitle: "Hacktech 2020, Caltech",
        learnMoreUrl: "https://devpost.com/software/journaly",
    },
];

const projects = [
    {
        title: "STEM-bound",
        subtitle:
            "Platform connecting professionals in STEM to underprivileged schools",
        items: [
            "Applies rate-limiting, origin validation and authorization using JWT and dynamic middle-wares",
            "Includes map, filter, and insertion/update of 30,000+ schools into database with admin-only endpoint",
            "Intuitive user interface mock-ups created in Figma with UI built using React and Next.js in Typescript",
        ],
        learnMoreUrl: "https://stembound.education",
    },
    {
        title: "Synonymy",
        subtitle: "Parses essays for overused words and recommends synonyms",
        items: [
            "A program that parses long-text formats for overused words and recommends synonyms",
            "Utilizes 90,000+ unique words used in over 700 billion use cases extracted from Google Books data",
            "Caches results using Redux and minimizes re-fetching data through local storage",
        ],
        learnMoreUrl: "https://github.com/omerdemirkan/synonymy",
    },
];

function aboutMePage() {
    return (
        <Layout activePath="/about-me">
            <Head>
                <title>Omer Demirkan - About Me</title>
            </Head>

            <h1 style={{ marginBottom: "0" }}>🏫 Education</h1>
            {education.map((e) => (
                <ContentBlock {...e} key={e.title} />
            ))}

            <br />
            <br />

            <h1 style={{ marginBottom: "0" }}>💼 Experience</h1>
            {expriences.map((e) => (
                <ContentBlock {...e} key={e.title} />
            ))}

            <br />
            <br />

            <h1 style={{ marginBottom: "0" }}>🏆 Achievements</h1>
            {achievements.map((a) => (
                <ContentBlock {...a} key={a.title} />
            ))}

            <br />
            <br />

            <h1 style={{ marginBottom: "0" }}>💻 Notable Projects</h1>
            {projects.map((p) => (
                <ContentBlock {...p} key={p.title} />
            ))}

            <br />
            <br />

            <div className="contact-me-section">
                <h1 style={{ marginBottom: "0" }}>Any questions?</h1>
                <h5>
                    Feel free to shoot me an email. Don't worry, I wont bite!
                </h5>
                <p> ... probably.</p>
                <a href="mailto:omerfarukpiano@gmail.com">
                    <Button>Contact Me</Button>
                </a>
            </div>

            <style jsx>{`
                .contact-me-section {
                    text-align: center;
                }
            `}</style>
        </Layout>
    );
}

export default aboutMePage;
