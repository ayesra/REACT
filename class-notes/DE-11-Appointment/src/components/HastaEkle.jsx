import { useState } from "react";

const HastaEkle = ({ hastalar, setHastalar }) => {

  const [isim, setIsim] = useState("")
  const [tarih, setTarih] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault(); //!dirrek submit yapmadan önce alttaki kodlari gör*
    setHastalar([...hastalar,{ 
      id: hastalar.length+1, 
      text: isim, 
      day: tarih, 
      bittiMi: false, 
      doktorum: "esra" }])
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div className="form-control">
          <label htmlFor="text">Hasta Bilgileri</label>

          <input
            id="text"
            type="text"
            placeholder="Add Name"
            name="text"

            onChange={(e) => setIsim(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="day">Day & Time</label>

          <input
            id="day"
            type="datetime-local"
            name="day"
            onChange={(e) => setTarih(e.target.value)}
          />
        </div>

        <div>
          <button className=" dok btn btn-submit" type="submit">
            <span style={{ color: "#6a0707" }}></span> Icin
            Kayit Oluştur
          </button>
        </div>
      </form>
    </div>
  );
};

export default HastaEkle;
