namespace Website
module Client =
    open IntelliFactory.WebSharper
    open IntelliFactory.WebSharper.Html

    [<JavaScript>]
    let SayHello () =
        JavaScript.Alert("Hello!")

    [<JavaScript>]
    let MakeHelloDiv () =
        SayHello ()
        Div [ Text "Hello there"]

module Controls =
    open IntelliFactory.WebSharper

    type HelloControl() =
        inherit Web.Control()

        [<JavaScript>]
        override this.Body = Client.MakeHelloDiv() :> _