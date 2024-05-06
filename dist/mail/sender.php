<?php


if (isset($_POST["name"]) == !'' && isset($_POST["tel"]) == !'') {

    $to = 'fallgetell@gmail.com';
    $subject = 'ТОП 5 болей фрилансера | Новая заявка';
    $headers  = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: От кого письмо <info@digital-school.biz>\r\n";
    $headers .= "Reply-To: no-reply@digital-school.biz\r\n";
    $msg = "Имя: ".$_POST["name"]."<br>";
    $msg .= "Номер телефона: ".$_POST["tel"]."<br><br>";
    if (isset($_POST["target"])) {
        $msg .= "Цель: Заказ звонка";
    }
    mail($to, $subject, $msg, $headers);


}

?>
