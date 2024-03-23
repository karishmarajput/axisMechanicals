import '../style/homeServices.css'
function HomeServices(){
 return(
    <div className="HomeServicesContainer">
        <div className='homeService1'>
            <img src="/images/HomeServices/heating.png" width={'100px'} height={'100px'}></img> <h1>HEATING</h1>
            <p >Professional Heating System Installation, Repair, <br/>and Maintenance at Your Doorstep</p></div>
        <div className='homeService2'>
        <img src="/images/HomeServices/plumbing.png" width={'100px'} height={'100px'}></img> <h1>PLUMBING</h1>
        <p>Professional Plumbing Services – Get Bespoke <br/>Solutions at Best Prices</p>
        </div>
        <div className='homeService3'>
        <img src="/images/HomeServices/gasFitting.png" width={'100px'} height={'100px'}></img> <h1>GAS FITTING</h1>
        <p>Trust Axis Mechanical for Safe and Reliable <br/>Gas Fitting Installation</p>
        </div>
        <div className='homeService4'>
        <img src="/images/HomeServices/hvac.png" width={'100px'} height={'100px'}></img> <h1>HVAC</h1>
        <p>Professional HVAC Installation, Repairs <br/>and Maintenance at Your Doorstep</p></div> 

    </div>
 )
}

export default HomeServices