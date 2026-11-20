import { useState } from "react";
import { Link } from "react-router-dom";
import bmr from "../assets/bmr.png";

export default function Bmr() {
  const [result, setResult] = useState("0.00");

  function calculateBmr(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const weight = Number(form.get("weight"));
    const height = Number(form.get("height"));
    const age = Number(form.get("age"));
    const gender = form.get("gender");
    let bmrValue;

    if (gender === "male") {
      bmrValue = 66 + 13.7 * weight + 5 * height - 6.8 * age;
    } else {
      bmrValue = 665 + 9.6 * weight + 1.8 * height - 4.7 * age;
    }

    setResult(Number.isFinite(bmrValue) && bmrValue > 0 ? bmrValue.toFixed(2) : null);
  }

  return (
    <main className="calculator-page">
      <section className="calculator bmr">
        <h1>BMR Calculator</h1>
        <p className="subtitle">คำนวณ BMR</p>
        <img className="calculator-icon" src={bmr} alt="" />

        <form onSubmit={calculateBmr} onReset={() => setResult("0.00")}>
          <label className="field">
            ป้อนน้ำหนัก (กิโลกรัม)
            <input type="number" name="weight" min="0.01" step="any" required />
          </label>
          <label className="field">
            ป้อนส่วนสูง (เซนติเมตร)
            <input type="number" name="height" min="0.01" step="any" required />
          </label>
          <label className="field">
            ป้อนอายุ (ปี)
            <input type="number" name="age" min="1" required />
          </label>
          <fieldset>
            <legend>เพศ</legend>
            <div className="choices gender">
              <label><input type="radio" name="gender" value="male" defaultChecked /> ชาย</label>
              <label><input type="radio" name="gender" value="female" /> หญิง</label>
            </div>
          </fieldset>
          <div className="actions">
            <button className="primary" type="submit">คำนวณ BMR</button>
            <button className="danger" type="reset">รีเซ็ต</button>
          </div>
        </form>

        <p className="result" role="status">
          {result === null ? "กรุณาตรวจสอบค่าที่กรอก" : <>ค่า BMR ที่คำนวณได้: <strong>{result}</strong></>}
        </p>
        <Link className="back" to="/">กลับหน้าหลัก</Link>
      </section>
    </main>
  );
}
