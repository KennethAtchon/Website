<?php
    $user = "ArpaCloudInterns"; 
    $password = "Inter2023";
    $ODBCConnection = odbc_connect("Driver={ODBC Driver 18 for SQL Server};Server=tcp:sqlforwebsite.database.windows.net,1433;Database=SQL_website;Uid=CloudSA3320c6f6;Pwd={Inter2023};Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;
                                   

  $SQLQuery = "SELECT * FROM autotest.dept";
    $RecordSet = odbc_exec($ODBCConnection, $SQLQuery);
    