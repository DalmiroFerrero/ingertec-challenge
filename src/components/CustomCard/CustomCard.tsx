import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { BsEyeFill } from 'react-icons/bs';
import { CustomModal, CustomPopup } from '../';
import './Card.css';

interface CardProps {
  even: boolean;
  imageUrl: string;
  title: string;
  description: string;
  views?: number;
}

export const CustomCard = ({
  even,
  imageUrl,
  title,
  description,
  views = 0
}: CardProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [viewsState, setViewsState] = useState<number>(views);

  const onClickCard = () => {
    if (even) {
      setShowModal(true);
      setViewsState(viewsState + 1);
    } else {
      CustomPopup(title, imageUrl, 800, 400, () =>
        setViewsState(viewsState + 1)
      );
    }
  };

  return (
    <>
      <Card
        className="shadow"
        style={{ width: '15rem', margin: 'auto', height: '100%' }}
        onClick={() => onClickCard()}
      >
        <Card.Img
          variant="top"
          src={imageUrl}
          alt="Card image"
          style={{ height: '100%', maxHeight: '158px' }}
        />
        <Card.Body>
          <Card.Text>{description}</Card.Text>
          <div className="d-flex align-items-center justify-content-end">
            <BsEyeFill />
            <span className="ms-2">{viewsState}</span>
          </div>
        </Card.Body>
      </Card>

      {showModal && (
        <CustomModal
          showModal
          setShowModal={setShowModal}
          title={title}
          imageUrl={imageUrl}
        />
      )}
    </>
  );
};
