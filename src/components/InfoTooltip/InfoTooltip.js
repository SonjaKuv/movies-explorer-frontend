
import React from 'react';
import './InfoTooltip.css';
import succsesImage from '../../images/Union.png';
import failedImage from '../../images/Union-red.png';

function InfoTooltip({ isOpen, status, tooltipMessage, onClose }) {

    const className = `popup info-tool popup-container ${isOpen ? "popup_opened" : ""}`

    return (
        <div className={className}>
            <button type="button" className="popup__close-icon button" aria-label="Закрыть окно" onClick={onClose}></button>
            <div className='info-tool info-tool__container'>
                <img className='info-tool__icon' alt="Иконка регистрации" src={(status) ? succsesImage : failedImage} />
                <p className='info-tool__text'>{tooltipMessage}</p>
            </div>
        </div>
    )
}

export default InfoTooltip;