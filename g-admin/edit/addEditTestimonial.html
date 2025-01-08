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
        $json = file_get_contents('../../res/data/testimonial.json');
        $testimonials = json_decode($json, true);

        $testimonialsLength = count($testimonials);

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            if ($_GET['action'] === "0") {
                $newTestimonial = [
                    'id' => $testimonialsLength + 1,
                    'visible' => true,
                    'organization' => $_POST['organization'],
                    'name' => $_POST['pName'],
                    'role' => $_POST['role'],
                    'comment' => $_POST['comment']
                ];

                // Add the new experience to the projects array
                $testimonials[] = $newTestimonial;

                file_put_contents('../../res/data/testimonial.json', json_encode($testimonials, JSON_PRETTY_PRINT));
            } else {
                $action = $_GET['action'];

                $testimonials[$action - 1]['organization'] = $_POST['organization'];
                $testimonials[$action - 1]['name'] = $_POST['pName'];
                $testimonials[$action - 1]['role'] = $_POST['role'];
                $testimonials[$action - 1]['comment'] = $_POST['comment'];

                // Save the updated data back to the JSON file
                file_put_contents('../../res/data/testimonial.json', json_encode($testimonials, JSON_PRETTY_PRINT));
            }
        }

        if (isset($_GET['action'])) {
            $action = $_GET['action'];

            if ($action === "0") { ?>
                <div class="header">
                    <h1>Add New Testimonial</h1>
                </div>
                <form method="post" enctype="multipart/form-data">
                    <div class="item">
                        <label for="pName">Person name:*</label>
                        <input type="text" name="pName" placeholder="Enter person name" required>
                    </div>
                    <div class="item">
                        <label for="organization">Organization:</label>
                        <input type="text" name="organization" placeholder="Enter Organization name">
                    </div>
                    <div class="item">
                        <label for="role">Role:*</label>
                        <input type="text" name="role" placeholder="Enter role" required>
                    </div>
                    <div class="item">
                        <label for="comment">Comment:*</label>
                        <textarea name="comment" rows="4" placeholder="Write comment" required></textarea>
                    </div>

                    <input type="submit" name="add" value="Add">
                </form>
            <?php
            } else {
            ?>
                <div class="header">
                    <h1>Edit Testimonial</h1>
                </div>
                <form method="post" enctype="multipart/form-data">
                    <div class="item">
                        <label for="pName">Person name:*</label>
                        <input type="text" name="pName" placeholder="Enter person name" value="<?= $testimonials[$action - 1]['name'] ?>" required>
                    </div>
                    <div class="item">
                        <label for="organization">Organization:</label>
                        <input type="text" name="organization" placeholder="Enter Organization name" value="<?= $testimonials[$action - 1]['organization'] ?>">
                    </div>
                    <div class="item">
                        <label for="role">Role:*</label>
                        <input type="text" name="role" placeholder="Enter role" value="<?= $testimonials[$action - 1]['role'] ?>" required>
                    </div>
                    <div class="item">
                        <label for="comment">Comment:*</label>
                        <textarea name="comment" rows="4" placeholder="Write comment" required><?= $testimonials[$action - 1]['comment'] ?></textarea>
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