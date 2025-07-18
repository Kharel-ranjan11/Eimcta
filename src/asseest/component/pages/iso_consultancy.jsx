// pages/Expertise.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// You can replace these with online ISO-related clause images
const isoItems = [
    {
        title: 'ISO 9001:2015 Quality Management System',
        description: 'Elevate your business with a world-class quality framework.',
        image: 'https://img.freepik.com/free-vector/quality-control-concept-illustration_114360-877.jpg',
        link: '/iso-9001',
        bgColor: '#4a90e2',
    },
    {
        title: 'ISO 45001:2018 Occupational Health & Safety',
        description: 'Ensure a safe and healthy workplace with our expert services.',
        image: 'https://img.freepik.com/free-vector/safety-at-work-concept_23-2148533645.jpg',
        link: '/iso-45001',
        bgColor: '#f25f5c',
    },
    {
        title: 'ISO 22000 & HACCP Food Safety System',
        description: 'Achieve uncompromised food safety standards.',
        image: 'https://img.freepik.com/free-vector/food-safety-concept-illustration_114360-10970.jpg',
        link: '/iso-22000',
        bgColor: '#2a9d8f',
    },
    {
        title: 'ISO 21001:2018 Educational Management',
        description: 'Optimize your educational institution’s effectiveness.',
        image: 'https://img.freepik.com/free-vector/education-concept-illustration_114360-631.jpg',
        link: '/iso-21001',
        bgColor: '#ff9900',
    },
];

export default function Expertise() {
    return (
        <Section>
            <h2 className="title">Our Expertise</h2>
            <CardGrid>
                {isoItems.map((item, idx) => (
                    <Card key={idx}>
                        <img src={item.image} alt={item.title} />
                        <Overlay className="overlay">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <StyledButton to={item.link} text="Explore" bgColor={item.bgColor} />
                        </Overlay>
                    </Card>
                ))}
            </CardGrid>
        </Section>
    );
}

// Styled Section
const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 60px 20px;
  background: linear-gradient(135deg, #3a0ca3, #4361ee);
  color: white;
  text-align: center;

  .title {
    font-size: 3rem;
    margin-bottom: 50px;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;
  background: #fff;

  &:hover {
    transform: translateY(-10px);

    .overlay {
      opacity: 1;
      transform: translateY(0);
    }
  }

  img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    display: block;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  padding: 20px;
  opacity: 0;
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transform: translateY(20px);

  h3 {
    font-size: 1.25rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.95rem;
    margin-bottom: 20px;
  }
`;

// StyledButton Component (same page)
const StyledButton = ({ to, text, bgColor = '#3d405b' }) => {
    return (
        <ButtonWrapper>
            <Link to={to} className="styled-link" style={{ backgroundColor: bgColor }}>
                <span>{text}</span>
            </Link>
        </ButtonWrapper>
    );
};

const ButtonWrapper = styled.div`
  .styled-link {
    display: inline-block;
    border-radius: 4px;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 17px;
    padding: 14px 20px;
    width: 130px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
    text-decoration: none;
    position: relative;
  }

  .styled-link span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }

  .styled-link span:after {
    content: '»';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -15px;
    transition: 0.5s;
  }

  .styled-link:hover span {
    padding-right: 15px;
  }

  .styled-link:hover span:after {
    opacity: 1;
    right: 0;
  }
`;
