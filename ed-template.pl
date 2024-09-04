#! /usr/local/bin/perl
# This is a simple template for wild card editing with perl.
# For example to edit all html files in a directory:
#
#        editstuff.pl *.html
#
$fromstring ="/Templates/";
$tostring ="../Templates/";
$^I=".bak";
while (<>) {
    s/$fromstring/$tostring/ig;
    print;
}
