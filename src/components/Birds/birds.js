import React from 'react'
import TitleHeading from '../../containers/TitleHeading'
import styles from './birds.module.css'
import birdBackground from './../../containers/Birds/images/birdBackground.jpg'
import Heading from '../../containers/Heading/Heading'
import Map from '../../containers/Birds/Map'
import hivernants from './../../containers/Birds/images/oc-010-hivernants.jpg'
import Profile from '../../containers/Profile'
import ocPhalacrocoraxcarbo from './../../containers/Birds/images/oc-Phalacrocorax-carbo.jpg'
import ocEgrettaalba from './../../containers/Birds/images/oc-Egretta-alba.jpg'
import ocMotacillacinerea from './../../containers/Birds/images/oc-Motacilla-cinerea.jpg'
import ocSylviaatricapilla from './../../containers/Birds/images/oc-Sylvia-atricapilla.jpg'
import ocArdeacinerea from './../../containers/Birds/images/oc-Ardea-cinerea.jpg'
import ocErithacusrubecula from './../../containers/Birds/images/oc-Erithacus-rubecula.jpg'
import ocLarusmichahellis from './../../containers/Birds/images/oc-Larus-michahellis.jpg'
import ocMotacillaalba from './../../containers/Birds/images/oc-Motacilla-alba.jpg'
import oc011estivals from './../../containers/Birds/images/oc-011-estivals.jpg'
import ocNycticoraxnycticorax from './../../containers/Birds/images/oc-Nycticorax-nycticorax.jpg'
import ocEgrettagarzeta from './../../containers/Birds/images/oc-Egretta-garzeta.jpg'
import ocHirundorustica from './../../containers/Birds/images/oc-Hirundo-rustica.jpg'
import ocDelichonurbicum from './../../containers/Birds/images/oc-Delichon-urbicum.jpg'
import ocCharadriusdubius from './../../containers/Birds/images/oc-Charadrius-dubius.jpg'
import ocLusciniamegarhynchos from './../../containers/Birds/images/oc-Luscinia-megarhynchos.jpg'
import ocActitishypoleucos from './../../containers/Birds/images/oc-Actitis-hypoleucos.jpg'
import ocOriolusoriolus from './../../containers/Birds/images/oc-Oriolus-oriolus.jpg'
import oc012residents from './../../containers/Birds/images/oc-012-residents.jpg'
import ocAlcedoatthis from './../../containers/Birds/images/oc-Alcedo-atthis.jpg'
import ocAnasplatyrhynchos from './../../containers/Birds/images/oc-Anas-platyrhynchos.jpg'
import ocParusmajor from './../../containers/Birds/images/oc-Parus-major.jpg'
import ocTroglodytestroglodytes from './../../containers/Birds/images/oc-Troglodytes-troglodytes.jpg'
import ocParuscaeruleus from './../../containers/Birds/images/oc-Parus-caeruleus.jpg'
import ocGallinulachloropus from './../../containers/Birds/images/oc-Gallinula-chloropus.jpg'
import ocCerthiabrachydactyla from './../../containers/Birds/images/oc-Certhia-brachydactyla.jpg'
import ocTurdusmerula from './../../containers/Birds/images/oc-Turdus-merula.jpg'
import ocAegithaloscaudatos from './../../containers/Birds/images/oc-Aegithalos-caudatos.jpg'
import ocPicusviridis from './../../containers/Birds/images/oc-Picus-viridis.jpg'
import ocBubulcusibis from './../../containers/Birds/images/oc-Bubulcus-ibis.jpg'
import ocPhylloscopuscollybita from './../../containers/Birds/images/oc-Phylloscopus-collybita.jpg'
import ocCettiacetti from './../../containers/Birds/images/oc-Cettia-cetti.jpg'

