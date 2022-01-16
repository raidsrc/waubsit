import React, { useEffect, useRef, useState } from "react"
import { CenteredFullPageFlexContainer, NewTab } from '../ReusableComponents'
import comingSoon from "../static/coming_soon.png"
import bandcampImg from "../static/bandcamp_screenie.png"
import blogImg from "../static/sneak_img_blog.png"
import landingImg from "../static/sneak_img_landing.png"
import lectureImg from "../static/sneak_img_lecture (Small).png"
import rewriteImg from "../static/sneak_img_rewrite_1.jpg"
import shopImg from "../static/sneak_img_shop.png"
import tractivityImg from "../static/sneak_img_tractivity.png"
import virovekImg from "../static/sneak_img_virovek_1.png"
import ytImg from "../static/sneak_img_yt.png"
import { useSpring, animated } from "react-spring"
import { config } from "react-transition-group"
import { useMeasure } from "react-use"

function DesktopLinkBlockWordsDiv(props) {
  return (
    <div className=" w-9/12">
      <DesktopLinkBlockTitleSpan title={props.title} />
      <br />
      {props.children}
    </div>
  )
}
function DesktopLinkBlockImgDiv(props) {
  return (
    <div className="flex w-64 flex-col justify-center ">
      <img src={props.imgSrc} className={"w-full " + props.imgClassName} />
    </div>
  )
}
function DesktopLinkBlockTitleSpan(props) {
  return (
    <span className="underline ">{props.title}</span>
  )
}

function WithinMobileLinkBlock(props) {
  const [ref, { height }] = useMeasure()
  const openUp = props.openUp
  const setOpenUp = props.setOpenUp
  const contentHeight = props.contentHeight
  const setContentHeight = props.setContentHeight
  const defaultHeight = props.defaultHeight
  const openUpProps = useSpring({
    height: openUp ? `${contentHeight + 30}px` : defaultHeight,
    marginBottom: openUp ? 10 : 5,
    config: {
      mass: 1,
      tension: openUp ? 100 : 140,
      friction: 25,
    },
  })
  const opacityProps = useSpring({
    opacity: openUp ? 1 : 0,
    config: {
      mass: 0.1,
      tension: openUp ? 40 : 170,
      friction: openUp ? 20 : 15,
    },
  })
  useEffect(() => {
    setContentHeight(height)
    window.addEventListener("resize", setContentHeight(height))
    return window.removeEventListener("resize", setContentHeight(height))
  }, [height])

  return (
    <animated.div className="overflow-hidden " style={openUpProps}>
      <animated.div style={opacityProps}>
        <div ref={ref} >
          <div className="py-4">
            <img src={props.imgSrc} className="w-8/12 sm:w-6/12 max-w-sm" />
          </div>
          <div className="">
            {props.children}
          </div>
          <div className="mt-6 mb-2 text-center">
            <button>
              <NewTab href={props.href} className="no-underline hover:opacity-100 active:opacity-100 px-6 py-3 border border-gray-800 rounded-full hover:bg-red-100 duration-300 active:bg-red-200 ">
                Go
              </NewTab>
            </button>
          </div>
        </div>
      </animated.div>
    </animated.div>
  )
}

function LinkBlock(props) {
  const [openUp, setOpenUp] = useState(false)
  const defaultHeight = "0px"
  const [contentHeight, setContentHeight] = useState(defaultHeight)
  const [rotated, setRotated] = useState(false)
  const caretRotationProps = useSpring({
    transform: rotated ? "rotate(90deg)" : "rotate(0deg)",
    config: {
      mass: 1,
      tension: 120,
      friction: 20,
    },
  })

  return (
    <p className="links-paragraph ">

      {/* this NewTab component is only visible on desktop */}
      <NewTab className="no-underline hidden smmd:inline-block " href={props.href}>
        <div className="links-page-link-container-div">
          <DesktopLinkBlockWordsDiv title={props.title}>{props.children}</DesktopLinkBlockWordsDiv>
          <DesktopLinkBlockImgDiv imgSrc={props.imgSrc} imgClassName={props.imgClassName} />
        </div>
      </NewTab>

      {/* whereas this div here is only visible smaller than desktop */}
      <div className="text-lg smmd:hidden relative">
        <button className="underline underline-offset-2 text-left z-30 relative" onClick={() => { setOpenUp(prev => !prev); setRotated(prev => !prev) }}>
          <div className="flex justify-start items-center">
            <animated.div style={caretRotationProps}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </animated.div>
            <div className="px-1">
              {props.title}
            </div>
          </div>
        </button>
      </div>

      <div className="smmd:hidden">
        <WithinMobileLinkBlock href={props.href} imgSrc={props.imgSrc} openUp={openUp} setOpenUp={setOpenUp} contentHeight={contentHeight} setContentHeight={setContentHeight} defaultHeight={defaultHeight}>
          {props.children}
        </WithinMobileLinkBlock>
      </div>
    </p>
  )
}

function OtherLinkBlock(props) {
  return (
    <LinkBlock title={props.title} href={props.href} imgSrc={props.imgSrc}>
      {props.children}
    </LinkBlock>
  )
}

