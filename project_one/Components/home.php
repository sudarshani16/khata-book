<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9" style="width=100%;">
    <div class="panel panel-primary">
        <div class="panel-heading">
            <h3 class="panel-title">K Book</h3>
        </div>
        <div class="panel-body">
            <form action="saveproject.php" method="POST" role="form">
                <div class="form-group">
                    <label for="">Customer ID</label>
                    <input type="text" class="form-control" id="" name="txtid" placeholder="Input field" value=<?php echo curr_val(); ?> readonly>
                </div>
                <div class="form-group">
                    <label for="">Customer Name</label>
                    <input type="text" class="form-control" id="" name="txtname" placeholder="Input field">
                </div>

                <div class="form-group">
                    <label for="">Address</label>
                    <input type="text" class="form-control" id="" name="txtadd" placeholder="Input field">
                </div>

                <div class="form-group">
                    <label for="">Mobile Number</label>
                    <input type="number" class="form-control" id="" name="txtmobi" placeholder="Input field">
                </div>
                <div class="form-group">
                    <label for="">State</label>
                    <input type="state" class="form-control" id="" name="txtstate" placeholder="Input field">
                </div>
                <div class="form-group">
                    <label for="">City</label>
                    <input type="city" class="form-control" id="" name="txtcity" placeholder="Input field">
                </div>
                <div class="form-group">
                    <label for="">Area</label>
                    <input type="text" class="form-control" id="" name="txtarea" placeholder="Input field">
                </div>

                <div class="form-group">
                    <label for="">Balance</label>
                    <input type="number" class="form-control" id="" name="txtbal" placeholder="Input field">
                </div>
                <div class="form-group">
                    <label for="">Customer Type</label>
                    <input type="text" class="form-control" id="" name="txttype" placeholder="Input field">
                </div>
                <button type="submit" class="btn btn-primary" name="submit">Save</button>
                <button type="reset" class="btn btn-primary" name="reset">Reset</button>
            </form>
        </div>
    </div>

    <?php 
        function curr_val(){
            require("dbcon.php");
            $sql = "SELECT id from tblempdata WHERE Id = (SELECT max(Id) FROM tblempdata);";
            $res = mysqli_query($link,$sql);
            if($arr = mysqli_fetch_array($res))
            return $arr[0]+1;
            else return 1;
        }
    ?>

<!-- ALTER TABLE tblempdata AUTO_INCREMENT = 1 -->