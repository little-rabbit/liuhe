<?php
header('Content-type:text/html;charset=UTF-8');
$pdo = new PDO('mysql:host=localhost;dbname=redis', 'root', 'xue0916--');
$sql = "select mingcheng from area_list";
$stm = $pdo->query($sql);
  if ($stm) {
      $arr = $stm->fetchAll(PDO::FETCH_ASSOC);
      if ($arr) {
          echo json_encode($arr,JSON_UNESCAPED_UNICODE);
      } else {
          echo 0;
      }
  } else {
      echo 0;
  }
