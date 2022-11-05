<?php

$site_description = "<p>Russianized is a small app enabling you to visualize how dangerous Russian bombs are for you, depending on where you live.
Indeed, after several threats from Vladimir Putin, it is time to find out if you really are in danger !</p>
<p>The data of the website should not be taken seriously since the data that is used is not scientifically based. 
Indeed, I wouldn't have lost my time doing the research as you and I are both going to die from climate change anyhow ! 
Wait, that's an idea, coming soon...</p>
<p>Moreover, this pesimistic website aims to remind us that we are facing a serious situation at the moment.</p>
<p>I am hoping you felt concerned about the situation for a second.</p>
<p>All my thoughts goes to the Ukrainian people.</p>";
$me_description = "<p>The situation in Ukraine was a shock for me. I thought that these stories of wars were over in the Western countries. We study the first two world wars when we are young. They are presented to us as something unthinkable today. That's what I thought too.</p>
<p>The war in Ukraine was a stab in my convictions. I realized that I was naive. This project came to me naturally while I was watching news about the war.</p>
<p>This site is an exaggeration of reality. Firstly to realize what could possibly happen and how devastating it would be. Secondly, not to let the situation be forgotten. Thirdly, because this is my way of approaching things.</p>
<p>More personnally, I am a 20yo French student in computer engineering in Grenoble</p>";
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Russianized - About</title>
    <link rel="stylesheet" href="../ressources/src/style/global.css">
    <link rel="stylesheet" href="./about.css">

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="https://kit.fontawesome.com/6146c51b46.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/futura-renner" type="text/css" />
</head>

<body>
    <div class="root">
        <script src="./js/about.js"></script>
        <header>
            <nav>
                <div class="header-logo-title">
                    <img src="../ressources/images/russianized.svg" alt="Russianized logo">
                    <h1 class="header-title">
                        <a class="title" href="/">Russianized</a>
                    </h1>
                </div>
                <ul class="header-nav">
                    <li><a class="nav-item" href="/">Home</a></li>
                    <li><a class="nav-item" href="../more/">Must Read</a></li>
                    <li><a class="nav-item" href="#">About</a></li>
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
                <li><a href="../" id="">Home</a></li>
                <li><a href="../more/">Must Read</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </div>



        <div class="content">
            <div class="content-head">
                <h2 class="content-title">About...</h2>
                <div class="content-logo">
                </div>
            </div>
            <div class="content-space"></div>
            <div class="site-description">
                <div class="russianized-description">
                    <h3>...Russianized</h3>
                    <?php echo $site_description ?>
                </div>

                <div class="content-space"></div>

                <div class="me-description">
                    <h3>...Me</h3>
                    <?php echo $me_description ?>
                    <script>
                        function mailToClipboard() {
                            navigator.clipboard.writeText('.....');
                        }
                    </script>
                    <p>Ideas, criticism and pretty much every things you would like to tell me are welcome at the following address : <a onclick='mailToClipboard()'>william.i@russianized.com</a></p>
                    <p class="signature">William / Aiveriwhair</p>
                </div>
            </div>
            <div class="content-space"></div>
            <div class="content-peace">
                <p>Peace</p>
                <i class="fa-solid fa-peace"></i>
            </div>
        </div>

        <footer>
            <nav>
                <a href="" class="footer-ukr-flag"><img src="../ressources/images/UkraineFlag.svg.png" alt="Ukrainian Flag"></a>
                <h3 class="copyright">Copyright <span style="font-family:'Inter', sans-serif; color:white;">&#169;</span> Aiveriwhair 2022</h3>
            </nav>
        </footer>

    </div>
    <script src="../ressources/src/js/global.js"></script>
</body>

</html>