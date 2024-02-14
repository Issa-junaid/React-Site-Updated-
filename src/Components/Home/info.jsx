import img from '/magnification-power-image.jpg'

function Info({title}){

    function handleOnClick(){
        alert('You have clicked the button')
    }

    return(
        <div className="info-outer">
            <div className="container">
                <p className="info-information">Safety reading glasses are essential for individuals who need corrective lenses while working in potentially hazardous environments. These specialized eyewear solutions provide both vision correction and protective features, ensuring clear vision and safety. Eye safety is crucial in the workplace, as professionals face common hazards that can impact their vision. Impaired vision not only affects productivity but also poses risks to safety. Safety reading glasses address these concerns by offering both visual correction and protective features.</p>

                
                <div className="magnification-power-section">
                    <div className="magnification-power-section-image">
                        <img src={img} alt="IMG"/>
                    </div>

                    <div className="magnification-power-section-text">
                        <h2>Available Magnification power for reading safety glasses</h2>
                        <p>Safety reading glasses at RX Safety are available in a range of magnifications, with the highest reading magnification offered being +3.00. We understand that individuals have varying vision needs, and we strive to provide options that cater to a wide range of requirements. Whether you require a mild magnification or a stronger one, our selection ensures that you can find the highest reading safety glasses suitable for you specific needs.</p>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default Info