import React, { useState } from "react"
import { CenteredFullPageFlexContainer, NewTab } from '../ReusableComponents'
import bananas from "../static/bananas2.jpg"

function DesktopLinkBlockWordsDiv(props) {
  return (
    <div className="md:inline-block w-9/12">
      <DesktopLinkBlockTitleSpan title={props.title} />
      <br />
      {props.children}
    </div>
  )
}
function DesktopLinkBlockImgDiv(props) {
  return (
    <div className="md:flex w-64 flex-col justify-center ">
      <img src={props.imgSrc} className={"w-full " + props.imgClassName} />
    </div>
  )
}
function DesktopLinkBlockTitleSpan(props) {
  return (
    <span className="md:inline-block underline ">{props.title}</span>
  )
}
function MobileLinkBlockModal(props) {

}

function LinkBlock(props) {
  const [showModal, setShowModal] = useState(false)
  return (
    <p className="links-paragraph ">

      {/* this NewTab component is only visible on desktop */}
      <NewTab className="no-underline hidden md:inline-block " href={props.href}>
        <div className="links-page-link-container-div">
          <DesktopLinkBlockWordsDiv title={props.title}>{props.children}</DesktopLinkBlockWordsDiv>
          <DesktopLinkBlockImgDiv imgSrc={props.imgSrc} imgClassName={props.imgClassName} />
        </div>
      </NewTab>
      
      {/* whereas this div here is only visible smaller than desktop */}
      <div className="text-xl md:hidden">
        <button className="underline underline-offset-2 text-left" onClick={() => {setShowModal(true)}}>
          {props.title}
        </button>
      </div>
      {/* MODAL PLAN: just the title text, a little larger than normal. e.g. "Raid." when user clicks the title text, a modal pops up. modal contains the image up top and the description below. and inside the modal is an <a> that goes there. when click outside modal we close it. when click X in the top right we close it. showModal, setShowModal. wrapped in a csstransition. transition the entering of the modal as a drop from the top. transition the exiting of the modal as a drop out to the bottom. */}

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
          Links to Projects & Work
        </h1>

        <div className="mb-10 md:mb-20 ">
          <LinkBlock title="Raid" href="https://www.youtube.com/c/raidsrc" imgSrc={bananas}>My YouTube channel, where I upload music content and other short videos. Music content includes covers, rearrangements, original compositions, and tutorials. Other short videos include school projects, expository content, guides, and cinematic TV features.
          </LinkBlock>

          <LinkBlock title="Rude Custard" imgSrc={bananas}>My BandCamp page, where I release music officially. Expect an eclectic blend of jazz, dubstep, hip-hop, VGM, and rock. My music is available on almost all popular music platforms (Spotify, Apple Music, YouTube Music, etc.) but I'm linking my BandCamp page because BandCamp is <span className="font-bold">simply better.</span> <span className="bg-red-400">(coming soon!)</span></LinkBlock>

          <LinkBlock title="Rewrite, Rebuild, Repeat" href="http://uwp101y.raidsrc.me" imgSrc={bananas}>An online portfolio of essays and blog posts I wrote for <span className="italic">UWP 101Y - Advanced Composition</span>. In this body of work, I investigate the history, geography, and circumstances of two urban redevelopment schemes in the San Francisco Bay Area and examine how money, location, and collective civic action have shaped the outcomes of both projects. There's a chance they'll ask you for a password if you want to gain entry. Email me for that.</LinkBlock>

          <LinkBlock title="Tractivity" href="https://tractivity.raidsrc.me" imgSrc={bananas}>A fitness-tracking web application I developed for <span className="italic">ECS 162 - Web Programming</span>. This application supports Google sign-in using OAuth 2.0, logging of past and future activity, and data visualization of recorded progress.</LinkBlock>

          <LinkBlock title="Shop 'Til You Drop" href="https://shop-til-you-drop.raidsrc.me" imgSrc={bananas}>My final project for <span className="italic">ECS 162 - Web Programming</span>; a web application I developed for the exhibit <span className="italic">Education Should Be Free</span> at the Manetti Shrem Museum at the University of California, Davis. Use this web application to estimate the cost of education at various public universities in California using data drawn from the U.S. Department of Education's College Scorecard.</LinkBlock>

          <LinkBlock title="The Slippi Sampler" imgSrc={bananas}>A mechanism I engineered for transforming Super Smash Bros. Melee inputs into music. This mechanism works with any valid Slippi replay file (.slp) and outputs MIDI notes with millisecond-perfect temporal precision. <span className="bg-red-400">(coming soon!)</span></LinkBlock>

          <LinkBlock title="Virovek" href="https://virovek.com" imgSrc={bananas}>The website for Virovek, my family's Hayward-based gene therapy company. I played a major role in debugging the website's stylesheets. It's built on WordPress, which I'm not very familiar with, but I managed to work my magic all the same.</LinkBlock>

          <LinkBlock title="Professor Raid Schools the Masses on Smash Bros." href="https://www.youtube.com/watch?v=supYVmjGi50" imgSrc={bananas}>A lecture on Super Smash Bros. Melee that I presented for <span className="italic">CTS 172 - Metagaming</span>, a course all about "examining the community histories and material practices that have evolved alongside videogames as a mass medium, cultural commodity, and digital technology." This class just might be one of the most enjoyable university courses I've ever taken.</LinkBlock>
          {/* <p className="links-paragraph">A webpage I designed on my own, just for fun. I wanted to try my hand at designing a sleek, beautiful, majestic, responsive, super sick cool-ass webpage. This is the result of that work.</p> */}
          {
            // include uwp101y, tractivity, shop til you drop, slippi sampler, a cool sick design showcase, virovek.com
          }
        </div>
        <h1 className="mt-5 mb-5 px-2">
          Other Links to Other Stuff
        </h1>
        <div className="mb-10 md:mb-20">
          <OtherLinkBlock title="raidsrc.me Landing Page" href="https://landing.raidsrc.me" imgSrc={bananas}>This page is often the first point of contact for random people who are searching for me on the internet. I usually put a link to this page somewhere on my profile on whatever site/platform I'm on. It's a sparse webpage with a list of links to where people can find me. It's also got a brief "About Me" section. Why not click and check it out for yourself?
          </OtherLinkBlock>

          <OtherLinkBlock title="Blog" href="https://blog.raidsrc.me" imgSrc={bananas}>The obligatory "blog section" of my website, because everyone has a blog. I don't really plan on posting here very much. But setting this subdomain up gave me an excuse to learn to use Hugo and deploy a statically-generated blog.
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