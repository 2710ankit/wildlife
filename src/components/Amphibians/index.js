import React from 'react'
import styles from './style.module.css'
import TitleHeading from './../../containers/TitleHeading'
import Heading from '../../containers/Heading/Heading'
import Profile from '../../containers/Profile'
import Map from '../../containers/Birds/Map'
import faMauremysleprosa from '../../containers/Amphibians/images/fa-Mauremys-leprosa.jpg'
import faNatrixmaura from '../../containers/Amphibians/images/fa-Natrix-maura.jpg'
import faSalamandrasalamandra from '../../containers/Amphibians/images/fa-Salamandra-salamandra.jpg'
import faCalotritonasper from '../../containers/Amphibians/images/fa-Calotriton-asper.jpg'
import faArvicolasapidus from '../../containers/Amphibians/images/fa-Arvicola-sapidus.jpg'
import faGalemyspyrenaicus from '../../containers/Amphibians/images/fa-Galemys-pyrenaicus.jpg'
import faNeomysfodiens from '../../containers/Amphibians/images/fa-Neomys-fodiens.jpg'
import falludriga from '../../containers/Amphibians/images/fa-lludriga.jpg'
import faMyotisdaubentonivol from '../../containers/Amphibians/images/fa-Myotis-daubentoni-vol.jpg'
import faMyotiscapaccinii from '../../containers/Amphibians/images/fa-Myotis-capaccinii.jpg'
import faRanatemporaria from '../../containers/Amphibians/images/fa-Rana-temporaria.jpg'
import faEmysorbicularis from '../../containers/Amphibians/images/fa-Emys-orbicularis.jpg'
import faPelophylaxperezi from '../../containers/Amphibians/images/fa-Pelophylax-perezi.jpg'
import faAlytesobstetricans from '../../containers/Amphibians/images/fa-Alytes-obstetricans.jpg'
import faBufocalamita from '../../containers/Amphibians/images/fa-Bufo-calamita.jpg'
import faPelobatescultripes from '../../containers/Amphibians/images/fa-Pelobates-cultripes.jpg'
import faPelodytespunctatus from '../../containers/Amphibians/images/fa-Pelodytes-punctatus.jpg'
import faPleurodeleswaltl from '../../containers/Amphibians/images/fa-Pleurodeles-waltl.jpg'
import faTriturusmarmoratus from '../../containers/Amphibians/images/fa-Triturus-marmoratus.jpg'
import faLissotritonhelveticus from '../../containers/Amphibians/images/fa-Lissotriton-helveticus.jpg'
import faNatrixnatrix from '../../containers/Amphibians/images/fa-Natrix-natrix.jpg'
import faViperaaspis from '../../containers/Amphibians/images/fa-Vipera-aspis.jpg'
import faMalpolonmonspessulanus from '../../containers/Amphibians/images/fa-Malpolon-monspessulanus.jpg'
import faAnguisfragilis from '../../containers/Amphibians/images/fa-Anguis-fragilis.jpg'
import faGenettagenetta from '../../containers/Amphibians/images/fa-Genetta-genetta.jpg'
import faMartesoina from '../../containers/Amphibians/images/fa-Martes-oina.jpg'
import faVulpesvulpes from '../../containers/Amphibians/images/fa-Vulpes-vulpes.jpg'
import faMelesmeles from '../../containers/Amphibians/images/fa-Meles-meles.jpg'
import faApodemussylvaticus from '../../containers/Amphibians/images/fa-Apodemus-sylvaticus.jpg'
import faMusspretus from '../../containers/Amphibians/images/fa-Mus-spretus.jpg'
import faCrocidurarussula from '../../containers/Amphibians/images/fa-Crocidura-russula.jpg'
import faMyodesglareolus from '../../containers/Amphibians/images/fa-Myodes-glareolus.jpg'
import faSusscrofa from '../../containers/Amphibians/images/fa-Sus-scrofa.jpg'
import fa010 from '../../containers/Amphibians/images/fa-010.png'
import faMauremysleprosaa from '../../containers/Amphibians/images/fa-Mauremys-leprosa.jpg'

