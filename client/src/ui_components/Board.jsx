import React, {Component} from 'react'
import './styles/Board.scss'
import Card from './Card.jsx'
import HorizontalCard from './HorizontalCard'
import {ChanceH, ChanceV, CommunityChestH, CommunityChestV, GareH,GareV, WaterWorks, ElecCompany, FreePark, ToJail, LuxeTaxe, Jail, Depart, Logo} from './styles/Card_Styles'



class Board extends Component {

    render(){
        return (
            <div className = "BoardWrapper">
                <Logo />
                <div className="ns-sides tl-ns-border">
                    <Card position={20} players = {this.props.players} title={null} style={null} image={<FreePark />} span = {"span 1"}/>
                    <Card position={21} players = {this.props.players} title="Strand" style={{ backgroundColor : '#DA2327'}} image={null} price={220} />
                    <Card position={22} players = {this.props.players} title="Chance" style={null} image={ <ChanceH />} span={"span 1"} />
                    <Card position={23} players = {this.props.players} title="Fleet Street" style={{ backgroundColor : '#DA2327'}} image={null} price={220} />
                    <Card position={24} players = {this.props.players} title="Trafalgar Square" style={{ backgroundColor : '#DA2327'}} image={null} price={240} />
                    <Card position={25} players = {this.props.players} title="Fenchurch Station" style={null} image={ <GareH />} price={200} span={"span 2"}/>
                    <Card position={26} players = {this.props.players} title="Leicester Square" style={{ backgroundColor : '#fef102'}} image={null} price={260} />
                    <Card position={27} players = {this.props.players} title="Water Works" style={null} image={ <WaterWorks />} price={260} span={"span 2"} />
                    <Card position={28} players = {this.props.players} title="Coventry Street" style={{ backgroundColor : '#fef102'}} image={null} price={150} />
                    <Card position={29} players = {this.props.players} title="Piccadilly" style={{ backgroundColor : '#fef102'}} image={null} price={280} />
                    <Card position={30} players = {this.props.players} title= {" Go To Jail"} style={null} image={<ToJail />}/>
                </div>
                <div className="we-side">
                    <HorizontalCard position={19} players = {this.props.players} title="Vine Street" style ={{backgroundColor : '#e98b29'} }  price={200} reverse = "reverse-grid" colorbanner="color-banner-hl"  />
                    <HorizontalCard position={18} players = {this.props.players} title="Marlborough" style ={{backgroundColor : '#e98b29'} }  price={180} reverse = "reverse-grid" colorbanner="color-banner-hl"  />
                    <HorizontalCard position={17} players = {this.props.players} title={"Community Chest"} style ={{backgroundColor : '#c53982'} }  image={ <CommunityChestV />} reverse = "reverse-grid" />
                    <HorizontalCard position={16} players = {this.props.players} title="Bow Street" style ={{backgroundColor : '#e98b29'} }  price={180} reverse = "reverse-grid" colorbanner="color-banner-hl" />
                    <HorizontalCard position={15} players = {this.props.players} title={"Marylebone station"} style ={{backgroundColor : '#c53982'} }  price={200} image={ <GareV />} reverse = "reverse-grid"  colorbanner="banner-hl"/>
                    <HorizontalCard position={14} players = {this.props.players} title="Northumrl'd" style ={{backgroundColor : '#c53982'} }  price={160} reverse = "reverse-grid" colorbanner="color-banner-hl"/>
                    <HorizontalCard position={13} players = {this.props.players} title="Electric Company" style ={{backgroundColor : '#c53982'} }  price={140} image = {<ElecCompany />} reverse = "reverse-grid"  colorbanner="banner-hl"/>
                    <HorizontalCard position={12} players = {this.props.players} title="Taxe" style ={{backgroundColor : '#c53982'} }  price={150} reverse = "reverse-grid" colorbanner="banner-hl"/>
                    <HorizontalCard position={11} players = {this.props.players} title="Pall Mall" style ={{backgroundColor : '#c53982'} }  price={140} reverse = "reverse-grid" colorbanner="color-banner-hl" />
                </div>
                <div className="middle-section ">
                </div>
                <div className="we-side ">
                    <HorizontalCard position={31} players = {this.props.players} title="Regent Street" style ={{backgroundColor : 'green'} }  price={300} colorbanner="color-banner-hr"/>
                    <HorizontalCard position={32} players = {this.props.players} title="Oxford Street" style ={{backgroundColor : 'green'} }  price={300} colorbanner="color-banner-hr"/>
                    <HorizontalCard position={33} players = {this.props.players} title={"Community chest"} style ={{backgroundColor : '#c53982'} }  image={ <CommunityChestV />}  />
                    <HorizontalCard position={34} players = {this.props.players} title="Bond Street" style ={{backgroundColor : 'green'} }  price={320} colorbanner="color-banner-hr"/>
                    <HorizontalCard position={35} players = {this.props.players} title ={"Liverpool Station"} style ={{backgroundColor : '#c53982'} }  price={200} image={ <GareV />} colorbanner="banner-hr" />
                    <HorizontalCard position={36} players = {this.props.players} title="Chance" style ={{backgroundColor : '#c53982'} }  image={ <ChanceV />}reverse ="reverse-grid" />
                    <HorizontalCard position={37} players = {this.props.players} title="Park Lane" style ={{backgroundColor : '#0065a3'} }  price={350} colorbanner="color-banner-hr"/>
                    <HorizontalCard position={38} players = {this.props.players} title ={" Luxe Taxe"} style ={{backgroundColor : '#c53982'} }  price={100} image = {<LuxeTaxe />}colorbanner="banner-hr"/>
                    <HorizontalCard position={39} players = {this.props.players} title="Mayfair" style ={{backgroundColor : '#0065a3'} }  price={400} colorbanner="color-banner-hr"/>
                </div>
                <div className="ns-sides lt-ns-border ">
                    <Card position ={10} players={this.props.players} title={"Jail"} style={null} image={<Jail />} price={null} />
                    <Card position ={9} players={this.props.players} title="Pent.V Road" style={{ backgroundColor : '#abdbef'}} image={null} price={120}  />
                    <Card position ={8} players={this.props.players} title="Euston Road" style={{ backgroundColor : '#abdbef'}} image={null} price={100}  />
                    <Card position ={7} players={this.props.players} title="Chance" style={null} image={ <ChanceH />} span={"span 1"} />
                    <Card position ={6} players={this.props.players} title="The Angel Isle" style={{ backgroundColor : '#abdbef'}} image={null} price={100}  />
                    <Card position ={5} players={this.props.players} title="Kings Cross Station" style={null} image={ <GareH />} price={200} span={"span 2"} />
                    <Card position ={4} players={this.props.players} title="Income Taxe" style={null} image={null} price={200} span={"span 2"} />
                    <Card position ={3} players={this.props.players} title="White Chapel Road" style={{ backgroundColor : '#854b37'}} image={null} price={60} />
                    <Card position ={2} players={this.props.players} title="Community Chest" style ={null} image={ <CommunityChestH />} span={"span 1"} />
                    <Card position ={1} players={this.props.players} title="Old Kent Road" style={{ backgroundColor : '#854b37'}}  image={null} price={60}/>
                    <Card position ={0} players={this.props.players} title= "Départ" style={null} image={<Depart />}/>
                </div>
            </div>
        );
    }
}



export default Board;
