import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Interests from '../components/Interests';
import Experience from '../components/Experience';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nicolás Dasanbiagio - Desarrollador</title>
        <meta name="description" content="Perfil de Nicolás Dasanbiagio, desarrollador con experiencia en diversas tecnologías y frameworks." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />
      <main>
        <HeroSection 
          imageUrl="/profile.jpg" 
          title="Nicolás Dasanbiagio" 
          subtitle="Desarrollador de Frontend y Backend"
          description="Actualmente estoy liderando un equipo de desarrollo web en una empresa tecnológica."
        />
        <Interests />
        <Experience />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
