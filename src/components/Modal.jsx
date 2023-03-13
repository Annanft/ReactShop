export function Modal({x}){
    return(
        <div className="overlay">
            <div className="drawer">
                <h4>Your orders: <img onClick={()=> x(false)} height={30}  src="./close.png" alt="" /></h4>
            </div>
        </div>
    )
}