import React, { useState, useEffect } from "react"
import { useSpring } from "react-spring"
import rayShiprock from "../static/ray atop shiprock.jpg"
import bananas2 from "../static/bananas2.jpg"
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
      {/* TODO: Put resume link on homepage and remove resume from navbar, remove about site page because it makes the site look unprofessional as fuck */}
      <Helmet>
        <meta charset="utf-8" />
        <title>raidsrc.me</title>
        <meta name="description" content="The personal website belonging to, built by, designed by, deployed by, and maintained by: raidsrc." />
      </Helmet>
      <div className="mb-20">
        <div className="flex justify-center">
          <div className="w-full flex flex-col md:flex-row justify-center items-center p-10 pt-24 lg:px-20 max-w-6xl">

            <div className="mb-6 md:mb-0 md:h-96 w-full md:w-8/12">
              <img className="shadow-md w-full max-w-full md:h-full md:object-cover md:object-center" src={rayShiprock} />
            </div>

            {/* this one shows smaller than medium */}
            <div className="flex flex-row justify-between md:hidden w-full space-x-4">
              <img src={bananas2} className="w-2/4 object-contain shadow-md" />
              <img src={bananas2} className="w-2/4 object-contain shadow-md" />
            </div>
            {/* this one shows when larger than medium */}
            <div className="hidden md:flex flex-col items-end justify-between h-96 md:w-4/12 lg:w-3/12 md:max-w-sm lg:max-w-md pl-10 lg:pl-16">
              <img src={bananas2} className="w-full md:w-56 lg:w-72 object-contain shadow-md" />
              <img src={bananas2} className="w-full md:w-56 lg:w-72 object-contain shadow-md" />
            </div>

          </div>
        </div>

        <HomepageCenteredFullPageFlexContainer>
          <img className="hidden w-wqhd:block object-cover object-center w-full my-20 shadow-lg " src={rayShiprock} />
          {/* <animated.div style={animatedStyles}>
                   <span className="text-2xl">This is the Home Page!!!!!!! !!!!!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!</span>
                </animated.div> */}
          <h1 className="text-xl sm:text-2xl 2xl:text-3xl text-white mb-5">
            <span className="font-semibold text-2xl sm:text-3xl 2xl:font-bold 2xl:text-4xl">R</span>aymond Louis Chen is a molecular biologist, computer scientist, and musician from Oakland, CA.
          </h1>
          <p className="homepage-paragraph text-black">
            asdfasdfasdfasdfasdfasdf. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, modi dicta suscipit eligendi consequatur recusandae repudiandae pariatur quaerat sunt maiores temporibus quae veniam totam inventore illo voluptatibus harum error cupiditate.
          </p>
          <p className="homepage-paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis ab velit nisi illum facere quaerat quod officiis similique ipsum sunt natus, accusantium nostrum aliquid excepturi dicta consequatur iure cumque quas.
          </p>
          <p className="homepage-paragraph text-black">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non animi quod repudiandae rem atque placeat doloremque, natus rerum voluptate dolores aliquam iste, ut praesentium illo velit sunt cum? Aut molestias quis officiis optio laborum, maiores accusantium itaque ipsam cum. Officiis sunt beatae dolor! Labore voluptatum nobis voluptates laborum laudantium repellendus?
          </p>
        </HomepageCenteredFullPageFlexContainer>
      </div>
    </div >
  )
}

export default HomePage