<div class="panel panel-primary">
                  <div class="panel-heading">
                        <h3 class="panel-title">Emp data</h3>
                  </div>
                  <div class="panel-body">
                        
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Tr.No</th>
                                    <th>Customer Name</th>
                                    <th>Date</th>
                                    <th>City</th>
                                    <th>Paid Amt</th>
                                    
                                   <th>Option</th>
                                
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                $sql="select *from tblemplist";
                                $res=mysqli_query($link,$sql);
                                while($r=mysqli_fetch_array($res))
                           {
                                    
                                    ?>
                                
                                <tr>
                                    <td><?php echo $r[0];?></td>
                                    <td><?php echo $r[1];?></td>
                                    <td><?php echo $r[2];?></td>
                                    <td><?php echo $r[3];?></td>
                                    <td><?php echo $r[4];?></td>
                                   
                                   
                                    
                                    
                                 <td> <button type="button" class="btn btn-danger"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>
                                    
                                  
                                </tr>
                                <?php
                                }
                                mysqli_close($link);
                                ?>
                            </tbody>
                        </table>
                        
                  </div>
            </div>
        
        </div>
        </div>
