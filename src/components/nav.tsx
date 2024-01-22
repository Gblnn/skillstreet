

export default function Nav(){
    return(
        <>
        <div className='nav' style={{zIndex:10,position:"fixed",display:"flex", justifyContent:"space-between",alignItems:"center", width:"100%", height:"5rem", border:""}}>

            <div style={{display:"flex", marginLeft:"1.5rem", alignItems:"center", gap:"0.5rem"}}>

                <img src='/logo.webp' style={{width:"2rem"}}/>
                <p color='white' className='title'>Skill Street</p>

            </div>

            <div style={{marginRight:"2rem"}}>

                {/* <button className='btn'><a href='#access'>Early Access</a></button> */}

            </div>

        </div>
        </>
    )
}