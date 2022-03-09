import React, { useState, useEffect } from "react"
import { useSpring } from "react-spring"
import rayShiprock from "../static/ray atop shiprock.jpg"
import bananas2 from "../static/bananas2.jpg"
import jazzDrumming from "../static/jazz drumming.jpg"
import jazzDrummingZoomed from "../static/jazz drumming zoomed.jpg"
import meOnHill from "../static/me on hill (Medium).jpeg"
// import rayShiprockWide from "../static/ray atop shiprock wide.jpeg"
import { HomepageSection } from '../ReusableComponents'
import { Helmet } from "react-helmet"

function HomePageImageGallery(props) {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center pb-8 pt-10">

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
      <Helmet>
        <meta charset="utf-8" />
        <title>raidsrc.me</title>
        <meta name="description" content="The personal website belonging to, built by, designed by, deployed by, and maintained by: raidsrc." />
      </Helmet>
      <div className="mb-20">
        <HomepageSection className="bg-gray-600">
          <div className="lg:p-4 h-screen lg:h-auto lg:my-72 flex flex-col lg:flex-row justify-center items-center lg:space-x-8">
            <img src={jazzDrummingZoomed} className="w-56 md:hidden shadow-md" />
            <img src={jazzDrumming} className="w-72 hidden md:inline-block shadow-md" />
            <div className="w-72 sm:w-8/12 lg:w-6/12 px-8 pt-10 lg:py-20">
              <h1 className="text-2xl sm:text-3xl 2xl:text-4xl text-center text-white">
                <span className="font-semibold text-3xl sm:text-4xl 2xl:font-bold 2xl:text-4xl">R</span>aymond Louis Chen is a molecular biologist, computer programmer, and musician from Oakland, California.
              </h1>
            </div>
          </div>
        </HomepageSection>
        <HomepageSection className="bg-gray-500">
          <div className="text-white text-lg md:text-xl w-9/12 md:w-8/12 text-center py-12">
            He is currently seeking to gain experience studying, working in, living in, and contributing to all three of those fields.
          </div>
        </HomepageSection>
        <HomepageSection>
          <div className="p-8">
            <HomePageImageGallery />
            <img className="hidden w-wqhd:block object-cover object-center w-full my-20 shadow-lg " src={rayShiprock} />
            {/* TODO: refactor index.css, group shit into components, make everything easier to maintain */}
            <div className="text-white text-lg md:text-xl">
              Interested parties may <a href="https://raidsrc.github.io/static/resume-2022-jan-uncut.pdf" className="inline-red-bg-link">find his uncut, unedited resume here</a>.
            </div>
          </div>
        </HomepageSection>
      </div>
    </div >
  )
}

export default HomePage