import React from "react"
import { CenteredFullPageFlexContainer, NewTab, SiteConstructionBanner } from '../ReusableComponents'

function LinkBlock(props) {
  return (
    <p className={"links-paragraph odd:text-right " + props.className}>
      <NewTab className="no-underline" href={props.href}>
        <span className="underline">{props.title}</span><br />
        {props.children}
      </NewTab>
    </p>
  )
}

function LinksPage(props) {
  return (
    <div className="links-page">
      <CenteredFullPageFlexContainer>
        <SiteConstructionBanner />
        <h1 className="mb-5 px-2">
          Links to Projects & Work
        </h1>
        {/* <h2 className="mb-4 px-2 pt-4"></h2> */}
        <div className="mb-10 md:mb-20 ">

          <LinkBlock title="Raid" href="https://www.youtube.com/c/raidsrc">My YouTube channel, where I upload music content and other short videos. Music content includes covers, rearrangements, original compositions, and tutorials. Other short videos include school projects, expository content, guides, and cinematic TV features.</LinkBlock>

          <LinkBlock title="Rewrite, Rebuild, Repeat" href="http://uwp101y.raidsrc.me" className="text-black">An online portfolio of essays and blog posts I wrote for <span className="italic">UWP 101Y - Advanced Composition</span>. In this body of work, I investigate the history, geography, and circumstances of two urban redevelopment schemes in the San Francisco Bay Area and examine how money, location, and collective civic action have shaped the outcomes of both projects. There's a chance they'll ask you for a password if you want to gain entry. Email me for that.</LinkBlock>

          <LinkBlock title="Tractivity" href="https://tractivity.raidsrc.me" >A fitness-tracking web application I developed for <span className="italic">ECS 162 - Web Programming</span>. This application supports Google sign-in using OAuth 2.0, logging of past and future activity, and data visualization of recorded progress.</LinkBlock>

          <LinkBlock title="Shop 'Til You Drop" href="https://shop-til-you-drop.raidsrc.me" className="text-black">My final project for <span className="italic">ECS 162 - Web Programming</span>; a web application I developed for the exhibit <span className="italic">Education Should Be Free</span> at the Manetti Shrem Museum at the University of California, Davis. Use this web application to estimate the cost of education at various public universities in California using data drawn from the U.S. Department of Education's College Scorecard.</LinkBlock>

          <LinkBlock title="The Slippi Sampler" >A mechanism I engineered for transforming Super Smash Bros. Melee inputs into music. This mechanism works with any valid Slippi replay file (.slp) and outputs MIDI notes with millisecond-perfect temporal precision. <span className="bg-gray-600">(coming soon!)</span></LinkBlock>

          <LinkBlock title="Virovek" href="https://virovek.com" className="text-black">The website for Virovek, my family's Hayward-based gene therapy company. I played a major role in debugging the website's stylesheets. It's built on WordPress, which I'm not very familiar with, but I managed to work my magic all the same.</LinkBlock>

          <LinkBlock title="Professor Raid Schools the Masses on Smash Bros." href="https://www.youtube.com/watch?v=supYVmjGi50">A lecture on Super Smash Bros. Melee that I presented for <span className="italic">CTS 172 - Metagaming</span>, a course all about "examining the community histories and material practices that have evolved alongside videogames as a mass medium, cultural commodity, and digital technology." This class just might be one of the most enjoyable university courses I've ever taken.</LinkBlock>

          {/* <p className="links-paragraph">A webpage I designed on my own, just for fun. I wanted to try my hand at designing a sleek, beautiful, majestic, responsive, super sick cool-ass webpage. This is the result of that work.</p> */}
          {
            // include uwp101y, tractivity, shop til you drop, slippi sampler, a cool sick design showcase, virovek.com
          }
        </div>

        <h1 className="mt-5 mb-5 px-2">
          Other Links to Other Stuff
        </h1>
        <div className="mb-10 md:mb-20">
          <LinkBlock title="raidsrc.me Landing Page" href="https://landing.raidsrc.me">This page is often the first point of contact for random people who are searching for me on the internet. I usually put a link to this page in my bio or elsewhere on my profile on whatever site I'm on. It's a sparse webpage with a list of links to where I'm at. The YT channel, Twitter, music providers, my main site here, etc. It's also got a brief "About Me" section.</LinkBlock>
          {/* <p className="links-paragraph text-black">
            <NewTab className="no-underline">
              <span className="underline"></span><br />

            </NewTab>
          </p> */}

          <LinkBlock title="Blog" href="https://blog.raidsrc.me" className="text-black">The obligatory "blog section" of my website, because everyone has a blog. I don't really plan on posting here very much. But setting this subdomain up gave me an excuse to learn to use Hugo and deploy a statically-generated blog.</LinkBlock>

          {/* <p className="links-paragraph text-black">
                   A subdomain of my site that's more of an experimental design sandbox than anything else.
                   <br />raid.raidsrc.me</p> */}
        </div>
      </CenteredFullPageFlexContainer>
    </div >
  )
}

export default LinksPage