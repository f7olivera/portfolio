import type { NextPage } from 'next'
import React from 'react'


const Resume: NextPage = () => {
  return (
    <object data='/Facundo Olivera CV.pdf'
        type='application/pdf'
        width='100%'
        height='700px' />
  )
}

export default Resume
