import { Link } from "react-router-dom";
import bmr from "../assets/bmr.png";

export default function Bmr() {
  return (
    <main className="calculator-page">
      <section className="calculator bmr">
        <h1>BMR Calculator</h1>
        <p className="subtitle">คำนวณ BMR</p>
        <img className="calculator-icon" src={bmr} alt="" />

        <form onSubmit={(e) => e.preventDefault()}>
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
          ค่า BMR ที่คำนวณได้: <strong>0.00</strong>
        </p>
        <Link className="back" to="/">กลับหน้าหลัก</Link>
      </section>
    </main>
  );
}
