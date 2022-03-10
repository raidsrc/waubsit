import React, { useState, useEffect } from "react"
import { useSpring } from "react-spring"
import rayShiprock from "../static/ray atop shiprock.jpg"
import moraineLake from "../static/20180630_103636 (2) (Medium).jpg"
import jazzDrumming from "../static/jazz drumming.jpg"
import jazzDrummingZoomed from "../static/jazz drumming zoomed.jpg"
import meOnHill from "../static/me on hill (Medium).jpeg"
// import rayShiprockWide from "../static/ray atop shiprock wide.jpeg"
import { HomepageSection, NewTab } from '../ReusableComponents'
import { Helmet } from "react-helmet"

function HomePageImageGallery(props) {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center pb-8 pt-10">

      {/* mobile view */}
      <div className="md:hidden">
        <div className="mb-6 w-full">
          <img className="shadow-md h-80 sm:h-96 object-cover w-full max-w-full" src={rayShiprock} />
        </div>
      </div>

      {/* tablet/desktop view */}
      <div className="hidden md:flex w-full justify-between">

        <div className="pr-10 w-10/12">
          <div className="w-full">
            <img src={rayShiprock} className="shadow-md w-full h-96 xl:h-128 object-cover" />
          </div>
        </div>

        <div className="md:block w-4/12">
          <div className="w-full">
            <img src={meOnHill} className="w-full h-96 xl:h-128 shadow-md object-cover" />
          </div>
        </div>

        <div className="hidden xl:block w-3/12 pl-10">
          <div className="w-full">
            <img src={moraineLake} className="w-full h-96 xl:h-128 shadow-md object-cover" />
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
    <div className="homepage h-screen bg-gray-300">
      <Helmet>
        <meta charset="utf-8" />
        <title>raidsrc.me</title>
        <meta name="description" content="The personal website belonging to, built by, designed by, deployed by, and maintained by: raidsrc." />
      </Helmet>
      <div className="mb-0">
        <HomepageSection className="bg-gray-600">
          <div className="h-screen min-h-mobile-homepage-top-section pt-12 lg:p-4 lg:min-h-fit lg:h-auto lg:my-72 flex flex-col lg:flex-row justify-center items-center lg:space-x-8 ">
            <img src={jazzDrummingZoomed} className="w-56 md:hidden shadow-md" />
            <img src={jazzDrumming} className="w-72 hidden md:inline-block shadow-md" />
            <div className="w-72 sm:w-8/12 lg:w-6/12 px-8 pt-10 lg:py-20">
              <div className="homepage-big-main-text text-2xl sm:text-3xl 2xl:text-4xl text-center text-zinc-200">
                <span className="font-semibold text-3xl md:text-4xl 2xl:text-5xl">R</span>aymond Louis Chen is a biologist, computer programmer, musician, and educator from Oakland, California.
              </div>
            </div>
          </div>
        </HomepageSection>
        <HomepageSection className="bg-gray-500">
          <div className="text-zinc-100 text-lg md:text-xl w-9/12 md:w-8/12 text-center py-12">
            He seeks to spend his life studying, working in, and contributing to all four of these fields.
          </div>
        </HomepageSection>
        <HomepageSection className="bg-gray-450">
          <div className="p-8">
            <HomePageImageGallery />
          </div>
        </HomepageSection>
        <HomepageSection className="bg-gray-300">
          <div className="p-8 w-full">
            {/* TODO: refactor index.css, group shit into components, make everything easier to maintain */}
            <div className="text-lg md:text-xl mt-2 lg:mt-8 pb-32">
              <span className="text-gray-800">He designed and built this website.</span>
              <br /><br />
              <span className="text-gray-900">Interested parties may find his uncut, unedited resume <NewTab href="https://raidsrc.github.io/static/resume-2022-jan-uncut.pdf" className="">here.</NewTab></span>
            </div>
          </div>
        </HomepageSection>
      </div>
    </div >
  )
}

export default HomePage