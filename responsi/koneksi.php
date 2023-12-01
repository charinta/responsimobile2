<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, HEAD, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
$koneksi = mysqli_connect('localhost', 'root', '', 'responsi_mobile') or die("koneksi gagal");