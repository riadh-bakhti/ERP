import React from 'react';
import "./Home.css" ;
import Stars  from "./Stars.js";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import { useState } from 'react';





const Home = () => {
    const slides = [
        {
            title: "1Suivez votre trésorerie et votre prévisionnel pour anticiper les charges à venir.",
            par:"Contrôlez l’état de votre trésorerie et estimez votre besoin en fonds de roulement pour gérer sereinement votre développement.",
            src:"https://www.sage.com/fr-ma/-/media/images/sagedotcom/master/products/dpnmgciq.png?h=572&iar=0&w=1027&extension=webp&hash=C5C6FD0342B73E49F6E46148C99E63B6",
        },
        {
            title: "2Suivez votre trésorerie et votre prévisionnel pour anticiper les charges à venir.",
            par:"Contrôlez l’état de votre trésorerie et estimez votre besoin en fonds de roulement pour gérer sereinement votre développement.",
            src:"https://www.sage.com/fr-ma/-/media/images/sagedotcom/master/products/dpnmgciq.png?h=572&iar=0&w=1027&extension=webp&hash=C5C6FD0342B73E49F6E46148C99E63B6",
        },
        {
            title: "3Suivez votre trésorerie et votre prévisionnel pour anticiper les charges à venir.",
            par:"Contrôlez l’état de votre trésorerie et estimez votre besoin en fonds de roulement pour gérer sereinement votre développement.",
            src:"https://www.sage.com/fr-ma/-/media/images/sagedotcom/master/products/dpnmgciq.png?h=572&iar=0&w=1027&extension=webp&hash=C5C6FD0342B73E49F6E46148C99E63B6",
        },
        {
            title: "4Suivez votre trésorerie et votre prévisionnel pour anticiper les charges à venir.",
            par:"Contrôlez l’état de votre trésorerie et estimez votre besoin en fonds de roulement pour gérer sereinement votre développement.",
            src:"https://www.sage.com/fr-ma/-/media/images/sagedotcom/master/products/dpnmgciq.png?h=572&iar=0&w=1027&extension=webp&hash=C5C6FD0342B73E49F6E46148C99E63B6",
        },
    ];

    function hadleclick (b) {
        let greenselector = document.querySelector(".greenselector");
        greenselector.style.transform =`translateY(${b}px)`;      
    };
    const [slideIndex, setslideIndex] = useState(0);
    
     return (
         <>
         <Navbar />
         <section className='section1'>
         <div className='Box1'>
                 <div className='Box1D'>
                     <img src='https://e-file.huawei.com/-/media/EBG/Images/ProductV2/eSight/product/IT-Management-en.png' alt='pc'></img>
 
                 </div>
                 <div className='Box1G'>
                     <h1 className='Box1_title'>
                     Des employés extraordinaires méritent un logiciel extraordinaire
                        
                     </h1>
                     <p className='Box1_p'>
                     La seule plateforme dont vous aurez besoin pour gérer votre entreprise :
                        des applications intégrées, simples et appréciées par des millions d'utilisateurs satisfaits.
 
                     </p>
                     <button></button>
                 </div>
         </div>
         </section>
         <section className="section2">
             <div className="box2">
                 <div className="boxes">
                     <img src="https://images.ctfassets.net/rz1oowkt5gyp/5AE4nXLOennRxmmUMcgMLM/747e96bdd16cf4113e4ef867bd85fd29/solutions.svg" alt="dsg" />
                     <h3>Trello : qu'est-ce que c'est ?</h3>
                     <p>Trello est l'outil visuel qui permet à votre équipe de gérer n'importe quel type de projet ou de flux de travail, ou encore de suivre les tâches.</p>
                     <button>visite guidée de trello</button>
                     </div>
                 <div className="boxes">
                     <img src="https://images.ctfassets.net/rz1oowkt5gyp/2ozLp25HsHeANpiNqAwzGI/d60a017d2f214c28f774b35d03499782/tag.svg" alt="sdf" />
                     <h3>Consultez les tarifs Trello</h3>
                     <p>Que votre équipe soit composée de 2 ou de 2 000 membres, vous pouvez personnaliser Trello pour votre organisation. Trouvez l'option qui vous correspond.</p>
                     <button>consulter les tarifs</button>
                     </div>
                 <div className="boxes">
                     <img src="https://images.ctfassets.net/rz1oowkt5gyp/6rRWTcHzPKupQ3ZDqBaxu6/aecd045f4b31a92288a85bdb4a9dfe2c/compass.svg" alt="sdgfsdg" />
                     <h3>Découvrez Trello Enterprise</h3>
                     <p>L'outil de productivité plébiscité par les équipes, complété par les fonctionnalités et la sécurité requises pour évoluer.</p>
                     <button>en savoir plus</button>
                     </div>
                 
 
             </div>
         </section>
         <section className='section3'>
         <div className='Box3'>
             <h2 className='Box2_title'>
             Renforcez l'efficacité, l’agilité et la productivité de votre entreprise grâce à une solution accessible partout et à tout instant.
             </h2>
             <p className='Box3_p'>
             Gérez votre comptabilité et vos clients ainsi que votre production, vos stocks, votre trésorerie et bien plus encore. Sage 100 Cloud combine la puissance d'une application de bureau avec la connexion au cloud pour vous permettre de travailler partout. Il accompagne la croissance des entreprises, quel que soit leur secteur d’activité : commerce, services, industrie...
             </p>
         </div>
         </section>
         <section className='section4'>
         <div className='Box4_top'>
                 <h2>Optimisez le pilotage de votre activité</h2>
                 <p>Rationalisez et automatisez vos processus métiers avec Sage 100</p>
             </div>
         <div className='Box4_bottom'>
                 <div className='Box4_bottom_L'>
                     <p>Sage 100 apporte des applications intégrées que vous pouvez adapter facilement à chaque service de votre entreprise.</p>
                     <nav className='nav_links_2'>
                         <div className="greenselector"></div>
                         <ol className='list1'>
                             <li onClick={()=> {setslideIndex(0);hadleclick(2.5)}}>Simplifiez les finances de votre entreprise</li>
                             <li onClick={()=> {setslideIndex(1);hadleclick(95)}}>Automatisez votre chaîne d'approvisionnement</li>
                             <li onClick={()=> {setslideIndex(2);hadleclick(190)}}>Automatisez vos procédures financières</li>
                             <li onClick={()=> {setslideIndex(3);hadleclick(285)}}>Optimisez et sécurisez vos paiements</li>
                         </ol>
                     </nav>
                 </div> 
                 <div className='Box4_bottom_R'>
                     <div className='containerr'>
                         <div className="slide">
                             <div className="slide_l">
                             {slideIndex >= 0 && <h2 className='title'>{slides[slideIndex].title}</h2>}
                             {slideIndex >= 0 && <p className='discription'>{slides[slideIndex].par}</p>}
                             </div>
                             <div className="slide_r"> 
                             {slideIndex >= 0 && <img src={slides[slideIndex].src} className="slideImg" alt='img' ></img>}   
                             </div>
                             
                         </div>
                         
                            
                     </div>
                 </div>
             </div>
         </section>
         <section className="section5">
             <div className="box5">
                 <div className='box5_title'>
                     <h3>Over 3,000 reviews & ratings</h3>
                     <p>Highly rated by thousands of customers all over the world</p>
                 </div>
                 <div className='rates'>
               <div className="customers_rate">
                 <img src="https://www-cms.pipedriveassets.com/Company-logos/Capterra-1.svg" alt="img1" />
                 <Stars
                 Valuee="4"/> 
               </div>
               <div className="customers_rate"><img src="https://www-cms.pipedriveassets.com/Company-logos/G2.png" alt="img2" />
               <Stars
                 Valuee="5"/> 
               </div>
               <div className="customers_rate"><img src="https://www-cms.pipedriveassets.com/Company-logos/Gartner-logo.svg" alt="img3" />
               <Stars
                 Valuee="4"/> 
               </div>
               <div className="customers_rate"><img src="https://www-cms.pipedriveassets.com/Company-logos/getapp-logo.svg" alt="img4" />
               <Stars
                 Valuee="5"/> 
               </div>
               <div className="customers_rate"><img src="https://www-cms.pipedriveassets.com/Company-logos/SoftwareAdvice.png" alt="img5" />
               <Stars
                 Valuee="4"/> 
               </div>
               <div className="customers_rate"><img src="https://www-cms.pipedriveassets.com/Company-logos/SourceForge_logo_transparent.svg.png" alt="img6" />
               <Stars
                 Valuee="4"/> 
               </div>
             </div>
             </div>
             
         </section>
         <Footer/>
         
         </>
        
     );
     
 }
 
 export default Home;
                     
   
    

    

    

    
    
    
