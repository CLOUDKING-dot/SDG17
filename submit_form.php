<?php 
if($_SERVER["REQUEST_METHOD"] =="POST"){
    $name= filter_var(trim($_POST["name"]),FILTER_SANITIZE_STRING);
    $email= filter_var(trim($_POST["email"]),FILTER_SANITIZE_EMAIL);
    $service= isset($_POST["service"])? filter_var(trim($_POST["service"]),FILTER_SANITIZE_STRING): null;
    $message= isset($_POST["message"])? filter_var(trim($_POST["message"]),FILTER_SANITIZE_STRING): null;
    $to = "nabangijonah@gmail.com";
    $subject= "Form submission for SDG17";
    $headers= "Form:" .$email ."\r\n";
    $headers .= "Reply-To:" .$email ."\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    if($service){
        $body= "Name: $name\nEmail: $email\nService Request: \n$service";
} else{
    $body= "Name: $name\nEmail: $email\nMessage: \n$message";
}
if(mail($to,$subject,$body,$headers)){
    echo "Form submitted successfully";
}
 else {
    echo "Error submitting form. Please try again later.";
} 
}
else{
    echo "Invalid request method.";
}
?>