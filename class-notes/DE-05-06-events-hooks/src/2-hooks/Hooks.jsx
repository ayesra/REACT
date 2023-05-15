import React, { useState } from 'react'

const Hooks = () => {
    //!useState hook'u her zaman yukariya yazilir
    const [sayac, setSayac] = useState(0)

    const [kisi, setkisi] = useState({
        isim: "Leyla",
        email: "leyla@gmail.com",
        yas: 28,
        renk: "orange"
    });



    const arttir = () => {
        setSayac(sayac + 1);
    }

    const azalt = () => {
        setSayac(sayac - 1);
    }

    const degistir = () => {
        if (kisi.isim == "Leyla") {
            setkisi({
                isim: "Süreyya",
                email: "süreyya@gmail.com",
                yas: 32,
                renk: "green"
            });
        } else {
            setkisi({
                isim: "Leyla",
                email: "leyla@gmail.com",
                yas: 28,
                renk: "orange"
            });
        }
    }
    return (
        <div className="container">
            <h2>*********************************************</h2>

            <h1>USETATE</h1>
            <h2>COUNT:{sayac}</h2>

            <button className="btn btn-primary" onClick={arttir}>ARTTIR</button>
            <button className="btn btn-danger" onClick={azalt}>AZALT</button>
            <button className="btn btn-warning" onClick={() => setSayac(0)}>TEMIZLE</button>




            <h1>*******************************************</h1>
            <div className="text-center mt-4">
                <h1>OBJECT ILE USESTATE KULLANIMI</h1>
                <h2>{kisi.isim}</h2>
                <h3>{kisi.email}</h3>
                <h5>{kisi.yas}</h5>
                <button style={{ backgroundColor: kisi.renk }} className="btn btn-warning" onClick={degistir}>CHANGE</button>
            </div>

        </div>
    )
}

export default Hooks