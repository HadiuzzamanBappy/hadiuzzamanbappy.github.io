<?php
	$result="";
	if(isset($_POST['submit'])){
		require 'phpmailer/PHPMailerAutoload.php';
		$mail = new PHPMailer;

		$mail->Host='smtp.gmail.com';
		$mail->Port=587;
		$mail->SMTPAuth=true;	
		$mail->SMTPSecure='tls';
		$mail->Username='andrewjames797979@gmail.com';
		$mail->Password='andrewjames1602';

		$mail->setFrom($_POST['email'],$_POST['name'])
		$mail->addAddress('hbappy79@gmail.com');
		$mail->addReplyTo($_POST['email'],$_POST['name']);

		$mail->isHTML(true);
		$mail->Subject='Form Submission: '.$_POST['subject'];
		$mail->Body='<h1 align=center> Name :'.$_POST['name'].'<br>Email: '.$_POST['email'].'<br>Message: '.$_POST['msg'].']</h1>';

		if(!$mail->send()){
			$result="Something went Wrong. Please try again."
		}
		else
		{
			$result="Thanks".$_POST['name']."for contacting us.We'll get back to you soon!";
		}
	}

?>
<!DOCTYPE html>
<html>
<head>
	<link rel="icon" href="resource/favicon/favicon.ico">
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="It is my portfolio.">
    <meta name="author" content="Hadiuzzaman Bappy">
	<title>Contact with me</title>
	<link rel="stylesheet" type="text/css" href="../../resource/css/contact.css">
</head>
<body>
	<header>
		<div id="intro">
			<h1 class="name">
				Md. Hadiuzzaman Bappy
			</h1>
			<p>Raymanik, Kachua, Jashore | <a class="emailAddress" href="mailto:hbappy79@gmail.com">hbappy79@gmail.com</a></p>
			<p>
				<a class="introLink" href="https://cseku.ac.bd/">Computer Science & Engineering Discipline</a>
			</p>
			<p>
				<a class="introLink" href="https://ku.ac.bd/">Khulna University, Khulna</a>
			</p>
		</div>
	</header>
	<section class="sendMessageSection overflow">
		<h5> 
			<?php
				echo $result;
			?>
		</h5>
		<form class="formbox" method="POST" action="">
			<ul>
				<li>
					<input class="inputfield" type="text" name="name" placeholder="Enter Your name" required="required">
				</li>
				<li>
					<input class="inputfield" type="email" name="email" placeholder="Enter Your email" required="required">
				</li>
				<li>
					<input class="inputfield" type="text" name="subject" placeholder="Enter email Subject" required="required">
				</li>
				<li>
					<textarea class="inputfield resize" name="msg" rows="4" cols="50" required="required" placeholder="Write message here!"></textarea>
				</li>
				<li>
					 <input class="submit" type="submit" name="submit" value="Send">
				</li>
			</ul>
		</form>
	</section>
</body>
</html>