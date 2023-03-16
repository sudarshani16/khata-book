<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9" style="width=100%;">
    <div class="panel panel-primary">
        <div class="panel-heading">
            <h3 class="panel-title">State</h3>
        </div>
        <div class="panel-body">
            <form action="saveproject.php?page=state" method="POST" role="form" onsubmit="return check();">
                <div class="form-group">
                    <label for="cust_01">User Name With ID</label>
                    <input list="cust_name_01" class="form-control" id="cust_01" name="txtname" placeholder="Input field" >
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
                    <input list="states" class="form-control" id="" name="txtstate" placeholder="Input field">
                    <datalist id="states"></datalist>
                </div>
                <input type="hidden" name="page" value="state">
                <button type="submit" class="btn btn-primary" name="submit">Save</button>
            </form>
        </div>