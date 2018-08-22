$(".c_m_i_passUp").click(function(){
    var value1=$(".c_m_i_l_t_email").val();
    if(value1.length>4 || value1.length<10){
        alert("密码必须在4到10位之间");
        return;
    }
    var value2=$(".c_m_i_l_fi_answer").val();
    if(value1!=value2){
        alert("密码不一致");
        return;
    }
    alert("密码修改成功");
    window.location="personalCenter.html";
});