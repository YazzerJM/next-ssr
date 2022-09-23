import Head from "next/head";
import Container from "../components/Conteiner";
import { Navigation } from "../components/Navigation";



const About = () => {

    return (
        <Container>
            <Head>
                <title>Next.js Project - About</title>
            </Head>
            <h1>About</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto doloribus, 
                consectetur explicabo optio ipsa dolorem necessitatibus. Tenetur nobis, blanditiis 
                iste minus possimus voluptas, consequatur esse soluta labore laborum doloremque veniam.
            </p>
        </Container>
    )
}

export default About;