<div class="page-header">
    <div class="container">
        <div class="web-banner-wrapper">
            <strong class="typing-text headlight-h">
                <?php if (isset($page_name)): ?>
                    <?php echo $page_name ?>
                <?php endif ?>
                <div class="cursor"></div>
            </strong>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center text-uppercase">
                    <li class="breadcrumb-item " aria-current="page"><a href="index.php">Home /</a></li>
                    <li class="breadcrumb-item text-white active" aria-current="page"><a href="index.php"
                            style="color: #fff;">
                            <?php if (isset($page_name)): ?>
                                <?php echo $page_name ?>
                            <?php endif ?>
                        </a></li>
                </ol>
            </nav>
        </div>
    </div>
</div>