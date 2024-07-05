import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Interests from '../components/Interests';
import Experience from '../components/Experience';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nicolás Dasanbiagio - Desarrollador</title>
        <meta name="description" content="Perfil de Nicolás Dasanbiagio, desarrollador con experiencia en diversas tecnologías y frameworks." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />
      <main>
        <section id="sobre-mi">
          <HeroSection 
            imageUrl="/profile.jpg" 
            title="Nicolás Dasanbiagio" 
            subtitle="Desarrollador Full Stack - Desarrollador en Integraciones"
            description="Soy un apasionado desarrollador con experiencia en diversas tecnologías y frameworks. Mi entusiasmo por el mundo IT me impulsa a aprender continuamente y a enfrentar nuevos desafíos en el desarrollo web y de integraciones."
          />
        </section>
        <section id="intereses">
          <Interests />
        </section>
        <section id="experiencia">
          <Experience />
        </section>
        <section id="contacto">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}
