 function vowel()
        { 
            var count=0;
            var str=document.getElementById("userInput").value;
            console.log(str);

            for(var i=0;i<str.length;i++)
            {
                str[i];
                if(str[i]=='a' || str[i]=='e' || str[i]=='i'|| str[i]=='o'|| str[i]=='u')
                {
                    count++;
                    document.write(str[i]+"<br>");
                }

            }
            document.write("Total Number Of Vowels =" +count);
        }