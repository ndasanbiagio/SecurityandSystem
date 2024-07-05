import { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.trim().length === 0) {
      tempErrors["name"] = "Tenes que poner un nombre";
      isValid = false;
    }

    if (email.trim().length === 0) {
      tempErrors["email"] = "Tenes que colocar un email";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors["email"] = "El email esta incorrecto, intentalo de nuebo";
      isValid = false;
    }

    if (message.trim().length === 0) {
      tempErrors["message"] = "Por favor, intenta ingresar un mensaje!";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Formulario enviado con éxito!!!!");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contacto</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.input}
            rows="5"
          />
          {errors.message && <span className={styles.error}>{errors.message}</span>}
        </div>
        <button type="submit" className={styles.button}>Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
