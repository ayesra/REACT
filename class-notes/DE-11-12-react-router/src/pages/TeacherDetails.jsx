import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';


const TeacherDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [kisi, setKisi] = useState({})

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setKisi(data))
      .catch((err) => console.log(err));
  }, [id]);
  // useEffect te [] içini boş bırakabilirim. çünkü zaten bu sayfaya kisi tıklanınca o kisinin id  si ile geliniyor ve bu sayfa tekrar çalışıyor, ama syntax gereği, id ye bağlı çalıştığı için [] içine id değiştiğinde çalış komutu verirsek herkes mutlu onblur, yapmazsakta hata almayız
  //navigate(-sayı) ile sayı kaçsa o kadar sekme geri döner, yani sayı 2 ise 2 önce ziyaret ettiğimiz sayfaya döner
  console.log(kisi);

  return (
    <Container className="text-center mt-4">
      <div>
        <h3> </h3>
        <img
          src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`}
          alt=""
          width="250px"
        />
        <h4>{kisi.userName}</h4>
        <h5>{kisi.name}</h5>
        <h5>{kisi.phone}</h5>
        <h5>{kisi.website}</h5>
        <h5>{kisi.email}</h5>
        <div>
          <button className="btn btn-primary" onClick={() => navigate(-1)}>
            GO BACK
          </button>
          <button className="btn btn-warning" onClick={() => navigate("/")}>
            GO HOME
          </button>
        </div>
      </div>
    </Container>
  );
}

export default TeacherDetails