package jdbc;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class MemberListServlet
 */
@WebServlet("/memberList")
public class MemberListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MemberListServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/json; charset = utf-8");
				
		//JSON 형식의 데이터 생성
		
		
		List<Member>list =  MemberManage.getInstance().getMembers();
		
		//[{"memberId": "blue","memberPw": "1234","memberName": "김상영","roles": "1"}]<-JSON format
		String json = "[";
		
		for(int i=0; i<list.size();i++) {
			json += "{\"memberId\" : \"" + list.get(i).getMemberId()
		              + "\", \"memberPw\" : \"" + list.get(i).getMemberPw()
		              + "\", \"memberName\" : \"" + list.get(i).getMemberName()
		              + "\", \"role\" : \"" + list.get(i).getRole() + "\"}";
			if(i != list.size()-1) {
				json+= ",";
			}
		}
		json += "]";
		
		response.getWriter().print(json);
		
//		Json += "{\"memberId\" : \"" + list.get(i).getMemberId() + "\", \"memberPw : \"" 
//		+ list.get(i).getMemberPw() + "\"memberName: \"" + list.get(i).getMemberName() 
//		+ "memberRole: \"" + list.get(i).getRole();
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			
		String id = request.getParameter("del_id");
			
		if (MemberManage.getInstance().delMember(id)) {
				response.getWriter().print("성공!");
			}else {
				response.getWriter().print("실패ㅋ");
			}
		
	}

}
