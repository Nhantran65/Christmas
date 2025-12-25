import { useMemo, useState } from "react";
import "./App.css";
import Snow from "./Snow";

// Đổi đúng tên file ảnh của bạn ở đây
import p1 from "./assets/photos/1.jpeg";
import p2 from "./assets/photos/2.jpeg";
import p3 from "./assets/photos/3.jpeg";
import p4 from "./assets/photos/4.jpeg";
import p5 from "./assets/photos/5.jpeg";
import p6 from "./assets/photos/6.jpeg";
import p7 from "./assets/photos/7.jpeg";
import p8 from "./assets/photos/8.jpeg";

type Step = "gift" | "gallery" | "letter";

export default function App() {
  const photos = useMemo(() => [p1, p2, p3, p4, p6, p8, p7, p5], []);
  const [step, setStep] = useState<Step>("gift");
  const [idx, setIdx] = useState(0);

  const openGift = () => {
    setStep("gallery");
    setIdx(0);
  };

  const next = () => {
    const nextIdx = idx + 1;
    if (nextIdx >= photos.length) {
      setStep("letter");
      return;
    }
    setIdx(nextIdx);
  };

  const prev = () => setIdx((v) => Math.max(0, v - 1));

  const restart = () => {
    setStep("gift");
    setIdx(0);
  };

  return (
    <div className="page">
      <div className="card">
        <Snow count={45} /> 
        <header className="header">
          <div className="badge">🎄 Merry Christmas</div>
          <h1>Gửi em iu của anh 💝</h1>
          <p className="sub">Bấm vào hộp quà để mở bất ngờ nha.</p>
        </header>

        {step === "gift" && (
          <button className="giftBtn" onClick={openGift} aria-label="Open gift">
            <div className="giftBox">
              <div className="giftLid" />
              <div className="giftRibbon" />
              <div className="giftBow">🎁</div>
            </div>
            <div className="hint">Bấm để mở</div>
          </button>
        )}

        {step === "gallery" && (
          <div className="gallery">
            <div className="progress">
              Ảnh {idx + 1}/{photos.length}
            </div>

            <div className="photoFrame">
              <img className="photo" src={photos[idx]} alt={`photo-${idx + 1}`} />
            </div>

            <div className="controls">
              <button className="btn ghost" onClick={prev} disabled={idx === 0}>
                ⟵ Trước
              </button>
              <button className="btn" onClick={next}>
                {idx + 1 === photos.length ? "Mở lá thư 💌" : "Tiếp ⟶"}
              </button>
            </div>
          </div>
        )}

        {step === "letter" && (
          <div className="letter">
            <div className="envelope">💌</div>
            <h2>Lá thư cho em iu</h2>
            <p className="letterText">
              Merry Christmas em iu của anh 🎄✨
               <br />
              <br />
              Đáng lẽ ra, mình đã có thể cùng nhau đón ba mùa Giáng Sinh bên nhau rồi (hic: Lớp 9,10 và bây giờ nữa nèee).
              Nhưng vì anh bị hối phải quay lại Phần Lan công tác sớm quá, nên Giáng Sinh này anh không thể ở cạnh em như anh mong muốn.
               <br />
               <br />
              Anh buồn lắm đóoooo
              Buồn vì chỉ có thể nhìn em qua ảnh nói chuyện với em, nhớ em từ xa, yêu em từ xa.
              Nhưng em iu à, xa mặt không có nghĩa là cách lòng.
              Trái tim anh vẫn luôn ở cạnh em, từng khoảnh khắc, từng ngày.
               <br />
              <br />
              Anh yêu em nhiều lắm, yêu rất rất nhiều.
              Và anh chắc chắn rằng lần tới, Giáng Sinh năm sau, em nhất định phải ở bên anh nhé.
              Hứa với anh điiiiii!
               <br />
                <br />
              Món quà này không phải là thứ gì có thể đo đếm được không thể trao tặng hay shipper có thể giao và làm mất của anh nữa đâu nhé,
              mà là tất cả tình cảm, nỗi nhớ và tình yêu anh dành cho em.
              Với anh, đó là món quà vô giá dành riêng cho em iu của anh.
               <br />
                <br />
              Anh yêu em, bé Quỳnh của anh 💗
               <br />
                <br />
              — Aiu của em: Dr. Nhan Tran
            </p>

            <div className="controls">
              <button className="btn ghost" onClick={restart}>
                Xem lại từ đầu
              </button>
            </div>
          </div>
        )}
      </div>

      <footer className="footer">
        Made with ❤️ by you
      </footer>
    </div>
  );
}
