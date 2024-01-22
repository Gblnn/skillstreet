
export default function LandingPage() {
    return(
        <>
        <div style={{border:"", display:"flex", flexFlow:"column", gap:"0.5rem", width:"75%", alignItems:"center", justifyContent:"center"}}>

            <div style={{display:"flex", flexFlow:"column", gap:"1rem"}}>

                <div className='tag-container' style={{border:"", display:"flex"}}>
                    <p className='tag' style={{color:"goldenrod", background:"rgba(218 165 32/ 15%)", width:"fit-content", borderRadius:"1rem", padding:"0.25rem", paddingLeft:"0.75rem", paddingRight:"0.75rem"}}> Launching Soon </p>
                </div>


                <h1 style={{color:""}} className='heading'>Reach your goals faster</h1>
            </div>

            <div style={{height:"1rem"}}></div>

            <p style={{fontSize:"1rem"}}>Achieve your <strong>career goals</strong>  faster with expert guidance from our powerful AI toolset.</p>
                
            <div className='access-btn'>

                <a href='#access'>
                    <button style={{marginTop:"2rem"}} className='btn'>Get Early Access </button>
                </a>

            </div>

        </div>
        </>
    )
}