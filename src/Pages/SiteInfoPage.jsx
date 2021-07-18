import React from "react"
import { CenteredFullPageFlexContainer, SiteConstructionBanner, NewTab } from '../ReusableComponents'

function SiteInfoPage(props) {
    return (
        <div className="site-info-page">
            <CenteredFullPageFlexContainer>
                <SiteConstructionBanner />
                <h1 className="text-white mb-5 px-2">
                    About This Site
                </h1>
                <p className="about-me-paragraph text-black">This site is a <NewTab href="https://reactjs.org/">React</NewTab> app. I got my first taste of React from <span className="italic">ECS 162: Web Programming</span>, a course I took at UC Davis during Spring Quarter 2021. I now think React is really cool. Like, super cool.</p>

                <p className="about-me-paragraph">To put this site together, I enlisted the help of <NewTab href="https://vitejs.dev/">vitejs</NewTab>, <NewTab href="https://reactrouter.com/">react-router-dom</NewTab>, <NewTab href="https://github.com/ajwann/svg-loaders-react">svg-loaders-react</NewTab>, <NewTab href="https://reactcommunity.org/react-transition-group/">react-transition-group</NewTab>, <NewTab href="https://react-spring.io/">react-spring</NewTab>, and <NewTab href="https://tailwindcss.com/">tailwindcss</NewTab>.
                </p>

                <p className="about-me-paragraph text-black">Building this site took me a couple weeks of on-and-off work. Much of it was spent teaching myself how to use the technologies listed above. I struggled a lot with react-spring in particular, spending hours staring at my laptop screen in the dark cabin of an airplane wondering what was going wrong. Programming is confusing, dawg.</p>

                <p className="about-me-paragraph">If you're reading this right now, I'm still building the site, so I guess the first sentence of the previous paragraph was a lie, since I'm not done yet and I don't know how long it'll take me to finish. Welcome to my in-progress personal website. How the hell did you get here? I haven't told anyone about this site or advertised it anywhere...</p>
                <div className="flex flex-col items-center justify-center mt-28 text-xs 2xl:text-base">
                    <div>
                        <NewTab href="https://icons8.com/icon/83195/menu">
                            mobile hamburger menu icon © Icons8
                        </NewTab>
                    </div>
                    <div>
                        <NewTab href="https://iconmonstr.com">
                            twitter, youtube, email icons © 2021 iconmonstr
                        </NewTab>
                    </div>
                </div>
            </CenteredFullPageFlexContainer>
        </div>
    )
}

export default SiteInfoPage