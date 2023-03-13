import { useState } from "react"
function Main(){
    const[heart, setHeart] = useState(false)
    const[plus, setPlus] = useState(false)

    const styleHeart = heart ? './heart-red.png': './heart.png'

    const stylePlus = plus ? './checked.png' : './plus.png'
    return(
        <main>
          <div className="search">
                <h2>
                    All products
                </h2>
                <input type="text" placeholder="search...." />
          </div >
          <div className="cards">
            <div className="item">
                <img onClick={()=>setHeart(!heart)} height={20} src={styleHeart} alt="" />
                <img height={200} src="./imgItems/1.jpg" alt="" />
                <div>
                    <p>Adidas version 0.5</p>
                    <h5>299 $ <img onClick={()=>setPlus(!plus)} height={25} src={stylePlus} alt="" /></h5>
                </div>
            </div>

            
          </div>
        </main>
    )
}

export default Main