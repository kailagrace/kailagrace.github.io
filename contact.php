<?php  $to = "kgmanca@yahoo.com";  $subject = "Contact Kaila Request"; 
 $name = $_REQUEST['name'] ;
  $usersubject = $_REQUEST['subject'] ;
 $email = $_REQUEST['email'] ;
   $message = $_REQUEST['message'] ;
     $headers = "From: $email"; 
	  $sent = mail($to, $subject, $name,  $usersubject, $message, $headers) ;  if($sent)  {print "Your mail was sent successfully"; } else  {print "We encountered an error sending your mail"; } ?>