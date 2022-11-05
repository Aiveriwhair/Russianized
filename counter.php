<?php

//Si pas de cookie, on en créer un qui dure 1 jour et on incrémente le compteur
if (!isset($_COOKIE["russianized-visit"])) {
    incrementVisitCount();
    setcookie("russianized-visit", true, time() +  86400);
}

//

function incrementVisitCount()
{
    $count = file_get_contents("./ressources/stats/count.txt");
    file_put_contents("./ressources/stats/count.txt", $count + 1, LOCK_EX);
}

function getVisitCount()
{
    return file_get_contents("./ressources/stats/count.txt");
}

function alert($msg)
{
    echo '<script>alert("' . $msg . '")</script>';
}
