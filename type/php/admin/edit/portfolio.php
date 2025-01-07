<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Admin | Portfolio</title>
    <meta name="description" content="Personal Portfolio">
    <meta name="author" content="Md. Hadiuzzaman Bappy">

    <!-- Mobile Specific Metas
   ================================================== -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- CSS
    ================================================== -->
    <link rel="stylesheet" href="../../res/css/admin/common.css">
    <link rel="stylesheet" href="../../res/css/admin/portfolio.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- Favicons
	================================================== -->
    <link rel="shortcut icon" href="../../res/images/favicon.ico">
</head>

<body>
    <main>
        <?php
        $json = file_get_contents('../../res/data/portfolio.json');
        $portfolios = json_decode($json, true);

        if (isset($_GET['action'])) {
            $action = $_GET['action'];
            $id = $_GET['id'];

            if ($portfolios[$id - 1]['visible']) {
                $portfolios[$id - 1]['visible'] = false;
            } else {
                $portfolios[$id - 1]['visible'] = true;
            }
    
            // Save the updated data back to the JSON file
            file_put_contents('../../data/portfolio.json', json_encode($portfolios, JSON_PRETTY_PRINT));
        }
        ?>

        <div class="header">
            <h1>Portfolios</h1>
            <a class="button add" href="addEditPortfolio.php?action=0"><i class="fas fa-plus"></i> Add New</a>
        </div>

        <div class="body">

            <?php foreach ($portfolios as $portfolio) : ?>

                <div class="item">

                    <div class="item-body">
                        <div class="photos">
                        <img class="coverphoto" src="../../<?= $portfolio['coverphoto'] ?>" alt="coverphoto">
                        <img class="thumbnail" src="../../<?= $portfolio['thumbnail'] ?>" alt="thumbnail">
                        </div>
                        <h3> <?= $portfolio['name'] ?> </h3>

                        <p class="info"> <?= $portfolio['type'] ?> <span>&bull;<a href="<?= $portfolio['link'] ?>"> See Full details </a></p>
                        
                        <p>
                            <?= $portfolio['details'] ?>
                        </p>

                    </div>
                    <div class="vl"></div>
                    <div class="cta">
                        <?php if ($portfolio['visible']) { ?>
                            <a class="button hide" href="?action=hide&id=<?= $portfolio['id'] ?>"><i class="fas fa-eye-slash"></i></a>
                        <?php } else { ?>
                            <a class="button hide" href="?action=hide&id=<?= $portfolio['id'] ?>"><i class="fas fa-eye"></i></a>
                        <?php } ?>
                        <a class="button edit" href="addEditPortfolio.php?action=<?= $portfolio['id'] ?>"><i class="fas fa-edit"></i></a>
                        <a class="button delete" href="?action=delete&id=<?= $portfolio['id'] ?>"><i class="fa-solid fa-trash-can"></i></a>
                    </div>

                </div> <!-- item end -->

            <?php endforeach; ?>

        </div> <!-- main-col end -->
    </main>
</body>

</html>