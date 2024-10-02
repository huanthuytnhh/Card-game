import React from "react";
import { Card } from "antd";

const GameDescription = () => {
  return (
    <div className="py-16 bg-gray-100">
      <h2 className="text-4xl text-center font-bold mb-8">Game Description</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        <Card
          title="Trò Chơi Tiến Lên"
          bordered={false}
          className="shadow-lg transition-transform transform hover:scale-105"
        >
          <p className="text-lg">
            Tiến Lên là một trò chơi bài nổi tiếng ở Việt Nam, nơi người chơi
            thi đấu với nhau để trở thành người đầu tiên hết bài.
          </p>
        </Card>
        <Card
          title="Đặc Điểm Nổi Bật"
          bordered={false}
          className="shadow-lg transition-transform transform hover:scale-105"
        >
          <ul className="list-disc pl-5">
            <li>Chơi từ 2 đến 4 người.</li>
            <li>Các lá bài được chia đều cho mỗi người chơi.</li>
            <li>Thú vị và dễ chơi cho mọi lứa tuổi.</li>
            <li>Có nhiều chiến thuật và kỹ năng để thắng cuộc.</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default GameDescription;
