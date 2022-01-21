import React, { useState, useEffect } from "react"
import { useSpring } from "react-spring"
import rayShiprock from "../static/ray atop shiprock.jpg"
// import rayShiprockWide from "../static/ray atop shiprock wide.jpeg"
import { HomepageCenteredFullPageFlexContainer, NewTab, scrollToTop } from '../ReusableComponents'
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"

function HomePage(props) {
  const [reverse, setReverse] = useState(false)
  const [cancel, setCancel] = useState(false)

  useEffect(() => {
    setCancel(false)
    return () => {
      setCancel(true)
    }
  })
  const animatedStyles = useSpring({
    from: { opacity: 0.5, color: "#FF69B4", },
    to: { opacity: 0.8, color: "#124563", },
    reverse: reverse,
    cancel: cancel,
    onRest: () => { setReverse(!reverse) },
    config: {
      mass: 1,
      tension: 500,
      friction: 6,
    },
  })
  return (
    <div className="homepage">
      <Helmet>
        <meta charset="utf-8" />
        <title>raidsrc.me</title>
        <meta name="description" content="The personal website belonging to, built by, designed by, deployed by, and maintained by: raidsrc." />
      </Helmet>
      <div className="mb-20">
        <div className="w-full py-12 md:py-16 md:pt-0 lg:py-0 flex justify-center">
          <img className="h-112 w-full object-cover sm:h-50vh smmd:hidden" src={rayShiprock} />
          <img className="hidden w-screen h-screen smmd:block smmd:object-cover smmd:object-center max-h-h-wqhd w-wqhd:hidden " src={rayShiprock} />
        </div>
        <HomepageCenteredFullPageFlexContainer>
          <img className="hidden w-wqhd:block object-cover object-center w-full my-20 shadow-lg " src={rayShiprock} />
          {/* <animated.div style={animatedStyles}>
                   <span className="text-2xl">This is the Home Page!!!!!!! !!!!!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!</span>
                </animated.div> */}
          <h1 className="text-xl sm:text-2xl 2xl:text-3xl text-white mb-5">
            <span className="font-semibold text-2xl sm:text-3xl 2xl:font-bold 2xl:text-4xl">H</span>ey. I'm Ray, and this is my personal website. Welcome.
          </h1>
          <p className="homepage-paragraph text-black">
            Through a combination of obsessive self-teaching and university instruction, I learned a ton about web development and built this site myself during the summer of 2021 with the help of some modern web dev technology and a generous serving of elbow grease. The work was worth it. I have now carved a little space out of the Web that belongs completely to me (mostly).
          </p>
          <p className="homepage-paragraph">
            Have a look around! I'm sure you'll find something worth your time. You can read through a short autobiographical exhibit about me on the <span className="inline-red-bg-link"><Link to="/about" onClick={scrollToTop}>About</Link></span> page. You can view my résumé on the <span className="inline-red-bg-link"><Link to="/resume" onClick={scrollToTop}>Résumé</Link></span> page. If you want to know where you can contact me, head over to the <span className="inline-red-bg-link"><Link to="contact" onClick={scrollToTop}>Contact</Link></span> page. You can look at my work on the <span className="inline-red-bg-link"><Link to="links" onClick={scrollToTop}>Stuff I've Made</Link></span> page. And if you want to learn about how I built this site, check out the <span className="inline-red-bg-link"><Link to="siteinfo" onClick={scrollToTop}>Site Info</Link></span> page.
          </p>
          <p className="homepage-paragraph text-black">
            Enjoy your stay.
          </p>
        </HomepageCenteredFullPageFlexContainer>
      </div>
    </div >
  )
}

export default HomePage