<!DOCTYPE html>
<html lang="en">

<head>

    <title>Russianized</title>
    <link rel="stylesheet" href="./ressources/src/style/global.css">
    <link rel="stylesheet" href="index.css">
    <meta name="title" content="RUSSIANIZED, will you survive ?">
    <meta name="description" content="Is your life in danger in case of a Russian Nuclear attack ?">
    <meta name="keywords" content="Russia, russia, nuclear, bombs, atomic bombs, war, ukraine, die, death, peace, world, russianized, actu, actuality, leaflet, openstreetmap, osm, simulator, nuke map, map">

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css" integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ==" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js" integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ==" crossorigin=""></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.css" />
    <script src="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js"></script>
    <script src="https://npmcdn.com/leaflet-geometryutil"></script>

    <script async src="https://www.googletagmanager.com/gtag/js?id=G-2F266ZNKFZ"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-2F266ZNKFZ');
    </script>

    <script src="https://kit.fontawesome.com/6146c51b46.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/futura-renner" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

</head>

<body>
    <div class="root">
        <header>
            <nav>
                <div class="header-logo-title">
                    <img src="./ressources/images/russianized.svg" alt="Russianized logo">
                    <h1 class="header-title">
                        <a class="title" href="#">Russianized</a>
                    </h1>
                </div>
                <ul class="header-nav">
                    <li><a class="nav-item" href="#" id="btn-open-test">Russianized</a></li>
                    <li><a class="nav-item" href="./more/">must read</a></li>
                    <li><a class="nav-item" href="./about/">About</a></li>
                </ul>

                <a href="#" id="openBtn">
                    <span class="burger-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </a>
            </nav>
        </header>

        <div id="mySidenav" class="sidenav">
            <a id="closeBtn" href="#" class="close">×</a>
            <ul>
                <li><a href="#" id="btn-open-test-side">Russianized</a></li>
                <li><a href="./more/">Must Read</a></li>
                <li><a href="./about/">About</a></li>
            </ul>
        </div>

        <div id="details-tab" class="">
            <a href="#" class="btn-close" id="btn-close-test" onclick="this.parentNode.classList.remove('active');">+</a>
            <div class="details-content">
                <div class="det detail-city" style="display: flex; align-items:center;">
                    <i class="fa-solid fa-map-pin" style="padding-right: 1rem;"></i>
                    <div class="text">
                        <span id="det-nuked-city">XXXXX</span> has been nuked
                    </div>
                </div>
                <div class="det details-radius" style="display: flex; align-items:center;">
                    <i class="fa-solid fa-ruler" style="padding-right: 1rem;"></i>
                    <div class="text">
                        You are <span id="details-distance">XXX</span> meters from the point of impact
                    </div>
                </div>
                <div class="det details-death" style="display: flex; align-items:center;">
                    <i class="fa-solid fa-skull" style="padding-right: 1rem;"></i>
                    <div class="text">
                        You have a <span id="det-death-prob">XX</span>% chance of dying
                    </div>
                </div>
                <div class="det details-calculation" style="display: flex; align-items:center;">
                    <div class="text">
                        Where are these numbers coming from ?
                        <p>1- Find the coordinates of the location you entered</p>
                        <p>2- Find the closest big city from the location you tested</p>
                        <p>3- Resize the size of the bomb proportionnaly to the population of the bomb target</p>
                        <p>4- Compute your chance of dying proportionnaly from your distance to the nuke center</p>
                        <p><u>Cities with one million or more population are nuked with a Tsar Bomba which is a Russian bomb and, as a matter of fact, the most powerful bomb ever built</u></p>
                    </div>
                </div>
                <!-- <div class="det chart" style="display: flex; align-items:center;">
                    <i class="fa-solid fa-bullseye" style="padding-right: 1rem;"></i>
                    <canvas id="details-chart"></canvas>
                    <script>
                        document.getElementById('details-chart').height = '100%';
                    </script>
                    <div class="text">
                        <div class="details-radius-text">
                        </div>
                    </div>
                </div> -->
            </div>
        </div>

        <div class="content">
            <div id="map">
            </div>
        </div>
        <button id="details-btn" onclick="document.getElementById('details-tab').classList.add('active');">DETAILS</button>


        <footer>
            <nav>
                <a href=" #" class="footer-ukr-flag"><img src="./ressources/images/UkraineFlag.svg.png" alt="Ukrainian Flag"></a>
                <!-- <div class="footer-note">New features coming soon...</div> -->
                <h3 class="copyright">Copyright <span style="font-family:'Inter', sans-serif; color:white;">&#169;</span> Aiveriwhair 2022</h3>
            </nav>
        </footer>

        <div class="popup">
            <div class="popup-content">
                <a href="#" class="btn-close" id="btn-close-test" onclick="document.getElementsByClassName('popup')[0].style.display = 'none'">+</a>
                <h2 class=" popup-title">Russianized ?</h2>
                <div class="popup-text">
                    After months of hostility between most of the world and Russia, World War 3 is declared.
                    All cities with more than 100k inhabitants are subjected to nuclear bombing,<br> <strong>what are your chances?</strong>
                </div>
                <form>
                    <input type="text" id="popup-address" placeholder=" Your address">
                    <a href="#" id="test-btn"><i class="fa-solid fa-circle-radiation"></i></a>
                </form>
            </div>
        </div>

        <div class="result" style="display: none;">
            <div class="result-content">
                <h2>Congratulations!</h2>
                <h2 class="result-title">You and your neighbors have a <span id="dyingProb"></span>% chance of <strong>DYING</strong> from an atomic russian bomb in the next months !</h2>
                <h2 class="result-title">According to the distance, you would probably die <span class="deathCause"></span>.</h2>
                <a href="#" class="btn-close" id="btn-close-result">+</a>
            </div>
        </div>

    </div>
    <script src="./ressources/data/bombs.js"></script>
    <script src="./ressources/data/newdataSet100k.js"></script>
    <script src="./ressources/src/js/global.js"></script>
    <script src="./js/detailsLoader.js"></script>
    <script src="./js/index.js"></script>
    <script src="./test.js"></script>
</body>

</html>