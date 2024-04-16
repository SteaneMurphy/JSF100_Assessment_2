/********************************************************************************************************************************
*                                                 SOLUTION WRITTEN BY: JAMES MURPHY                                             *
*                                                       STUDENT ID: A00107819                                                   *
*********************************************************************************************************************************/

/*
This script contains objects and functions that are to simulate a product filter for an online storefront. This code is meant to work in
conjunction with the entire solution. The files that make up this solution are as follows:

- images/icons
- images/products
- index.html
- styles.css
- productFilter.js

In the event that this prototype does not work, information has been logged to the console
*/




/******************************************************************* 
*                    OBJECTS AND ARRAYS SECTION                    *
********************************************************************/

/*
The 'sneakers' array is an object that holds information for each product displayed or sold on the webstore. Normally this data would be stored
in the backend using a database. The 50 items are listed here for both simplicity and so that they can be easily referenced to when looking
over the project. 

Each entry to this array is a seperate object that contains specific information pertaining to that product alone. These information
catagories are its product name, gender, product price and price category, shoe size availability, show colour availability, shoe height category and
a link to its image (currently in the images folder)

These catergories will be referenced in further code to filter the products, (IE; is the shoe red? if so, display this product on the page)
*/
/* 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 17, 18 */
/*  purple,  white*/
var sneakers = 
[
    {
        name: "Nike Dunk Low Retro",
        gender: "Men",
        price: 
        {
            price: 160,
            category: "",
        },
        size: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15],
        colour: ["white", "black", "blue", "red"],
        height: "low", 
        image: "images/products/nikeDunkLowRetro.webp",  
    },
    {
        name: "Nike Go Fly Ease",
        gender: "Unisex",
        price: 
        {
            price: 190,
            category: "",
        },
        size: [3.5, 4.5, 5.5, 6.5, 7.5, 8, 8.5, 9, 9.5, 10],
        colour: ["white", "black"],
        height: "low", 
        image: "images/products/nikeGoFlyEase.webp",  
    },
    {
        name: "Air Jordan 1 Low SE",
        gender: "Men",
        price: 
        {
            price: 170,
            category: "",
        },
        size: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 17, 18],
        colour: ["white", "black", "blue"],
        height: "low", 
        image: "images/products/airJordan1LowSE.webp",  
    },
    {
        name: "Nike Air Presto",
        gender: "Unisex",
        price: 
        {
            price: 220,
            category: "",
        },
        size: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 17, 18],
        colour: ["white", "black", "blue", "red", "yellow"],
        height: "low", 
        image: "images/products/nikeAirPresto.webp",  
    },
    {
        name: "Nike Air Max 90",
        gender: "Men",
        price: 
        {
            price: 190,
            category: "",
        },
        size: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 17, 18],
        colour: ["white", "black"],
        height: "low", 
        image: "images/products/nikeAirMax90.webp",  
    },
    {
        name: "Nike Air Force 1 Flyknit 2.0",
        gender: "Men",
        price: 
        {
            price: 170,
            category: "",
        },
        size: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 17, 18],
        colour: ["white"],
        height: "low", 
        image: "images/products/nikeAirForce1Flyknit2.webp",  
    },
    {
        name: "Jordan Spizike Low",
        gender: "Unisex",
        price: 
        {
            price: 230,
            category: "",
        },
        size: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 17, 18],
        colour: ["white", "red"],
        height: "low", 
        image: "images/products/jordanSpizikeLow.webp",  
    },
    {
        name: "Nike Air Monarch IV",
        gender: "Men",
        price: 
        {
            price: 110,
            category: "",
        },
        size: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 17, 18],
        colour: ["white", "black", "green"],
        height: "low", 
        image: "images/products/nikeAirMonarchIV.webp",  
    },
    {
        name: "Nike Air Force 1 '07 EasyOn",
        gender: "Unisex",
        price: 
        {
            price: 170,
            category: "",
        },
        size: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 17, 18],
        colour: ["white"],
        height: "low", 
        image: "images/products/nikeAirForce107EasyOn.webp",  
    },
    {
        name: "Nike Air Max Dn",
        gender: "Unisex",
        price: 
        {
            price: 230,
            category: "",
        },
        size: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 17, 18],
        colour: ["white", "black", "red", "blue", "purple"],
        height: "low", 
        image: "images/products/nikeAirMaxDn.webp",  
    },
    {
        name: "Nike Air Force 1 '07",
        gender: "Unisex",
        price: 
        {
            price: 170,
            category: "",
        },
        size: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 17, 18],
        colour: ["white", "black"],
        height: "low", 
        image: "images/products/nikeAirForce107.webp",  
    },
    {
        name: "Nike Revolution 6",
        gender: "Men",
        price: 
        {
            price: 170,
            category: "",
        },
        size: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 17, 18],
        colour: ["black"],
        height: "low", 
        image: "images/products/nikeRevolution6.webp",  
    },
]

