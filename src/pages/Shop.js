import {Header} from "../components/Header"
import {NavList} from "../components/Nav"
import jsonp from "fetch-jsonp"
import {Shop} from "../components/Shop"
import {GoodsList} from "../components/GoodsList"
import {Footer} from "../components/Footer"
import {connect} from "react-redux"
import {hInit} from "../actions";
class ShopUI extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div>
                <Header text={this.props.title} hasShop={true} hasBack={this.props.history} />
                <div className="main">
                    <Shop />
                </div>
                <Footer />
            </div>
        )
    }
}
let msp = ({shop}) => ({
    title : shop.title
})
let mdp = dispath => ({
    pageInit(){
        dispath(hInit())
    }
})
export const Shope = connect(msp,mdp)(ShopUI)





























//
