window.onload = function () {
  console.log(
    document.getElementById("bigCircle").getAttribute("data-id"),
    document.getElementById("bigCircle").getAttribute("class")
  );
  document.documentElement.setAttribute("color-theme", "purple");
  //최상위 root에 이 속성을 셋팅해준겁니다
  let darkMode = document.getElementById("darkmode");

  darkMode.addEventListener("click", (e) => {
    //e ===> 이벤트가 일어난 객체
    //e.target ==>일어난 객체를 선택
    //e.target.innerText => 일어난 객체를 선택해서 innerText 속성을 선택
    if (e.target.innerText === "DARK") {
      document.documentElement.setAttribute("color-theme", "dark");
      e.target.innerText = "PURPLE";
    } else {
      document.documentElement.setAttribute("color-theme", "purple");
      e.target.innerText = "DARK";
    }
  });
};
