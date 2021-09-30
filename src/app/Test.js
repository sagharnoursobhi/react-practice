    
export default function Test(){
    const objectTest = {
        name:'hello', 
        family: 'bye'
    }

    const flightMajorObject = {
        name:'soroush',
        family:'hjgjjgj',
        flightInfo(){
            return(`hello ${this.name} ${this.family}`)
        }
    }
    const flight = flightMajorObject.flightInfo;
    const clientOne = {
        name:'hasan',
        family:'stephan'
    }
    const clientOneInfo = flight.call(clientOne)
    const clienttwo = {
        name:'Alex',
        family:'Smith'
    }
    
    const clientTwoInfo = flight.call(clienttwo)//it is for initialization


    function showResult(customerName , destination) {
        return this.countries.map(country => {
            return (<div key={country}>
                <p>{customerName} from {country} will go to {destination} with {this.name}</p>
                </div>)
        })
    }

    const firstflight={
        name:'Luftansa',
        countries:['Germany' , 'United States']
    } 
    const showResultBound = showResult.bind(firstflight)
    const destinationElements = showResultBound('Suzan Smith' , 'Tehran')
     
    return(
    <>
        <h2 style={{textAlign:'center'}}>{objectTest.name}</h2>
        <h2 style={{textAlign:'center'}}>{objectTest.family}</h2>
        <h2 style={{textAlign:'center'}}>{clientOneInfo}</h2>
        <h2 style={{textAlign:'center'}}>{clientTwoInfo}</h2>
        <h1 className="test-html-on-react-component" style={{color:'red'}}>
            {destinationElements}
        </h1>
    </>
    )
}