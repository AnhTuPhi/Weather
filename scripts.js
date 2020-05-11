/*var request = new XMLHttpRequest();
request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=9f20eb77f72ea91f670b63837d46bb2e', true);
request.onload = function () {
  
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    console.log(data);
    var display = {
      city:data.name,
      country:data.sys.country,
      weather:data.weather[0]["description"],
      temp:data.main.temp
    }
    console.log(display);
    var blank = document.getElementById("blankDisplay");
    blank.innerHTML = display;
    
    
    function iterate(item) {
      console.log(item);
 
    }
    
    Array.prototype.forEach.call(data.weather, iterate);
   
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}
request.send();*/

//var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=9f20eb77f72ea91f670b63837d46bb2e&units=metric";


function search() {
  var city = document.querySelector("#input").value;
  alert(city);
  var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=9f20eb77f72ea91f670b63837d46bb2e&units=metric&cnt=32";
  console.log(url);
  //var urlIcon = "http://openweathermap.org/img/wn/" + icon+"@2x.png";
  function loadData() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.response);
        console.log(data);
        document.getElementById("present-weather").style.display = "block";
        document.getElementById("present-forecast").style.display = "block";
        document.getElementById("present-forecast1").style.display = "block";
        document.getElementById("present-forecast2").style.display = "block";
        document.getElementById("nextday-weather1").style.display = "block";
        document.getElementById("nextday-weather2").style.display = "block";
        document.getElementById("nextday-weather3").style.display = "block";
        var presentName = data.city.name + data.city.country;
        var presentTemp = data.list[0]["main"]["temp"] + " feel likes " + data.list[0]["main"]["feels_like"];
        var presentHumidity = data.list[0]["main"]["humidity"];
        var presentMain = data["list"][0]["weather"][0]["main"];
        var presentDescription = data["list"][0]["weather"][0]["description"];
        var presentWindSpd = data.list[0]["wind"]["speed"];
        var presentTime = data.list[0]["dt_txt"];
        var codeIcon = data["list"][0]["weather"][0]["icon"];
        var codeIcon1 = data["list"][1]["weather"][0]["icon"];
        var codeIcon2 = data["list"][2]["weather"][0]["icon"];
        var codeIcon3 = data["list"][3]["weather"][0]["icon"];
        var codeIcon4 = data["list"][8]["weather"][0]["icon"];
        var codeIcon5 = data["list"][16]["weather"][0]["icon"];
        var codeIcon6 = data["list"][24]["weather"][0]["icon"];
        var iconurl = "http://openweathermap.org/img/w/" + codeIcon + ".png";
        var iconurl1 = "http://openweathermap.org/img/w/" + codeIcon1 + ".png";
        var iconurl2 = "http://openweathermap.org/img/w/" + codeIcon2 + ".png";
        var iconurl3 = "http://openweathermap.org/img/w/" + codeIcon3 + ".png";
        var iconurl4 = "http://openweathermap.org/img/w/" + codeIcon4 + ".png";
        var iconurl5 = "http://openweathermap.org/img/w/" + codeIcon5 + ".png";
        var iconurl6 = "http://openweathermap.org/img/w/" + codeIcon6 + ".png";
        $('#wicon').attr('src', iconurl);
        $('#wicon1').attr('src', iconurl1);
        $('#wicon2').attr('src', iconurl2);
        $('#wicon3').attr('src', iconurl3);
        $('#wicon4').attr('src', iconurl4);
        $('#wicon5').attr('src', iconurl5);
        $('#wicon6').attr('src', iconurl6);
        document.getElementById("p-name").innerHTML = presentName;
        document.getElementById("p-temp").innerHTML = presentTemp;
        document.getElementById("p-humidity").innerHTML = presentHumidity;
        document.getElementById("p-main").innerHTML = presentMain;
        document.getElementById("p-description").innerHTML = presentDescription;
        document.getElementById("p-spd").innerHTML = presentWindSpd;
        document.getElementById("p-time").innerHTML = presentTime;
        

        document.getElementById("p2-time").innerHTML = data.list[1]["dt_txt"];
        document.getElementById("p2-temp").innerHTML = data.list[1]["main"]["temp"] +" feel likes " + data.list[1]["main"]["feels_like"];
        document.getElementById("p2-description").innerHTML = data["list"][1]["weather"][0]["description"];

        document.getElementById("p3-time").innerHTML = data.list[2]["dt_txt"];
        document.getElementById("p3-temp").innerHTML = data.list[2]["main"]["temp"] +"feel likes " + data.list[1]["main"]["feels_like"];
        document.getElementById("p3-description").innerHTML = data["list"][2]["weather"][0]["description"];
        
        document.getElementById("p4-time").innerHTML = data.list[3]["dt_txt"];
        document.getElementById("p4-temp").innerHTML = data.list[3]["main"]["temp"] +"feel likes " + data.list[1]["main"]["feels_like"];
        document.getElementById("p4-description").innerHTML = data["list"][3]["weather"][0]["description"];
        
        document.getElementById("n-name").innerHTML = data.city.name;
        document.getElementById("n-temp").innerHTML = data.list[8]["main"]["temp"] +" feel likes " + data.list[8]["main"]["feels_like"];;
        document.getElementById("n-humidity").innerHTML = data.list[8]["main"]["humidity"];
        document.getElementById("n-main").innerHTML = data["list"][8]["weather"][0]["main"];
        document.getElementById("n-description").innerHTML = data["list"][8]["weather"][0]["description"];
        document.getElementById("n-spd").innerHTML = data.list[8]["wind"]["speed"];
        document.getElementById("n-time").innerHTML = data.list[8]["dt_txt"];
        
        document.getElementById("n1-name").innerHTML = data.city.name;
        document.getElementById("n1-temp").innerHTML = data.list[16]["main"]["temp"] +" feel likes " + data.list[16]["main"]["feels_like"];;
        document.getElementById("n1-humidity").innerHTML = data.list[16]["main"]["humidity"];
        document.getElementById("n1-main").innerHTML = data["list"][16]["weather"][0]["main"];
        document.getElementById("n1-description").innerHTML = data["list"][16]["weather"][0]["description"];
        document.getElementById("n1-spd").innerHTML = data.list[16]["wind"]["speed"];
        document.getElementById("n1-time").innerHTML = data.list[16]["dt_txt"];
        
        document.getElementById("n2-name").innerHTML = data.city.name;
        document.getElementById("n2-temp").innerHTML = data.list[24]["main"]["temp"] +" feel likes " + data.list[24]["main"]["feels_like"];;
        document.getElementById("n2-humidity").innerHTML = data.list[24]["main"]["humidity"];
        document.getElementById("n2-main").innerHTML = data["list"][24]["weather"][0]["main"];
        document.getElementById("n2-description").innerHTML = data["list"][24]["weather"][0]["description"];
        document.getElementById("n2-spd").innerHTML = data.list[24]["wind"]["speed"];
        document.getElementById("n2-time").innerHTML = data.list[24]["dt_txt"];
      }
      else if (this.status < 200 && this.status >= 400) {
        alert("Not found");
      }
    };
    request.open('GET', url, true);
    request.send();
  }
  loadData();
 
}
