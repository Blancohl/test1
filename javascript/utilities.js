// -------------- utilites.js -----------------
// Contains js functions used throughout the web
// site.
// --------------------------------------------

// ---------- "harvest proof email" -----------
// These JavaScript functions take an email
// address as a variable, passed from
// print_mailto_begin to create the first
// part of the  mailto link.  Call 
// print_mailto_end to finish it off. 
// If JavaScript is turned off, the mailto
// link simply disappears, leaving behind
// an email address that can be cut and pasted.
// -- from Web Techniques Magazine

function pmb(email) {
	document.write("<a href=\"mailto\:"+email+"\">");
}
function pme() {
	document.write("</a>");
}

// ----------- Form Validation -----------------

// Checks to see if a required field contains
// a value.
function isBlank(testStr) {
   if(testStr.length == 0) {
     return true;
   }
   for (var i=0; i<=testStr.length-1; i++)
      if(testStr.charAt(i) != " ") {
        return false;
      }
   return true;
}

