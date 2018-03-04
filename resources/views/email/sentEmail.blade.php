<h3>Hello there</h3>
<hr>
<p>
    To verify your account, go to the link 
    <strong>
        {{--  <a href=" {{route('login')}} ">Click here</a>  --}}
        
        <a href=" {{route('email.sent.user',["email"=>$user->email, "verify_token" => $user->verify_token])}} ">Click here</a>
    </strong>
</p>