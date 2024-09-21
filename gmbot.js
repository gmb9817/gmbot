const scriptName = "짐봇";
/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */
let gmb=new Map; //채팅랭킹 전용 맵
let user=new Map; //아이디,이미지
let us=new Map; //이미지,아이디
let id=new Map; //아이디, 닉네임
function reset(){
  let ti=new Date(Date.now());
  if(ti.getSeconds()==0&&ti.getMinutes()==0&&ti.getHours()==0){
    gmb.clear();
  }
}
setInterval(reset,1000);
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if(us.has(imageDB.getProfileBase64())){
    let w=us.get(imageDB.getProfileBase64());
    if(gmb.has(w)){
      gmb.set(w,gmb.get(w)+1);
    } else{
      gmb.set(w,1);
    }
  }
  if(msg=="!안녕"){
    replier.reply("반가워요 "+sender+"님!");
  } else if(msg=="!가입"){
    if(room!="gmb9817"){
      replier.reply("가입은 짐봇의 오픈채팅에서만 할 수 있습니다.\nhttps://open.kakao.com/o/sf0Ta3Ng");
    } else{
      let k=Math.random().toString(36).substr(2,11);
      while(user.has(k)){
        k=Math.random().toString(36).substr(2,11);
      }
      user.set(k,imageDB.getProfileBase64());
      us.set(imageDB.getProfileBase64(),k);
      id.set(k,sender);
      replier.reply("가입 완료 되셨습니다 "+sender+"님!\n당신의 id는 "+k+" 입니다! 절대 남에게 공유하지 마시고 어딘가에 저장해두세요!\n!명령어 을 통해 명령어를 확인할수 있으세요~");
    }
  } else if(msg=="!후원"){
    replier.reply("짐봇은 여러분의 후원으로 돌아갑니다!\n토스뱅크 1908-8466-3579\n100원의 기부도 소중하게 받아요~");
  } else if(msg=="!명령어"){
    let com="!안녕 : 간단한 인사를 해줍니다.\n\
      !가입 : 짐봇에 가입합니다. <주의사항> 같은 계정으로 여러번 가입할 수 있으나 기존 가입되었던 계정이 삭제됩니다.\n\
      !후원 : 좀 해주세요\n\
      !명령어 : 짐봇의 명령어를 보여줍니다.\n\
      !채팅랭킹 : 그날의 채팅랭킹을 보여줍니다.\n\
      !깃허브 : 짐봇은 오픈소스 프로젝트입니다. 소스코드가 올라와있습니다.\n\
      !새로고침 {본인의 id}: 프로필 사진이나 닉네임을 변경했을시 사용하는 명령어입니다. 만약 프로필 사진이나 닉네임을 변경했지만 새로고침을 하지 않았다면 활동내용이 저장 안될수도 있습니다.\n\
      -------제작 예정 명령어--------\n\
      !내정보 : 자신의 정보를 보여줍니다.\n\
      !웹검색 : 간단한 웹사이트 검색을 할 수 있습니다.";
    replier.reply(com);
  } else if(msg=="!채팅랭킹"){
    let rank="!채팅랭킹!\n";
    let ra=Array.from(gmb);
    let cnt=1;
    ra.sort((a,b)=>b[1]-a[1]);
    ra.forEach((r)=>{
      rank+=cnt+". "+id.get(r[0])+" : "+r[1]+"회\n";
      cnt+=1;
    });
    replier.reply(rank);
  } else if(msg=="!깃허브"){
    replier.reply("짐봇은 모두를 위한 오픈소스 프로젝트입니다.\nhttps://github.com/gmb9817/gmbot\n코드를 복사해서 사용하실때는 출처를 명확히 해주세요!");
  } else if(msg.startsWith("!새로고침")){
    let q=msg.substr(6);
    if(room=="gmb9817"){
      if(user.has(q)){
        let w=user.get(q);
        us.delete(w);
        us.set(imageDB.getProfileBase64(),q);
        user.set(q,imageDB.getProfileBase64());
        id.set(q,sender);
        replier.reply("새로고침이 완료되었습니다!");
      } else{
        replier.reply("아직 가입을 안하신것 같습니다.\n!가입을 통해 가입해주세요.");
      }
    } else{
      replier.reply("새로고침은 짐봇의 오픈채팅에서만 할 수 있습니다.\nhttps://open.kakao.com/o/sf0Ta3Ng");
    }
  }
  function onCreate(savedInstanceState, activity) {
    var textView = new android.widget.TextView(activity);
    textView.setText("Hello, World!");
    textView.setTextColor(android.graphics.Color.DKGRAY);
    activity.setContentView(textView);
  }
  function onStart(activity) {
  }
  function onResume(activity) {
  }
  function onPause(activity) {
  }
  function onStop(activity) {
  }
}
