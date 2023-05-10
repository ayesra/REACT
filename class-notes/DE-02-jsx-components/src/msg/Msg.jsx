//? React, JSX kullanır.
//?  JSX'te, HTML öğelerini doğrudan JS'de kullanabiliriz

//! Componentler birleştirilmiş bir HTML,CSS,JS kodu döndürebilir..
//!Ancak, tek bir kapsayıcı (div, section, article, <> etc. gibi) öğesi döndürmesi gerekir.
//* JSX'te Styling çeşitli şekillerde gerçekleştirilebilir.
//* 1-) Inline-Styling kullanılabilir.
//* 2-) Styling, local veya global bir değişken olarak tanımlanabilir..
//* 3-) Styling external stylesheet (harici stil sayfası) olarak tanımlanabilir

//! NOTES:
//*styling için, property-value(object) yapısı kullanılır.
//* property name için camelCase yazı şekli, class tanımlamaları için className ismi kullanılır
//*Material UI, Styled Component, Sass, Bootstrap etc. gibi 3. part kütüphaneler de stil için kullanılabilir.

import Clock from '../clock/Clock'
import resim from '../img/sun-flower.jpeg'
//!External css
import "./Msg.css"

const Msg = () => {
    //!internal css
    const styleA={
        color:"green",
        fontFamily:"Tahoma",
        border:"1px solid red"
    }


    return (
        <div>
        <h2 style={styleA}>burasi MSG alani</h2>

        <Clock/>

        <p style={{color:"red",fontSize:"30px"}}>Hosgeldin REACT</p>

            <img className="msg-img" src="https://images.pexels.com/photos/556414/pexels-photo-556414.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" />
            <img className="msg-img" src={resim} alt="" />

        </div>
    )
}

export default Msg
