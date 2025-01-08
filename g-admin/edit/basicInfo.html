<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Admin | Edit Basic</title>
    <meta name="description" content="Personal Portfolio">
    <meta name="author" content="Md. Hadiuzzaman Bappy">

    <!-- Mobile Specific Metas
   ================================================== -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- CSS
    ================================================== -->
    <link rel="stylesheet" href="../../res/css/admin/admin_basic_io.css">

    <!-- Favicons
	================================================== -->
    <link rel="shortcut icon" href="../../res/images/favicon.ico">
</head>

<body>
    <header>
        <h1>Edit Basic Information</h1>
    </header>
    <main>
        <?php
        $targetDirectoryPhoto = "../../res/images/"; // Create a directory to store uploaded files
        $targetDirectoryPdf = "../../res/pdf/";

        $json = file_get_contents('../../res/data/basic.json');
        $basic_data = json_decode($json, true);

        $address = $basic_data['address'];
        $roles = $basic_data['roles'];
        $social = $basic_data['social'];


        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            // Handle Profile Photo Upload
            if (isset($_FILES["profile_photo"])) {
                $targetFile = $targetDirectoryPhoto . basename($_FILES["profile_photo"]["name"]);

                move_uploaded_file($_FILES["profile_photo"]["tmp_name"], $targetFile);

                $basic_data['photo'] = "images/".$_FILES["profile_photo"]["name"];
            }

            // Handle PDF File Upload
            if (isset($_FILES["resume"])) {
                $pdfTargetFile = $targetDirectoryPdf . basename($_FILES["resume"]["name"]);

                move_uploaded_file($_FILES["resume"]["tmp_name"], $pdfTargetFile);

                $basic_data['resume'] = "pdf/".$_FILES["resume"]["name"];
            }

            $basic_data['name'] = $_POST['name'];
            $basic_data['email'] = $_POST['email'];
            $basic_data['phone'] = $_POST['phone'];

            $address['village'] = $_POST['village'];
            $address['PO'] = $_POST['po'];
            $address['pcode'] = $_POST['pcode'];
            $address['thana'] = $_POST['thana'];
            $address['upojila'] = $_POST['upojila'];
            $address['district'] = $_POST['district'];
            $address['state'] = $_POST['state'];
            $address['country'] = $_POST['country'];

            $roles['role_1'] = $_POST['role1'];
            $roles['role_2'] = $_POST['role2'];

            $basic_data['about'] = $_POST['about'];
            $basic_data['resume'] = $_POST['name'];

            $social['facebook'] = $_POST['facebook'];
            $social['github'] = $_POST['github'];
            $social['linkedin'] = $_POST['linkedin'];
            $social['behance'] = $_POST['behance'];
            $social['dribble'] = $_POST['dribble'];

            // Save the updated data back to the JSON file
            file_put_contents('../../res/data/basic.json', json_encode($basic_data, JSON_PRETTY_PRINT));
        }
        ?>
        <form action="#" method="POST" enctype="multipart/form-data">
            <div class="border_round">
                <h4>Basic Info</h4>

                <div class="item">
                    <label for="profile_photo">Profile Picture:</label>
                    <div class="horizontal">
                        <img src="../../<?= $basic_data['photo'] ?>" alt="Profile Photo">
                        <input type="file" name="profile_photo" id="profile_photo" accept="image/*">
                    </div>
                </div>

                <div class="item">
                    <label for="name">Name:</label>
                    <input type="text" name="name" value="<?= $basic_data['name'] ?>" placeholder="Enter your Name">
                </div>

                <div class="item">
                    <label for="email">Email:</label>
                    <input type="text" name="email" value="<?= $basic_data['email'] ?>" placeholder="Enter your Email">
                </div>

                <div class="item">
                    <label for="phone">Phone:</label>
                    <input type="text" name="phone" value="<?= $basic_data['phone'] ?>" placeholder="Enter your Phone number">
                </div>

                <div class="item">
                    <label for="resume">Resume:</label>
                    <div class="item_list">
                        <input type="file" id="resume" name="resume" accept=".pdf">
                        <a href="../../<?= $basic_data['resume'] ?>">HadiuzzamanBappy.pdf</a>
                    </div>
                </div>

                <div class="item">
                    <label for="about">About:</label>
                    <textarea name="about" rows="5" placeholder="Write about yourself"><?= $basic_data['about'] ?></textarea>
                </div>
            </div>

            <div class="address border_round">
                <h4>Address</h4>

                <div class="item">
                    <label for="village">Village:</label>
                    <input type="text" name="village" value="<?= $address['village'] ?>" placeholder="Enter your Village name">
                </div>

                <div class="item">
                    <label for="po">Post Office:</label>
                    <input type="text" name="po" value="<?= $address['PO'] ?>" placeholder="Enter your Post office">
                </div>

                <div class="item">
                    <label for="pcode">Post Code:</label>
                    <input type="text" name="pcode" value="<?= $address['pcode'] ?>" placeholder="Enter your Post code">
                </div>

                <div class="item">
                    <label for="thana">Thana:</label>
                    <input type="text" name="thana" value="<?= $address['thana'] ?>" placeholder="Enter your Thana">
                </div>

                <div class="item">
                    <label for="upojila">Upojila:</label>
                    <input type="text" name="upojila" value="<?= $address['upojila'] ?>" placeholder="Enter your Upojila">
                </div>

                <div class="item">
                    <label for="district">District:</label>
                    <input type="text" name="district" value="<?= $address['district'] ?>" placeholder="Enter your District">
                </div>

                <div class="item">
                    <label for="state">State:</label>
                    <input type="text" name="state" value="<?= $address['state'] ?>" placeholder="Enter your State">
                </div>

                <div class="item">
                    <label for="country">Country:</label>
                    <input type="text" name="country" value="<?= $address['country'] ?>" placeholder="Enter your Country">
                </div>
            </div>

            <div class="role border_round item">
                <h4>Role</h4>

                <div class="item">
                    <label for="role1">Primary:</label>
                    <input type="text" name="role1" value="<?= $roles['role_1'] ?>" placeholder="Enter your primary role">
                </div>

                <div class="item">
                    <label for="role2">Secondary:</label>
                    <input type="text" name="role2" value="<?= $roles['role_2'] ?>" placeholder="Enter your secondary role">
                </div>

            </div>

            <div class="social border_round">
                <h4>Social Link</h4>

                <div class="item">
                    <label for="facebook">Facebook:</label>
                    <input type="text" name="facebook" value="<?= $social['facebook'] ?>">
                </div>

                <div class="item">
                    <label for="github">Github:</label>
                    <input type="text" name="github" value="<?= $social['github'] ?>">
                </div>

                <div class="item">
                    <label for="linkedin">Linkedin:</label>
                    <input type="text" name="linkedin" value="<?= $social['linkedin'] ?>">
                </div>

                <div class="item">
                    <label for="behance">Behance:</label>
                    <input type="text" name="behance" value="<?= $social['behance'] ?>">
                </div>

                <div class="item">
                    <label for="dribble">Dribble:</label>
                    <input type="text" name="dribble" value="<?= $social['dribble'] ?>">
                </div>
            </div>

            <input type="submit" name="submit" value="Save">
        </form>
    </main>
</body>

</html>