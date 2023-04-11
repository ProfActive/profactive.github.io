import { FunctionComponent } from "react";
import Header from "../../components/Header/Header";
import LeftInformCard from "../../components/InformCards/LeftInformCard/LeftInformCard";
import RightInformCard from "../../components/InformCards/RightInformCard/RightInformCard";

import "./Eduroam.styles.css";

interface EduroamProps {}

const Eduroam: FunctionComponent<EduroamProps> = () => {
  return (
    <div className="edu-wrapper">
      <Header pageName="Eduroam" caption="Підключення" />
      <LeftInformCard step={1}>
        <>
          Переходимо на офіційний сайт Eduroam
          <div className="button">Посилання</div>
        </>
      </LeftInformCard>

      <RightInformCard step={2}>
        <>
          Завантажуємо інсталятор дотримуючись інструкцій. <br />
          <p style={{ fontSize: 12 }}>
            Android користувачам потрібно також викачати додаток geteduroam з
            PlayMarket.
          </p>
          <div className="button">geteduroam - PlayMarket</div>
        </>
      </RightInformCard>

      <LeftInformCard step={3}>
        <>
          Після завантаження інсталятора, потрібно налаштувати профіль
          конфігурації, завдяки якому студент аутентифікується в системі
          eduroam.
        </>
      </LeftInformCard>

      <RightInformCard step={4}>
        <>
          Шукаємо викачаний профіль: <br />
          <p style={{ fontSize: 12 }}>
            iOS: Налаштування - Загальні - VPN - Викачаний профіль
          </p>
          <p style={{ fontSize: 12 }}>
            Android: Відкриваємо завантажений раніше файл за допомогою
            geteduroam
          </p>
        </>
      </RightInformCard>

      <LeftInformCard step={5}>
        <>
          В ході налаштування профілю вводимо ВАШУ КОРПОРАТИВНУ електронну
          адресу та пароль від неї.
        </>
      </LeftInformCard>

      <RightInformCard step={6}>
        <>
          Готово! <br />
          <p style={{ fontSize: 12 }}>
            Просто приєднуйся до мережі Wi-Fi eduroam та користуйся :)
          </p>
        </>
      </RightInformCard>
    </div>
  );
};

export default Eduroam;
