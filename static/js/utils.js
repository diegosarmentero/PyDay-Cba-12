function validateForm()
{
    var n = document.forms["register"]["id_name"].value;
    var s = document.forms["register"]["id_surname"].value;
    var e = document.forms["register"]["id_email"].value;
    if (n==null || n=="" || s==null || s=="" || e==null || e=="")
    {
          alert("Debe completar: Nombre, Apellido y Email");
          return false;
    }
}


function validateFormTalk()
{
    var t = document.forms["propose"]["id_title"].value;
    var a = document.forms["propose"]["id_abstract"].value;
    if (t==null || t=="" || a==null || a=="")
    {
          alert("Debe completar: Titulo y Descripción");
          return false;
    }
}
