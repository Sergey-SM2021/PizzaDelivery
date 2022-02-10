import { FC } from "react"
import {observer} from "mobx-react-lite";
import Header from "../components/Intro/Header/Header"
import Offer from "../components/Intro/Offer/Offer"



const Intro: FC = () => {
    return (<>
        <Offer />
        <Header />
    </>)
}


// export const Intro = observer(()=>{
//     return <> <Offer/> <Header/></>
// })



export default Intro