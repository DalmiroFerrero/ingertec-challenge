import React, { useState } from 'react';
import { useBootstrapBreakpoint } from '../../utils';
import data from '../../data/CardsData.json';
import { Button, Container, Row } from 'react-bootstrap';
import { CustomCard } from '../../components';

interface Card {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

export const Home = () => {
  const [textareaData, setTextareaData] = useState('');
  const infoCards: Card[] = data;
  const isXs = useBootstrapBreakpoint('xs');

  const handleSubmitLoadTextarea = async () => {
    await fetch('home.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setTextareaData(data.texto);
      })
      .catch((error) => console.log(`error`, error));
  };

  return (
    <div
      className={`container d-flex flex-column align-items-center justify-content-center ${
        !isXs && 'vh-100'
      }`}
    >
      <div className="mb-5">
        <h1 className="display-1 text-center">IngerTec Challenge</h1>
      </div>
      <Container
        className="d-flex align-items-center mb-5"
        style={{ maxWidth: '1500px' }}
      >
        <Row
          className="d-flex justify-content-between"
          style={{ maxWidth: '100%' }}
        >
          {infoCards.map((card, index) => (
            <div className="col-sm-5 col-lg-4 col-xl-2 mb-3">
              <CustomCard
                even={(index - 1) % 2 === 0}
                imageUrl={card.imageUrl}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </Row>
      </Container>
      <div className="d-flex align-items-center">
        <div>
          <div
            style={{ width: '100%' }}
            className="d-flex justify-content-center mb-3"
          >
            <Button variant="primary" onClick={handleSubmitLoadTextarea}>
              Cargar Texto
            </Button>
          </div>
          <textarea
            className="form-control"
            rows={4}
            value={textareaData}
            style={{ width: '500px', resize: 'none' }}
          ></textarea>
        </div>
      </div>
    </div>
  );
};
