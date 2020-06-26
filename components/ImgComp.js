

export default function ImgComp(props){
    let imgStyles={
        width:100+"%",
        height:100+"%"
    }
    return <img style={imgStyles} srcSet={props.src} alt="imagem do slide" />
}