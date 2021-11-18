import java.sql.*;
public class sqlconnect {
    static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";  
    static final String DB_URL = "jdbc:mysql://localhost:3306/smartgithub?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC";
    static final String USER = "root";
    static final String PASS = "gheao126";
    public static void InsertHotpoint(String name,int stars){
        Connection conn = null;
        Statement stmt = null;
        try{
            // 注册 JDBC 驱动
            Class.forName(JDBC_DRIVER);
            // 打开链接
            conn = DriverManager.getConnection(DB_URL,USER,PASS);
            // 执行查询
            stmt = conn.createStatement();
            String sql;
            sql="insert hotpoint(fullname,stars) values ('"+name+"',"+stars+")";
            stmt.executeUpdate(sql);
            // sql = "SELECT * FROM hotpoint order by stars desc";
            // ResultSet rs = stmt.executeQuery(sql);
            // 展开结果集数据库
            // while(rs.next()){
            //     // 通过字段检索
            //     String fullname=rs.getString("fullname");
            //     int star=rs.getInt("stars");
            //     System.out.print("data:"+fullname+'\n'+star+'\n');
            // }
            // 完成后关闭
            // rs.close();
            stmt.close();
            conn.close();
        }catch(SQLException se){
            // 处理 JDBC 错误
            se.printStackTrace();
        }catch(Exception e){
            // 处理 Class.forName 错误
            e.printStackTrace();
        }finally{
            // 关闭资源
            try{
                if(stmt!=null) stmt.close();
            }catch(SQLException se2){
            }// 什么都不做
            try{
                if(conn!=null) conn.close();
            }catch(SQLException se){
                se.printStackTrace();
            }
        }
        System.out.println("Goodbye!");
    }
    public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;
        try{
            // 注册 JDBC 驱动
            Class.forName(JDBC_DRIVER);
        
            // 打开链接
            System.out.println("连接数据库...");
            conn = DriverManager.getConnection(DB_URL,USER,PASS);
        
            // 执行查询
            System.out.println(" 实例化Statement对象...");
            stmt = conn.createStatement();
            String sql;
            //插入数据
            // sql = "insert userinfo(id,sum,a,b,c,d,e,f) values ('01',0,1,2,3,4,5,6)";
            // stmt.executeUpdate(sql);
            //删除数据
            // sql = "delete from userinfo where id='test'";
            // stmt.executeUpdate(sql);
            //修改数据
            // sql="update userinfo set sum=21,a=6,b=5,c=4,d=3,e=2,f=1 where id='test'";
            // stmt.executeUpdate(sql);
            //选择数据
            sql = "SELECT * FROM hotpoint order by stars desc";
            ResultSet rs = stmt.executeQuery(sql);
            
            int no=1;
            // 展开结果集数据库
            while(rs.next()){
                // 通过字段检索
                String name  = rs.getString("fullname");
                int star = rs.getInt("stars");                
                // 输出数据
                
                System.out.print("rank:"+no+'\n');
                no++;
                System.out.print("name: " + name+'\n');
                System.out.print("stars: " + star+'\n');
            }
            // 完成后关闭
            rs.close();
            stmt.close();
            conn.close();
        }catch(SQLException se){
            // 处理 JDBC 错误
            se.printStackTrace();
        }catch(Exception e){
            // 处理 Class.forName 错误
            e.printStackTrace();
        }finally{
            // 关闭资源
            try{
                if(stmt!=null) stmt.close();
            }catch(SQLException se2){
            }// 什么都不做
            try{
                if(conn!=null) conn.close();
            }catch(SQLException se){
                se.printStackTrace();
            }
        }
        System.out.println("Goodbye!");
    }
}

