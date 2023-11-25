<!-- Tegar Argie Desmonda (120140253) PRAK7 PEMWEB RB  -->

<?php
    require 'datadiri.php';

    $dataDiri = new DataDiri("Argie", 120140253, "Teknik Informatika", 2020);

    echo $dataDiri->infoDataDiri() . "\n";
?>