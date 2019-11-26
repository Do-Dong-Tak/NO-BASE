var Project_save = [];       //프로젝트 데이터를 저장하는 변수
var Project_filename = [];   //프로젝트 파일이름을 저장하는 변수
var Project_number = 0;      //데이터 개수 변수
project_name = [];           //프로젝트 명을 저장하는 변수
var Now_project_number = 0;  //현재 프로젝트 번호

$(document).ready(function () {

    // $(".midnight").fadeIn("slow");
    // $(".first_popup").fadeIn("slow");


    $(".bpm").hover(function () {
        $(".bpm_up").show();
        $(".bpm_down").show();
    },function() {
        $(".bpm_up").hide();
        $(".bpm_down").hide();
    });
});


$(`.view_project`).click(function(){
    alert("asdasd");
    console.log(view_project.html());
    // 저장한 파일 선택 하는중! 현재
})

function open_menu()
{
    $(".popup_menu").fadeIn("fast");
}
$("header,.main,popup_menu").click(function(){
    $(".popup_menu").fadeOut("fast");
});
function new_project()
{
    $(".midnight").fadeIn("fast");
    $(".new_project_popup").fadeIn("fast");
}
function save_project()
{
    $(".midnight").fadeIn("fast");
    $(".save_project_popup").fadeIn("fast");
    $(".save_project_popup input").val('');
}
function info()
{
    $(".midnight").fadeIn("fast");
    $(".info_popup").fadeIn("fast");
}
function save_project_func()
{
    if($(".save_project_popup input").val() != "")
    {
        //파일 저장 소스....부탁합니다....
        //ㅎ
        Project_filename[Now_project_number] = $(".save_project_popup input").val();
        check_ckeckbox(); //체크박스 확인
        project_name[Now_project_number] = $('.title').text();
        $(".view_project").append(`
                                    <div class="project_${Now_project_number} project">
                                        <img src="./img/icon/file_121247.png" alt="">
                                        <p>${Project_filename[Now_project_number]}</p>
                                        <p>${NOW()}</p>
                                    </div>
                                  `);
    }
    
    else
    {
        alert('파일 명을 입력해 주세요.');
    }
}
function change_project_name()
{
    $(".midnight").fadeIn("fast");
    $(".change_project_name_popup").fadeIn("fast");
    $(".change_project_name_popup input").val(project_name);
}
function new_project_popup_cancel()
{
    $(".midnight").fadeOut("fast");
    $(".new_project_popup").fadeOut("fast");
}
function save_project_popup_cancel()
{
    $(".midnight").fadeOut("fast");
    $(".save_project_popup").fadeOut("fast");
}
function change_project_name_popup_cancel()
{
    $(".midnight").fadeOut("fast");
    $(".change_project_name_popup").fadeOut("fast");
}
function info_popup_cancel()
{
    $(".midnight").fadeOut("fast");
    $(".info_popup").fadeOut("fast");
}
function create_new_project()
{
    if($(".new_project_popup input").val() != "")
    {
        project_name = $(".new_project_popup input").val(); //프로젝트 명 저장
        $(".midnight").fadeOut("fast");
        $(".new_project_popup").fadeOut("fast");
        //새 프로젝트 창에서 확인을 누른후 수행할 작업
        //기존 프로젝트 초기화
        //성철아....뒷일을 부탁한다...
        //추가시작
        $(".title").text(project_name);
        Now_project_number += 1;
        Project_number +=1;
    }
    else
    {
        alert('프로젝트 명을 입력해 주세요.');
    }
}
function change_project_name_func()
{
    if($(".change_project_name_popup input").val() != "")
    {
        change_project_name_popup_cancel();
        project_name = $(".change_project_name_popup input").val();
        $(".title").text(project_name);
    }
    else
    {
        alert('변경할 프로젝트 명을 입력해 주세요.');
    }   
}

//프로젝트 보는 창 추가 함수
function view_project(){
    $(".midnight").fadeIn("fast");
    $(".view_project").fadeIn("fast");
}

//체크 확인 함수

function check_ckeckbox(){
    for(let i = Project_number; i < Project_number+1; i++){ 
        Project_save[i];
        for(let j = 0; j < 4; j++){
            Project_save[i] = [];
            for(let k = 0; k < 16; k++){
                Project_save[i][j] = [];
                if($(`input:checkbox[id='crash_${k}']`).prop("checked") && j == 0){
                    Project_save[i][j][k] = 1;
                    console.log(Project_save[i][j][k]);
                }
                if($(`input:checkbox[id='hihat_${k}']`).prop("checked") && j == 1){
                    Project_save[i][j][k] = 1;
                    console.log(Project_save[i][j][k]);
                }
                if($(`input:checkbox[id='snare_${k}']`).prop("checked") && j == 2){
                    Project_save[i][j][k] = 1;
                    console.log(Project_save[i][j][k]);
                }
                if($(`input:checkbox[id='kick_${k}']`).prop("checked") && j == 3){
                    Project_save[i][j][k] = 1;
                    console.log(Project_save[i][j][k]);
                }
            }
        }
    }
}

//현재시간 함수
function NOW(){
    var time; 
    let now = new Date();

    let year= now.getFullYear();
    let mon = (now.getMonth()+1)>9 ? ''+(now.getMonth()+1) : '0'+(now.getMonth()+1);
    let day = now.getDate()>9 ? ''+now.getDate() : '0'+now.getDate();
    
    time = year + '-' + mon + '-' + day;
    return time;
}