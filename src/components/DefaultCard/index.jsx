import React from 'react'
import { Card, Email, Name, Picture } from '../DefaultCard/styles.js'

const DefaultCard = ({ name, surname, photo, email }) => {
    return (
      <Card>
        <Picture src={photo} alt='Not found'/>
        <Name>{name} {surname}</Name>
        <Email>{email}</Email>
      </Card>
    )
  }
  export default DefaultCard