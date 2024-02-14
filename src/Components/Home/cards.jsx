// import a from '/construction-image.png'
import a from '/glasses.jpg'
import b from '/glasses2.jpg'
import c from '/glasses3.jpg'
import d from '/glasses4.jpg'

function Cards(){

    return(
        <div className='cards'>      

            <div className="container">
                <h2>APPLICATIONS OF SAFETY READING GLASSES</h2>

                <div className="cards-outer">

                    <div className="card">

                        <div className="card-image">
                            <img src={a} alt="construction-image" />
                        </div>

                        <div className="card-text">
                            <a>Glasses</a>
                        </div>

                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={b} alt="-image" />
                        </div>

                        <div className="card-text">
                            <a>Glasses</a>
                        </div>

                    </div>
                    
                    <div className="card">

                        <div className="card-image">
                            <img src={c} alt="construction-image" />
                        </div>

                        <div className="card-text">
                            <a>Glasses</a>
                        </div>

                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={d} alt="-image" />
                        </div>

                        <div className="card-text">
                            <a>Glasses</a>
                        </div>

                    </div>
                
                </div>
            </div>
            
        </div>


    )
}

export default Cards