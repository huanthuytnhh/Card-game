import React from "react";
import { Collapse, Card } from "antd";

const { Panel } = Collapse;

const HowToPlay = () => {
  return (
    <div className="py-16 bg-white">
      <h2 className="text-4xl text-center font-bold mb-8">How to Play</h2>
      <Collapse accordion className="max-w-4xl mx-auto">
        <Panel header="Bước 1: Chia Bài" key="1">
          <p>
            Mỗi người chơi sẽ nhận 13 lá bài. Bài được chia theo chiều kim đồng
            hồ. Người chơi có thể xem bài của mình nhưng không được cho người
            khác thấy.
          </p>
        </Panel>
        <Panel header="Bước 2: Bắt Đầu Chơi" key="2">
          <p>
            Người chơi đầu tiên (thường là người có lá bài 3 bích) sẽ ra bài.
            Người chơi có thể ra một lá bài hoặc một bộ bài (như đôi hoặc sám).
          </p>
          <p>Sau đó, lượt chơi sẽ diễn ra theo chiều kim đồng hồ.</p>
        </Panel>
        <Panel header="Bước 3: Đánh Bài" key="3">
          <p>
            Người chơi phải đánh bài cao hơn bài trước đó hoặc bỏ lượt. Ví dụ:
            Nếu người chơi trước đánh một lá 5, bạn phải đánh từ 5 trở lên.
          </p>
          <p>
            Nếu bạn không có bài để đánh, bạn có thể chọn bỏ lượt. Lưu ý: Nếu
            bạn đã đánh một bộ bài, người khác có thể chặn bằng bộ bài mạnh hơn.
          </p>
        </Panel>
        <Panel header="Bước 4: Kết Thúc Ván Chơi" key="4">
          <p>
            Ván chơi kết thúc khi một người chơi hết bài. Người đó sẽ thắng và
            được ghi điểm. Các người chơi còn lại sẽ tính điểm dựa trên số lá
            bài còn lại trong tay.
          </p>
        </Panel>
        <Panel header="Bước 5: Cách Tính Điểm" key="5">
          <p>
            Mỗi lá bài có giá trị điểm khác nhau:
            <ul className="list-disc pl-5">
              <li>Át: 1 điểm</li>
              <li>
                2, 3, 4, 5, 6, 7, 8, 9, 10: Tương ứng với giá trị của lá bài
              </li>
              <li>J: 11 điểm</li>
              <li>Q: 12 điểm</li>
              <li>K: 13 điểm</li>
            </ul>
          </p>
        </Panel>
        <Panel header="Bước 6: Một Số Mẹo Chơi" key="6">
          <p>
            - Hãy chú ý đến các lá bài mà đối thủ đã đánh để dự đoán bài của họ.
          </p>
          <p>- Cố gắng giữ lại các lá bài mạnh cho những lượt chơi sau.</p>
          <p>
            - Nếu bạn có nhiều bộ bài, hãy sắp xếp chúng theo thứ tự để dễ dàng
            ra bài.
          </p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default HowToPlay;
