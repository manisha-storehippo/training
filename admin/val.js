/**
 * Created by hippoinnovations on 30/6/15.
 */
function formValidation(){
    var uname=document.registration.fname;
    var uname1=document.registration.lname;
    var passid = document.registration.pass;
    var d=document.registration.dd;
    var m=document.registration.mm;
    var y=document.registration.yy;
    var umsex = document.registration.msex;
    var ufsex = document.registration.fsex;
    var uadd=document.registration.address;
    var uco=document.registration.btech;

    if(allLetter(uname)) {
        if (allLetter1(uname1)) {
            if (passid_validation(passid, 7, 12))
            {
                if (dateselect(d))
                {
                    if (monthselect(m))
                    {
                        if (yearselect(y))
                        {
                            if (validsex(umsex, ufsex))
                            {
                                if (alphanumeric(uadd))
                                {
                                    if (validsex(umsex, ufsex))
                                    {
                                        if (validcheck(uco))
                                        {
                                            if (alphanumeric(uadd))
                                            {
                                            }

                                        }
                                    }
                                }
                            }

                        }
                    }
                }

            }
        }
    }

    return false;
}
function validcheck(cor)
{
    if(cor.checked == false)
    {
        alert("select course");
        cor.focus();
        return false;
    }
        return true;
}

function passid_validation(passid,mx,my)
{
    var passid_len = passid.value.length;
    if (passid_len == 0 ||passid_len >= my || passid_len < mx)
    {
        alert("Password should not be empty / length be between "+mx+" to "+my);
        passid.focus();
        return false;
    }
    return true;
}

function allLetter(uname)
{
    var letters = /^[A-Za-z]+$/;
    if(uname.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('First name must have alphabet characters only/must fill');
        uname.focus();
        return false;
    }
}
function allLetter1(uname1)
{
    var letters = /^[A-Za-z]+$/;
    if(uname1.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('Last name must have alphabet characters only/must fill');
        uname1.focus();
        return false;
    }
}
function alphanumeric(uadd)
{
    var letters = /^[0-9a-zA-Z]+$/;
    if(uadd.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('User address must have alphanumeric characters only');
        uadd.focus();
        return false;
    }
}
function dateselect(date)
{
    if(date.value == "default")
    {
        alert('Select your dob from the list');
        date.focus();
        return false;
    }
    else
    {
        return true;
    }
}
function monthselect(month)
{
    if(month.value == "Default")
    {
        alert('Select your dob from the list');
        ucountry.focus();
        return false;
    }
    else
    {
        return true;
    }
}
function yearselect(year)
{
    if(year.value == "Default")
    {
        alert('Select your dob from the list');
        ucountry.focus();
        return false;
    }
    else
    {
        return true;
    }
}

 function validsex(umsex,ufsex)
{
    x=0;

    if(umsex.checked)
    {
        x++;
    } if(ufsex.checked)
{
    x++;
}
    if(x==0)
    {
        alert('Select Male/Female');
        umsex.focus();
        return false;
    }
    else
    {
        alert('Form Succesfully Submitted');
        window.location.reload()
        return true;
    }
}