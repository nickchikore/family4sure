 <?php
//   //headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
//
//   //collect post data
  $postData = file_get_contents('php://input');
  $request = json_decode($postData);
//   //echo($request);
//
//   //clean post data
  $name = $request->name;
  $email = $request->email;
  $telephone = $request->telephone;
  $enquiry = $request->enquiry;
  $topic = $request->topic;
  $subscribe = $request->subscribe;
  $callback = $request->callback;
//
//   //create email
  $to = "nickchikore@gmail.com";
  //$from = $email;
  $email_subject = 'Enquiry from Family 4 Sure website ';
  $email_body = 'Mail from user contact form \n\n with regards to : '.$topic.
  " User name: " = .$name.
  " \n\n Email address: " = .$email.
  " \n\n Message: " = .$enquiry;
  $headers = "From: nickchikore@gmail.com";
//
//   //send email
  mail($to, $email_subject, $email_body, $headers);
//
//   //post success message
  if(mail($to, $email_subject, $email_body, $headers)){
    echo json_encode('success')
  }else{
    echo json_encode('failure')
  }

 ?>
//  <?php
// //   //headers
//   header('Access-Control-Allow-Origin: *');
//   header('Content-Type: application/json');
// //
// //   //collect post data
//   $postData = file_get_contents('php://input');
//   $request = json_decode($postData);
// //   //echo($request);
// //
// //   //clean post data
//   $name = $request->name;
//   $email = $request->email;
//   $telephone = $request->telephone;
//   $enquiry = $request->enquiry;
//   $topic = $request->topic;
//   $subscribe = $request->subscribe;
//   $callback = $request->callback;
// //
// //   //create email
//   $to = "nickchikore@gmail.com";
//   //$from = $email;
//   $email_subject = 'Enquiry from Family 4 Sure website ';
//   $email_body = 'Mail from user contact form \n\n with regards to : '.$topic.
//   " User name: " = .$name.
//   " \n\n Email address: " = .$email.
//   " \n\n Message: " = .$enquiry;
//   $headers = "From: nickchikore@gmail.com";
// //
// //   //send email
//   mail($to, $email_subject, $email_body, $headers);
// //
// //   //post success message
//   if(mail($to, $email_subject, $email_body, $headers)){
//     echo json_encode('success')
//   }else{
//     echo json_encode('failure')
//   }
//
//  ?>
