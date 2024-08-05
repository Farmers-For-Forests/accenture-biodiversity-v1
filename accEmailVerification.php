<?php
include_once "../service/AccAppLoginService.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }
    </style>
</head>
<?php
$res = 0;
if (isset($_REQUEST['active']) && isset($_REQUEST['ecode'])) {
    $result = AccAppLoginService::email_verification($_REQUEST['active'], $_REQUEST['ecode']);
	$res = $result;
}
?>
<body style="background: beige;">
    <?php if ($res) { ?>
        <div style='width:100%;margin:auto;padding:50px;box-sizing: border-box'>
            <div style='width:35%;background:#FFF;border-radius:3px;text-align:center;margin:auto;padding:50px;border: 1px solid gainsboro'>
                <img src="https://farmersforforests.org/FFF/images/FARMERS_FOR_FORESTS_LOGO-01.jpg" width="120">
                <h2>Congratulatations</h2>
                <p><small style='color:#9b9b9b'>Your account has been activated</small></p>
				<p style='color:#f56e6e'><a href="http://localhost:4200/#/"><small>Go to login page</small></a></p>
                <!-- <p style='color:#f56e6e'><a href="<?php echo GPATH ?>web/"><small>Go to login page</small></a></p> -->
            </div>
        </div>
    <?php } else { ?>
        <div style='width:100%;margin:auto;padding:50px;box-sizing: border-box'>
            <div style='width:35%;background:#FFF;border-radius:3px;text-align:center;margin:auto;padding:50px;border: 1px solid gainsboro'>
                <img src="https://farmersforforests.org/FFF/images/FARMERS_FOR_FORESTS_LOGO-01.jpg" width="120">
                <h2>Activation code is not valid</h2>
                <p><small style='color:#9b9b9b'>Activation link has been expired </small></p>
				<p style='color:#f56e6e'><a href="http://localhost:4200/#/"><small>Go to login page</small></a></p>
                <!-- <p style='color:#f56e6e'><a href="<?php echo GPATH ?>web/"><small>Go to login page</small></a></p> -->
            </div>
        </div>
    <?php } ?>
</body>
</html>