/*
The 'filters' object contains the exact information that is to be displayed under each category in the filter menu. When populating the filters,
this object is referenced to set the string names of each filter. Please note that the "hex" value for the colour category is not yet implemented,
just the colour name
*/
var filters = 
{
    gender: 
    [
        "Men", "Women", "Unisex",
    ],
    price:
    [
        "Under $100", "$100 - $150", "$150 - $200", "Over $200",
    ],
    size:
    [
        2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 17, 18,
    ],
    colour:
    [
        {
            name: "red",
            hex: "#ad1c14",
        },
        {
            name: "black",
            hex: "#000000",
        }, 
        {
            name: "blue",
            hex: "#1273a0",
        }, 
        {
            name: "brown",
            hex: "#684a34",
        }, 
        {
            name: "green",
            hex: "#629530",
        }, 
        {
            name: "orange",
            hex: "#b3430a",
        }, 
        {
            name: "pink",
            hex: "#830e29",
        }, 
        {
            name: "grey",
            hex: "#60686c",
        }, 
        {
            name: "white",
            hex: "#ffffff",
        },    
    ],
    height:
    [
        "low", "mid", "high",
    ],
};

/*
The 'filterState' object contains a boolean value for each category on the filter menu. This object tracks whether that particular category is currently
expanded (displayed) or not. It is a static object that changes depending on user interaction. When a user has clicked on a catergory to expand it,
the relevant boolean value is switched to true. The reverse is true when the user clicks to close the category
*/
var filterState = 
{
    gender:
    {
        filterOn: false,
    },
    price:
    {
        filterOn: false,
    },
    size:
    {
        filterOn: false,
    },
    colour:
    {
        filterOn: false,
    },
    height:
    {
        filterOn: false,
    },
}

var coloursSelected =
{
    red: false,
    black: false,
    blue: false,
    brown: false,
    green: false,
    orange: false,
    pink: false,
    grey: false,
    white: false,
}

/******************************************************************* 
*                    PAGE INITIALISATION SECTION                   *
********************************************************************/

function InitialState()
{
    //for each product in sneakers
    for(var i = 0; i < sneakers.length; i++)
    {
        //access the DOM, using querySelector, find an element with the class 'mainContainer'. Access the HTML inside this element and add the following:
        document.querySelector(".mainContainer").innerHTML += ` <div class="productContainer">
                                                                    <img src="${sneakers[i].image}">
                                                                    <div class="productDetails">
                                                                        <p id="productName">${sneakers[i].name}</p>
                                                                        <p class="catergoryDetails">${sneakers[i].gender}</p>
                                                                        <p class="catergoryDetails">${sneakers[i].colour.length} Colours</p>
                                                                        <p id="productPrice">$${sneakers[i].price.price}</p>
                                                                    </div>
                                                                </div>`;
    }
}

/*
This function is also called when the page is first loaded. Its purpose is to set the price category (IE; "Over $200") to each product in the 'sneakers'
object. Whilst it is trivial to manually set these variables myself, if a webstore is to host thousands of products, an automatic way needs to be used.
This also allows for a store employee to change the price in one spot, and the price category will update automatically to reflect that change.

The price category is used in later functions to test the filters against the products.

The function first loops through every product in the 'sneakers' object. It then applies a condition to test what price bracket the product has been set to.
When it finds the correct condition that returns true, it sets the corresponding price catergory to the relevant string.

IE; "Is the sneaker's price over $200? If so, set the price.catergory string to 'Over $200' "
*/
function InitialisePriceCategory()
{
    for(var i = 0; i < sneakers.length; i++)
    {
        if(sneakers[i].price.price > 200)
        {
            sneakers[i].price.category = "Over $200";
        }
        else if(sneakers[i].price.price >= 150)
        {
            sneakers[i].price.category = "$150 - $200";
        }
        else if(sneakers[i].price.price >= 100)
        {
            sneakers[i].price.category = "$100 - $150";
        }
        else
        {
            sneakers[i].price.category = "Under $100";
        }
    }
}
/*
The 'document.onload' variable checks for the page load status from the browser. When it finds that the page is loading, it runs whatever has been
assigned to it, in this case to run a function. I have used the 'document.onload' variable to run the two initialisation functions as soon as the
page loads. They are described in detail above.
*/
document.onload = InitialState();
document.onload = InitialisePriceCategory();

/******************************************************************* 
*                 WEB COMPONENT LOGIC SECTION                      *
********************************************************************/

