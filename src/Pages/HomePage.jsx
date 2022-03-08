import React, { useState, useEffect } from "react"
import { useSpring } from "react-spring"
import rayShiprock from "../static/ray atop shiprock.jpg"
import bananas2 from "../static/bananas2.jpg"
import meOnHill from "../static/me on hill (Medium).jpeg"
// import rayShiprockWide from "../static/ray atop shiprock wide.jpeg"
import { HomepageCenteredFullPageFlexContainer } from '../ReusableComponents'
import { Helmet } from "react-helmet"

function HomePageImageGallery(props) {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center pt-24 pb-8 ">

      {/* mobile view */}
      <div className="md:hidden">
        <div className="mb-6 w-full">
          <img className="shadow-md h-112 object-cover w-full max-w-full" src={rayShiprock} />
        </div>
        {/* <div className="flex flex-row justify-between space-x-4">
          <img src={bananas2} className="w-2/4 object-contain shadow-md" />
          <img src={bananas2} className="w-2/4 object-contain shadow-md" />
        </div> */}
      </div>

      {/* tablet/desktop view */}
      <div className="hidden md:flex w-full justify-between">
        <div className="h-96 lg:h-128 w-9/12 pr-10 lg:pr-12">
          <img className="shadow-md w-full h-full object-cover object-center" src={rayShiprock} />
        </div>
        <div className="flex flex-col items-end justify-between w-3/12">
          <div className="w-full">
            <img src={meOnHill} className="w-full h-96 lg:h-128 shadow-md object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

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
      {/* TODO: Put resume link on homepage */}
      <Helmet>
        <meta charset="utf-8" />
        <title>raidsrc.me</title>
        <meta name="description" content="The personal website belonging to, built by, designed by, deployed by, and maintained by: raidsrc." />
      </Helmet>
      <div className="mb-20">
        <HomepageCenteredFullPageFlexContainer>

          
            <div className="md:p-0 h-screen md:h-auto md:mt-60 md:mb-36 flex justify-center items-center">
              <div className="md:w-5/12 px-8 py-20">
                <h1 className="text-xl sm:text-2xl 2xl:text-3xl text-center text-white">
                  <span className="font-semibold text-2xl sm:text-3xl 2xl:font-bold 2xl:text-4xl">R</span>aymond Louis Chen is a molecular biologist, computer programmer, and musician from Oakland, California.
                </h1>
              </div>
            </div>
          
          <HomePageImageGallery />
          <img className="hidden w-wqhd:block object-cover object-center w-full my-20 shadow-lg " src={rayShiprock} />
          {/* <animated.div style={animatedStyles}>
                   <span className="text-2xl">This is the Home Page!!!!!!! !!!!!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!</span>
                </animated.div> */}
          {/* TODO: refactor index.css, group shit into components, make everything easier to maintain */}
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