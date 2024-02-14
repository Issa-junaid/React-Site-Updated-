import box1 from "/download2.jpg"
import box2 from "/glasses3.jpg"
import box3 from "/glasses.jpg"

function Info({title}){

    function handleOnClick(){
        alert('You have clicked the button')
    }

    return(
        <div className="about-outer">
            <div className="container">

                <div className="info-boxes">


                    <div className="info-box">
                        <img src={box1} alt="Box1" />
                        <h3>History Of Us</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, molestias ad? Maxime ipsam dolores sapiente exercitationem sit earum obcaecati, esse, laboriosam, modi quaerat rem quia!</p>
                    </div>

                    <div className="info-box">
                        <img src={box2} alt="Box1" />
                        <h3>Who We Are</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, molestias ad? Maxime ipsam dolores sapiente exercitationem sit earum obcaecati, esse, laboriosam, modi quaerat rem quia!</p>
                    </div>

                    <div className="info-box">
                        <img src={box3} alt="Box1" />
                        <h3>Why We Are</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, molestias ad? Maxime ipsam dolores sapiente exercitationem sit earum obcaecati, esse, laboriosam, modi quaerat rem quia!</p>
                    </div>


                </div>

            </div>
        </div>

    )
}

export default Info