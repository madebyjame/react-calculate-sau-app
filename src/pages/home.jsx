import calculate from "../assets/calculate.png";
import bmi from "../assets/bmi.png";
import bmr from "../assets/bmr.png";
import car from "../assets/car.png";
import CardMenu from "../components/CardMenu";

export default function Home() {
  return (
    <main className="home">
      <img className="home-icon" src={calculate} alt="" />
      <h1>เครื่องมือคำนวณออนไลน์</h1>
      <p>เลือกการคำนวณที่คุณต้องการจากรายการด้านล่าง</p>

      <div className="menu">
        <CardMenu
          showTitle="BMI (ดัชนีมวลกาย)"
          showPic={bmi}
          showDetail="คำนวณว่าน้ำหนักของคุณเหมาะสมกับส่วนสูงหรือไม่"
          path="/bmi"
        />
        <CardMenu
          showTitle="BMR (อัตราการเผาผลาญ)"
          showPic={bmr}
          showDetail="คำนวณพลังงานที่ร่างกายต้องการในแต่ละวัน"
          path="/bmr"
        />
        <CardMenu
          showTitle="การผ่อนชำระรถยนต์"
          showPic={car}
          showDetail="คำนวณยอดผ่อนต่อเดือนและดอกเบี้ยรถยนต์"
          path="/carinstallment"
        />
      </div>
    </main>
  );
}
