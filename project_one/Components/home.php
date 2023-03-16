

<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9" style="width=100%;">
    <div class="panel panel-primary">
        <div class="panel-heading">
            <h3 class="panel-title">K Book</h3>
        </div>
        <div class="panel-body">
            <form action="saveproject.php?page=home" method="POST" role="form" id="form_home">
                <div class="form-group">
                    <label for="">User ID</label>
                    <input type="text" class="form-control" id="" name="txtid" placeholder="Input field" value=<?php echo curr_val(); ?> readonly>
                </div>
                <div class="form-group">
                    <label for="">User Name</label>
                    <input type="text" class="form-control" id="" name="txtname" placeholder="Input field" required>
                </div>

                <div class="form-group">
                    <label for="">Address</label>
                    <input type="text" class="form-control" id="" name="txtadd" placeholder="Input field" required>
                </div>

                <div class="form-group">
                    <label for="">Mobile Number</label>
                    <input type="number" class="form-control" id="" name="txtmobi" placeholder="Input field" required>
                </div>
                <div class="form-group">
                    <label for="state">State</label>
                    <input  list="states_home" class="form-control" id="state_home" name="txtstate" placeholder="Input field" required>
                    <datalist id="states_home"></datalist>
                </div>
                <div class="form-group">
                    <label for="city">City</label>
                    <input list="cities_home" class="form-control" id="city_home" name="txtcity" placeholder="Input field" required>
                    <datalist id="cities_home"></datalist>
                </div>
                <div class="form-group">
                    <label for="">Area</label>
                    <input  list="areas_home" type="text" class="form-control" id="area_home" name="txtarea" placeholder="Input field" required>
                    <datalist id="areas_home"></datalist>
                </div>

                <div class="form-group">
                    <label for="">Balance</label>
                    <input type="number" class="form-control" id="" name="txtbal" placeholder="Input field" required>
                </div>
                <div class="form-group">
                    <label for="user_type">User Type</label>
                    <!-- <input type="text" class="form-control" id="" name="txttype" placeholder="Input field" required> -->
                    <select name="user_type" id="user_type" class="form-control" required>
                        <option value="Customer">Customer</option>
                        <option value="Owner">Owner</option>
                        <option value="Admin">Admin</option>
                        <option value="Supplier">Supplier</option>
                        <option selected value="Guest">Guest</option>
                    </select>
                </div>
                <!-- hidden input -->
                <input type="hidden" name = "page" value="home">
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
<!-- <script src="Javascript/cities.js"></script> -->