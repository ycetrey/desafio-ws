import styled from "styled-components";

import {
  FaPhoneAlt,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Container = styled.div`
  grid-area: CardInfo;

  overflow: hidden;
  padding: 10px 20px;
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
`;

export const Profile = styled.div`
  & figure {
    float: left;
    margin-right: 20px;
    & > img {
      width: 85px;
      height: 85px;

      border-radius: 50px;
      overflow: hidden;
    }
  }
`;

export const Name = styled.div`
  font-size: 20px;
  font-weight: 400;
`;

export const Company = styled.div`
  margin: 5px;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  width: 55px;
  height: 33px;
  background: var(--light-green);
`;

export const Phone = styled.div`
  margin-top: 30px;
  display: flex;

  align-items: center;
`;

export const PhoneData = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
`;

export const PhoneIcon = styled(FaPhoneAlt)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const Mail = styled.div`
  margin-top: 10px;
  display: flex;

  align-items: center;
`;

export const MailData = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
`;

export const MailIcon = styled(MdEmail)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const Social = styled.div`
  display: flex;

  column-gap: 20px;
  justify-content: flex-end;

  & a {
    color: var(--primary);
    transition: color 0.2s;
    &:hover {
      color: var(--blue);
    }
  }
  & a[href="#"] {
    color: var(--tertiary);
  }

  font-size: 20px;
`;

export const WhatsApp = styled(FaWhatsapp)``;

export const Facebook = styled(FaFacebookSquare)``;

export const Instagram = styled(FaInstagram)``;

export const Twitter = styled(FaTwitter)``;

export const LinkedIn = styled(FaLinkedin)``;
