import React from "react";
import "./MainMvpLadder.scss";

function MainMvpLadder(props) {
  return (
    <div id="mainMvpLadder">
      <ul>
        <li>
          <div>
            <p className="flama">#1 James Harden</p>
            <p>جایگاه هفته قبل : ‌2</p>
            <span>امتیاز : 35.4 ، پاس گل : 8.5 ، ریباند : 6.3 ، توپ ربایی : 2</span>
          </div>
        </li>
        <li>
          <div>
            <p className="flama">#2 Giannis Antetokounmpo</p>
            <p>جایگاه هفته قبل : ‌5</p>
            <span>35.4 points, 8.5 assists, 6.3 rebounds, 2.0 steals</span>
          </div>
        </li>
        <li>
          <div>
            <p className="flama">#3 Stephen Curry</p>
            <p>جایگاه هفته قبل : ‌1</p>
            <span>35.4 points, 8.5 assists, 6.3 rebounds, 2.0 steals</span>
          </div>
        </li>
        <li>
          <div>
            <p className="flama">#4 Kawhi Leonard</p>
            <p>جایگاه هفته قبل : ‌7</p>
            <span>35.4 points, 8.5 assists, 6.3 rebounds, 2.0 steals</span>
          </div>
        </li>
        <li>
          <div>
            <p className="flama">#5 Joel Embiid</p>
            <p>جایگاه هفته قبل : ‌4</p>
            <span>35.4 points, 8.5 assists, 6.3 rebounds, 2.0 steals</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default MainMvpLadder;
