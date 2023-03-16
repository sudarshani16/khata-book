<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9" style="width=100%;">
    <div class="panel panel-primary">
        <div class="panel-heading">
            <h3 class="panel-title">Area</h3>
        </div>
        <div class="panel-body">
            <form action="saveproject.php?page=area" method="POST" role="form" id="form">
            <div class="form-group">
                    <label for="user_01">User Name With ID</label>
                    <input  list="user_name_01" class="form-control" id="user_name" name="txtname" placeholder="Input field" required>
                    <datalist id="user_name_01">
                    <?php 
                    $sql = "select Id,name from tblempdata";
                    $res = mysqli_query($link, $sql);
                    while ($r = mysqli_fetch_array($res)) {
                        ?>  
                    <option value="<?php echo $r[0] . ". " . $r[1]; ?>"></option>
                        <?php 
                    } ?>
                    </datalist>
                </div>
                <div class="form-group">
                    <label for="">State</label>
                    <input list="states" class="form-control" id="state" name="txtstate" placeholder="Input field" required>
                    <datalist id="states"></datalist>
                </div>
                <div class="form-group">
                    <label for="">City</label>
                    <input list="cities" class="form-control" id="city" name="txtcity" placeholder="Input field" required> 
                    <datalist id="cities"></datalist>
                </div>
                <div class="form-group">
                    <label for="">Area</label>
                    <input  list="areas" type="text" class="form-control" id="area" name="txtarea" placeholder="Input field" required>
                    <datalist id="areas"></datalist>
                </div>
                <input type="hidden" name="page" value="area">
                <button type="submit" class="btn btn-primary" name="submit">Save</button>
            </form>
        </div>