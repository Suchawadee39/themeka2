/* let dataList = [
  {
    id: 1,
    table: "A01",
    time: "18:15",
    status: "serving",
    img: "./images/icon/serving.png",
  },
  {
    id: 2,
    table: "A02",
    time: "18:17",
    status: "in the kitchen",
    img: "./images/icon/serving.png",
  },
  {
    id: 3,
    table: "A03",
    time: "18:35",
    status: "in the kitchen",
    img: "./images/icon/In-the-kitchen.png",
  },
  {
    id: 4,
    table: "A04",
    time: "19:40",
    status: "in the kitchen",
    img: "./images/icon/In-the-kitchen.png",
  },
  {
    id: 5,
    table: "A05",
    time: "19:55",
    status: "Order placed",
    img: "./images/icon/order-placed.png",
  },
];
 */
/* const dataList_2 = [
  {
    id: 6,
    table: "A06",
    time: "19:35",
    status: "Order placed",
    img: "./images/icon/order-placed.png",
  },
  {
    id: 7,
    table: "A07",
    time: "19:40",
    status: "Order placed",
    img: "./images/icon/order-placed.png",
  },
  {
    id: 8,
    table: "A08",
    time: "19:40",
    status: "Order placed",
    img: "./images/icon/order-placed.png",
  },
  {
    id: 9,
    table: "A09",
    time: "19:55",
    status: "Order placed",
    img: "./images/icon/order-placed.png",
  },
  {
    id: 10,
    table: "A10",
    time: "20:00",
    status: "Order placed",
    img: "./images/icon/order-placed.png",
  },
];
 */
let slideList = [
  {
    id: 1,
    imgf: "./images/pic/example1.jpg",
    menuname: "steak combo set",
  },
  {
    id: 2,
    imgf: "./images/pic/example3.jpg",
    menuname: "seafood combo set",
  },
  {
    id: 3,
    imgf: "./images/pic/example4.jpg",
    menuname: "salmon salad",
  },
  {
    id: 4,
    imgf: "./images/pic/example6.jpg",
    menuname: "avocado toast",
  },
  {
    id: 5,
    imgf: "./images/pic/example1.jpg",
    menuname: "steak combo set",
  },
  {
    id: 6,
    imgf: "./images/pic/example3.jpg",
    menuname: "seafood combo set",
  },
  {
    id: 7,
    imgf: "./images/pic/example4.jpg",
    menuname: "salmon salad",
  },
  {
    id: 8,
    imgf: "./images/pic/example6.jpg",
    menuname: "avocado toast",
  },
];

let dataList = [];
let getSlideList = [];

let menuData = [];

let monthNames = [
  "Jan.",
  "Feb.",
  "Mar.",
  "Apr.",
  "May",
  "Jun.",
  "Jul.",
  "Aug.",
  "Sep.",
  "Oct.",
  "Nov.",
  "Dec.",
];

let textMessage =
  "หากรออาหารเกิน 15 นาที กรุณาลุกขึ้นรำฉุยฉาย เพื่อเป็นการแจ้งให้พนักงานทราบ";

let showData = 2;

function showStatus() {
  if (showData == 1) {
    showData = 2;
  } else {
    showData = 1;
  }

  let x = document.getElementById("show-status");
  x.innerHTML = "";
  // const realdata = showData == 1 ? dataList : dataList_2;
  const realdata = dataList;
  for (let index = 0; index < realdata.length; index++) {
    const element = realdata[index];
    /*    console.log("logElement", element); */
    const testName = element.name;
    console.log("TestName", testName);
    const estimate = element.orders;
    /*     console.log("testlogestimate", estimate); */

    for (let index = 0; index < estimate.length; index++) {
      const element = estimate[index];
      /*   console.log("thisElement", element); */
      const testTime = element.estimate_end_time;
      /*  console.log("TestTime", testTime); */
      x.innerHTML += `<div class="row ">
      <div class="col-5">
        <div class="status-table">
          <div class="name-status">โต๊ะ (Table)</div>
          <div class="main-status">${testName}</div>
        </div>
      </div>
      <div class="col-5 ">
        <div class="status-time">
          <div class="name-status">เสิร์ฟ (Serving time)</div>
          <div class="main-status">${testTime}</div>
        </div>
      </div>
      <div class="col-2">
          <img class="status-logo" src="${element.img}">
      </div>
    </div>`;
    }
  }
}
showStatus();
setInterval(() => {
  showStatus();
}, 60000);

function showSlider() {
  let x = document.getElementById("show-slide");
  console.log("Test1", getSlideList);
  for (let index = 0; index < getSlideList.length; index++) {
    const element = getSlideList[index];

    const image = element.image_path;
    const titleimg = element.description;

    if (index === 0) {
      x.innerHTML += `<div class="carousel-item active" data-bs-interval="30000">
      <img class="img-slider" src="${image}">
      <div class="wrapper-content">
        <div class="carousel-caption d-none d-md-block">
        <div class="menu-name">${titleimg}</div>
        </div>
      </div>
    </div>`;
    } else {
      x.innerHTML += `<div class="carousel-item" data-bs-interval="30000">
      <img class="img-slider" src="${image}">
      <div class="wrapper-content">
        <div class="carousel-caption d-none d-md-block">
        <div class="menu-name">${titleimg.toUpperCase()}</div>
        </div>
      </div>
    </div>`;
    }
  }
}

function showClockRealTime() {
  let d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());
  let day = addZero(d.getDate());
  let month = monthNames[d.getMonth()];
  let year = addZero(d.getFullYear());
  document.getElementById("timenow").innerHTML = h + ":" + m + ":" + s;
  document.getElementById("datenow").innerHTML = day + " " + month + " " + year;
}
setInterval("showClockRealTime()", 1000);

function addZero(num) {
  return num < 10 ? `0${num}` : num;
}

function showTextMessage() {
  document.getElementById("text-showmessage").innerHTML = textMessage;
}
showTextMessage();

async function getData() {
  const response = await fetch(
    "http://13.250.6.185/fb-system/public/api/guest/restaurants",
    {
      method: "GET",
    }
  );
  const result = await response.json();
  console.log("result", result);

  const res1 = result.data[0];
  /*   console.log("rest1", res1); */

  dataList = res1.room_or_tables;

  getSlideList = res1.slides;

  /*   console.log("datalist123", dataList);
  console.log("slide", getSlideList);
 */
  // for (let index = 0; index < res1.room_or_tables.length; index++) {
  //   const element = res1.room_or_tables[index];
  //   console.log(element);
  // }
  showStatus();
  showSlider();
}

getData();
