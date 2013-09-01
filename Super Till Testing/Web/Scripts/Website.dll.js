(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,Website,Client,WebSharper,Html,Default,List,alert;
 Runtime.Define(Global,{
  Website:{
   Client:{
    MakeHelloDiv:function()
    {
     Client.SayHello();
     return Default.Div(List.ofArray([Default.Text("Hello there")]));
    },
    SayHello:function()
    {
     return alert("Hello!");
    }
   },
   Controls:{
    HelloControl:Runtime.Class({
     get_Body:function()
     {
      return Client.MakeHelloDiv();
     }
    })
   }
  }
 });
 Runtime.OnInit(function()
 {
  Website=Runtime.Safe(Global.Website);
  Client=Runtime.Safe(Website.Client);
  WebSharper=Runtime.Safe(Global.IntelliFactory.WebSharper);
  Html=Runtime.Safe(WebSharper.Html);
  Default=Runtime.Safe(Html.Default);
  List=Runtime.Safe(WebSharper.List);
  return alert=Runtime.Safe(Global.alert);
 });
 Runtime.OnLoad(function()
 {
 });
}());
