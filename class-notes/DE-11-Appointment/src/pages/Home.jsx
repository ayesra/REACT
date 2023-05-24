import { useState } from "react";
import HastaEkle from "../components/HastaEkle";
import HastaListe from "../components/HastaListe";
import { doktorData, hastaData }  from "../helper/Data";

const Home = () => {
  
const[hastalar,setHastalar]=useState(hastaData)
const[doktorlar,setDoktorlar]=useState(doktorData)

  

  return (
    <div >
      <div>
        <header className="header">
          <h1>HOSPİTAL</h1>
          <div className="dr">
            {doktorlar.map((dr) => (
              <div>
                <img
                  src={dr.resim}
                  alt=""
                  width="180px"
                  height="150px"
                  className="btn"
                  style={{ backgroundColor: "aqua" }}
               
                />
                <h4
                style={{backgroundColor:"aqua", borderLeft:"10px solid blue"}}
                >
                  {dr.doktor}
                </h4>
              </div>
            ))}
          </div>
        </header>

          <HastaEkle
         hastalar={hastalar} setHastalar={setHastalar}
          />
      </div>

      <HastaListe
       hastalar={hastalar} setHastalar={setHastalar}
      />
    </div>
  );
};

export default Home;
