import React from 'react'

import styled from 'styled-components'


const Carte = styled.article`
cursor: pointer;
`
export default function Category(props) {

  return (
   
        <Carte>{props.category}</Carte>
  )
   
}
