<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.flex-row{
  display: flex;
}

.flex-column{
  display: flex;
  flex-direction: column;
}

.topnav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  overflow: hidden;
  background-color: black;
}

.Navbar {
  display:flex;
  flex-direction: row;
}

.topnav a {
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}


.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav responsive .Navbar a {
    display: none;
  }
  .Header-container a.icon {
    display: block;
  }

  /* .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    left: 0;
    top: 0;
  } */

  .topnav.responsive {
    display:flex;
    flex-direction: column;
  }

  .topnav.responsive .Navbar {
    display:flex;
    flex-direction: column;
  }

  .topnav.responsive .Navbar a {
    display: block;
    text-align: left;
  }
}
</style>
</head>
<body>

  <div class="topnav flex-row" id="myTopnav">
    <div class="flex-row">
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
        <h1 style="color:white; padding-left: 15px">title</h1>
    </div>
    <div class="Navbar">
        <a href="#home" class="active">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
    </div>
  </div>

<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>

</body>
</html>