const Birds = () => {
    return (
        <div className={styles.container}>
            <TitleHeading name="River Birds"/>
            <div className={styles.imgDiv}>
                <img className={styles.image}src={birdBackground}></img>
                
                <div className={styles.div1}>
                        <div className={styles.div11}>
                            <div className={styles.div12}>
                                Birds and rivers
                            </div>
                            <div className={styles.div13}>
                                 Among the vertebrate fauna, birds are the most abundant group in all the natural environments of our country. The rivers, far from being an exception, are home to many species of birds: some go there to eat, nest or rest, others follow the course of the river as a migratory route between the European and African continents.
                            </div>
                        </div>
                        <div className={styles.div11}>
                            <div className={styles.div12}>
                                 Migrations
                            </div>
                            <div className={styles.div13}>
                                 The presence of birds in rivers is very evident in winter. Leafless trees let us see these inhabitants, who are also more abundant and generally larger in size than they usually are when the weather is better. In spring and summer, on the other hand, they are not seen as much but many are heard singing because the leaves protect them. If we are not experts in singing, their identification becomes relatively complex. 
                            </div>
                        </div>
                        
                </div>
                <hr></hr>
                <Heading name="Wintering birds"/>
                <div className={styles.div2}>
                        <Map  source={hivernants} text="The great cormorant, which breeds and spends the summer in northeastern Europe, is a common winterer in Mediterranean countries, where the climate is milder."/>
                        <div className={styles.div21}> 
                            <Profile source={ocPhalacrocoraxcarbo} name="Fat" sciname="cormorant Phalacrocorax carbo" />
                            <Profile source={ocEgrettaalba} name="White heron" sciname="Egretta alba" />
                            <Profile source={ocMotacillacinerea} name="Cuereta torrentera" sciname="Motacilla cinerea" />
                            <Profile source={ocSylviaatricapilla} name="Sylvia atricapilla cap" sciname="lizard" />
                            <Profile source={ocArdeacinerea} name="Bernat pescaire" sciname="Ardea cinerea" />
                            <Profile source={ocErithacusrubecula} name="Robin" sciname="Erithacus rubecula" />
                            <Profile source={ocLarusmichahellis} name="Silver-headed Gull" sciname="Larus michahellis" />
                            <Profile source={ocMotacillaalba} name="FaCommon white wagtailt" sciname="Motacilla alba" />
                        </div>
                </div>
                <hr></hr>
                <Heading name="Summer birds"/>
                <div className={styles.div2}>
                        <Map source={oc011estivals} text="The night heron nests in riparian forests in southern Europe and Asia, but migrates to Africa and South Asia to spend the winter there."/>

                         <div className={styles.div21}> 
                            <Profile source={ocNycticoraxnycticorax} name="Nightingale" sciname="Nycticorax nycticorax" />
                            <Profile source={ocEgrettagarzeta} name="Martinet blanc" sciname="Egretta garzetta" />
                            <Profile source={ocHirundorustica} name="Swallow vulgar" sciname="Hirundo rustica" />
                            <Profile source={ocDelichonurbicum} name="Sylvia atricapilla cap" sciname="lizard" />
                            <Profile source={ocCharadriusdubius} name="Corriol petit" sciname="Charadrius dubius" />
                            <Profile source={ocLusciniamegarhynchos} name="Rossinyol" sciname="Luscinia megarhynchos" />
                            <Profile source={ocActitishypoleucos} name="Xivitona" sciname="Actitis hypoleucos" />
                            <Profile source={ocOriolusoriolus} name="Oriol" sciname="Oriolus oriolus" />
                        </div>
                </div>
                <hr></hr>
                <Heading name="Birds resident all year round"/>
                <div className={styles.div2}>
                    <Map source={oc012residents} text="Bluebirds find in our latitudes a temperature and conditions that are optimal for them to live there all year round, especially in rivers and other bodies of water."/>
                    <div className={styles.div21}>
                         <Profile source={ocAlcedoatthis} name="Blauet" sciname="Alcedo atthis" />
                         <Profile source={ocAnasplatyrhynchos} name="Mallard" sciname="Anas platyrhynchos" />
                         <Profile source={ocParusmajor} name="Coal tick" sciname="Parus major" />
                         <Profile source={ocTroglodytestroglodytes} name="Cargolet" sciname="Troglodytes troglodytes" />
                         <Profile source={ocParuscaeruleus} name="Blue Tit" sciname="Nycticorax nycticorax" />
                         <Profile source={ocGallinulachloropus} name="Waterfowl" sciname="Gallinula chloropus" />
                         <Profile source={ocCerthiabrachydactyla} name="Common raspberry" sciname="Certhia brachydactyla" />
                         <Profile source={ocTurdusmerula} name="Blackbird" sciname="Turdus merula" />
                         <Profile source={ocAegithaloscaudatos} name="Long-tailed" sciname="tick Aegithalos caudatus" />
                         <Profile source={ocPicusviridis} name="Picot verd" sciname="Picus viridis" />
                         <Profile source={ocBubulcusibis} name="Esplugabous" sciname="Bubulcus ibis" />
                         <Profile source={ocPhylloscopuscollybita} name="Common mosquito" sciname="Phylloscopus collybita" />
                         <Profile source={ocCettiacetti} name="Rossinyol bord" sciname="Cettia cetti" />
                    </div>
                </div>
                <hr></hr>
                <Heading name="The climate change"/>
                Global warming in recent decades is causing very noticeable alterations in the structure and functioning of natural systems. In the particular context of the Mediterranean region, it is difficult to identify changes in rivers related to climate change because these are already highly regulated and altered by excessive catchments and diverse infrastructures. Leaving this aside, recent studies seem to indicate that low flow situations in rivers and the frequency of extreme events, from droughts to river strikes, are already increasing. As for birds, nuptial songs and reproductive activity are already detected with one or two weeks of advancement and migrations with advances and delays. This can lead to, for example, poor synchronization with food availability,



            </div>

        </div>
    )
}

export default Birds
