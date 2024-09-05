import styled from 'styled-components'
import pawn from '../img/pawn.svg'
import chanceSrc from '../img/chance.png'
import communityChestSrc from '../img/communityChest.png'
import gareSrc from '../img/gare.png'
import waterSrc from '../img/compagnieDesEaux.png'
import elecSrc from '../img/elec.png'
import freeParkSrc from '../img/freePark.png'
import toJailSrc from '../img/goToJail.png'
import luxeTaxeSrc from '../img/taxeLuxe.png'
import jailSrc from '../img/jail.png'
import departSrc from '../img/depart.png'
import logoSrc from '../img/monopolyLogo.png'


const CardTitle = styled.div`

    font-size: 1.3vh;
    text-align: center;
    ${(props) => ( (props.position >= 11 && props.position <= 19) || (props.position >= 31 && props.position <= 39) ? "margin-top : 0px" : "margin-top : 10px" )}

`


const Pawn = styled.div`

    mask-image: url(${pawn});
    background-color : ${props => props.pawnColor};
    mask-size : 60%;
    mask-repeat: no-repeat;
    mask-position: center;
    min-height : 30%;
    min-width : 30%;
    flex-grow : 1;
    flex-shrink : 2;
    z-index: 10;

`
const ActionButton = styled.button`

    width : 90%;
    height : 5rem;
    background-color : #A994C3;
    margin-top : 1rem;
    border : 0;
    border-radius : 3%;
    font-family : "Trocchi";
    font-size : 1.5rem;
    transition-duration: 0.4s;
    margin : 10px;
    &:hover{

        background-color : #8e5ccc;

    }


`

const ChanceH = styled.img.attrs({
  src: `${chanceSrc}`
  })`
  position: absolute;
height: 60px;
width: 60px;
z-index:1;
`

const ChanceV = styled.img.attrs({
  src: `${chanceSrc}`
  })`
position: absolute;
margin-left: 1.5%;
height: 50px;
width: 50px;
z-index:1;
`

const CommunityChestH = styled.img.attrs({
  src: `${communityChestSrc}`
  })`
  position: absolute;
width: 60px;
height: 60px;
z-index:1;
`

const CommunityChestV = styled.img.attrs({
  src: `${communityChestSrc}`
  })`
position: absolute;
margin-left: 1.5%;
width: 50px;
height: 50px;
z-index:1;
`


const GareH= styled.img.attrs({
  src: `${gareSrc}`
  })`
position: absolute;
width: 60px;
height: 60px;
z-index:1;
`

const GareV= styled.img.attrs({
  src: `${gareSrc}`
  })`
position: absolute;
margin-left:  2.3%;
width: 35px;
height: 35px;
z-index:1;
`

const WaterWorks= styled.img.attrs({
  src: `${waterSrc}`
  })`
  position: absolute;
width: 60px;
height: 60px;
z-index:1;
`

const ElecCompany= styled.img.attrs({
  src: `${elecSrc}`
  })`
position: absolute;
margin-left:  2.3%;
width: 35px;
height: 35px;
z-index:1;
`

const FreePark= styled.img.attrs({
  src: `${freeParkSrc}`
  })`
  position: absolute;
  margin-left: 20px;
width: 90px;
height: 90px;
z-index:1;
`


const ToJail= styled.img.attrs({
  src: `${toJailSrc}`
  })`
  position: absolute;
width: 90px;
height: 90px;
z-index:1;
`

const LuxeTaxe= styled.img.attrs({
  src: `${luxeTaxeSrc}`
})`
position: absolute;
margin-left: 2.3%;
width: 40px;
height: 40px;
z-index:1;
`


const Jail= styled.img.attrs({
  src: `${jailSrc}`
  })`
  position: absolute;
width: 100px;
height: 100px;
z-index:1;
`

const Depart= styled.img.attrs({
  src: `${departSrc}`
  })`
  position: absolute;
  margin-top: 4%;
width: 80px;
height: 20px;
z-index:1;
`

const Logo= styled.img.attrs({
  src: `${logoSrc}`
  })`
position: absolute;
margin-left: 14%;
margin-top: 13%;
width: 400px;
height: 350px;
`

export {CardTitle, Pawn, ActionButton, ChanceH, ChanceV, CommunityChestH, CommunityChestV, GareH,GareV, WaterWorks, ElecCompany, FreePark, ToJail, LuxeTaxe,Jail, Depart, Logo};
