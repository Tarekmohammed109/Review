<?php 
    
    // Check if User  Coming From A Request

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        
        // Assign Variable
        
        $user = filter_var($_POST['username'], FILTER_SANITIZE_STRING);
        $mail = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $cell = filter_var($_POST['cellphone'], FILTER_SANITIZE_NUMBER_INT);
        $msg  = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
        
        // Creating array for Errors
        
        $formErrors = array();
        
        if (strlen($user) <= 3) {
            
            $formErrors[] = 'Username Must be Larger Than <strong>3</strong> Character';
            
        }
        if (strlen($msg) < 10) {
            
            $formErrors[] = 'Message Can\'t be Less Than <strong>10</strong> Characters';
            
        }
        
        $headers = 'From: ' . $mail . '\r\n';
        $myEmail = 'tarekmohammed109@yahoo.com';
        $subject = 'Contact Form';
        
        if (empty($formErrors)) {
            
            mail($myEmail, $subject, $msg, $headers);
            
            $user = '';
            $mail = '';
            $cell = '';
            $msg  = '';
            
            $success = '<div class = "alert alert-success">We Have Recieved Your Message Succesfully!</div>';
        }
    }

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Contact</title>
        <link rel="stylesheet" href="../contact/css/bootstrap.min.css" />
        <link rel="stylesheet" href="../contact/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="../contact/css/fa-brands.min.css" />
        <link rel="stylesheet" href="../contact/css/contact.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:400,700,900,900i" >
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>
        
        <!-- Start Form -->
        
        <div class="container">
            <h1 class="text-center">Contact Me</h1>
            <form class="contact-form" action="<?php echo $_SERVER['PHP_SELF'] ?>" method="POST">
                    <?php if (!empty($formErrors)) { ?>
                        <div class="alert alert-danger alert-dismissible" role="start">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <?php
                            foreach($formErrors as $error) {
                                echo $error . '<br/>';
                            }
                        ?>
                        </div>
                        <?php } ?>
                        <?php if(isset($success)) { echo $success; } ?>
                <div class="form-group">
                    <input class="username form-control" type="text" name="username" placeholder="Type Your Username" value="<?php if (isset($user)) {echo $user; } ?>" />
                    <i class="fas fa-user fa-fw"></i>
                    <span class="asterisx">*</span>
                    <div class="alert alert-danger custom-alert">
                        Username Must be Larger Than <strong>3</strong> Character
                    </div>
                </div>  
                <div class="form-group">
                    <input class="email form-control" type="email" name="email" placeholder="Pleas Type a Valid Email" value="<?php if (isset($mail)) {echo $mail; } ?>" />
                    <i class="fas fa-envelope fa-fw"></i>
                    <span class="asterisx">*</span>
                    <div class="alert alert-danger custom-alert">
                       Email can't be <strong>Empty</strong>
                    </div>
                </div>
                <input class="form-control" type="text" name="cellphone" placeholder="Type Your Cell Phone" value="<?php if (isset($cell)) {echo $cell; } ?>" />
                <i class="fas fa-phone fa-fw"></i>
                <div class="form-group">
                    <textarea class="message form-control" name="message" placeholder="Your Message!"><?php if (isset($msg)) {echo $msg; } ?></textarea>
                    <span class="asterisx">*</span>
                    <div class="alert alert-danger custom-alert">
                        Message Can\'t be Less Than <strong>10</strong> Characters
                    </div>
                </div>
                <input class="btn btn-success" type="submit" value="Send Message">
                <i class="fas fa-paper-plane fa-fw send-icon"></i>
            </form>
        </div>
        
        <!-- End Form -->
        
        <script src="js/jquery-1.12.4.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/custom.js"></script>
    </body>


</html>
