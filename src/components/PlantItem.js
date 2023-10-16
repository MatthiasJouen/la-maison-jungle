import React, { useState } from 'react';
import CareScale from './CareScale';
import '../styles/PlantItem.css';

function PlantItem({ name, cover, id, light, water, price }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <li key={id} className='lmj-plant-item'>
      <span className='lmj-plant-item-price'>{price}€</span>
      <img
        src={cover}
        alt={`${name} cover`}
        className='lmj-plant-item-cover'
        onClick={openModal}
      />
      <span className='lmj-plant-item-name'>{name}</span>
      

      {isModalOpen && (
        <div className='lmj-plant-modal'>
          <div className='lmj-plant-modal-content'>
            <span className='lmj-plant-modal-close' onClick={closeModal}>
              &times;
            </span>
            <h2>{name}</h2>
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
            <p className='lmj-plant-item-name'>Prix: {price}€</p>
          </div>
        </div>
      )}
    </li>
  );
}

export default PlantItem;