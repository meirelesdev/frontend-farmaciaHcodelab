import styles from './Slider.module.css'
import ImgComp from '../components/ImgComp'
import Link from 'next/link'
import { useState } from 'react'

export default function Slider(){

    let sliderArr = [<ImgComp src="/assets/banner/1.jpg"/>,
                <ImgComp src="assets/banner/2.jpg" />,
                <ImgComp src="/assets/banner/3.jpg"/>,
                <ImgComp src="/assets/banner/4.jpg"/>,
                <ImgComp src="/assets/banner/5.jpg"/>
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
                            {item}
                            <h1>Produtos com <span>Qualidade</span> Absoluta!</h1>
                               <Link href="/contact">
                                    <a>Venha Conferir</a>
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