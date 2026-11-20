import { Link } from "react-router-dom";
import bmi from "../assets/bmi.png";

export default function Bmi() {
  return (
    <main className="calculator-page">
      <section className="calculator bmi">
        <h1>BMI Calculator</h1>
        <p className="subtitle">คำนวณ BMI</p>
        <img className="calculator-icon" src={bmi} alt="" />

        <form onSubmit={(e) => e.preventDefault()}>
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
          ค่า BMI ที่คำนวณได้: <strong>0.00</strong>
        </p>
        <Link className="back" to="/">กลับหน้าหลัก</Link>
      </section>
    </main>
  );
}