function LinksPage(props) {

  return (
    <div className="links-page">

      <CenteredFullPageFlexContainer>
        <h1 className="mb-5 px-2">
          Links to Selected Projects & Work
        </h1>

        <div className="mb-10 md:mb-20 ">
          <LinkBlock title="Raid" href="https://www.youtube.com/c/raidsrc" imgSrc={ytImg}>My YouTube channel, where I upload music content and other short videos. Music content includes covers, rearrangements, original compositions, and tutorials. Other short videos include school projects, expository content, guides, and cinematic TV features.
          </LinkBlock>

          <LinkBlock title="Rude Custard" href="https://rudecustard.bandcamp.com" imgSrc={bandcampImg} >My BandCamp page, where I release music officially. I play piano and drums and know my way around a DAW. Expect an eclectic blend of jazz, hip-hop, rock, VGM, and dubstep. My music is available on almost all popular music platforms (Spotify, Apple Music, YouTube Music, etc.) but I'm linking my BandCamp page because BandCamp is <span className="font-bold">simply better.</span></LinkBlock>

          <LinkBlock title="Rewrite, Rebuild, Repeat" href="http://uwp101y.raidsrc.me" imgSrc={rewriteImg}>An online portfolio of essays and blog posts I wrote for <span className="italic">UWP 101Y - Advanced Composition</span>. In this body of work, I investigate the history, geography, and circumstances of two urban redevelopment schemes in the San Francisco Bay Area and examine how money, location, and collective civic action have shaped the outcomes of both projects. There's a chance they'll ask you for a password if you want to gain entry. Email me for that.</LinkBlock>

          <LinkBlock title="Tractivity" href="https://tractivity.raidsrc.me" imgSrc={tractivityImg}>A fitness-tracking web application I developed for <span className="italic">ECS 162 - Web Programming</span>. This application supports Google sign-in using OAuth 2.0, logging of past and future activity, and data visualization of recorded progress.</LinkBlock>

          <LinkBlock title="Shop 'Til You Drop" href="https://shop-til-you-drop.raidsrc.me" imgSrc={shopImg}>My final project for <span className="italic">ECS 162 - Web Programming</span>; a web application I developed for the exhibit <span className="italic">Education Should Be Free</span> at the Manetti Shrem Museum at the University of California, Davis. Use this web application to estimate the cost of education at various public universities in California using data drawn from the U.S. Department of Education's College Scorecard.</LinkBlock>

          <LinkBlock title="The Slippi Sampler" imgSrc={comingSoon} >A mechanism I engineered for transforming Super Smash Bros. Melee inputs into music. This mechanism works with any valid Slippi replay file (.slp) and outputs MIDI notes with millisecond-perfect temporal precision. <span className="bg-red-400">(coming soon!)</span></LinkBlock>

          <LinkBlock title="Virovek" href="https://virovek.com" imgSrc={virovekImg}>The website for Virovek, my family's Hayward-based gene therapy company. I played a major role in debugging the website's stylesheets. It's built on WordPress, which I'm not very familiar with, but I managed to work my magic all the same.</LinkBlock>

          <LinkBlock title="Professor Raid Schools the Masses on Smash Bros." href="https://www.youtube.com/watch?v=supYVmjGi50" imgSrc={lectureImg}>A lecture on Super Smash Bros. Melee that I presented for <span className="italic">CTS 172 - Metagaming</span>, a course all about "examining the community histories and material practices that have evolved alongside videogames as a mass medium, cultural commodity, and digital technology." This class just might be one of the most enjoyable university courses I've ever taken.</LinkBlock>
          {/* <p className="links-paragraph">A webpage I designed on my own, just for fun. I wanted to try my hand at designing a sleek, beautiful, majestic, responsive, super sick cool-ass webpage. This is the result of that work.</p> */}
          {
            // include uwp101y, tractivity, shop til you drop, slippi sampler, a cool sick design showcase, virovek.com
          }
        </div>
        <h1 className="mt-5 mb-5 px-2">
          Other Links to Other Stuff
        </h1>
        <div className="mb-10 md:mb-20">
          <OtherLinkBlock title="raidsrc.me Landing Page" href="https://landing.raidsrc.me" imgSrc={landingImg}>This page is often the first point of contact for random people who are searching for me on the internet. I usually put a link to this page somewhere on my profile on whatever site/platform I'm on. It's a sparse webpage with a list of links to where people can find me. It's also got a brief "About Me" section. Why not click and check it out for yourself?
          </OtherLinkBlock>

          <OtherLinkBlock title="Blog" href="https://blog.raidsrc.me" imgSrc={blogImg}>The obligatory "blog section" of my website, because everyone has a blog. I don't really plan on posting here very much. But setting this subdomain up gave me an excuse to learn to use Hugo and deploy a statically-generated blog.
          </OtherLinkBlock>

          {/* <p className="links-paragraph text-black">
                   A subdomain of my site that's more of an experimental design sandbox than anything else.
                   <br />raid.raidsrc.me</p> */}
        </div>
      </CenteredFullPageFlexContainer >
    </div >
  )
}

export default LinksPage