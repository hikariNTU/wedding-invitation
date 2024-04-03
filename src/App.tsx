import { getData, getImg } from "./fake-crypto";

const data = getData();

function App() {
  return (
    <div className="mx-auto max-w-screen-sm p-4 text-center text-stone-800">
      <h1 className="mb-6 mt-8 text-2xl font-semibold tracking-widest text-amber-800">
        {data.title}
      </h1>
      <p>
        <img
          src={getImg()}
          className="aspect-square w-full rounded-xl"
          alt="[240121]wedding-invitation"
        />
      </p>
      <h2
        className="mb-2 mt-12 text-2xl font-semibold text-amber-800"
        id="時間"
        data-id="時間"
      >
        時間
      </h2>
      <time dateTime={data.dateTime} className="mb-1 text-stone-700">
        {data.time}
      </time>
      <ul className="mt-6 flex flex-col items-center gap-2">
        <li>
          <div className="rounded-full bg-amber-700 px-3 py-0.5 text-sm text-neutral-100">
            11:30
          </div>
          進場
        </li>
        <li>
          <div className="rounded-full bg-amber-700 px-3 py-0.5 text-sm text-neutral-100">
            11:50
          </div>
          儀式開始
        </li>
        <li>
          <div className="rounded-full bg-amber-700 px-3 py-0.5 text-sm text-neutral-100">
            14:30
          </div>
          活動結束
        </li>
      </ul>
      <h2
        className="mb-2 mt-12 text-2xl font-semibold text-amber-800"
        id="地點"
        data-id="地點"
      >
        地點
      </h2>
      <p className="text-stone-700">
        圓山聯誼會館 西餐廳
        <br />
        <a
          href="https://www.grand-hotel.org/TW/club/restaurant-detail.aspx?serno=10"
          className="text-amber-600 underline underline-offset-2"
        >
          https://www.grand-hotel.org/TW/club/restaurant-detail.aspx?serno=10
        </a>
      </p>
      <div className="my-4 flex flex-col items-center rounded-xl bg-stone-50 p-4 pb-6 text-amber-700">
        <AlertIcon className="text-3xl text-amber-600" />
        <p className="">非圓山大飯店本館，聯誼會館位在游泳池池畔</p>
      </div>
      <h2
        className="mb-2 mt-12 text-2xl font-semibold text-amber-800"
        id="用餐資訊"
        data-id="用餐資訊"
      >
        用餐資訊
      </h2>
      <p>西餐自助式</p>
      <p>備有酒水，若須駕車請勿飲酒</p>
      <h2
        className="mb-2 mt-12 text-2xl font-semibold text-amber-800"
        id="交通資訊"
        data-id="交通資訊"
      >
        交通資訊
      </h2>
      <h3 id="大眾運輸" className="mb-2 mt-4 text-xl" data-id="大眾運輸">
        大眾運輸
      </h3>
      <ol className="my-2 flex flex-col items-center gap-1">
        <li>捷運圓山站 1 號出口出站後繼續步行至公車站牌</li>
        <li>轉乘圓山大飯店免費接駁公車於上午 10:40、11:10、11:30 發車之班次</li>
        <li>抵達圓山大飯店後須告知司機轉搭小型巴士</li>
        <li>小型巴士將直接前往聯誼會館門口</li>
        <li>接駁公車全部路程約為 15 分鐘</li>
      </ol>
      <p className="my-4">
        乘車資訊及詳細班次時間
        <br />
        <a
          href="https://www.grand-hotel.org/TW/official/about-traffic.aspx?gh=TP"
          className="text-amber-600 underline"
          target="_blank"
          rel="noopener"
        >
          https://www.grand-hotel.org/TW/official/about-traffic.aspx?gh=TP
        </a>
      </p>
      <p>
        <img
          src="/bus.webp"
          className="rounded-xl"
          alt="image"
          loading="lazy"
        />
      </p>

      <hr className="my-4 border-black/10" />

      <h3 id="自行開車" className="mb-2 mt-4 text-xl" data-id="自行開車">
        自行開車
      </h3>
      <p>
        進入圓山大飯店管制閘門後，依照右方標牌行駛至「第二停車場」停放您的車輛，停妥後沿下方道路步行
        3 分鐘即可抵達。
        <br />
        若遇第二停車場客滿，可停至圓山大飯店範圍內之停車格，惟飯店停車格距離聯誼會館稍遠，敬請見諒。
      </p>
      <div className="my-4 flex flex-col items-center rounded-xl bg-stone-50 p-4 pb-6 text-amber-700">
        <AlertIcon className="text-3xl text-amber-600" />
        <p>注意：聯誼會館之停車場為會員專屬停車場，外車不得進入與停放。</p>
      </div>
      <p>
        <img
          src="/map.webp"
          className="rounded-xl"
          alt="image"
          loading="lazy"
        />
      </p>

      <hr className="my-4 border-black/10" />

      <h3 id="計程車" className="mb-2 mt-4 text-xl" data-id="計程車">
        計程車
      </h3>
      <p>
        告知司機前往圓山大飯店下方之圓山聯誼會，計程車可直接進入聯誼會場地。
      </p>

      <hr className="my-4 border-black/10" />

      <a
        href={data.ics}
        className="inline-flex w-fit items-center gap-2 rounded-lg p-2 text-center text-amber-600 hover:bg-black/5"
      >
        <CalendarIcon className="text-[32px]" />
        加入行事曆
      </a>
      <hr className="my-4 border-black/10" />
    </div>
  );
}

export default App;

const AlertIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    viewBox="0 -960 960 960"
    width="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M109-120q-11 0-20-5.5T75-140q-5-9-5.5-19.5T75-180l370-640q6-10 15.5-15t19.5-5q10 0 19.5 5t15.5 15l370 640q6 10 5.5 20.5T885-140q-5 9-14 14.5t-20 5.5H109Zm69-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm0-120q17 0 28.5-11.5T520-400v-120q0-17-11.5-28.5T480-560q-17 0-28.5 11.5T440-520v120q0 17 11.5 28.5T480-360Zm0-100Z" />
  </svg>
);

const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    viewBox="0 -960 960 960"
    width="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-40q0-17 11.5-28.5T280-880q17 0 28.5 11.5T320-840v40h320v-40q0-17 11.5-28.5T680-880q17 0 28.5 11.5T720-840v40h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
  </svg>
);
