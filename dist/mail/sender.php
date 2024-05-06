<?php


if (isset($_POST["name"]) == !'' && isset($_POST["tel"]) == !'') {

    $to = 'fallgetell@gmail.com';
    $subject = 'FARBY | Новая заявка';
    $headers  = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: От кого письмо <info@digital-school.biz>\r\n";
    $headers .= "Reply-To: no-reply@digital-school.biz\r\n";
    $msg = "Имя: ".$_POST["name"]."<br>";
    $msg .= "Номер телефона: ".$_POST["tel"]."<br><br>";
    if (isset($_POST["target"])) {
        $msg .= "Цель: Заказ звонка";
    }
    if (isset($_POST["email"])) {
        $msg .= "E-mail: ".$_POST["email"]."<br>";
    }
    mail($to, $subject, $msg, $headers);


}

?>
