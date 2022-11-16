import type { NextPage } from 'next'
import React from 'react'


const Resume: NextPage = () => {
  return (
    <object data='/Facundo Olivera CV.pdf'
        style={{ height: '100vh'}}
        type='application/pdf'
        width='100%'/>
  )
}

export default Resume
