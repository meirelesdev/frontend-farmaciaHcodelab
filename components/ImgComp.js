

export default function ImgComp(props){
    let imgStyles={
        width:100+"%",
        height:100+"%",
        background: ` url(${props.src}) no-repeat`,
        "background-blend-mode": "overlay",
        
        "background-size":"cover"
    }
return <div style={imgStyles} alt={props.alt}></div>
}