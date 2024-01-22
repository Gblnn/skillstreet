import { motion } from 'framer-motion';
import { LucideMail } from 'lucide-react';
import 'react-vertical-timeline-component/style.min.css';
import './styles/style.css';
import './styles/utils.css';
import Nav from './components/nav';
import LandingPage from './components/landing-page';

function App() {

  return (
    <>
    <div style={{display:"flex", width:"100%", height:"fit-content", flexFlow:"column"}}>

      <Nav/>

      <div className='page'>

        <LandingPage/>
        <img className='bg' style={{width:"100%", position:"absolute", zIndex:-1}} src="/phone.webp"/>
        
      </div>

      <div className='page' style={{marginTop:"35%",height:"fit-content", border:"", flexFlow:"column"}}>

        <motion.div
        variants={{
          hidden:{opacity:0, y:75},
          visible:{opacity:1, y:0},
          
        }}
        transition={{duration:0.5, delay:0.25}}
        initial="hidden"
        whileInView="visible"
        style={{zIndex:-1,width:"100%", border:"", display:'flex', alignItems:"center", flexFlow:"column"}}>

          `<div style={{width:"75%", border:"", display:"flex", justifyContent:"center"}}>
            
            <div style={{border:"", width:"100%"}}>
              <h1 className='subheading'>Introducing SkillBee <strong>•</strong> </h1><h1></h1>
            </div>
          
            
            
            
          </div>
          <div style={{height:"15rem", border:"", width:"75%", marginTop:"1.5rem", display:"flex", alignItems:"center", flexFlow:"column"}}>

            <p className='desc'>SkillBee is an <strong>AI-powered tool</strong>  created by Skill Street to accelerate your career guidance needs. Through sophisticated algorithms and real-time market analysis, SkillBee identifies your unique strengths, passions, and potential growth areas, offering tailored career recommendations that align with your aspirations and goals.</p>

          </div>

        </motion.div>
        
        
      </div>
      <div className='page' style={{border:"", height:"fit-content", paddingTop:"1rem", paddingBlock:"1rem", flexFlow:"column", marginTop:"8rem"}}>

        <p style={{opacity:0.5, zIndex:-1}}>-No Changes to Scroll Timeline-</p>
        
      </div>
      <div id="access" className='page'>
      <div style={{border:"", display:"flex", flexFlow:"column", gap:"0.5rem", width:"75%", alignItems:"center", justifyContent:"center"}}>

<div  style={{display:"flex", flexFlow:"column", gap:"0.5rem"}}>

  <div className='tag-container' style={{border:"", display:"flex"}}>
    <p className='tag' style={{color:"#68cc3f", background:"rgba(47 110 22/ 25%)", width:"fit-content", borderRadius:"1rem", padding:"0.25rem", paddingLeft:"0.75rem", paddingRight:"0.75rem"}}>BETA</p>
  </div>


<h1 className='subheading' style={{fontSize:"2rem", color:"var(--color)"}}>Build with Skill Street</h1>
</div>
<div style={{height:"1rem"}}></div>
<p className='desc' style={{fontSize:""}}>We are launching SkillBee Beta! Join as a Beta user and get access to the latest and unreleased Features. We are open to contributors</p>
<div className='access-btn'>

  <div style={{border:"1px solid #623cb6",marginTop:"2rem", display:"flex", justifyContent:"space-between", padding:"0.5rem", borderRadius:"0.75rem"}}>
    <input style={{border:"none", background:"none"}} type='email' placeholder='Email Address'></input>
    <button className='btn'>Join</button>
  </div>
  
</div>

</div>
      </div>
      <div style={{height:"0rem"}}></div>
      <div style={{width:"100%", background:"#180c2e"}}>
        <div style={{padding:"2rem"}}>
          
          
          <div>
            <div style={{display:"flex", alignItems:"center", gap:"0.5rem"}}>
              <img src='/logo.webp' style={{width:"2rem"}}/>
              <h1 style={{color:"white"}}>Skill Street</h1>
            </div>
            <div style={{padding:"1rem", display:"flex", flexFlow:"column", gap:"1rem"}}>
            <a href='mailto:' style={{display:"flex", alignItems:"center", gap:"0.5rem"}}><LucideMail width={"1rem"}/>info@skillstreet.io</a>
            <p style={{color:"white"}}>© Copyright 2024, SkillStreet.io</p>
            </div>
            
          {/* <p>Revolutionizing careers.</p> */}
          </div>
          
          
          
        
        </div>
        
      </div>
    </div>
    </>
  )
}

export default App
