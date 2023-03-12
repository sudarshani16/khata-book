<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9" style="width=100%;">
    <div class="panel panel-primary">
        <div class="panel-heading">
            <h3 class="panel-title">State</h3>
        </div>
        <div class="panel-body">
            <form action="saveproject.php" method="POST" role="form">
                <div class="form-group">
                    <label for="cust_01">Customer Name</label>
                    <input list="cust_name_01" class="form-control" id="cust_01" name="txtid" placeholder="Input field" >
                    <datalist id="cust_name_01">
                    <?php 
                        $sql="select name from tblempdata";
                        $res=mysqli_query($link,$sql);
                        while($r=mysqli_fetch_array($res)){ 
                    ?>  
                    <option value="<?php echo $r[0]; ?>"></option>
                        <?php } ?>
                    </datalist>
                </div>
                <div class="form-group">
                    <label for="">State</label>
                    <input list="states_01" class="form-control" id="" name="txtstate" placeholder="Input field">
                    <datalist id="states_01"></datalist>
                </div>
                <input type="hidden" name="page" value="state">
                <button type="submit" class="btn btn-primary" name="submit">Save</button>
            </form>
        </div>