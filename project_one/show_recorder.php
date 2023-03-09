<?php
$sql = "select * from tblempdata";
$res = mysqli_query($link, $sql);
while ($r = mysqli_fetch_array($res)) {
  $i = 0;
  ?>
  <tr>
    <?php while ($i < (sizeof($r) / 2)) { ?>
      <td>
        <?php echo $r[$i]; ?>
      </td>
      <?php $i++;
    } ?>
    <td> <button type="button" class="btn btn-danger"><span class="glyphicon glyphicon-trash"
          aria-hidden="true"></span></button></td>
  </tr>
  <?php
}
mysqli_close($link);
?>