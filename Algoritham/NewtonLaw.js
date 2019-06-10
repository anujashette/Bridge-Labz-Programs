var c = parseInt(require('readline-sync').question('Enter No:'))
     var t=c
            var epsilon=1e-15
            
                while(Math.abs(t-c/t) > epsilon*t)
                {
                    t=(c/t+t)/2
                }
            
                console.log(t)
                        
                    
                
            
            
            
