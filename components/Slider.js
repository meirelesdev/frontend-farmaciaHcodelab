import styles from './Slider.module.css'
import ImgComp from '../components/ImgComp'
import Link from 'next/link'
import { useState } from 'react'

export default function Slider(){

    let sliderArr = [{
        img: <ImgComp src="/assets/banner/farmacia.jpg" alt="farmacia Popular"/>,
        title: "Medicamentos Gratis",
        link:"/contact",
        textLink:"Venha Conferir"
    },
    {
        img: <ImgComp src="/assets/banner/2.jpg" alt="convenios" />,
        title: "Convenios com descontos IMPERDIVEIS",
        link:"/products",
        textLink: "Até 50% Off"
    },
    {
        img: <ImgComp src="/assets/banner/familia.jpg" alt="Familia com saude" />,
        title: "Para a saude da sua Familia",
        link:"/contact",
        textLink: "Aproveite"
    },
    {
        img: <ImgComp src="/assets/banner/covid19.jpg" alt="codiv-19"/>,
        title: "Todos Contra o covid",
        link:"/contact",
        textLink:"Se proteja"
    }
    ]

    const [x, setX] = useState(0)

    const autoXIncremente = ()=>{
        setInterval(()=>{
            goRight()
        },5000)
    }
    // autoXIncremente()
    const goLeft = () => {
        x === 0 ? setX(-100*(sliderArr.length - 1)): setX(x + 100)
    }
    
    const goRight = () => {
       x === -100*( sliderArr.length -1)? setX(0): setX(x - 100)
        
    }
    return(
        <div className={styles.slider}>
            {
                sliderArr.map((item, index)=>{
                    return(
                        <div key={index} className={styles.slide} style={{transform: `translateX(${x}%)`}}>
                            {item.img}
                            <h1>{item.title}!</h1>
                               <Link href={item.link}>
                                    <a>{item.textLink}</a>
                                </Link>
                        </div>
                        
                    )
                })
            }
            <button onClick={goRight} className={styles.direita}>
                <img srcSet="/assets/icons/seta.svg" alt="Para Direita" />
            </button>
            <button onClick={goLeft}  className={styles.esquerda}>
                <img srcSet="/assets/icons/seta.svg" alt="Para Esquerda" />
            </button>
        </div>
    )
}