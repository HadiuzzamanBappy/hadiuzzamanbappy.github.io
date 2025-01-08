<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Admin | Testimonials</title>
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
        $targetDirectoryPhoto = "../../res/images/";

        $json = file_get_contents('../../res/data/portfolio.json');
        $portfolios = json_decode($json, true);

        $portfoliosLength = count($portfolios);

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            if ($_GET['action'] === "0") {
                $targetFile = $targetDirectoryPhoto . basename($_FILES["thumbnail"]["name"]);
                move_uploaded_file($_FILES["thumbnail"]["tmp_name"], $targetFile);

                $targetFile = $targetDirectoryPhoto . basename($_FILES["coverphoto"]["name"]);
                move_uploaded_file($_FILES["coverphoto"]["tmp_name"], $targetFile);

                $newPortfolio = [
                    'id' => $portfoliosLength + 1,
                    'displayid' => "modal-" . $portfoliosLength + 1,
                    'visible' => true,
                    'name' => $_POST['pName'],
                    'type' => $_POST['pType'],
                    'thumbnail' => "images/" . $_FILES["thumbnail"]["name"],
                    'coverphoto' => "images/" . $_FILES["coverphoto"]["name"],
                    'details' => $_POST['details'],
                    'link' => $_POST['pLink']
                ];

                // Add the new experience to the projects array
                $portfolios[] = $newPortfolio;

                file_put_contents('../../res/data/portfolio.json', json_encode($portfolios, JSON_PRETTY_PRINT));
            } else {
                $action = $_GET['action'];

                // Handle Profile Photo Upload
                if (isset($_FILES["thumbnail"])) {
                    unlink("../../".$portfolios[$action - 1]['thumbnail']);

                    $targetFile = $targetDirectoryPhoto . basename($_FILES["thumbnail"]["name"]);
                    move_uploaded_file($_FILES["thumbnail"]["tmp_name"], $targetFile);

                    $portfolios[$action - 1]['thumbnail'] = "res/images/" . $_FILES["thumbnail"]["name"];
                }

                // Handle Profile Photo Upload
                if (isset($_FILES["coverphoto"])) {
                    unlink("../../".$portfolios[$action - 1]['coverphoto']);

                    $targetFile = $targetDirectoryPhoto . basename($_FILES["coverphoto"]["name"]);
                    move_uploaded_file($_FILES["coverphoto"]["tmp_name"], $targetFile);

                    $portfolios[$action - 1]['coverphoto'] = "res/images/" . $_FILES["coverphoto"]["name"];
                }

                $portfolios[$action - 1]['name'] = $_POST['pName'];
                $portfolios[$action - 1]['type'] = $_POST['pType'];
                $portfolios[$action - 1]['details'] = $_POST['details'];
                $portfolios[$action - 1]['link'] = $_POST['pLink'];

                // Save the updated data back to the JSON file
                file_put_contents('../../res/data/portfolio.json', json_encode($portfolios, JSON_PRETTY_PRINT));
            }
        }

        if (isset($_GET['action'])) {
            $action = $_GET['action'];

            if ($action === "0") { ?>
                <div class="header">
                    <h1>Add New Project</h1>
                </div>
                <form method="post" enctype="multipart/form-data">
                    <div class="item">
                        <label for="pName">Project name:*</label>
                        <input type="text" name="pName" placeholder="Enter project name" required>
                    </div>
                    <div class="item">
                        <label for="pType">Project type:</label>
                        <input type="text" name="pType" placeholder="Enter project type" required>
                    </div>
                    <div class="item">
                        <label for="pLink">Project Link:</label>
                        <input type="text" name="pLink" placeholder="Enter project link">
                    </div>
                    <div class="item">
                        <label for="thumbnail">Thumbnail Photo:</label>
                        <div class="horizontal">
                            <!-- <img src="../../images/demo.png" alt="Thumbnail Photo"> -->
                            <input type="file" name="thumbnail" id="thumbnail" accept="image/*" required>
                        </div>
                    </div>
                    <div class="item">
                        <label for="coverphoto">Cover Photo:</label>
                        <div class="horizontal">
                            <!-- <img src="../../images/demo.png" alt="Cover Photo"> -->
                            <input type="file" name="coverphoto" id="coverphoto" accept="image/*" required>
                        </div>
                    </div>
                    <div class="item">
                        <label for="details">About:*</label>
                        <textarea name="details" rows="4" placeholder="Write details about this project" required></textarea>
                    </div>

                    <input type="submit" name="add" value="Add">
                </form>
            <?php
            } else {
            ?>
                <div class="header">
                    <h1>Edit Project</h1>
                </div>
                <form method="post" enctype="multipart/form-data">
                    <div class="item">
                        <label for="pName">Project name:*</label>
                        <input type="text" name="pName" placeholder="Enter project name" value="<?= $portfolios[$action - 1]['name'] ?>" required>
                    </div>
                    <div class="item">
                        <label for="pType">Project type:</label>
                        <input type="text" name="pType" placeholder="Enter project type" value="<?= $portfolios[$action - 1]['type'] ?>" required>
                    </div>
                    <div class="item">
                        <label for="pLink">Project Link:</label>
                        <input type="text" name="pLink" placeholder="Enter project link" value="<?= $portfolios[$action - 1]['link'] ?>">
                    </div>
                    <div class="item">
                        <label for="thumbnail">Thumbnail Photo:</label>
                        <div class="horizontal">
                            <img class="portfolio" src="../../<?= $portfolios[$action - 1]['thumbnail'] ?>" alt="Thumbnail Photo">
                            <input type="file" name="thumbnail" id="thumbnail" accept="image/*">
                        </div>
                    </div>
                    <div class="item">
                        <label for="coverphoto">Cover Photo:</label>
                        <div class="horizontal">
                            <img class="portfolio" src="../../<?= $portfolios[$action - 1]['coverphoto'] ?>" alt="Cover Photo">
                            <input type="file" name="coverphoto" id="coverphoto" accept="image/*">
                        </div>
                    </div>
                    <div class="item">
                        <label for="details">About:*</label>
                        <textarea name="details" rows="4" placeholder="Write details about this project" required><?= $portfolios[$action - 1]['details'] ?></textarea>
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
</body>

</html>