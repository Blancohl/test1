//
//  path_menu.js - display a hierarchical file path menu
//  leading to the current page. 
//
//  This script uses an Open Cube DHTML configuration file 
//  (included in the same page where you are calling this 
//  script) to generate child menu items branching out from 
//  the topLevel array. The topLevel array is defined in 
//  the DHTML configuration file.   
//
//  To use this script, include this file (path_menu.js)
//  in the following syntax:
//
//  <script language="JavaScript" src="http://yourdomain.gsfc.nasa.gov/dir_for_scripts/path_menu.js"></script>
//
//  between the <head></head> tags on the page where you would 
//  like the menu to appear.  Immediately following this, define
//  the nickname variable with the following syntax:
//
//  <script language="JavaScript"> nickname="your_page_nickname"; </script>
//
//  The contents of this variable needs to be unique and - VERY 
//  IMPORTANTLY - paired with the numeric order of its corrisponding
//  subdescription (subdesc) in the DHTML config file.  This is done 
//  in the assoc_name array.  This array is also defined in the DHTML 
//  config file.  This file needs to be called before you call the 
//  GetPathMenu function.
//
//  Finally, down in the part of the page where you want this menu
//  to appear, call the function GetPathMenu and pass it the nickname 
//  variable.  GetPathMenu will then use the information from the 
//  assoc_name array to find the level of the subdesc and load the 
//  values we need. 
//

var nickname;

function GetPathMenu(nickname) {

	// Screen out the home page
	if (nickname != "home") {

	var level;

	// Determine Browser 
	if (navigator.appName.substring(0,8) == "Netscape") { 
		browserVersion = 2; 
	} else { 
		browserVersion = 1; 
	}

	// Get level associated with page nickname.
	// This is defined in the assoc_page array,
        // created in the DHTML config file.

	for(y=0;y<window.assoc_page.length;y++) {
	    if (window.assoc_page[y][0].length) {
		if (window.assoc_page[y][0]==nickname) {
			level = window.assoc_page[y][1];
		} 
	    }
	}

	// ****   Configurable variables   ****

	// Home page (at top of hierarchy)
	var homePage = baseURL+"index.html";
	if (browserVersion == 1) {
		homePage = "<a href=\"" + homePage + "\" STYLE=\"text-decoration: none\">Home</a>";
	} else {
		homePage = "<a href=\"" + homePage + "\">Home</a>";
	}
	var displayFont = "";
	displayFont = "<span class=\"pathmenu\">"; 

	// Spacer separating menu elements
	var spacer = " \/ ";

	// ****   End configurables   ****

	levels = new Array();
	levels = level.split("_");

	path_menu = new Array();

	for(i=0;i<levels.length;i++) {
		lowerLevel = levels[0];
		if (i>0) {
			// Concatonate level to display
			for(z=1;z<=i;z++) {
				if((levels[z]) && (typeof levels[z] != "undefined")) {
					lowerLevel = lowerLevel + "_" + levels[z];
				}
			}
		 	// Screen out non-existant levels and add
                 	// new level info to the path_menu array.
                        var header = (eval("window.subdesc"+lowerLevel));
                        if (typeof header != "undefined") {
				var url = (eval("window.url"+lowerLevel));
				if (typeof url != "undefined") {
                        		path_menu[i] = new Array(header, url);
				} else {
					// Header but no url. Fill in with 
					// null.
                        		path_menu[i] = new Array(header, "null");
				}
                        }
		} else {
			// Display main menu item
			path_menu[i] = new Array(window.topLevel[levels[0]][0], window.topLevel[levels[0]][1]);
		}
	}

	document.write("<strong>");
	document.write(displayFont);
	document.write(homePage);
	document.write(spacer);
	for(n=0;n<path_menu.length;n++) {
		var url = path_menu[n][1];
		if (url != "null") {
			document.write("<a href=lbaeco/javascript//"");
			document.write(url);
			if (browserVersion == 1) {
				document.write("\" STYLE=\"text-decoration: none\">");
			} else {
				document.write("\">");
			}
		}
		document.write(path_menu[n][0]);
		if (url != "null") {
			document.write("</a>");
		}
		if(n<(path_menu.length-1)) {
			document.write(spacer);
		}
	}
	document.write("</span></strong>");

	}

}
