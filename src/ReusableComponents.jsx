import React from "react"

function Navbar(props) {
   let setPage = props.setPage

   return (
      <div>
         <div className="bg-black flex fixed justify-center w-full">
            <div className="flex flex-row text-white top-0 w-full justify-between py-4 px-5 items-center max-w-yuge
            sm:px-10
            md:px-16 md:text-lg md:h-20
            lg:h-20">

               <ClickableRaidsrcIcon onClick={() => { setPage("HomePage") }} />
               <div className="flex flex-row justify-around space-x-4
               sm:space-x-7
               md:space-x-9
               lg:space-x-12">
                  <Button className="w-auto" onClick={() => { setPage("AboutPage") }}>About</Button>
                  <Button className="w-auto" onClick={() => { setPage("ResumePage") }}>Résumé</Button>
                  <Button className="w-auto" onClick={() => { setPage("FindMePage") }}>Find Me</Button>
               </div>
            </div>
         </div>
      </div>
   )

}

function Button(props) {

   return (
      <button className={props.className} onClick={props.onClick}>{props.children}</button>
   )
}

function ClickableRaidsrcIcon(props) {
   return (
      <div className="w-10">
         <button onClick={props.onClick}>
            <img src="src\raid handwritten alone very white no padding.png"></img>
         </button>
      </div>
   )
}

function CenteredFullPageFlexContainer(props) {
   return (
      <div className="flex justify-center w-full">
         <div className="w-11/12 max-w-screen-xl flex flex-col justify-center mt-24">
            {props.children}
         </div>
      </div>
   )
}

export { Navbar, Button, ClickableRaidsrcIcon, CenteredFullPageFlexContainer }

