<?php
// the message
$index = $_POST['email'];
$content = $_POST['content'];

$domain = 'ef62797b7722f6cea17321e408b235835608968c.clockworksms.com';

$addr_array=array("SMSEmergency Ambulance SCDF"=>"6586468621@$domain",
                  "SMSRescue and Evacuation SCDF"=>"6586468621@$domain",
                  "SMSFire-Fignting SCDF"=>"6586468621@$domain",
                  "SMSGas Leak Control Singapore Power"=>"6586468621@$domain",
                  "emailEmergency Ambulance SCDF"=>"iamrockrepublic@gmail.com",
                  "emailRescue and Evacuation SCDF"=>"iamrockrepublic@gmail.com",
                  "emailFire-Fignting SCDF"=>"iamrockrepublic@gmail.com",
                  "emailGas Leak Control Singapore Power"=>"iamrockrepublic@gmail.com"
                );

$addr = $addr_array[$index];


require 'PHPMailer/PHPMailerAutoload.php';
$mail = new PHPMailer();

$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = "ssl";
$mail->Host= 'smtp.gmail.com';
$mail->Username = 'random9cms@gmail.com';
$mail->Password = '321478965';
$mail->Port = 465;
$mail->setFrom('iamrockrepublic@gmail.com', 'random9');
$mail->addAddress($addr, 'Joe Us');
$mail->Subject = 'New Crisis';
$mail->Body    = $content;
$mail->AltBody =  $content;
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}

/*send sms through email
send a email to mobilenumber@YOURAPIkey.clockworksms.com
the mobile number must be international format e.g. 6581119000
API key = ef62797b7722f6cea17321e408b235835608968c
body should be like: "#STARTSMS put your content here #ENDSMS"
*/

?>
