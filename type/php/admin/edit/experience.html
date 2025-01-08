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
    <link rel="stylesheet" href="../../res/css/admin/common.css">
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

        if (isset($_GET['action'])) {
            $action = $_GET['action'];
            $id = $_GET['id'];

            if ($experiences[$id - 1]['visible']) {
                $experiences[$id - 1]['visible'] = false;
            } else {
                $experiences[$id - 1]['visible'] = true;
            }
    
            // Save the updated data back to the JSON file
            file_put_contents('../../res/data/experience.json', json_encode($experiences, JSON_PRETTY_PRINT));
        }
        ?>

        <div class="header">
            <h1>Experiences</h1>
            <a class="button add" href="addEditExperience.php?action=0"><i class="fas fa-plus"></i> Add New</a>
        </div>

        <div class="body">

            <?php foreach ($experiences as $experience) : ?>

                <div class="item">

                    <div class="item-body">

                        <h3> <a href="<?= $experience['link'] ?>" target="_blank"> <?= $experience['organization'] ?></a></h3>

                        <p class="info"> <?= $experience['role'] ?> <span>&bull;</span> <em class="date"><?= $experience['start'] ?> to <?= $experience['end'] ?></em></p>

                        <p>
                            <?= $experience['about'] ?>
                        </p>

                    </div>
                    <div class="vl"></div>
                    <div class="cta">
                        <?php if ($experience['visible']) { ?>
                            <a class="button hide" href="?action=hide&id=<?= $experience['id'] ?>"><i class="fas fa-eye-slash"></i></a>
                        <?php } else { ?>
                            <a class="button hide" href="?action=hide&id=<?= $experience['id'] ?>"><i class="fas fa-eye"></i></a>
                        <?php } ?>
                        <a class="button edit" href="addEditExperience.php?action=<?= $experience['id'] ?>"><i class="fas fa-edit"></i></a>
                        <a class="button delete" href="?action=delete&id=<?= $experience['id'] ?>"><i class="fa-solid fa-trash-can"></i></a>
                    </div>

                </div> <!-- item end -->

            <?php endforeach; ?>

        </div> <!-- main-col end -->
    </main>
</body>

</html>