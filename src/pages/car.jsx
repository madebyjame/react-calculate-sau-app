import { Link } from "react-router-dom";
import car from "../assets/car.png";

export default function Car() {
  return (
    <main className="calculator-page car-page">
      <section className="calculator car">
        <h1>Car Installment Calculator</h1>
        <p className="subtitle">คำนวณ Car Installment</p>
        <img className="calculator-icon" src={car} alt="" />

        <form onSubmit={(e) => e.preventDefault()}>
          <label className="field">
            ชื่อผู้คำนวณ
            <input type="text" name="customer" />
          </label>
          <label className="field">
            ราคารถ (บาท)
            <input type="number" name="price" min="0.01" step="any" required />
          </label>
          <label className="field">
            ดอกเบี้ยต่อปี (%)
            <input type="number" name="interest" min="0" step="any" required />
          </label>
          <fieldset>
            <legend>เงินดาวน์ (%)</legend>
            <div className="choices">
              {[15, 20, 25, 30, 35].map((percent) => (
                <label key={percent}>
                  <input type="radio" name="downPayment" value={percent} defaultChecked={percent === 15} />
                  {percent}%
                </label>
              ))}
            </div>
          </fieldset>
          <label className="field">
            จำนวนเดือนที่ผ่อน
            <select name="months" defaultValue="24">
              {[24, 36, 48, 60, 72, 84].map((months) => (
                <option key={months} value={months}>{months} เดือน</option>
              ))}
            </select>
          </label>
          <div className="actions">
            <button className="primary" type="submit">คำนวณ</button>
            <button type="reset">ล้างข้อมูล</button>
          </div>
        </form>

        <p className="result" role="status">
          ผ่อนชำระต่อเดือนละ <strong>0.00</strong> บาท
        </p>
        <Link className="back" to="/">กลับหน้าหลัก</Link>
      </section>
    </main>
  );
}