/*
This function expands and collapses the category the user has clicked on in the filter menu.

Each category has been assigned a relevant 'onClick' value, in this case to call this particular function when clicked. A parameter is also passed along
with that click, referencing exactly which category the user has clicked on. For example, a user clicks on the 'Gender' category on the filter menu,
this function is called and the value 'gender' is passed into this function as the variable 'onClick' below.

The 'onClick' variable is used to search the DOM for an ID of the same name. This ID will point to a relevant <div> in the DOM. Once the <div> has been
found, the filters are added to the page HTML.

A distinction is made between 'colour' and every other filter category, as the colour category has multiple values. We are only concerned with the 
'colour.name' at this point. A seperate condition had to be made for this category for this reason.

For each filter under their relevant category, the for loop will add the new HTML to the document, resulting in a list below the clicked category. Each
filter has a checkbox attatched to it.

When a filter category is expanded, the filterState object is updated to either true or false to indicate its status. When false, instead of injecting
HTML into the DOM, it instead removes HTML under the assocatied filter catergory, resulting in the menu collapsing.
*/

function ExpandCategory(category)
{
    //how many filters are in this category?
    filterCount = filters[category].length;
    //if the filter category has not already been expanded, start expanding the menu
    if(filterState[category].filterOn == false)
    {
        //if the category clicked is 'Colours'
        if(category == "colour")
        {
            //for each colour in the colour category, create a new HTML element 'filter' and display under the relevant category <div>
            //document.getElementById searches the DOM for any element with the associated ID. In this case 'color'
            //'.outerHTML' accesses the HTML outside the parent <div>
            //adds a new <div>, sets its name and attributes for tracking and attatches a checkbox
            for(var i = 0; i < filterCount; i++)
            {
                document.getElementsByClassName("allColours")[0].innerHTML +=`<div class="colourContainer" id="colourF" onClick="UpdateColours('${filters.colour[i].name}', 'c${i}', '${i}')">
                                                                                    <div class="colourDiv" id="c${i}"></div>
                                                                                    <p>${filters.colour[i].name}</p>
                                                                                </div>`;
                if(coloursSelected[filters.colour[i].name])
                {
                    document.getElementById(`c${i}`).style.backgroundColor = '#c7c7c7';
                }
                else
                {
                    document.getElementById(`c${i}`).style.backgroundColor = filters.colour[i].hex;
                }
                /***console messaging***/
                console.log(`FILTER: ${filters[category][i].name} is now visible to user`);
            }
        }
        //if any other category has been clicked
        //for each filter in the associated category, create a new HTML element 'filter' and display under the relevant category <div>
        //document.getElementById searches the DOM for any element with the associated ID. In this case 'color'
        //'.outerHTML' accesses the HTML outside the parent <div>
        //adds a new <div>, sets its name and attributes for tracking and attatches a checkbox
        else
        {
            for(var i = 0; i < filterCount; i++)
            {
                document.getElementById(category).outerHTML += `<div class="filter" id="${category}F">
                                                                    <input type="checkbox" class="checkbox" value="${filters[category][i]}" onchange="UpdateFilters()">
                                                                ${filters[category][i]}
                                                                </div>`;
                /***console messaging***/
                console.log(`FILTER: ${filters[category][i]} is now visible to user`);
            }
        }
        //adjust filter state to ON
        filterState[category].filterOn = true;
        /***console messaging***/
        console.log(`CATEGORY: ${category} is now expanded`);
    }
    else
    {
        //if the filter category has already been expanded, then collapse the category
        //find each filter by their ID using 'document.getElementById' and use the remove() function, deleting this line of HTML from the DOM
        for(var i = 0; i < filterCount; i++)
        {
            document.getElementById(`${category}F`).remove();
            /***console messaging***/
            console.log(`FILTER: All filters with CATEGORY: ${category} have been removed`);
        }
        //adjust filter state to OFF
        filterState[category].filterOn = false;
        /***console messaging***/
        console.log(`CATEGORY: ${category} is now collapsed`);
    }  
}

/*
This function runs whenever a user clicks a checkbox next to filter in the menu. Its purpose is to record which filters have been turned on or off 
by the user.

Each textbox has an 'onchange' attribute. This attribute detects when a user has clicked or changed the associated element. In this case the 'onchange'
event calls this function.

The function uses the document.querySelectorAll method to create an array of all the checkboxes with the class name of 'checkbox'. The array is then
looped through and each checkbox is checked to see whether or not it has been checked active by the user. This is done by using the comparison, '.checked'
in the IF statement below.

If a check is found, the value attribute attatched to the checkbox is added to a new array (filtersChosen). The end result is an array that only 
contains filters that the user has clicked on and activated.

The end of this function calls another function and passes the new array information to said function.
*/
function UpdateFilters()
{
    //creates a new array and adds all checkboxes to each element of the array, querySelectorAll finds all instances of the class in the DOM
    var checkBoxes = document.querySelectorAll(".checkbox");
    //create a new empty array
    var filtersChosen = new Array();
    //for every checkbox, check if user clicked it active, if so, add a reference to the 'value' attribute to the new 'filtersChosen' array
    for(var i = 0; i < checkBoxes.length; i++)
    {
        if(checkBoxes[i].checked)
        {
            filtersChosen.push(checkBoxes[i].getAttribute("value"));
        }
    }
    //send the filtersChosen array to the next function for processing
    UpdateDisplay(filtersChosen);
    /***console messaging***/
    console.log(`FILTERS CHOSEN: ${filtersChosen}`);
}

