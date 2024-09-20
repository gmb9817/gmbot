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
let gmb=new Map;
let user=new Map;
function reset(){
  let ti=new Date(Date.now());
  if(ti.getSeconds()==0&&ti.getMinutes()==0&&ti.getHours()==0){
    gmb.clear();
  }
}
setInterval(reset,1000);
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if(user.has(imageDB.getProfileBase64())){
    
  }
  if(msg=="안녕"){
    replier.reply("반가워요 "+sender+"님");
  }
  if(msg=="!가입"){
    user.set(imageDB.getProfileBase64(),sender);
    replier.reply("가입 완료 되셨습니다 "+sender+"님!\n!도움말 을 통해 명령어를 확인할수 있으세요~");
  }
  if(msg=="!도움말"){
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
