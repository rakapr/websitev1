import React,{useEffect} from "react";
import TopBar from "./components/TopBar/TopBar"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Copyrights from "./components/Footer/Copyrights"



export default function Layout({children}){
    return(
       <>
       <TopBar />
       <div className="container-fluid">
       <Header />
       {children}      
       <Footer />
       <Copyrights />
       </div>
       </>
    );
}