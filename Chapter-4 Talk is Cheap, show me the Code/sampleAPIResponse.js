const config=[
    {
        type: "carousel",
        cards:[ //cards is again an array of the different offers available in that region
            {
                offerName: "50% off" //array item 0 (offer-0)
            },
            {   
                offerName: "No delivery charge"
            }
        ]
    }, //array item 0, for the offer
    {
        type: "restaurant",
        cards:[ //cards is again an array, which denotes the information about all the available 
            {
               name: "McDonalds",
               image: "https://images.google.com",
               cuisine: ["Burger","Fries"],
               rating:"4.1"
                //array item 0, denoting the first restaurant
            },
            {
                name: "Subway",
                image: "http://www.imgur.com",
                cuisine: ["French fries","Pizza"],
                rating: "4.5"
            } //array item 1, denoting the second restaurant
        ]
    } //array item 1, for the restaurants
]

//config is an array of objects