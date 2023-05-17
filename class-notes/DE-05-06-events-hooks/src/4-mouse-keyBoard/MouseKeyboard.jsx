import React, { useState } from "react";
import { FaGooglePlus, FaReact } from "react-icons/fa";
const MouseKeyboard = () => {
    const [xEkseni, setXekseni] = useState(0);
    const [yEkseni, setYekseni] = useState(0);
    const [inputData, setInputdata] = useState("");

    //!onMouseMove=mouse umun sayfa üzerindeki hareketlerini inceler. pageX ve pageY komutunu kullanırsanız, bulunduğunuz sayfanın sol üst köşesini 0-0 kabul eder, ona göre konum bildirir

    const mouseOlayi = (e) => {
        console.log(e); //onMouseMove da farenin hareketleriyle ilgili tüm bilgileri verir. e.pageX  diyerek farenin x eksenindeki konumunu gördük
        setXekseni(e.pageX);
        setYekseni(e.pageY);
    };

    const keyDownOlayi = (e) => {
        //  console.log(e);
        if (e.keyCode >= 48 && e.keyCode <= 57) {
            alert("lütfen harf giriniz");
        } else alert("tebrikler harf girdiniz");
    };
    return (
        <div className="container text-center mt-4 d-flex flex-column align-items-center">
            <h2 className="text-danger">MOUSE EVENTS</h2>
            <p>X ve Y</p>
            <p className="text-danger fw-bold">
                {" "}
                {xEkseni} {yEkseni}{" "}
            </p>

            <div
                className="bg-success text-light w-50 p-4"
                id="coord"
                onMouseMove={mouseOlayi}
            >
                KOORDİNATLAR <FaReact /> <FaGooglePlus />{" "}
            </div>

            <div>
                <h2 className="text-danger mt-4">
                    Keyboard-Clipboard Events <span>{inputData}</span>{" "}
                </h2>

                <input
                    type="text"
                    className="form-control"
                    onKeyDown={keyDownOlayi}
                    onChange={(e) => {
                        setInputdata(e.target.value);
                    }}
                />
            </div>
        </div>
    );
};

export default MouseKeyboard;