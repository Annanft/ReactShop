import { useState } from "react"

export function Card({x}){
    const[heart, setHeart] = useState(false)
    const[plus, setPlus] = useState(false)

    const styleHeart = heart ? './heart-red.png': './heart.png'

    const stylePlus = plus ? './checked.png' : './plus.png'
    return(
        <div className="item">
                <img onClick={()=>setHeart(!heart)} height={20} src={styleHeart} alt="" />
                <img height={200} src={x.img} alt="" />
                <div>
                    <p>{x.title}</p>
                    <h5>{x.price} $ <img onClick={()=>setPlus(!plus)} height={25} src={stylePlus} alt="" /></h5>
                </div>
            </div>
    )
}