function UpdateColours(colour, id, index)
{
    if(coloursSelected[colour] == false)
    {
        coloursSelected[colour] = true;
        document.getElementById(id).style.backgroundColor = '#c7c7c7';
    }
    else
    {
        coloursSelected[colour] = false;
        document.getElementById(id).style.backgroundColor = filters.colour[index].hex;
    }
}

/*
This function is called by the previous function "UpdateFilters()". The purpose of this function is to update what products are displayed on the main
page.

The array 'filtersChosen' contains a list of filters that the user has clicked on. These filters are then compared against each product in the object
'sneakers'. If a match is found a copy of the object data for that product is added to a new array (displayArray).

Once all the matches have been found, the new array (displayArray) is sent to the final function for processing. This array contains all the products
that match the filters and categories the user has chosen, and ommitted the products that do not match.
*/
function UpdateDisplay(filtersChosen)
{
    //create new array to hold product matches
    var displayArray = new Array();

    //for each product in 'sneakers'
    for(var i = 0; i < sneakers.length; i++)
    {
        //check each filter in 'filtersChosen' against each element in 'sneakers'
        //each category has its own specialised check
        for(var j = 0; j < filtersChosen.length; j++)
        {
            //gender
            if(filtersChosen[j] == sneakers[i].gender)
            {
                displayArray.push(sneakers[i]);
                break;
            }
            //price
            //the price category discussed above is now checked here, the actual price float could not be used originally
            if(filtersChosen[j] == sneakers[i].price.category)
            {
                displayArray.push(sneakers[i]);
                break;
            }
            //size
            for(var k = 0; k < sneakers[i].size.length; k++)
            {
                //products can have multiple values for size, so checks against each one
                if(filtersChosen[j] == sneakers[i].size[k])
                {
                    displayArray.push(sneakers[i]);
                    break;
                }                    
            }
            //colours
            for(var k = 0; k < sneakers[i].colour.length; k++)
            {
                //products can have multiple values for colour, so checks against each one
                if(filtersChosen[j] == sneakers[i].colour[k])
                {
                    displayArray.push(sneakers[i]);
                    break;
                } 
            }
            //height
            if(filtersChosen[j] == sneakers[i].height)
            {
                displayArray.push(sneakers[i]);
                break;
            }
        }
    }
    //sends the new array with any product matches to the final function
    ArrangeProducts(displayArray);
    /***console messaging***/
    for(var i = 0; i < displayArray.length; i++)
    {
        console.log(`PRODUCT MATCHES: ${displayArray[i].name}`);
    }
}

/*
This final function displays each product in the 'displayArray' array. It works in a similar fashion to the 'InitialiseState()' function.

The function clears the products on the page by finding the parent <div> that holds all the products, and nulls them. Once cleared, a for loop
is used to inject new HTML into the same <div> for each product in the 'displayArray'.

The function uses the 'document.querySelector' method to find the parent <div>, and paste the new product <div> code in the relevant spot.
*/
function ArrangeProducts(displayArray)
{
    //find the 'mainContainer' <div> and its containing HTML, deletes all HTML in this section
    document.querySelector(".mainContainer").innerHTML = "";

    //for each product in the 'displayArray' array, inject new HTML into the section of the parent <div>
    //this new HTML populates a new <div> with relevant product image
    //this image and <div> is styled by the styles.css script
    for(var i = 0; i < displayArray.length; i++)
    {
        document.querySelector(".mainContainer").innerHTML += ` <div class="productContainer">
                                                                    <img src="${displayArray[i].image}">
                                                                    <div class="productDetails">
                                                                        <p id="productName">${displayArray[i].name}</p>
                                                                        <p class="catergoryDetails">${displayArray[i].gender}</p>
                                                                        <p class="catergoryDetails">${displayArray[i].colour.length} Colours</p>
                                                                        <p id="productPrice">$${displayArray[i].price.price}</p>
                                                                    </div>
                                                                </div>`;
    }

    /***console messaging***/
    for(var i = 0; i < displayArray.length; i++)
    {
        console.log(`PRODUCT DISPLAY UPDATED!`);
    }
}