// //?                       USEEFFECT HOOK
// //?==================================================================
// //! The Effect Hook,function componentlerde yan etkiler gerçekleştirmenizi sağlar.
// //! useEffect Hook'u componentDidMount, componentDidUpdate ve componentWillUnmount olarak düşünebiliriz..setInterval, fetch axios ile veri çekme ve mesela dizi her değiştiğinde set et (istediğim bişeyi yap) demek için kullanılır

// //! useEffect(() => {
// //*   /* ComponentDidMount code */
// //! }, []);

// //! useEffect(() => {
// //*   */ componentDidUpdate code */
// //! }, [var1, var2]);

// //! useEffect(() => {
// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, []);

// //! useEffect(() => {
// //*   //* componentDidMount code + componentDidUpdate code */

// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, [var1, var2]);
import React, { useState, useEffect } from 'react'

const OrnekUseEffect = () => {
    const [sayac, setSayac] = useState(0)

    //?ilk bunu göster

    //!componentDidMount= component ilk render edildiğinde çalış

    // useEffect(()=>{

    // console.log("ilk render");
    // setTimeout(()=>{
    //     alert("veri getirildi")
    // },3000)


    // },[])

    //? ikinci olarak bunu göster

    //! count her değiştiğinde çalışsın= componentDidUpdate

    // useEffect(()=>{
    //   console.log("sayac artıyor");

    //   setTimeout(()=>{
    //       alert("veri getirildi")
    //   },3000)

    // },[sayac])

    //?son olarak bunu göster
    //!component öldüğünde (başka sayfaya gidildiğinde )

    useEffect(() => {

        const time = setInterval(() => {
            console.log("INTERVAL ÇALIŞMAYA BAŞLADI");
        }, 1000)


        //!component ölünce=componentWillUnmount
        return () => {

            clearInterval(time)
            console.log("component öldü");
        }

    }, [])






    return (
        <div>
            <h3>COUNT:{sayac}</h3>

            <button className="btn btn-warning" onClick={() => setSayac(sayac + 1)}>ARTTIR</button>
        </div>
    )
}

export default OrnekUseEffect