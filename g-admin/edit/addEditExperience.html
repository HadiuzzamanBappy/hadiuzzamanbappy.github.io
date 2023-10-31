<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Admin | Experiences</title>
    <meta name="description" content="Personal Portfolio">
    <meta name="author" content="Md. Hadiuzzaman Bappy">

    <!-- Mobile Specific Metas
   ================================================== -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- CSS
    ================================================== -->
    <link rel="stylesheet" href="../../res/css/admin/admin_basic_io.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- Favicons
	================================================== -->
    <link rel="shortcut icon" href="../../res/images/favicon.ico">
</head>

<body>
    <main>
        <?php
        $json = file_get_contents('../../res/data/experience.json');
        $experiences = json_decode($json, true);

        $experiencesLength = count($experiences);

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            if ($_GET['action'] === "0") {
                if ($_POST['selectedOption'] === "Date") {
                    $eDate = $_POST['eDate'];
                } else {
                    $eDate = $_POST['selectedOption'];
                }

                $newExperience = [
                    'id' => $experiencesLength + 1,
                    'visible' => true,
                    'organization' => $_POST['oName'],
                    'link' => $_POST['wLink'],
                    'role' => $_POST['role'],
                    'start' => $_POST['sDate'],
                    'end' => $eDate,
                    'about' => $_POST['about']
                ];

                // Add the new experience to the projects array
                $experiences[] = $newExperience;

                file_put_contents('../../res/data/experience.json', json_encode($experiences, JSON_PRETTY_PRINT));
            } else {
                $action = $_GET['action'];
                if ($_POST['selectedOption'] === "Date") {
                    $eDate = $_POST['eDate'];
                } else {
                    $eDate = $_POST['selectedOption'];
                }

                $experiences[$action - 1]['organization'] = $_POST['oName'];
                $experiences[$action - 1]['link'] = $_POST['wLink'];
                $experiences[$action - 1]['role'] = $_POST['role'];
                $experiences[$action - 1]['start'] = $_POST['sDate'];
                $experiences[$action - 1]['end'] = $eDate;
                $experiences[$action - 1]['about'] = $_POST['about'];

                // Save the updated data back to the JSON file
                file_put_contents('../../res/data/experience.json', json_encode($experiences, JSON_PRETTY_PRINT));
            }
        }

        if (isset($_GET['action'])) {
            $action = $_GET['action'];

            if ($action === "0") { ?>

                <div class="header">
                    <h1>Add New Experience</h1>
                </div>
                <form method="post" enctype="multipart/form-data">
                    <div class="item">
                        <label for="oName">Organization Name:*</label>
                        <input type="text" name="oName" placeholder="Enter organization name" required>
                    </div>
                    <div class="item">
                        <label for="wLink">Website link:</label>
                        <input type="text" name="wLink" placeholder="Enter website link">
                    </div>
                    <div class="item">
                        <label for="role">My Role:*</label>
                        <input type="text" name="role" placeholder="Enter your role" required>
                    </div>
                    <div class="item">
                        <label for="sDate">Starting Date:*</label>
                        <input type="month" name="sDate" required>
                    </div>
                    <div class="item">
                        <label for="eDate">End Date:*</label>

                        <div class="dropdown">
                            <select id="options" name="selectedOption" onchange="toggleInput()">
                                <option value="Present">Present</option>
                                <option value="Date">Date</option>
                            </select>

                            <input id="dateInput" class="hidden" type="month" name="eDate">
                        </div>
                    </div>
                    <div class="item">
                        <label for="about">About:</label>
                        <textarea name="about" rows="5" placeholder="Write about yourself"></textarea>
                    </div>

                    <input type="submit" name="add" value="Add">
                </form>
            <?php
            } else {
            ?>
            <div class="header">
            <h1>Edit <?= $experiences[$action - 1]['organization'] ?></h1>
        </div>
                <form method="post" enctype="multipart/form-data">
                    <div class="item">
                        <label for="oName">Organization Name:*</label>
                        <input type="text" name="oName" value="<?= $experiences[$action - 1]['organization'] ?>" placeholder="Enter organization name" required>
                    </div>

                    <?php if ($experiences[$action - 1]['link'] === "#") { ?>
                        <div class="item">
                            <label for="wLink">Website link:</label>
                            <input type="text" name="wLink" placeholder="Enter website link">
                        </div>
                    <?php } else { ?>
                        <div class="item">
                            <label for="wLink">Website link:</label>
                            <input type="text" name="wLink" value="<?= $experiences[$action - 1]['link'] ?>" placeholder="Enter website link">
                        </div>
                    <?php } ?>

                    <div class="item">
                        <label for="role">My Role:*</label>
                        <input type="text" name="role" value="<?= $experiences[$action - 1]['role'] ?>" placeholder="Enter your role" required>
                    </div>
                    <div class="item">
                        <label for="sDate">Starting Date:*</label>
                        <input type="month" name="sDate" value="<?= $experiences[$action - 1]['start'] ?>" required>
                    </div>
                    <div class="item">
                        <label for="eDate">End Date:*</label>

                        <div class="dropdown">
                            <?php if ($experiences[$action - 1]['end'] === "Present") { ?>
                                <select id="options" name="selectedOption" onchange="toggleInput()">
                                    <option value="Present" selected>Present</option>
                                    <option value="Date">Date</option>
                                </select>

                                <input id="dateInput" class="hidden" type="month" name="eDate">
                            <?php
                            } else { ?>
                                <select id="options" name="selectedOption" onchange="toggleInput()">
                                    <option value="Present">Present</option>
                                    <option value="Date" selected>Date</option>
                                </select>

                                <input id="dateInput" type="month" name="eDate" value="<?= $experiences[$action - 1]['end'] ?>" required>
                            <?php } ?>
                        </div>
                    </div>
                    <div class="item">
                        <label for="about">About:</label>
                        <textarea name="about" rows="5" placeholder="Write about yourself"><?= $experiences[$action - 1]['about'] ?></textarea>
                    </div>

                    <input type="submit" name="edit" value="Edit">
                </form>
        <?php
            }
        } else {
            echo "<p>No action specified.</p>";
        }
        ?>
    </main>

    <script>
        function toggleInput() {
            var selectBox = document.getElementById("options");
            var dateInput = document.getElementById("dateInput");

            if (selectBox.value === "Date") {
                dateInput.style.display = "block";
            } else {
                dateInput.style.display = "none";
            }
        }
    </script>
</body>

</html>