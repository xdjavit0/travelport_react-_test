import React from 'react'
import { Card, Email, Name, Picture } from '../DefaultCard/styles.js'

const DefaultCard = ({ name, surname, photo, email }) => {
  return (
    <Card className='CardFrame' data-testid='CardContainer'>
      <Picture className='CardPicture' data-testid='CardPhoto' src={photo} alt='Not found'/>
      <Name className='CardNameSurname' data-testid='CardName'>{name} {surname}</Name>
      <Email className='CardContact' data-testid='CardEmail'>{email}</Email>
    </Card>
  )
}
export default DefaultCard