const Amphibians = () => {
    return (
        <div className={styles.container}>
                 <TitleHeading name="Amphibians, reptiles and river mammals"/>
                <div className={styles.div1}>
                    {/* <img src={titleimage}></img> */}
                     Various species of amphibians, reptiles and mammals live in rivers and wetlands. Some depend only on the aquatic environment for the growth of their larvae, such as salamanders and toads; other amphibians, such as newts and frogs, also live there all year round. Many species feed there and find the ideal environments to reproduce: the brook turtle, the water snake, the water rat or the otter. A large number of terrestrial species also approach it in search of food, shelter or a place to breed: the genet, the fox, the vitriol, the collared snake and the water bat, among others.
                 </div>
                 <hr></hr>
                 <Heading name="River species"/>
                 <div className={styles.div2}>
                    <Profile source={faMauremysleprosa} name="Mauremys leprosa brook" sciname="turtle" />
                    <Profile source={faNatrixmaura} name="Natrix maura water" sciname="snake" />
                    <Profile source={faSalamandrasalamandra} name="Salamander" sciname="Salamander salamander" />
                    <Profile source={faCalotritonasper} name="Pyrenean" sciname="newt Calotriton asper" />
                    <Profile source={faArvicolasapidus} name="Water rat" sciname="Arvicola sapidus" />
                    <Profile source={faGalemyspyrenaicus} name="Almesquera" sciname="Galemys pyrenaicus" />
                    <Profile source={faNeomysfodiens} name="Water" sciname="mussel Neomis fodiens" />
                    <Profile source={falludriga} name="Otter" sciname="Lutra lutra" />
                    <Profile source={faMyotisdaubentonivol} name="Water- borne bat or rat" sciname="Myotis daubentonii" />
                    <Profile source={faMyotiscapaccinii} name="Bat or large-footed rat" sciname="Myotis capaccinii" />
                    <Profile source={faRanatemporaria} name="Red" sciname="frog Temporary frog" />     
                 </div>
                 <hr></hr>
                 <Heading name="Pond species"/>
                 <div className={styles.div2}>
                 <Profile source={faEmysorbicularis} name="pond turtle" sciname="Emys orbiculata" />
                 <Profile source={faPelophylaxperezi} name="green frog" sciname="Pelophylax perezi" />
                 <Profile source={faAlytesobstetricans} name="Totil" sciname="Alytes obstetrican" />
                 <Profile source={faBufocalamita} name="Running toad or small gallop" sciname="Bufo calamita" />
                 <Profile source={faPelobatescultripes} name="Spur toad or garriguer gallop Pelagates" sciname="cultripes" />
                 <Profile source={faPelodytespunctatus} name="Dotted frog or toad" sciname="Pelodytes punctatus" />
                 <Profile source={faPleurodeleswaltl} name="Ofegabous" sciname="Pleurodels waltl" />
                 <Profile source={faTriturusmarmoratus} name="Green" sciname="newt Triturus marmoratus" />
                 <Profile source={faLissotritonhelveticus} name="Palmate newt" sciname="Lissotriton helveticus" />
                 </div>
                 <hr></hr>
                 <Heading name="Riverside forest species"/>
                 <div className={styles.div2}>
                 <Profile source={faNatrixnatrix} name="Necklace" sciname="snake Natrix natrix" />
                 <Profile source={faViperaaspis} name="Pyrenean viper" sciname="Vipera aspis" />
                 <Profile source={faMalpolonmonspessulanus} name="Green snake" sciname="Malpolon monspessulanus" />
                 <Profile source={faAnguisfragilis} name="Vidriol" sciname="Anguis fragilis" />
                 <Profile source={faGenettagenetta} name="Cat mesquer or geneta" sciname="Genetta genetta" />
                 <Profile source={faMartesoina} name="White throat or pheasant" sciname="Tuesday foina" />
                 <Profile source={faVulpesvulpes} name="Guilla or fox" sciname="Vulpes vulpes" />
                 <Profile source={faMelesmeles} name="Badger" sciname="Meles meles" />
                 <Profile source={faApodemussylvaticus} name="Forest mouse" sciname="Apodemus slvaticus" />
                 <Profile source={faMusspretus} name="Mediterranean mouse" sciname="Mus spretus" />
                 <Profile source={faCrocidurarussula} name="Common" sciname="shrew Crocidura russula" />
                 <Profile source={faMyodesglareolus} name="Red mole" sciname="Myodes glareolus" />
                 <Profile source={faSusscrofa} name="Wild" sciname="Sus scrofa" />
                 </div>
                 <hr></hr>
                 <Heading name="Life cycle of a totil ( Alytes ostetricians )"/>
                 <Map source={fa010} text="Amphibians are strictly aquatic, their larvae and most spawning live in the water. In the adult stage, some species such as newts or green frogs remain attached to the aquatic environment while others such as the common toad or the tortoise will only breed there. In the case of the totil, the spawn transports the male and, therefore, only the larvae are aquatic."/>
                 <hr></hr>
                 <Heading name="Stream turtle"/>
                 <Map source={faMauremysleprosaa} text="The brook turtle lives in various waters of Mediterranean character (below 600 m). Despite tolerating waters with a certain degree of pollution and strong human pressure, their populations are affected by the introduction of invasive alien species such as large predatory fish or alien turtles. They are also sensitive to alterations in breeding habitats, because they will lay in meadows and fields near rivers and ponds."/>
        </div>
    )
}

export default Amphibians
