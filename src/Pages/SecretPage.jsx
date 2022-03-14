import React, { useEffect, useRef, useState } from "react"
import { CenteredFullPageFlexContainer, NewTab } from '../ReusableComponents'
import { useSpring, animated } from "react-spring"
import { useMeasure } from "react-use"
import { Helmet } from "react-helmet"


function SecretPage(props) {

  return (
    <div className=" text-white pb-32">
      <Helmet>
        <meta charset="utf-8" />
        <title>Secret Page!</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <CenteredFullPageFlexContainer>
        <h1 className="mb-5 px-2 text-white">
          Secret Page
        </h1>
        <p>
          Congrats. You've found the secret page. Give yourself a pat on the back.
        </p>
        
      </CenteredFullPageFlexContainer >
    </div >
  )
}

export default SecretPage