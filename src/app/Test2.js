
function Restaurant({ restaurant, branch }) {
    return (<div>
        <div>{restaurant.name}</div>
        <div>{branch.country}</div>
        <div>{branch.city}</div>
        <div>{restaurant.foods.join(',')}</div>
    </div>)
}//new component inside the component
// const Food = (restaurant)=>{
//     return(<div><h3>{restaurant.otherBranches.join(' ,')}</h3></div>)
// }

export default function Test2(){
    const restaurant = {
        name:'Yammy Italiano',
        address:'Fridamsplan 23D',
        foods: ['Italiano Pizza' , 'Americano Pizza' , 'Pasta'],
        otherBranches : [
            {
                country:'United State',
                city:'LA',
                staff:'23',
                example:'hello'
            },
            {
                country:'United Kingdom',
                city:'London',
                staff:'34'
            },
        ]
    }

    const addExampleToAllRestaurantBranches = (restaurant, exampleText) => {
        restaurant.otherBranches.forEach(branch => {
            branch.example = exampleText
        });
    }
    const findBranch = (restaurant, search)=>{//print that branch that is 
        return restaurant.otherBranches.find(branch => branch.country === search )
    }

    addExampleToAllRestaurantBranches(restaurant, 'hello');
    console.log(restaurant)

    return(
        <h1>
            <Restaurant restaurant={restaurant} 
                        branch={findBranch(restaurant, 'United State')} />
        </h1>
   );  
}