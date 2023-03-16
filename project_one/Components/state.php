<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9" style="width=100%;">
    <div class="panel panel-primary">
        <div class="panel-heading">
            <h3 class="panel-title">State</h3>
        </div>
        <div class="panel-body">
            <form action="saveproject.php?page=state" method="POST" role="form" onsubmit="return check();" id="form">
                <div class="form-group">
                    <label for="cust_01">User Name With ID</label>
                    <input onchange = "filler(this.value);" list="user_name_01" class="form-control" id="user_name_state" name="txtname" placeholder="Input field" required>
                    <datalist id="user_name_01">
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
                    <input onchange="chkState(this.value);" list="states_state" class="form-control" id="state_state" name="txtstate" placeholder="Input field" required>
                    <datalist id="states_state"></datalist>
                </div>
                <input type="hidden" name="page" value="state">
                <input type="hidden" id="user_name">
                <button type="submit" class="btn btn-primary" name="submit">Save</button>
            </form>
        </div>