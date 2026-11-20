import { useState } from "react";
import { Link } from "react-router-dom";
import bmi from "../assets/bmi.png";

export default function Bmi() {
  const [result, setResult] = useState("0.00");

  function calculateBmi(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const weight = Number(form.get("weight"));
    const height = Number(form.get("height")) / 100;
    const bmiValue = weight / (height * height);

    setResult(Number.isFinite(bmiValue) ? bmiValue.toFixed(2) : null);
  }

  return (
    <main className="calculator-page">
      <section className="calculator bmi">
        <h1>BMI Calculator</h1>
        <p className="subtitle">คำนวณ BMI</p>
        <img className="calculator-icon" src={bmi} alt="" />

        <form onSubmit={calculateBmi} onReset={() => setResult("0.00")}>
          <label className="field">
            ป้อนน้ำหนัก (กิโลกรัม)
            <input type="number" name="weight" min="0.01" step="any" placeholder="เช่น 65" required />
          </label>
          <label className="field">
            ป้อนส่วนสูง (เซนติเมตร)
            <input type="number" name="height" min="0.01" step="any" placeholder="เช่น 170" required />
          </label>
          <div className="actions">
            <button className="primary" type="submit">คำนวณ BMI</button>
            <button type="reset">รีเซ็ต</button>
          </div>
        </form>

        <p className="result" role="status">
          {result === null ? "กรุณาตรวจสอบค่าที่กรอก" : <>ค่า BMI ที่คำนวณได้: <strong>{result}</strong></>}
        </p>
        <Link className="back" to="/">กลับหน้าหลัก</Link>
      </section>
    </main>
  );
}
