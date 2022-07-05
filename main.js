var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg" , "20220701_111832.jpg", "20220702_172004.jpg" , "20220702_140925.jpg", "20220702_175610.jpg"];
var names = ["Fmaily Book","Sushil Kumar", "Chitransh", "Yasharth Narayan", "Manvi Narayan"];
var i = 0;

function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
                i = 0
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i] ;
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}