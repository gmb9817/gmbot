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
  if(msg=="!안녕"){
    replier.reply("반가워요 "+sender+"님!");
  }
  if(msg=="!가입"){
    if(room!="gmb9817"){
      replier.reply("가입은 짐봇의 오픈채팅에서만 할 수 있습니다.\nhttps://open.kakao.com/o/sf0Ta3Ng");
    }
    else{
      let k=Math.random().toString(36).substr(2,11);
      while(user.has(k)){
        k=Math.random().toString(36).substr(2,11);
      }
      user.set(k,imageDB.getProfileBase64());
      us.set(imageDB.getProfileBase64(),k);
      id.set(k,sender);
      replier.reply("가입 완료 되셨습니다 "+sender+"님!\n당신의 id는 "+k+" 입니다! 절대 남에게 공유하지 마시고 어딘가에 저장해두세요!\n!명령어 을 통해 명령어를 확인할수 있으세요~");
    }
  }
  if(msg=="!후원"){
    replier.reply("짐봇은 여러분의 후원으로 돌아갑니다!\n토스뱅크 1908-8466-3579\n100원의 기부도 소중하게 받아요~");
  }
  if(msg=="!명령어"){
    replier.reply("아직 제작중입니다.");
  }
  if(msg=="!채팅랭킹"){
    
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
