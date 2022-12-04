import React, {useState} from 'react'
import { CloseButton, Image, ModalContainer, ModalContent } from './styles'
import CloseIcon from './../../assets/Close.png'
import { ResponseData } from '../../pages/Characters'

type ModalProps = {
    handleModal?: () => void
    name?: string,
    image?: string,
    description?: string
}

const Modal: React.FC<ModalProps> = ({handleModal, name, image, description}) => {

  return (
    <ModalContainer>
        <ModalContent>
            <CloseButton onClick={handleModal} src={CloseIcon} />
            <Image src={image} />
            <p>{name}</p>
            <p>{description}</p>
        </ModalContent>
    </ModalContainer>
  )
}

export default Modal