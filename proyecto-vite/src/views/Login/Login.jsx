export function LogIn (user, password) {
    return (
        <div className="containerconnexion">
    <div className="container2">
  <div className="register">
    <h1>Register</h1>
    <a href="https://www.google.com/">
        <button className="google "type="button"><img src="/HTML/Logos/google.png" 
            width="40px" alt="ggle"/></button></a>

          <div className="input-grp">
              <label for="Email"></label>
              <input type="text" placeholder="Name" id="Name"/>
           <div className="input-grp">
              <label for="Email"></label>
               <input type="text" placeholder="Surname" id="Surname"/>

        <div className="input-grp">
            <label for="Email"></label>
            <input type="email" placeholder="Email" id="Email"/>
            </div>

            <div className="input-grp">
            <label for="Password"></label>
             </div>
            
            <div className="input-grp">
            <input type="password" placeholder="Password" id="Password"/>

            </div>
        
        </div>
       </div>
       </div>
       
          
           <div className="enter" >
            <a href="#"></a>
            <button id="login" type="button" onclick="register()">Register</button> <!-- pour ouvrir un nouveau compte-->
           </div>
            
        </div>
    </div>
        </div>
         
        <div className="login">
            <h1>Log in</h1>
            <a href="https://www.google.com/">
                <button className="google "type="button"><img src="/HTML/Logos/google.png" 
                    width="40px" alt="ggle"/></button></a>
                <div className="input-grp">
                    <label for="Email"></label>
                    <input type="email" placeholder="Email" id="email"/>
    
                    <div className="input-grp">
                    <label for="Password"></label>
                    <div className="input-grp">
                    <input type="password" id="password" placeholder="Password"/></div>
                
                </div>
                </div> 
    </div>
    )
}