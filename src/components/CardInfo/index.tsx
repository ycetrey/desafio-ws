import React from "react";

import {
  Container,
  Title,
  Profile,
  Name,
  Company,
  Status,
  Phone,
  PhoneIcon,
  PhoneData,
  Mail,
  MailData,
  MailIcon,
  Social,
  WhatsApp,
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
} from "./styles";

interface StatusProps {
  isActive: boolean;
}

interface PhoneProps {
  number?: string;
  type?: string;
}

interface MailProps {
  address?: string;
  type?: string;
}

interface SocialProps {
  whatsApp?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
}

const StatusInfo: React.FC<StatusProps> = ({ isActive }) => {
  return <Status>{isActive ? "Ativo" : "Inativo"}</Status>;
};

const PhoneInfo: React.FC<PhoneProps> = ({ number, type }) => {
  return (
    <Phone>
      <PhoneIcon />
      <PhoneData>
        <span>{number}</span>
        {type && <span>{type}</span>}
      </PhoneData>
    </Phone>
  );
};

const MailInfo: React.FC<MailProps> = ({ address, type }) => {
  return (
    <Mail>
      <MailIcon />
      <MailData>
        <span>{address}</span>
        {type && <span>{type}</span>}
      </MailData>
    </Mail>
  );
};

const SocialMedia: React.FC<SocialProps> = ({
  whatsApp,
  facebook,
  instagram,
  twitter,
  linkedin,
}) => {
  return (
    <Social>
      <a
        target="_blank"
        title={whatsApp ? "Conversar com " + whatsApp : "Link indisponível"}
        rel="noopener noreferrer"
        href={
          whatsApp
            ? "https://api.whatsapp.com/send?phone=55" +
              whatsApp.replace(/ /g, "")
            : "#"
        }
      >
        <WhatsApp />
      </a>
      <a
        target="_blank"
        title={
          facebook ? "Visitar facebook de " + facebook : "Link indisponível"
        }
        rel="noopener noreferrer"
        href={facebook ? "https://www.facebook.com/" + facebook : "#"}
      >
        <Facebook />
      </a>
      <a
        target="_blank"
        title={
          instagram ? "Visitar instagram de " + instagram : "Link indisponível"
        }
        rel="noopener noreferrer"
        href={instagram ? "https://www.instagram.com/" + instagram : "#"}
      >
        <Instagram />
      </a>
      <a
        target="_blank"
        title={twitter ? "Visitar twitter de " + twitter : "Link indisponível"}
        rel="noopener noreferrer"
        href={twitter ? "https://twitter.com/" + twitter : "#"}
      >
        <Twitter />
      </a>
      <a
        target="_blank"
        title={
          linkedin ? "Visitar linkedin de " + linkedin : "Link indisponível"
        }
        rel="noopener noreferrer"
        href={linkedin ? "https://www.linkedin.com/in/" + linkedin : "#"}
      >
        <LinkedIn />
      </a>
    </Social>
  );
};

const CardInfo: React.FC = () => {
  return (
    <Container className="box-shadow">
      <Title>Informações Gerais</Title>
      <Profile>
        <figure>
          <img src="https://www.placecage.com/85/85" alt="Customer" />
        </figure>
        <Name>Justine Robson</Name>
        <Company>Acme inc.</Company>
        <StatusInfo isActive />
        <PhoneInfo number="45 9 9555 5555" type="Celular" />
        <MailInfo address="justine@email.com" type="Trabalho" />
        <SocialMedia
          whatsApp="45 9 9555 5555"
          instagram="wealth_systems"
        ></SocialMedia>
      </Profile>
    </Container>
  );
};

export default CardInfo;
