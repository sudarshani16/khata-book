<div class="panel panel-primary">
    <div class="panel-heading">
        <h3 class="panel-title">Search</h3>
    </div>
    <div class="panel-body">
        <!-- <form action="saveproject.php?page=state" method="POST" role="form" onsubmit="return check();" id="form"> -->
            <div class="form-group">
                <label for="user_name">User Name With ID</label>
                <input list="user_name_list" class="form-control" id="search_name" name="txtname" placeholder="Input field" required>
                <datalist id="user_name_list">
                    <?php
                        $sql="select Id,name from tblempdata" ;
                        $res= mysqli_query($link, $sql);
                        while ($r= mysqli_fetch_array($res)) { ?>
                        <option value="<?php echo $r[0] .".". $r[1]; ?>"></option>
                    <?php } ?>
                </datalist>
            </div>
            <button id="search" class="btn btn-primary">Search</button>
            <button id="clear" class="btn btn-primary">Clear</button>
            <div class = "panel-body show-hide" id="record">
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Id </th>
                            <th>Name </th>
                            <th>Address </th>
                            <th>State </th>
                            <th>City </th>
                            <th>Area </th>
                            <th>Mobile No </th>
                            <th>Balance </th>
                            <th>User Type </th>
                            <th>Option</th>            
                        </tr>
                    <tbody>
                        <tr id="searched_user"></tr>
                    </tbody>
                </table>
            </div>
        <!-- </form> -->
    </div>
</div>