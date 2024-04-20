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
    {
        name: "Air Jordan 1 Elevate High",
        gender: "Unisex",
        price: 
        {
            price: 220,
            category: "",
        },
        size: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 17, 18],
        colour: ["black", "red", "yellow", "blue", "white"],
        height: "high", 
        image: "images/products/airJordan1ElevateHigh.webp",  
    },
    {
        name: "Air Jordan 1 HiFly Ease",
        gender: "Men",
        price: 
        {
            price: 200,
            category: "",
        },
        size: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 17, 18],
        colour: ["black", "red", "yellow", "white"],
        height: "high", 
        image: "images/products/airJordan1HiFlyEase.webp",  
    },
    {
        name: "Air Jordan 1 Low",
        gender: "Men",
        price: 
        {
            price: 160,
            category: "",
        },
        size: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 17, 18],
        colour: ["white", "black", "blue", "yellow", "red"],
        height: "low", 
        image: "images/products/airJordan1Low.webp",  
    },
    {
        name: "Air Jordan 1 Mid",
        gender: "Men",
        price: 
        {
            price: 180,
            category: "",
        },
        size: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 17, 18],
        colour: ["white", "black", "blue", "yellow", "grey"],
        height: "mid", 
        image: "images/products/airJordan1Mid.webp",  
    },
    {
        name: "Air Jordan 1 Mid SE",
        gender: "Unisex",
        price: 
        {
            price: 190,
            category: "",
        },
        size: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 17, 18],
        colour: ["white", "black", "blue", "yellow", "grey"],
        height: "mid", 
        image: "images/products/airJordan1MidSE.webp",  
    },
    {
        name: "Air Jordan 1 Zoom CMFT 2",
        gender: "Unisex",
        price: 
        {
            price: 210,
            category: "",
        },
        size: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 17, 18],
        colour: ["yellow", "red"],
        height: "high", 
        image: "images/products/airJordan1ZoomCMFT2.webp",  
    },
]

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
        "red": false,
        "black": false,
        "blue": false,
        "brown": false,
        "green": false,
        "orange": false,
        "pink": false,
        "grey": false,
        "white": false,
    }


/******************************************************************* 
*                    PAGE INITIALISATION SECTION                   *
********************************************************************/

function InitialState()
{
    document.querySelector(".mainContainer").innerHTML = "";

    for(var i = 0; i < sneakers.length; i++)
    {
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

document.onload = InitialState();
document.onload = InitialisePriceCategory();

/******************************************************************* 
*                 WEB COMPONENT LOGIC SECTION                      *
********************************************************************/

function ExpandCategory(category)
{
    filterCount = filters[category].length;

    if(filterState[category].filterOn == false)
    {
        if(category == "colour")
        {
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
        else
        {
            for(var i = 0; i < filterCount; i++)
            {
                document.getElementById(category).outerHTML += `<div class="filter" id="${category}F">
                                                                    <input type="checkbox" class="checkbox" value="${filters[category][i]}" onchange="UpdateFilters()">
                                                                <span>${filters[category][i]}</span>
                                                                </div>`;
                /***console messaging***/
                console.log(`FILTER: ${filters[category][i]} is now visible to user`);
            }
        }

        filterState[category].filterOn = true;
        /***console messaging***/
        console.log(`CATEGORY: ${category} is now expanded`);
    }
    else
    {
        for(var i = 0; i < filterCount; i++)
        {
            document.getElementById(`${category}F`).remove();
            /***console messaging***/
            console.log(`FILTER: All filters with CATEGORY: ${category} have been removed`);
        }

        filterState[category].filterOn = false;
        /***console messaging***/
        console.log(`CATEGORY: ${category} is now collapsed`);
    }  
}

function UpdateFilters(coloursActive=false)
{
    var checkBoxes = document.querySelectorAll(".checkbox");
    var filtersChosen = new Array();
    for(var i = 0; i < checkBoxes.length; i++)
    {
        if(checkBoxes[i].checked)
        {
            filtersChosen.push(checkBoxes[i].getAttribute("value"));
        }
    }

    UpdateDisplay(filtersChosen, coloursActive);
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

    var coloursActive = CheckActive();
    console.log(coloursActive);
    UpdateFilters(coloursActive);
}

function CheckActive()
{
    
    for(var i = 0; i < Object.keys(coloursSelected).length; i++)
    {
        if(Object.values(coloursSelected)[i] == true)
        {
            return true;
        }
    }
    return false;
}

function UpdateDisplay(filtersChosen, coloursActive=false)
{
    if(filtersChosen.length == 0 && coloursActive == false)
    {
        InitialState();
        return;
    }
    var displayArray = new Array();

    for(var i = 0; i < sneakers.length; i++)
    {
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
            //height
            if(filtersChosen[j] == sneakers[i].height)
            {
                displayArray.push(sneakers[i]);
                break;
            }
        }
        //colours           
        for(var k = 0; k < sneakers[i].colour.length; k++)
        {
            //products can have multiple values for colour, so checks against each one
            for(var l = 0; l < Object.keys(coloursSelected).length; l++)
            {
                
                if(Object.values(coloursSelected)[l] == true)
                {
                    if(Object.keys(coloursSelected)[l] == sneakers[i].colour[k])
                    {
                        displayArray.push(sneakers[i]);
                    }                   
                } 
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