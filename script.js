
                            var x= document.getElementsById("login");
                             var y = document.getElementsById("register");
                              var z= document.getElementsById("btn");
                            function register()
                            {
                                x.style.left='-400px';
                                y.style.left='50px';
                                z.style.left='110px';
                            
                            } 
                            function login()
                            {
                                x.style.left = '50px';
                                y.style.left = '450px';
                                z.style.left = '0px';
                            }
                        
                
                            var modal= document.getElementsById('loginForm');
                            window.onclick= function(event)
                            {
                                if(event.target==modal)
                                {
                                    modal.style.display="none";
                                }
                            }
                