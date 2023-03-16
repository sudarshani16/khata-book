<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9" style="width=100%;">
    <div class="panel panel-primary">
        <div class="panel-heading">
            <h3 class="panel-title">City</h3>
        </div>
        <div class="panel-body">
            <form action="saveproject.php?page=city" method="POST" role="form" name="form" id="city_form">
                <div class="form-group">
                    <label for="cityie">User Name With ID</label>
                    <input  list="cust_name_01" class="form-control" id="cityie" name="txtid" placeholder="Input field">
                    <datalist id="cust_name_01">
                    <?php 
                        $sql="select Id,name from tblempdata";
                        $res=mysqli_query($link,$sql);
                        while($r=mysqli_fetch_array($res)){ 
                    ?>  
                    <option value="<?php echo $r[0] .". " . $r[1]; ?>"></option>
                        <?php } ?>
                    </datalist>
                </div>
                <div class="form-group">
                    <label for="">State</label>
                    <input list="states_01" class="form-control" id="state" name="txtstate" placeholder="Input field">
                    <datalist id="states_01"></datalist>
                </div>
                <div class="form-group">
                    <label for="">City</label>
                    <input type="city" class="form-control" id="" name="txtcity" placeholder="Input field">
                </div>
                <input type="hidden" name="page" value="city">
                <button type="submit" class="btn btn-primary" name="submit">Save</button>
            </form>
        </div>
        