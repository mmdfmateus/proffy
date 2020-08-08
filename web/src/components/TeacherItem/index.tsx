import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/28582170?s=460&u=691bc1062d1b5760226397eb1931e971c5692279&v=4" alt="Mateus Mourão" />
            <div>
              <strong>Mateus Mourão</strong>
              <span>Programming</span>
            </div>
          </header>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mattis tellus, ac facilisis velit egestas vel.
          </p>

          <footer>
            <p>
              Cost/Hour
              <strong>R$ 50,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="WhatsApp" />
              Get in touch
            </button>
          </footer>
        </article>
  );
}

export default TeacherItem;